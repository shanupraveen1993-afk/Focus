import Image from "next/image";
import {
  CaseStudyPage, BackLink, CaseHeader, Section,
  Para, Highlight, DecisionList, OutcomeGrid,
  Callout, UserVoice, TagCluster,
  BrowserFrame, PhoneFrame, StyleGuide
} from "../components/CaseStudyLayout";
import Wireframes from "../components/Wireframes";
import TripAIScreens from "../components/TripAIScreens";

export const metadata = {
  title: "TripAI — Shanmuga Praveen",
  description: "Sentiment-aware travel discovery for non-metro India. Field research, custom ranking algorithm, Gemini API. Shipped in 4 days.",
};

export default function TripAICase() {
  return (
    <CaseStudyPage>
      <BackLink />

      <CaseHeader
        tag="Project 01 — 0→1 Product · AI · Travel"
        title="TripAI"
        tagline="TripAI is a sentiment-aware travel discovery platform designed for non-metro Indian travelers. Through 5 in-depth user interviews, I mapped traveler decision hierarchies and established a 3-factor composite ranking algorithm (Sentiment, Recency, Relevancy) that extracts real guest experiences from 130+ hotel datasets, prioritizing contextual needs (parking availability, proximity, food options) over static star-rating averages."
        meta={[
          { label: "Role",     value: "Sole UX Researcher & Designer" },
          { label: "Year",     value: "2026" },
          { label: "Research", value: "5 Traveler Interviews · 130+ Hotel Sentiment Datasets" },
          { label: "Methods",  value: "User Interviews · Sentiment Tag Taxonomy · Contextual Filtering · Rapid Prototyping" },
        ]}
      />

      {/* ─── Constraint & Scope block ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Infrastructure Constraints */}
          <div className="rounded-xl p-6 border border-zinc-200 bg-white space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Google Cloud",
                  "Gemini AI Pro",
                  "Vercel free tier",
                  "Expo · Android APK",
                ].map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-zinc-250 bg-zinc-50 text-zinc-500 font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h4 className="text-lg font-bold text-zinc-900 leading-tight">₹0 Infrastructure Constraints</h4>
              <p className="text-sm leading-relaxed text-zinc-600">
                Built on $0 of real spend — production-grade quality, fully live product.
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                Pricing limits. Time constraints. A steep learning curve. Those are the reasons TripAI
                covers only Thanjavur — one city, fully built, properly researched. Not because the
                idea was small, but to maintain maximum execution speed within actual limits.
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                That is the real game of AI-assisted design and dev — not relying on unlimited resources, 
                but outputting maximum research, design, and functionality within strict limits.
              </p>
            </div>
          </div>

          {/* Why only Thanjavur */}
          <div className="rounded-xl p-6 border border-zinc-200 bg-white space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 font-semibold">Scope &amp; Scale</p>
              <h4 className="text-lg font-bold text-zinc-900 leading-tight">Why only Thanjavur?</h4>
              <p className="text-sm leading-relaxed text-zinc-500">
                The primary decision to focus on a single city was driven by a strict <span className="font-semibold text-zinc-850">₹0 cost limit</span>. To build a product without spending a single rupee, I utilized <span className="font-semibold text-zinc-850">Claude Code</span> for AI-assisted development, combined with the <span className="font-semibold text-zinc-850">Gemini API free tier</span> and Google Cloud free credits.
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                Scaling to multiple cities would immediately exceed free-tier limits, incurring live API query and data storage costs. By capping the scope to Thanjavur, the app runs entirely within free-limit quotas while proving the viability of the AI sentiment model.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CTA strip */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 flex flex-wrap gap-3">
        <a
          href="https://tripai-thanjavur.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold text-white bg-zinc-900 transition-all duration-200 hover:bg-zinc-800"
        >
          Live Site ↗
        </a>
        <a
          href="/tripai/tripai-release.apk"
          download="TripAI.apk"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold border border-zinc-200 text-zinc-600 bg-white transition-all duration-200 hover:bg-zinc-50"
        >
          Install TripAI App ↓
        </a>
      </div>

      {/* ─── Build Journey ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">
        <p className="text-xs font-mono tracking-[0.2em] uppercase mb-8 text-zinc-400">
          Build Journey
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {[
            { step: "Idea", sub: "Thanjavur gap" },
            { step: "5 Interviews", sub: "Hotel guests" },
            { step: "Research Plan", sub: "15 tags · 5 personas" },
            { step: "Claude Code", sub: "AI-assisted dev" },
            { step: "Vercel", sub: "Free tier · live" },
            { step: "Google Cloud", sub: "$300 credit" },
            { step: "Gemini AI", sub: "Free tier" },
            { step: "Expo APK", sub: "Android build" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-start gap-2 border border-zinc-200 bg-white rounded-xl p-4 shadow-sm">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-mono font-bold bg-zinc-900 text-white">{i + 1}</div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-zinc-900 leading-tight">{s.step}</p>
                <p className="text-[10px] font-mono text-zinc-400 leading-tight">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── §00 What is TripAI ──────────────────────────────────────────────── */}
      <Section n="00" title="What is TripAI" accent="blue">
        <Para>
          TripAI is an AI-powered travel discovery platform for Thanjavur — one of South India&rsquo;s most
          historically significant cities and one of the most underserved by digital travel data. Four
          modules: <Highlight>Hotels, Food, Itinerary, and Explore</Highlight> — each result ranked by a
          3-factor sentiment algorithm built from real guest review language.
        </Para>
        <Para>
          Built in 4 days as a personal 0→1 project. Currently live for Thanjavur with 130+ hotels,
          400+ restaurants, and 19+ tourist spots fully structured and tagged. Other cities on the roadmap.
        </Para>
        <Callout type="blue" label="Deliverables">
          5 usability sessions · Persona map (5 archetypes) · Tag taxonomy (15 tags × 20–30 keywords) ·
          Figma wireframes · User flow diagrams · Interactive prototype · Live web + mobile product
        </Callout>

        <div className="flex flex-wrap gap-2 mt-6">
          {["Hotels", "Food", "Itinerary", "Explore", "AI-powered", "Thanjavur", "Continue with Google"].map(k => (
            <span
              key={k}
              className="px-2.5 py-1 rounded-full text-xs font-mono font-medium"
              style={{ background: "#ffffff", color: "#71717a", border: "1px solid #e4e4e7" }}
            >
              {k}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-8 justify-center mt-10">
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Onboarding flow</p>
            <PhoneFrame>
              <Image src="/tripai/111.jpeg" alt="Onboarding Screen" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Home Screen</p>
            <PhoneFrame>
              <Image src="/tripai/222.jpeg" alt="Home Screen" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
        </div>
      </Section>

      {/* ─── §01 The Problem ─────────────────────────────────────────────────── */}
      <Section n="01" title="The Problem">
        <Para>
          Booking platforms rank hotels by star rating and review count. A hotel with 400 reviews from 2021
          outranks a newer property with 40 recent, highly relevant reviews. That logic fails travellers
          who need context — not averages.
        </Para>
        <Para>
          For a traveller visiting a temple town, the questions that actually matter are: Is it close to
          the Big Temple? Is the food vegetarian? Is it quiet enough for an elderly parent? None of those
          answers live in a star rating.
        </Para>
        <Callout type="amber" label="The gap">
          The difference between what a hotel <em>claims</em> to offer and what guests <em>actually found</em> when
          they arrived. TripAI was built to close that gap using the one source that can't be fabricated —
          what guests wrote.
        </Callout>
      </Section>

      {/* ─── §02 Pain Points ─────────────────────────────────────────────────── */}
      <Section n="02" title="Pain Points">
        <DecisionList
          items={[
            {
              title: "Amenity gap — listed vs. reality",
              body: "Hotels add amenities to their listings by default. Car Parking appears even when the only parking is a tree on the street. Guests discover the gap on arrival, not before booking.",
            },
            {
              title: "Review recency — old signals outrank fresh ones",
              body: "A hotel that was great in 2022 but declined in 2024 still ranks above a newer property with better recent reviews. Aggregated star averages are blind to time.",
            },
            {
              title: "No contextual filtering — stars can't answer real questions",
              body: "Is it quiet? Is the food vegetarian? Is it walking distance to the Big Temple? None of those questions are answerable from a star rating or a photo grid.",
            },
          ]}
        />
      </Section>

      {/* ─── §03 Empathy & Research ──────────────────────────────────────────── */}
      <Section n="03" title="Empathy &amp; Research">
        <Para>
          Before wireframing anything, I ran 5 usability sessions with real travellers at a hotel in
          Tanjore. Every session started with the same question: when you look for a hotel, what is the
          first thing you check?
        </Para>
        <Para>
          The answer was never price or star rating. It was always contextual — parking, AC reliability,
          breakfast quality, proximity to a specific place.{" "}
          <Highlight>People filter by context, not by scores.</Highlight>
        </Para>
        <Para>
          From those conversations I mapped 5 traveller archetypes, then built a tag taxonomy — 15 tags
          across 4 clusters (Proximity, Food, Experience, Practical) — where each tag carries 20–30
          embedded keywords extracted directly from real guest review language.
        </Para>
        <Callout type="amber" label="What the sessions changed">
          Initial assumption: price would be the primary filter. Every session contradicted this — context
          signals were used first, price came second. This restructured the entire card hierarchy and filter
          taxonomy before a single wireframe was drawn.
        </Callout>
      </Section>

      {/* ── Research artifacts ───────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 pb-16 space-y-8" style={{ borderBottom: "1px solid #e4e4e7" }}>
        <p className="text-xs font-mono tracking-[0.2em] uppercase pt-2 text-zinc-400">
          Research artifacts
        </p>

        <UserVoice
          label="Persona 01 · Parking Experience"
          context="Traveller · Family trip · Booked via MakeMyTrip"
          quote="I booked the hotel because it looked decent and the amenities mentioned car parking. But when I arrived, there was no space available and I had to park outside. The hotel wasn't lying — they did have parking — but it wasn't useful when I actually needed it."
          insight="Amenities tell users what exists, not whether the experience will meet their expectations"
        />

        <UserVoice
          label="Persona 02 · Cleanliness Experience"
          context="Traveller · Weekend trip · Booked online"
          quote="The photos looked great. The reception area was clean, the entrance looked modern, and everything seemed well maintained. But once I entered the room, it felt completely different — old furniture, worn-out interiors, and not as clean as I expected. I felt misled by what I saw before booking."
          insight="Users judge cleanliness from photos and public areas — the actual room experience can be very different"
        />

        {/* Shared insight */}
        <div className="rounded-xl px-6 py-5 bg-zinc-50 border border-zinc-200">
          <p className="text-base font-medium italic leading-relaxed text-zinc-700">
            &ldquo;I don&rsquo;t want to know what the hotel claims. I want to know what guests actually experienced.&rdquo;
          </p>
          <p className="text-xs font-mono mt-3 text-zinc-400">Common insight across 5 sessions · Tanjore</p>
        </div>

        <TagCluster
          tags={[
            {
              name: "Car Parking",
              cluster: "Practical",
              accentColor: "#1C64F2",
              keywords: [
                "parking", "car park", "vehicle parking", "covered parking",
                "open parking", "own parking", "basement parking", "paid parking",
                "free parking", "parking space", "parking lot", "parking facility",
                "parking available", "safe parking", "secure parking", "two-wheeler parking",
                "bike parking", "valet", "parking area", "parking zone",
              ],
            },
            {
              name: "Pure Veg",
              cluster: "Food",
              accentColor: "#10b981",
              keywords: [
                "pure veg", "vegetarian", "veg food", "satvik", "veg only",
                "no non-veg", "veg menu", "vegetarian friendly", "veg meals",
                "veg thali", "veg options", "jain food", "pure vegetarian",
                "no meat", "veg restaurant", "prasad", "temple food",
                "no alcohol", "veg breakfast", "veg items",
              ],
            },
          ]}
        />
      </div>

      {/* ─── §03B Skeleton Wireframes ────────────────────────────────────────── */}
      <Section n="03B" title="Skeleton Wireframing &amp; Flow Design">
        <Para>
          Based on the tag taxonomy and traveller archetypes, I designed skeleton wireframes for 5 key screens. The focus was on keeping the visual interface minimal, placing contextual filters in the primary hierarchy, and surfacing AI-extracted sentiment signals directly on search results and L2 detail cards.
        </Para>
        <Wireframes />
      </Section>

      {/* ─── §03C Visual Design System ────────────────────────────────────────── */}
      <Section n="03C" title="Visual Style Guide &amp; Design System">
        <Para>
          To maintain visual consistency across all modules, I established a clean visual design system with Outfit for display headings and Inter for user interface elements. Each tab uses its own canonical accent color to visually orient the user, while consistent card borders and layouts unify the product.
        </Para>
        
        {/* Core & Accent Colors */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 space-y-8 shadow-sm">
          <div>
            <h3 className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-1">Visual Identity</h3>
            <p className="text-xl font-bold text-zinc-800">Visual Color Design System</p>
          </div>

          {/* 1. Core Brand Colors */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">1. Core Brand &amp; Accent Colors</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Brand Blue */}
              <div className="flex gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
                <div className="w-20 h-20 rounded-xl flex-shrink-0 relative overflow-hidden border border-zinc-200 shadow-inner" style={{ background: "#1C64F2" }}>
                  <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white">#1C64F2</span>
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-zinc-800">Primary Brand Blue</h5>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Used for primary CTAs, active navigation states, Hotels tab theme, focus rings, and critical UI interactions. Matches Flowbite blue-600.
                  </p>
                </div>
              </div>
              {/* AI Accent Purple */}
              <div className="flex gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
                <div className="w-20 h-20 rounded-xl flex-shrink-0 relative overflow-hidden border border-zinc-200 shadow-inner" style={{ background: "#9061F9" }}>
                  <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white">#9061F9</span>
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-zinc-800">AI Accent Purple</h5>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Used for AI-generated indicators, Gemini query processing badges, route suggestions, and secondary highlights. Matches Flowbite purple-500.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Per-Tab Directory Colors */}
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">2. Per-Tab Category Accents</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Food Amber */}
              <div className="space-y-3">
                <div className="aspect-[4/3] rounded-xl relative overflow-hidden border border-zinc-200 shadow-inner" style={{ background: "#D97706" }}>
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white">#D97706</span>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-zinc-800">Food Amber</h5>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Theme accent for active Utensils directory, food filters, and dining CTAs.</p>
                </div>
              </div>
              {/* Itinerary Purple */}
              <div className="space-y-3">
                <div className="aspect-[4/3] rounded-xl relative overflow-hidden border border-zinc-200 shadow-inner" style={{ background: "#7C3AED" }}>
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white">#7C3AED</span>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-zinc-800">Itinerary Purple</h5>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Theme accent for route builder timelines, day-by-day planner tracks.</p>
                </div>
              </div>
              {/* Explore Green */}
              <div className="space-y-3">
                <div className="aspect-[4/3] rounded-xl relative overflow-hidden border border-zinc-200 shadow-inner" style={{ background: "#059669" }}>
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white">#059669</span>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-zinc-800">Explore Green</h5>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Theme accent for heritage site indicators, compass directions, and tourist cards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Semantic & Feedback Palette */}
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">3. Semantic Status Indicators</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Success Green */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 border border-zinc-200 shadow-sm" style={{ background: "#0E9F6E" }} />
                <div>
                  <h5 className="text-xs font-bold text-zinc-800">Success Green (#0E9F6E)</h5>
                  <p className="text-[10px] text-zinc-500">"Open" badges, traffic Light, checkmarks.</p>
                </div>
              </div>
              {/* Warning Yellow */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 border border-zinc-200 shadow-sm" style={{ background: "#FACA15" }} />
                <div>
                  <h5 className="text-xs font-bold text-zinc-800">Warning Yellow (#FACA15)</h5>
                  <p className="text-[10px] text-zinc-500">Star ratings, moderate traffic alert indicators.</p>
                </div>
              </div>
              {/* Danger Red */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 border border-zinc-200 shadow-sm" style={{ background: "#F05252" }} />
                <div>
                  <h5 className="text-xs font-bold text-zinc-800">Danger Red (#F05252)</h5>
                  <p className="text-[10px] text-zinc-500">"Closed" badges, heavy traffic warnings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Neutral & Surface Palette */}
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">4. Surfaces &amp; Typography Contrast</h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
              <div className="space-y-1">
                <div className="w-full h-10 rounded-lg border border-zinc-200 bg-white" />
                <p className="text-[10px] font-bold text-zinc-800">Surface White</p>
                <p className="text-[9px] font-mono text-zinc-400">#FFFFFF</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-10 rounded-lg border border-zinc-200 bg-[#F9FAFB]" />
                <p className="text-[10px] font-bold text-zinc-800">App Body BG</p>
                <p className="text-[9px] font-mono text-zinc-400">#F9FAFB</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-10 rounded-lg border border-zinc-200 bg-[#111827]" />
                <p className="text-[10px] font-bold text-zinc-800">Heading Dark</p>
                <p className="text-[9px] font-mono text-zinc-400">#111827</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-10 rounded-lg border border-zinc-200 bg-[#E5E7EB]" />
                <p className="text-[10px] font-bold text-zinc-800">Border Light</p>
                <p className="text-[9px] font-mono text-zinc-400">#E5E7EB</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-10 rounded-lg border border-zinc-200 bg-[#E1EFFE]" />
                <p className="text-[10px] font-bold text-zinc-800">Card Border</p>
                <p className="text-[9px] font-mono text-zinc-400">#E1EFFE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Preview Showcase */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 space-y-8 shadow-sm">
          <div className="flex items-center gap-2 border-b pb-4 border-zinc-150">
            <div className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-300 text-[10px] font-mono font-bold text-zinc-500 uppercase">
              Typography System
            </div>
            <span className="text-xs font-mono text-zinc-400">— Outfit Display &amp; Inter Sans</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Outfit Showcase */}
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">Display Font Family</p>
                <h3 className="text-2xl font-bold text-zinc-800" style={{ fontFamily: "Outfit, sans-serif" }}>Outfit</h3>
              </div>
              
              <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-4">
                <p className="text-4xl font-extrabold tracking-tight text-zinc-900 leading-none" style={{ fontFamily: "Outfit, sans-serif" }}>
                  AaBbCc
                </p>
                <p className="text-[11px] font-mono text-zinc-500 leading-relaxed break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  1234567890 &amp; *( )_+=
                </p>
                <div className="border-t border-zinc-200/60 pt-3 flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>Weight: 900 Black</span>
                  <span>Tracking: -0.03em</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500">
                Used strictly for high-impact display moments: City Lock Hero headers, H1/H2 section headers, and prominent modal titles. Not used for body copy.
              </p>
            </div>

            {/* Inter Showcase */}
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">Body &amp; UI Font Family</p>
                <h3 className="text-2xl font-bold text-zinc-800" style={{ fontFamily: "Inter, sans-serif" }}>Inter</h3>
              </div>

              <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-4">
                <p className="text-4xl font-medium tracking-normal text-zinc-900 leading-none" style={{ fontFamily: "Inter, sans-serif" }}>
                  AaBbCc
                </p>
                <p className="text-[11px] font-mono text-zinc-500 leading-relaxed break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  1234567890 &amp; *( )_+=
                </p>
                <div className="border-t border-zinc-200/60 pt-3 flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>Weight: 400/500/600</span>
                  <span>Tracking: +0.05em (caps)</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500">
                Used for core reading and functional interactions: review body paragraphs, tag labels (uppercase, wide tracking), buttons, and card metadata indicators.
              </p>
            </div>
          </div>
          
          {/* Font scale rules */}
          <div className="border-t border-zinc-150 pt-6 space-y-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">Semantic Type Hierarchy Scale</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-zinc-500">
                <thead>
                  <tr className="border-b border-zinc-200 pb-2 text-[10px] text-zinc-400 uppercase">
                    <th className="py-2">Level</th>
                    <th className="py-2">Font</th>
                    <th className="py-2">Weight</th>
                    <th className="py-2">Size</th>
                    <th className="py-2">Tracking</th>
                    <th className="py-2">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="py-2.5 font-bold text-zinc-700">Display Hero</td>
                    <td className="py-2.5">Outfit</td>
                    <td className="py-2.5">900 (Black)</td>
                    <td className="py-2.5">32px (clamp)</td>
                    <td className="py-2.5">-0.03em</td>
                    <td className="py-2.5 text-zinc-400">City Lock Title</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-zinc-700">H1 / H2 Headers</td>
                    <td className="py-2.5">Outfit</td>
                    <td className="py-2.5">900 (Black)</td>
                    <td className="py-2.5">24px–36px</td>
                    <td className="py-2.5">-0.02em</td>
                    <td className="py-2.5 text-zinc-400">Section &amp; Landing Headers</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-zinc-700">H3 Label</td>
                    <td className="py-2.5">Outfit</td>
                    <td className="py-2.5">600 (Semibold)</td>
                    <td className="py-2.5">16px–18px</td>
                    <td className="py-2.5">0</td>
                    <td className="py-2.5 text-zinc-400">Card Titles, Place Names</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-zinc-700">Body LG / Body</td>
                    <td className="py-2.5">Inter</td>
                    <td className="py-2.5">400/500</td>
                    <td className="py-2.5">14px–16px</td>
                    <td className="py-2.5">0</td>
                    <td className="py-2.5 text-zinc-400">Paragraphs, Review Text</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-zinc-700">Labels &amp; Tabs</td>
                    <td className="py-2.5">Inter</td>
                    <td className="py-2.5">600/700</td>
                    <td className="py-2.5">10px–12px</td>
                    <td className="py-2.5">+0.05em</td>
                    <td className="py-2.5 text-zinc-400">Tab Titles, Form Labels</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── §04 The Algorithm ───────────────────────────────────────────────── */}
      <Section n="04" title="The Algorithm">
        <Para>
          Standard hotel ranking is a single signal — aggregate star score. I designed a 3-factor
          composite ranking to replace it:
        </Para>
        <DecisionList
          items={[
            {
              title: "Sentiment — 40%",
              body: "Gemini API reads guest review text to extract qualitative meaning — tone, specificity, and relevance to the user's context. Not an average. A reading.",
            },
            {
              title: "Recency — 35%",
              body: "Reviews from the last 6 months are weighted 3× over older ones. A hotel that was great in 2022 but declined in 2024 should rank accordingly.",
            },
            {
              title: "Relevancy — 25%",
              body: "Tag match score against the user's active filters. A hotel with strong mentions of quiet rooms scores higher when the user selects 'Quiet & Peaceful'.",
            },
          ]}
        />
        <Callout type="blue" label="AI for extraction, not decisions">
          Gemini handles sentiment extraction from review text. The algorithm weights, tag taxonomy, and
          card hierarchy were all human design decisions. AI was a tool with a bounded, well-defined task.
        </Callout>
      </Section>

      {/* ─── §05 Hotels ──────────────────────────────────────────────────────── */}
      <Section n="05" title="Hotels">
        <Para>
          Context-first hotel search. Filters are built from what travellers actually say in reviews —
          not standard hotel categories. Location, room type, and stay-type preferences are each
          extracted from real guest review language and grouped into scrollable filter chips.
        </Para>
        <Para>
          The result card shows AI-ranked results with a sentiment summary and a <Highlight>Why This Fits</Highlight> panel
          — pulling the exact review signals that matched the user&rsquo;s active filters.
        </Para>

        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "Car Parking", "Near Big Temple", "Quiet & Peaceful", "City Centre",
            "Near Railway Station", "Good Amenities", "In-House Restaurant", "Spacious Rooms",
            "Good WiFi", "Highly Rated", "Heritage Stay", "Breakfast Included",
            "Budget Stay", "Premium Stay",
          ].map(k => (
            <span
              key={k}
              className="px-2.5 py-1 rounded-full text-xs font-mono font-medium"
              style={{ background: "#ffffff", color: "#71717a", border: "1px solid #e4e4e7" }}
            >
              {k}
            </span>
          ))}
        </div>

        <div className="space-y-6 mt-10">
          <p className="text-xs font-mono tracking-widest uppercase text-zinc-400">Web Search Interface</p>
          <BrowserFrame>
            <Image src="/tripai/web-screen-1.png" alt="Hotels search web interface" width={1200} height={750} className="w-full h-auto" />
          </BrowserFrame>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mt-10">
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Hotels search list</p>
            <PhoneFrame>
              <Image src="/tripai/333.jpeg" alt="Hotels list mobile" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Hotels detail (L2)</p>
            <PhoneFrame>
              <Image src="/tripai/444.jpeg" alt="Hotels details L2 mobile" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
        </div>
      </Section>

      {/* ─── §06 Food ────────────────────────────────────────────────────────── */}
      <Section n="06" title="Food">
        <Para>
          Three-axis food search: cuisine type, dining style, and preference — each drawn from real
          restaurant review language. A <Highlight>Pure Veg</Highlight> toggle persists across all results
          as an ambient filter, not a buried setting.
        </Para>
        <Para>
          The AI surfaces both positive signals (<em>Best Foods tag</em>) and warning signals
          (<em>quality concern flags</em>) — so users can make informed choices, not just see ranked lists.
        </Para>

        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "South Indian", "North Indian", "Biryani", "Mess & Meals", "Chettinad",
            "Fine Dining", "Cafe & Drinks", "Family Dining", "Tiffin", "Buffet",
            "Authentic", "Fresh & Hot", "Lunch Spot", "Budget Friendly",
            "Dinner Special", "Pure Veg", "Best Foods",
          ].map(k => (
            <span
              key={k}
              className="px-2.5 py-1 rounded-full text-xs font-mono font-medium"
              style={{ background: "#ffffff", color: "#71717a", border: "1px solid #e4e4e7" }}
            >
              {k}
            </span>
          ))}
        </div>

        <div className="space-y-6 mt-10">
          <p className="text-xs font-mono tracking-widest uppercase text-zinc-400">Web Directory Interface</p>
          <BrowserFrame>
            <Image src="/tripai/web-screen-3.png" alt="Restaurants directory web interface" width={1200} height={750} className="w-full h-auto" />
          </BrowserFrame>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mt-10">
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Food categories</p>
            <PhoneFrame>
              <Image src="/tripai/555.jpeg" alt="Food categories mobile" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Restaurant details</p>
            <PhoneFrame>
              <Image src="/tripai/666.jpeg" alt="Restaurant details mobile" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
        </div>
      </Section>

      {/* ─── §07 Itinerary ───────────────────────────────────────────────────── */}
      <Section n="07" title="Itinerary">
        <Para>
          AI-generated day plans for Thanjavur. Each itinerary is a time-slotted sequence of stops —
          start time, duration estimate, travel time between stops, and a contextual note written for
          that specific place (not generic filler text).
        </Para>
        <Para>
          The Brihadeeswarar Temple entry, for example, includes the specific time to arrive for the
          morning puja, why the shadow phenomenon is best observed at noon, and what footwear and
          dress code to expect. <Highlight>Itinerary is the only module with no web equivalent yet</Highlight> — it
          was built mobile-first from day one.
        </Para>

        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "7-stop morning plan", "Time-slotted stops", "Duration estimate",
            "Travel time by auto", "Free entry", "Morning puja", "Start here", "Save all",
          ].map(k => (
            <span
              key={k}
              className="px-2.5 py-1 rounded-full text-xs font-mono font-medium"
              style={{ background: "#ffffff", color: "#71717a", border: "1px solid #e4e4e7" }}
            >
              {k}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-8 justify-center mt-10">
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Itinerary summary</p>
            <PhoneFrame>
              <Image src="/tripai/777.jpeg" alt="Itinerary planning mobile" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Itinerary detail steps</p>
            <PhoneFrame>
              <Image src="/tripai/888.jpeg" alt="Itinerary details mobile" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
        </div>
      </Section>

      {/* ─── §08 Explore ─────────────────────────────────────────────────────── */}
      <Section n="08" title="Explore">
        <Para>
          Gemini-powered place detail for Thanjavur&rsquo;s heritage sites. Each location gets a structured
          breakdown: AI Insight, Best Visiting Flow, What to Prepare, and Best Time to Visit — generated
          from a mix of Gemini context and real visitor reviews.
        </Para>
        <Para>
          Reviews are pulled from Google Places and surfaced with sentiment highlighting — so users see
          the specific phrases that triggered a rating, not just the rating itself.
        </Para>

        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "UNESCO World Heritage", "Hindu Temple", "Tourist Attraction",
            "Gemini Insight", "Best Visiting Flow", "What to Prepare",
            "Best Time to Visit", "AI Guide", "Morning puja", "Heritage site",
          ].map(k => (
            <span
              key={k}
              className="px-2.5 py-1 rounded-full text-xs font-mono font-medium"
              style={{ background: "#ffffff", color: "#71717a", border: "1px solid #e4e4e7" }}
            >
              {k}
            </span>
          ))}
        </div>

        <div className="space-y-6 mt-10">
          <p className="text-xs font-mono tracking-widest uppercase text-zinc-400">Web Attraction Details</p>
          <BrowserFrame>
            <Image src="/tripai/web-screen-6.png" alt="Heritage sites search web" width={1200} height={750} className="w-full h-auto" />
          </BrowserFrame>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mt-10">
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Attraction list (L1)</p>
            <PhoneFrame>
              <Image src="/tripai/999-1.jpeg" alt="Attraction list mobile" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
          <div className="flex-1 min-w-[280px] max-w-[320px]">
            <p className="text-center text-xs font-mono text-zinc-400 mb-3">Attraction details (L2)</p>
            <PhoneFrame>
              <Image src="/tripai/999-2.jpeg" alt="Attraction details mobile" width={320} height={650} className="w-full h-auto object-cover" />
            </PhoneFrame>
          </div>
        </div>
      </Section>

      {/* ─── §09 Outcome ─────────────────────────────────────────────────────── */}
      <Section n="09" title="Outcome">
        <OutcomeGrid
          items={[
            { n: "4 days", label: "Research to shipped product" },
            { n: "130+", label: "Hotels structured and tagged" },
            { n: "15", label: "Contextual tags built from research" },
            { n: "₹0", label: "Infrastructure cost" },
          ]}
        />
        <Para>
          The product is live. The 4-day constraint forced every decision to be justified by
          research — there was no time to build things that hadn&rsquo;t been validated first. That
          discipline produced a more honest product than any unconstrained sprint would have.
        </Para>
      </Section>

      {/* ─── §09B Usability Testing ──────────────────────────────────────────── */}
      <Section n="09B" title="Usability Testing — What Real Users Validated">
        <Para>
          After launch, I ran usability sessions with real users — travellers who used TripAI to research
          Thanjavur hotels and food. Overall sentiment was positive: the sentiment-ranked results, the tag
          filters, and the &ldquo;Why This Fits&rdquo; panel were understood immediately. But three consistent unmet
          needs emerged across sessions.
        </Para>
        <DecisionList
          items={[
            {
              title: "Exact pricing — users wanted to book, not just discover",
              body: "Users found the hotel and were satisfied with the sentiment analysis — then immediately asked 'what is the price?' The current product shows sentiment signals and tags, but not room rates. Without a price, users could not complete the booking decision inside TripAI. They had to context-switch to MakeMyTrip or Google to confirm before acting.\n\nFuture state: live room rate integration via OTA API (MakeMyTrip, Booking.com). Currently blocked by API access cost — not a design constraint.",
            },
            {
              title: "Review trustworthiness — quantity ≠ credibility",
              body: "Several users questioned whether the reviews were real — not because they weren't, but because there was no source attribution visible. A 4-line sentiment summary without a visible source felt like AI-generated content, not extracted real guest language.\n\nFuture state: show source attribution ('From 47 Google reviews · Last 6 months') and surface the exact review excerpts that drove each sentiment signal. Trust lives in specificity.",
            },
            {
              title: "More images — visuals build confidence before committing",
              body: "Users wanted more hotel and food images before making a decision. Current product surfaces one image per card (sourced from Google Places). Real booking decisions need 4–6 images: room interior, bathroom, food, entrance.\n\nFuture state: multi-image gallery per card, with sentiment-tagged images ('guests mentioned: clean rooms — here is what they saw'). Currently blocked by Google Places API image quota on the free tier.",
            },
          ]}
        />
        <Callout type="blue" label="These are validated future features — not current limitations disguised as design choices">
          All three gaps were found in the first round of real-user testing. They were recorded, prioritised, and mapped to specific API integrations needed to solve them. The ₹0 infrastructure constraint is the only reason they are not shipped yet — not lack of research, not lack of design clarity.
        </Callout>
        <Callout type="green" label="What the testing confirmed">
          The core product — sentiment-ranked results, contextual tag filters, the &ldquo;Why This Fits&rdquo; panel — was validated. Users understood and trusted the ranking model. The gaps they identified are downstream of the product working: they wanted to do more with it than the free tier currently allows.
        </Callout>
      </Section>

      {/* ─── §09C Interactive Screens Explorer ───────────────────────────────── */}
      <Section n="09C" title="Appendix — Complete Interactive Screens Explorer">
        <Para>
          Explore all 9 web screen states and 7 mobile screen states of the TripAI application. Click on any thumbnail below to expand the interactive screenshot deck and examine the full state transitions.
        </Para>
        <TripAIScreens />
      </Section>

      {/* ─── §10 What I Learned ──────────────────────────────────────────────── */}
      <Section n="10" title="What I Learned">
        <Para>
          A tight constraint is a better design brief than an open one. When you cannot build
          everything, research decides what gets built. The tag taxonomy, the card hierarchy,
          the filter rail — all of it came directly from session findings, not assumption.
        </Para>
        <Para>
          AI belongs in the workflow where it has a bounded, well-defined task — sentiment
          extraction from text is exactly that. It does not belong as a substitute for
          understanding who the user is and what they actually need.
        </Para>
      </Section>
    </CaseStudyPage>
  );
}
