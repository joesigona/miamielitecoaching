// Stripe product definitions for Miami Elite Coaching
// Each product maps to a landing page on the site

export interface Product {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  slug: string; // landing page route
  type: "one_time" | "booking"; // booking = free, links to Typeform
  typeformUrl?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "longevity-duo",
    name: "Longevity Duo — Couples Session",
    description:
      "4-week couples longevity program. Includes dual DEXA scans, partner training sessions, shared nutrition plan, and progress tracking for both partners.",
    priceInCents: 59900, // $599
    slug: "/longevity-duo",
    type: "one_time",
  },
  {
    id: "longevity-blueprint",
    name: "Longevity Blueprint",
    description:
      "Free longevity assessment. Book your complimentary session including DEXA scan consultation and personalized longevity report.",
    priceInCents: 0,
    slug: "/longevity-blueprint",
    type: "booking",
    typeformUrl: "https://q5lhjxf6lyg.typeform.com/to/GjjmWBrN",
  },
];

// Helper to get a product by its ID
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
