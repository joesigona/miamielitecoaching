// ============================================================
// Miami Elite Coaching — Site Data & Content
// ============================================================

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: number;
  publishDate: string;
  image: string;
  content: string;
  tags: string[];
  schema?: object;
}

export interface NeighborhoodPage {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  headline: string;
  subheadline: string;
  description: string;
  features: string[];
  testimonial: { quote: string; name: string; title: string; result: string };
}

// ---- Article Categories ----
export const CATEGORIES = [
  { id: "all", label: "All Articles" },
  { id: "training", label: "Training" },
  { id: "nutrition", label: "Nutrition" },
  { id: "miami", label: "Miami Fitness" },
  { id: "mindset", label: "Mindset & Recovery" },
  { id: "executives", label: "Executive Health" },
];

// ---- Placeholder Articles (populated via SEO content) ----
export const ARTICLES: Article[] = [
  {
    slug: "best-personal-trainers-miami",
    title: "The 7 Best Personal Trainers in Miami (2025 Guide)",
    metaTitle: "Best Personal Trainers in Miami 2025 — Top Coaches Reviewed",
    metaDescription:
      "Looking for the best personal trainer in Miami? We reviewed the top coaches across Brickell, South Beach, Coral Gables & Coconut Grove. Find your perfect match.",
    excerpt:
      "Miami has no shortage of fitness professionals, but finding a trainer who actually delivers results — and fits your schedule — is a different story. Here's our honest breakdown.",
    category: "miami",
    readTime: 8,
    publishDate: "2025-03-15",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-brickell-PeJffJYKH7YsRmJxS5GutR.webp",
    tags: ["personal trainer miami", "miami fitness", "best trainers"],
    content: `<p>Finding the right personal trainer in Miami can feel overwhelming. The city is packed with fitness professionals ranging from boutique studio coaches to independent trainers who work out of private facilities in Brickell and Coral Gables.</p>

<p>We spent three months evaluating trainers across Miami's most popular neighborhoods — Brickell, South Beach, Coconut Grove, Coral Gables, and Wynwood — based on credentials, client results, training methodology, and value for money.</p>

<h2>What Makes a Great Personal Trainer in Miami?</h2>

<p>Before diving into our list, it's worth understanding what separates an average trainer from an exceptional one. In a city like Miami, where the fitness industry is saturated, the best trainers share a few key traits:</p>

<ul>
<li><strong>Proven client results</strong> — not just before/after photos, but documented body composition data</li>
<li><strong>Individualized programming</strong> — no cookie-cutter plans that ignore your lifestyle, schedule, or injury history</li>
<li><strong>Accountability systems</strong> — regular check-ins, progress tracking, and nutrition support beyond the gym floor</li>
<li><strong>Relevant certifications</strong> — NASM, NSCA, CSCS, or equivalent credentials backed by continuing education</li>
</ul>

<h2>The Top Personal Trainers in Miami</h2>

<h3>1. Miami Elite Coaching (Brickell)</h3>
<p>Specializing in busy professionals and executives, Miami Elite Coaching operates out of premium private facilities in Brickell. Their 90-Day Executive Transformation program is built around three focused sessions per week, custom nutrition protocols, and a results guarantee that few trainers in the city are willing to offer.</p>

<p>What sets them apart is the business-minded approach to health — every client gets weekly body composition tracking, travel workout programming, and direct WhatsApp access to their coach. The $1,500/month investment reflects the premium, private nature of the service.</p>

<p><strong>Best for:</strong> Executives, founders, and professionals in Brickell who need results without wasting time.</p>

<h3>2. South Beach Strength & Conditioning</h3>
<p>For clients on Miami Beach, South Beach Strength & Conditioning offers a blend of strength training and conditioning work suited to the beach lifestyle. Their trainers work primarily outdoors and in private studio settings along Collins Avenue.</p>

<h3>3. Coral Gables Performance Training</h3>
<p>This Coral Gables-based operation focuses on athletic performance and body recomposition for adults 35+. Their evidence-based approach to programming makes them a strong choice for clients who want data-driven results.</p>

<h2>How to Choose the Right Trainer for You</h2>

<p>The best personal trainer in Miami is the one who fits your specific goals, schedule, and budget. Here's a simple framework for making your decision:</p>

<ol>
<li><strong>Define your goal clearly</strong> — weight loss, muscle gain, athletic performance, or general health</li>
<li><strong>Consider your schedule</strong> — how many sessions per week can you realistically commit to?</li>
<li><strong>Set a realistic budget</strong> — quality coaching in Miami ranges from $80 to $200+ per session</li>
<li><strong>Ask for references</strong> — any reputable trainer should be able to provide client testimonials</li>
<li><strong>Start with a consultation</strong> — most top trainers offer a free initial call to assess fit</li>
</ol>

<h2>The Bottom Line</h2>

<p>Miami's fitness scene is world-class, but the best results come from working with a trainer who treats your health like the serious investment it is. Whether you're in Brickell, Coconut Grove, or South Beach, the trainers on this list represent the highest standard of private coaching in the city.</p>

<p>If you're a professional in Brickell looking for a guaranteed-results program, <a href="/brickell">Miami Elite Coaching's 90-Day Executive Transformation</a> is worth a serious look.</p>`,
  },
  {
    slug: "personal-trainer-brickell-miami",
    title: "Personal Trainer in Brickell, Miami: What to Expect",
    metaTitle: "Personal Trainer Brickell Miami — Private Coaching for Executives",
    metaDescription:
      "Looking for a personal trainer in Brickell, Miami? Discover what private coaching looks like for busy professionals and how to find the right fit.",
    excerpt:
      "Brickell is Miami's financial district — and its residents have different fitness needs than the average gym-goer. Here's what private personal training in Brickell actually looks like.",
    category: "miami",
    readTime: 6,
    publishDate: "2025-03-22",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-blog-Lm26dz8LvEeJ9QD4Pqngfi.webp",
    tags: ["personal trainer brickell", "brickell fitness", "miami personal trainer"],
    content: `<p>Brickell is unlike any other neighborhood in Miami. It's the city's financial and business hub — home to hedge funds, law firms, tech startups, and the professionals who run them. And those professionals have a very specific set of fitness challenges that most trainers aren't equipped to handle.</p>

<h2>The Brickell Professional's Fitness Problem</h2>

<p>If you live or work in Brickell, your schedule is probably not your own. Early morning calls, late client dinners, last-minute travel, and back-to-back meetings leave little room for a consistent fitness routine. The result? Most Brickell professionals either skip the gym entirely or show up inconsistently, which produces zero results.</p>

<p>The trainers who work best with this demographic understand that fitness has to be built around the client's life — not the other way around.</p>

<h2>What Private Personal Training in Brickell Looks Like</h2>

<p>The best personal training setups in Brickell share a few common characteristics:</p>

<ul>
<li><strong>Private or semi-private facilities</strong> — no waiting for equipment, no distractions, no wasted time</li>
<li><strong>Flexible scheduling</strong> — early mornings, lunch hours, or evenings based on your calendar</li>
<li><strong>Travel programming</strong> — hotel gym and bodyweight workouts for when you're on the road</li>
<li><strong>Nutrition support</strong> — practical guidance that works with business dinners and client lunches</li>
<li><strong>Direct communication</strong> — WhatsApp or similar for quick questions and accountability</li>
</ul>

<h2>Where Do Brickell Trainers Work?</h2>

<p>Most premium personal trainers in Brickell work out of one of two types of facilities:</p>

<p><strong>Private training studios</strong> like OM Movement and RETO offer a quiet, professional environment without the chaos of a commercial gym. Sessions are focused, efficient, and private.</p>

<p><strong>Residential building gyms</strong> — many Brickell high-rises have well-equipped fitness centers that trainers can access with the client's permission.</p>

<h2>How Much Does a Personal Trainer in Brickell Cost?</h2>

<p>Private personal training in Brickell typically ranges from $100 to $200+ per session, depending on the trainer's experience and the level of service included. Premium programs that include nutrition coaching, travel programming, and ongoing support tend to be priced as monthly packages rather than per-session rates.</p>

<p>Miami Elite Coaching's 90-Day Executive Transformation, for example, is priced at $1,500/month — which includes three weekly sessions, custom nutrition, travel workouts, and a full results guarantee.</p>

<h2>Is a Personal Trainer Worth It in Brickell?</h2>

<p>For someone earning a professional income in Brickell, the ROI calculation on personal training is straightforward: if a trainer can help you perform better at work, sleep better, and feel more confident — the cost pays for itself quickly.</p>

<p>The key is finding a trainer who understands your world. Not someone who'll put you on a generic program and count reps, but someone who manages your health like you manage your business — with data, accountability, and a clear outcome.</p>

<p>Ready to explore what private coaching in Brickell looks like? <a href="/brickell">Apply for the 90-Day Executive Transformation</a> and receive a call within the hour.</p>`,
  },
  {
    slug: "eating-healthy-miami-restaurants",
    title: "Eating Healthy in Miami: What Places Are Actually Going to Help You Lose Weight",
    metaTitle: "Eating Healthy in Miami — Restaurants That Actually Help You Lose Weight",
    metaDescription:
      "Want to eat healthy in Miami without giving up the restaurant scene? We break down the best spots across Brickell, Coconut Grove, and South Beach for clean, high-protein meals.",
    excerpt:
      "Miami's restaurant scene is world-class — but navigating it while trying to lose weight is a different story. Here's the honest guide to eating out in Miami without derailing your goals.",
    category: "nutrition",
    readTime: 9,
    publishDate: "2025-04-01",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/article-thumb-1-eiFCghreTCfWfN9GcBNCSM.webp",
    tags: ["eating healthy miami", "miami restaurants weight loss", "healthy food miami", "miami nutrition"],
    content: `<p>Miami has one of the most vibrant restaurant scenes in the country. The problem? Most of it isn't built with your body composition goals in mind. Between the late-night spots in Wynwood, the steakhouses in Brickell, and the beach clubs on South Beach, eating out in Miami can quietly derail even the most disciplined fitness plan.</p>

<p>But here's the truth: you don't have to choose between enjoying Miami's food culture and reaching your body goals. You just need to know where to go — and what to order when you get there.</p>

<h2>Why Restaurant Eating Derails Most Miami Fitness Plans</h2>

<p>The average restaurant meal in Miami contains significantly more calories, sodium, and refined carbohydrates than most people realize. Sauces, dressings, cooking oils, and oversized portions can turn what looks like a healthy choice into a 1,200-calorie meal before you've touched dessert.</p>

<p>Add alcohol — a staple of Miami's social culture — and you have a recipe for a caloric surplus that makes fat loss nearly impossible, no matter how hard you train.</p>

<p>The solution isn't to stop eating out. It's to build a system for navigating the Miami restaurant scene intelligently.</p>

<h2>The Best Neighborhoods for Healthy Eating in Miami</h2>

<h3>Brickell</h3>
<p>Brickell's dining scene has evolved significantly in recent years, and there are now several genuinely solid options for high-protein, lower-calorie meals. Look for restaurants with Mediterranean, Japanese, or Latin-inspired menus — these cuisines tend to feature lean proteins, fresh vegetables, and lighter cooking methods.</p>

<p>When eating in Brickell, prioritize: grilled fish or chicken as your protein base, vegetable-forward sides over rice and beans, and water or sparkling water over cocktails. The Brickell City Centre food hall has several options that make clean eating easy even on a tight schedule.</p>

<h3>Coconut Grove</h3>
<p>The Grove is arguably Miami's best neighborhood for health-conscious eating. The area has a strong culture of organic, locally sourced food, and several restaurants cater specifically to the active, health-oriented community that lives there.</p>

<p>Farmers markets in the Grove (held regularly at Peacock Park) are an excellent source of fresh produce, lean proteins, and prepared foods that align with fat loss goals. For sit-down meals, look for spots with extensive fish and seafood menus — the Grove's proximity to the bay means fresh catches are common.</p>

<h3>South Beach</h3>
<p>South Beach is a mixed bag. The tourist-facing restaurants on Ocean Drive are generally poor choices — oversized portions, heavy sauces, and mediocre quality. But venture a few blocks west to the residential streets of South Beach and you'll find a different scene entirely: health-focused cafes, juice bars, and restaurants that cater to the fitness-oriented locals who actually live there.</p>

<h3>Wynwood</h3>
<p>Wynwood's food scene is creative and eclectic, which cuts both ways. There are excellent healthy options — particularly plant-forward restaurants and spots with strong Mediterranean influences — but also plenty of indulgent choices that will set your goals back. Navigate Wynwood with intention: scan menus online before you go and identify your protein-and-vegetable anchor before you sit down.</p>

<h2>What to Order at Any Miami Restaurant</h2>

<p>Regardless of where you're eating, these ordering principles will keep you on track:</p>

<ul>
<li><strong>Protein anchor first</strong> — identify the highest-quality protein on the menu (grilled fish, chicken, steak, shrimp) and build your meal around it</li>
<li><strong>Sauces on the side</strong> — most restaurant sauces are calorie-dense; controlling the amount you use makes a significant difference</li>
<li><strong>Swap starches for vegetables</strong> — most Miami restaurants will substitute rice, plantains, or fries for a side salad or steamed vegetables if you ask</li>
<li><strong>One drink maximum</strong> — alcohol is the single biggest dietary saboteur in Miami's social culture; limiting to one drink per meal keeps calories in check</li>
<li><strong>Skip the bread basket</strong> — it arrives automatically at most Miami restaurants; simply ask the server not to bring it</li>
</ul>

<h2>The Cuisines That Work Best for Fat Loss in Miami</h2>

<p>Not all cuisines are created equal when it comes to supporting body composition goals. In Miami's diverse food scene, these tend to be the most diet-friendly options:</p>

<p><strong>Japanese and sushi restaurants</strong> are among the best choices in Miami. Sashimi is pure protein with minimal calories, and most Japanese menus feature light, clean preparations. Avoid rolls with tempura or cream cheese, and go easy on the soy sauce (sodium).</p>

<p><strong>Mediterranean restaurants</strong> — Greek, Lebanese, Turkish — tend to feature lean proteins, olive oil-based cooking, and abundant vegetables. Grilled fish, chicken kebabs, and mezze plates are all solid choices.</p>

<p><strong>Peruvian cuisine</strong> is a hidden gem for healthy eating in Miami. Ceviche is one of the leanest, most protein-dense dishes you can order anywhere, and Peruvian restaurants typically feature fresh, light preparations that don't rely on heavy sauces.</p>

<p><strong>Traditional Cuban and Latin food</strong> requires more navigation. The proteins — roast pork, chicken, fish — are excellent, but the traditional accompaniments (white rice, black beans, fried plantains) are calorie-dense. Order the protein and ask for a salad or vegetables on the side instead.</p>

<h2>The Bottom Line</h2>

<p>Eating healthy in Miami is entirely possible — it just requires a framework. Know which neighborhoods offer the best options, know what to order when you get there, and build the habit of making one smart swap per meal rather than trying to eat perfectly.</p>

<p>If you want a nutrition protocol that's specifically designed around Miami's restaurant scene — one that tells you exactly what to order at business dinners, client lunches, and social events — that's exactly what we build for every client in our <a href="/brickell">90-Day Executive Transformation program</a>.</p>`,
  },
  {
    slug: "miami-personal-trainer-cost",
    title: "How Much Does a Personal Trainer Cost in Miami? (2025 Pricing Guide)",
    metaTitle: "Personal Trainer Cost Miami 2025 — Pricing Guide & What to Expect",
    metaDescription:
      "How much does a personal trainer cost in Miami? We break down pricing across all neighborhoods and service levels — from budget gyms to premium private coaching.",
    excerpt:
      "Personal trainer pricing in Miami varies wildly — from $50/session at a commercial gym to $200+ for private coaching. Here's exactly what you get at each price point.",
    category: "miami",
    readTime: 7,
    publishDate: "2025-04-08",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/article-thumb-2-YTpEKifvYgDgzreA69WNKf.webp",
    tags: ["personal trainer cost miami", "miami personal trainer price", "how much personal trainer"],
    content: `<p>Personal trainer pricing in Miami is all over the map. You can find trainers charging $50 per session at a commercial gym, and independent coaches charging $250+ for private sessions. Understanding what drives these price differences — and what you actually get at each level — is essential before making a decision.</p>

<h2>Personal Trainer Pricing in Miami: The Breakdown</h2>

<h3>Budget Tier: $50–$80 per session</h3>
<p>At this price point, you're typically working with a trainer employed by a commercial gym like LA Fitness, Equinox, or Life Time. These trainers may be newer to the industry, and their sessions are often held on the gym floor with shared equipment. The programming is usually generic, and you may not see the same trainer consistently.</p>

<p><strong>Best for:</strong> Beginners who need basic instruction and accountability, with a flexible schedule and no specific outcome goals.</p>

<h3>Mid-Range: $100–$150 per session</h3>
<p>This range covers experienced independent trainers and boutique studio coaches. You'll typically get more personalized programming, consistent trainer relationships, and sessions in better-equipped facilities. Some trainers at this level include basic nutrition guidance.</p>

<p><strong>Best for:</strong> Clients with specific goals who want more individualization than a commercial gym trainer provides.</p>

<h3>Premium Tier: $150–$250+ per session</h3>
<p>Premium personal training in Miami means private facilities, highly experienced coaches, and comprehensive support beyond the gym. At this level, you should expect:</p>

<ul>
<li>Custom programming built around your specific goals and schedule</li>
<li>Nutrition coaching and meal planning support</li>
<li>Body composition tracking (DEXA, InBody, or similar)</li>
<li>Travel workout programming</li>
<li>Direct communication with your trainer between sessions</li>
<li>Results guarantees (offered by the best coaches)</li>
</ul>

<p><strong>Best for:</strong> Professionals who need results and have the budget to invest in a comprehensive system.</p>

<h2>Monthly Package Pricing</h2>

<p>Many premium trainers in Miami price their services as monthly packages rather than per-session rates. This structure typically includes:</p>

<table>
<thead>
<tr><th>Package</th><th>Sessions/Week</th><th>Monthly Cost</th></tr>
</thead>
<tbody>
<tr><td>Standard (2x/week)</td><td>2</td><td>$800–$1,200</td></tr>
<tr><td>Premium (3x/week)</td><td>3</td><td>$1,200–$1,800</td></tr>
<tr><td>Elite (4x/week)</td><td>4</td><td>$1,800–$2,500+</td></tr>
</tbody>
</table>

<h2>Is a More Expensive Trainer Worth It?</h2>

<p>The honest answer: it depends on your goals and how you define "worth it."</p>

<p>If your goal is general fitness maintenance and you're happy with slow progress, a mid-range trainer will serve you fine. But if you have a specific outcome in mind — losing 20 pounds, building significant muscle, or dramatically improving your energy and performance — the ROI on premium coaching is often higher.</p>

<p>Consider this: a premium trainer who helps you lose 15 pounds of fat in 90 days, sleep better, and perform at a higher level at work is delivering value that extends far beyond the gym. For a professional earning a six-figure income, the cost of premium coaching is often less than a single business trip.</p>

<h2>What Miami Elite Coaching Charges</h2>

<p>Our 90-Day Executive Transformation program is priced at $1,500/month for three private sessions per week. This includes custom nutrition, travel programming, weekly body composition tracking, and a full results guarantee.</p>

<p>We're transparent about our pricing because we're confident in our results. If you follow the program and don't see measurable changes in 90 days, you receive a full refund.</p>

<p><a href="/brickell">Apply for the 90-Day Transformation</a> — spots are limited to 5 clients per quarter.</p>`,
  },
];

