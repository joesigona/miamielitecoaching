import Stripe from "stripe";
import { Express, Request, Response } from "express";

// Price IDs from Stripe (created via seed script)
const PRICE_MAP: Record<string, string> = {
  "longevity-duo": "price_1TJlQwGgjRVkK2Zk9r9TLdiK",
};

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export function registerStripeRoutes(app: Express) {
  // Webhook must be registered BEFORE express.json() middleware
  // But since we register it after, we need raw body parsing for this route
  app.post(
    "/api/stripe/webhook",
    // Use raw body for webhook signature verification
    (req: Request, res: Response) => {
      const stripe = getStripe();
      const sig = req.headers["stripe-signature"] as string;
      const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

      if (!webhookSecret) {
        console.error("[Stripe Webhook] No webhook secret configured");
        return res.status(500).json({ error: "Webhook secret not configured" });
      }

      let event: Stripe.Event;

      try {
        // req.body is already a Buffer because we register raw middleware first
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
      } catch (err: any) {
        console.error("[Stripe Webhook] Signature verification failed:", err.message);
        return res.status(400).json({ error: `Webhook Error: ${err.message}` });
      }

      // Handle test events
      if (event.id.startsWith("evt_test_")) {
        console.log("[Stripe Webhook] Test event detected, returning verification response");
        return res.json({ verified: true });
      }

      // Handle events
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object as Stripe.Checkout.Session;
          console.log(
            `[Stripe] Checkout completed: ${session.id}`,
            `Customer: ${session.customer_email}`,
            `Amount: $${(session.amount_total ?? 0) / 100}`,
            `Product: ${session.metadata?.product_id}`
          );
          // Here you could:
          // - Send a confirmation email
          // - Update a database record
          // - Trigger a notification
          break;
        }
        case "payment_intent.succeeded": {
          const paymentIntent = event.data.object as Stripe.PaymentIntent;
          console.log(`[Stripe] Payment succeeded: ${paymentIntent.id} - $${paymentIntent.amount / 100}`);
          break;
        }
        default:
          console.log(`[Stripe] Unhandled event type: ${event.type}`);
      }

      res.json({ received: true });
    }
  );

  // Create checkout session endpoint
  app.post("/api/stripe/create-checkout", async (req: Request, res: Response) => {
    try {
      const { productId, customerEmail, customerName } = req.body;

      if (!productId || !PRICE_MAP[productId]) {
        return res.status(400).json({ error: "Invalid product ID" });
      }

      const stripe = getStripe();
      const priceId = PRICE_MAP[productId];
      const origin = req.headers.origin || req.headers.referer?.replace(/\/$/, "") || "https://miamicoach-83tywcbk.manus.space";

      const sessionParams: any = {
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/checkout/cancel`,
        allow_promotion_codes: true,
        metadata: {
          product_id: productId,
          customer_name: customerName || "",
        },
      };

      // Add customer email if provided
      if (customerEmail) {
        sessionParams.customer_email = customerEmail;
      }

      const session = await stripe.checkout.sessions.create(sessionParams);

      res.json({ url: session.url });
    } catch (error: any) {
      console.error("[Stripe] Error creating checkout session:", error.message);
      res.status(500).json({ error: "Failed to create checkout session" });
    }
  });
}
