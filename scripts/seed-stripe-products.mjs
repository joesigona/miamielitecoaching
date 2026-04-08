// Script to create Stripe products and prices via the API
// Run: node scripts/seed-stripe-products.mjs

import Stripe from "stripe";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), ".env") });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const products = [
  {
    id: "ceo-performance-protocol",
    name: "CEO Performance Protocol",
    description:
      "12-week private performance system for Brickell executives. Includes DEXA scan, VO2 Max testing, custom training, nutrition protocol, and biweekly progress reviews.",
    priceInCents: 240000,
  },
  {
    id: "vitality-reset",
    name: "Vitality Reset",
    description:
      "8-week transformation program for women 40+ in Coconut Grove. Includes body composition analysis, hormone-aware training, nutrition coaching, and weekly accountability.",
    priceInCents: 120000,
  },
  {
    id: "longevity-duo",
    name: "Longevity Duo — Couples Session",
    description:
      "4-week couples longevity program. Includes dual DEXA scans, partner training sessions, shared nutrition plan, and progress tracking for both partners.",
    priceInCents: 59900,
  },
  {
    id: "data-first-drop-in",
    name: "Data-First Drop-In",
    description:
      "Single session: DEXA scan + VO2 Max test + 60-min coached workout + same-day results report. No commitment required.",
    priceInCents: 35000,
  },
];

async function seedProducts() {
  console.log("Creating Stripe products...\n");

  for (const product of products) {
    try {
      // Check if product already exists by searching
      const existing = await stripe.products.search({
        query: `metadata["internal_id"]:"${product.id}"`,
      });

      if (existing.data.length > 0) {
        console.log(`✓ Product "${product.name}" already exists (${existing.data[0].id})`);
        // Get its price
        const prices = await stripe.prices.list({ product: existing.data[0].id, active: true });
        if (prices.data.length > 0) {
          console.log(`  Price: $${prices.data[0].unit_amount / 100} (${prices.data[0].id})\n`);
        }
        continue;
      }

      // Create product
      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        metadata: {
          internal_id: product.id,
        },
      });

      console.log(`✓ Created product: ${product.name} (${stripeProduct.id})`);

      // Create price
      const price = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.priceInCents,
        currency: "usd",
      });

      console.log(`  Price: $${price.unit_amount / 100} (${price.id})\n`);
    } catch (error) {
      console.error(`✗ Error creating "${product.name}":`, error.message);
    }
  }

  console.log("Done! Products are ready in Stripe.");
}

seedProducts();