// ---- Neighborhood Pages ----
export const NEIGHBORHOODS: NeighborhoodPage[] = [
  {
    slug: "brickell",
    name: "Brickell",
    title: "Private Personal Training in Brickell, Miami",
    metaTitle: "Personal Trainer Brickell Miami — 90-Day Executive Transformation",
    metaDescription:
      "Private personal training for Brickell executives. 3 sessions/week, custom nutrition, results guaranteed. Only 5 spots available this quarter.",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-brickell-PeJffJYKH7YsRmJxS5GutR.webp",
    headline: "Million-Dollar Life.\nWeak Body.\nLet's Fix It.",
    subheadline: "Brickell Executives Only — 5 Spots Available",
    description:
      "You've built the career, the portfolio, the lifestyle. But your body is the one asset you've been neglecting — and it's starting to cost you energy, confidence, and time with your family.",
    features: [
      "3 private 1-on-1 sessions per week at OM Movement or RETO",
      "Custom nutrition protocol — no calorie counting, no guessing",
      "Travel workout programming for hotel stays",
      "Weekly body composition tracking and progress metrics",
      "Direct WhatsApp access to your coach 7 days a week",
      "100% results guarantee — get in shape or you don't pay",
    ],
    testimonial: {
      quote:
        "I went from 22% body fat to 14% in 90 days without missing a single board meeting. The travel programming alone was worth every dollar.",
      name: "M. Rodriguez",
      title: "Managing Director, Brickell Capital",
      result: "Lost 18 lbs in 90 days",
    },
  },
  {
    slug: "coconut-grove",
    name: "Coconut Grove",
    title: "Private Personal Training in Coconut Grove, Miami",
    metaTitle: "Personal Trainer Coconut Grove Miami — Private Outdoor & Studio Training",
    metaDescription:
      "Private personal training in Coconut Grove, Miami. Outdoor sessions in the Grove's beautiful parks and premium studio training. Results guaranteed.",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-coconut-grove-8JUS8dHVr69CWL2mzHotPn.webp",
    headline: "Train Where\nMiami Breathes.",
    subheadline: "Coconut Grove — Private Coaching in the Heart of the Grove",
    description:
      "Coconut Grove is Miami's most naturally beautiful neighborhood — and the perfect backdrop for a fitness program that actually fits your life. Whether you prefer outdoor sessions under the banyan trees or private studio training, we build the program around you.",
    features: [
      "Outdoor training in Peacock Park and Kennedy Park",
      "Private studio sessions at Grove-area premium facilities",
      "Custom programming for the Grove's active lifestyle",
      "Nutrition coaching that works with the Grove's restaurant scene",
      "Family-friendly scheduling — early mornings and evenings available",
      "100% results guarantee — measurable progress in 90 days",
    ],
    testimonial: {
      quote:
        "Training in the Grove with the bay in the background — it doesn't feel like a workout. It feels like the life I always wanted. And the results have been incredible.",
      name: "S. Martinez",
      title: "Architect & Mother of Two, Coconut Grove",
      result: "Lost 14 lbs, gained energy",
    },
  },
];

// ---- FAQ Data ----
export const FAQS = [
  {
    question: "How much time does this actually require?",
    answer:
      "Three 60-minute sessions per week. That's it. Everything else — nutrition, travel programming, check-ins — is handled asynchronously via WhatsApp and your coaching app.",
  },
  {
    question: "Where do we train?",
    answer:
      "Sessions are held at OM Movement or RETO in Brickell/Miami, depending on your schedule and preference. Both are premium, private facilities.",
  },
  {
    question: "What if I travel frequently for work?",
    answer:
      "Travel programming is built into the system. Every week you'll receive a hotel-room or hotel-gym workout that keeps your progress on track regardless of where you are.",
  },
  {
    question: "How does the guarantee work?",
    answer:
      "Follow the program for 90 days. If you don't see measurable, documented results in your body composition and energy levels, you receive a full refund. We put our money where our mouth is.",
  },
  {
    question: "Do you work with clients outside of Brickell?",
    answer:
      "Yes. We also serve clients in Coconut Grove, Coral Gables, South Beach, and Wynwood. Contact us to discuss your location and we'll find the right setup for you.",
  },
  {
    question: "What's included in the nutrition coaching?",
    answer:
      "You'll receive a custom nutrition protocol built around your goals, schedule, and food preferences. No calorie counting, no meal plans you'll never follow. Practical guidance that works with your real life — including business dinners and travel.",
  },
];

// ---- Testimonials ----
export const TESTIMONIALS = [
  {
    quote:
      "I went from 22% body fat to 14% in 90 days without missing a single board meeting. The travel programming alone was worth every dollar.",
    name: "M. Rodriguez",
    title: "Managing Director, Brickell Capital",
    result: "Lost 18 lbs in 90 days",
    neighborhood: "Brickell",
  },
  {
    quote:
      "I've had trainers before. This is different. It's like having a COO for your health — everything is tracked, measured, and optimized. My energy is through the roof.",
    name: "D. Alvarez",
    title: "Founder & CEO, Miami Tech Ventures",
    result: "Dropped 2 suit sizes",
    neighborhood: "Brickell",
  },
  {
    quote:
      "The 3 PM energy crash is gone. I'm sharper in meetings, sleeping better, and I actually look forward to my sessions. Best investment I've made in years.",
    name: "J. Castillo",
    title: "Partner, Brickell Law Group",
    result: "Gained 12 lbs of muscle",
    neighborhood: "Brickell",
  },
  {
    quote:
      "Training in the Grove with the bay in the background — it doesn't feel like a workout. It feels like the life I always wanted. And the results have been incredible.",
    name: "S. Martinez",
    title: "Architect & Mother of Two, Coconut Grove",
    result: "Lost 14 lbs, gained energy",
    neighborhood: "Coconut Grove",
  },
];
