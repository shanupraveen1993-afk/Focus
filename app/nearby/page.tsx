import Image from "next/image";
import {
  CaseStudyPage, BackLink, CaseHeader, Section,
  Para, Highlight, DecisionList, OutcomeGrid,
  Callout, UserVoice,
} from "../components/CaseStudyLayout";

export const metadata = {
  title: "Nearby — Shanmuga Praveen",
  description: "When I gave AI a complete design brief, it built an UrbanClap clone. This is what it took to override that — and why six weeks of field research mattered more than any prompt.",
};

export default function NearbyCase() {
  return (
    <CaseStudyPage>
      <BackLink />

      <CaseHeader
        tag="Project 02 — 0→1 Product · Hyperlocal · Non-Metro India"
        title="Nearby"
        tagline="Nearby is a hyperlocal service discovery utility designed specifically for tier-2 Indian user behaviors. Grounded in 67 on-ground interviews and a 6-week field study, I established localized trust architecture (Aadhaar biometric validation) and a 3-tap emergency call flow. The study demonstrates how direct field research identifies unique cultural and behavioral constraints, overriding standard e-commerce booking defaults."
        meta={[
          { label: "Role",     value: "Sole UX Researcher & Designer" },
          { label: "Research", value: "67 field interviews · 13 personas · 6-week field study" },
          { label: "Methods",  value: "Ethnographic Research · Service Design Mapping · Behavioral Trust Architecture" },
          { label: "Platform", value: "Mobile (Tier-2 Town Context)" },
        ]}
      />

      <Section n="00" title="The Original Nearby — Built From Research" accent="amber">
        <Para>
          Nearby existed as a complete product before AI touched it. Six weeks of field interviews produced a specific brief: a hyperlocal service discovery app where the first action is a phone call, not a booking. Every screen below is a decision that came from that research — not from patterns in a design tool or a competitor teardown.
        </Para>

        {/* Original design screens */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-6 not-prose">
          {[
            { src: "/nearby-1.png",  label: "Role split at entry — user vs. technician" },
            { src: "/nearby-5.png",  label: "Service first — not a provider browse" },
            { src: "/nearby-10.png", label: "In-app call — no booking confirmation" },
            { src: "/nearby-15.png", label: "Distance first — Aadhaar badge, not stars" },
            { src: "/nearby-20.png", label: "Service-grouped call history" },
            { src: "/nearby-22.png", label: "Technician incoming call — accept or cancel" },
          ].map((s) => (
            <div key={s.src} className="flex flex-col gap-2">
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#0d0d0d" }}>
                <Image src={s.src} alt={`Nearby — ${s.label}`} width={400} height={800} className="w-full h-auto block" sizes="16vw" />
              </div>
              <p className="text-xs font-mono font-semibold" style={{ color: "#9ca3af" }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <a
            href="https://www.behance.net/gallery/199735857/Nearby-Your-service-partner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 text-[#9ca3af] hover:text-white border border-[#1e1e1e] hover:border-[#374151]"
            style={{ background: "#111" }}
          >
            View original design on Behance ↗
          </a>
        </div>

        <Callout type="amber" label="What this page covers">
          Not the screens above — those are V1, already built and shipped to Behance. This page documents what happened when I gave that same brief to AI, why AI ignored the core decisions, what it took to get it to understand a user it had never met, and what still required a person who had actually stood in the kitchen with water on the floor.
        </Callout>
      </Section>

      <Section n="01" title="What Nearby Is — And Why That Is Hard to Explain to AI" accent="amber">
        <Para>
          Nearby is not a marketplace. It does not rank service providers, facilitate booking, compare prices, or process payments. It is a map of skilled workers within 500 metres of you — and a button that calls them directly. Standard charge. Three taps. Done.
        </Para>
        <Para>
          In non-metro India, when a pipe bursts at 10pm, people don&rsquo;t open an app and browse 300 service categories. They call a neighbour. They ask who the plumber is. That person shows up in 20 minutes because they live nearby.{" "}
          <Highlight>Nearby is that — for the person whose neighbour doesn&rsquo;t know a plumber.</Highlight>{" "}
          The product is proximity. The action is a direct call. Everything else is the wrong product for this user.
        </Para>
        <Para>
          That&rsquo;s a hard thing to explain to AI — because every home-services product in its training data does the opposite. It organises providers into categories. It compares them by rating. It books them through a confirmation flow. AI has seen thousands of those. It had never seen what Nearby needed to be.
        </Para>
      </Section>

      <Section n="02" title="Service Seeker — Something Is Broken Right Now" accent="amber">
        <Para>
          Six weeks of field interviews produced 13 behavioral personas. All of them collapsed into two. The first is Praveen — 30s, lives in a tier-2 town, uses WhatsApp and UPI every day. When something breaks at home, his first instinct is to call someone he already knows. If that person doesn&rsquo;t know a plumber, he searches Justdial and calls three numbers before finding one who answers and is actually available.
        </Para>
        <Para>
          He is not in exploration mode. He is in mild panic. Something is broken and he needs it fixed today — not Thursday.
        </Para>

        <UserVoice
          quote="I called three numbers. First one didn't pick up. Second said he'll come on Thursday. Third came in 20 minutes — turned out he was 400 metres from my house. I didn't know that until he was already at my door."
          context="Praveen · Homeowner · Tier-2 city · Plumbing emergency"
          insight="The problem isn't finding plumbers — it's knowing which one is reachable right now"
        />

        <DecisionList
          items={[
            {
              title: "He needs proximity, not quality ranking",
              body: "Not one interview produced 'I want the best plumber in the city.' Every one produced some version of 'I need someone who can come now.' Distance is not a filter — it is the primary decision signal. A decent plumber 500m away beats a highly rated one 5km away when water is on the floor. The provider card hierarchy had to reflect this: distance first, always.",
            },
            {
              title: "He trusts identity, not platform ratings",
              body: "Praveen has never had a reason to trust a platform he's never used before. A 4.8-star rating from strangers means little. What 'Aadhaar Verified' means is entirely different — Aadhaar is India's national biometric identity system, linked to fingerprint data and a government record. To him, that means the person is real, registered, and traceable if something goes wrong. That is the actual trust signal. Not stars.",
            },
            {
              title: "He needs a standard charge visible before he calls",
              body: "The anxiety that stops people from calling an unfamiliar tradesperson is not safety — it is the fear of being overcharged because they don't know the going rate. Showing a standard charge range before the call wasn't a feature. It was the thing that made them willing to call a stranger at all.",
            },
            {
              title: "What he does not need",
              body: "A 6-step booking confirmation. Reviews from people in another city. An in-app chat before he can make a call. A subscription to unlock basic features. A sub-category selection screen between 'Plumbing' and the provider list. Any of these adds friction between 'I have a problem' and 'I am speaking to someone nearby.' Each one is a reason to close the app and ask a neighbour instead.",
            },
          ]}
        />
      </Section>

      <Section n="03" title="Service Provider — His Phone Needs to Ring" accent="amber">
        <Para>
          The second persona is Ram — plumber, 8 years of experience, also does basic electrical work. Lives 400 metres from the homeowner whose pipe just burst. Has a basic Android phone (₹8,000–12,000 range). Reads Tamil fluently, English at a label level. Gets every job through existing customers or personal referrals.
        </Para>
        <Para>
          His income is entirely variable. A good week means 12 calls. A slow week means 3. He has no way to know why the difference happens. He cannot see demand. He cannot reach customers who are looking for him right now, 5 minutes away.
        </Para>

        <UserVoice
          quote="Some weeks I get 12 calls. Some weeks I get 3. I don't know why. Last Tuesday I was sitting at home doing nothing — five minutes away from someone who needed a plumber. I'll never know that job existed."
          context="Ram · Plumber · 8 years experience · Tier-2 city"
          insight="Every missed connection is a missed day's income — and he has no way to see the demand that never reached him"
          label="Service Provider · Field Interview"
        />

        <DecisionList
          items={[
            {
              title: "He needs visibility, not analytics",
              body: "Ram doesn't want a dashboard showing monthly trends or response rates. He wants to know that 150 people in his area searched for a plumber this month — and that he can be the one they find. The number on his technician dashboard is not a statistic. It is a demand signal that tells him the platform is worth staying on.",
            },
            {
              title: "His onboarding has to earn trust immediately",
              body: "The '6-month free subscription' badge on the technician card at the very first screen is not a UI element — it is a supply acquisition strategy. Ram will not register for a platform that asks for identity documents upfront without a clear, immediate reason to trust it. Showing him the free period before he taps anything is the reason. The design is the business logic.",
            },
            {
              title: "He is a multi-skill worker, not a single-trade specialist",
              body: "Every platform assumes one provider equals one trade. Ram does plumbing and electrical. The carpenter in the next street also paints. In non-metro cities, trade workers are generalists because that is how they survive variable demand. A profile that supports multiple skills isn't a feature — it is an accurate model of how the service economy actually works here.",
            },
            {
              title: "What he does not need",
              body: "A calendar booking system. A complex dashboard with charts. English-only UI labels. An 8-step onboarding before he can go live. A fixed pricing system set by the platform. Any of these assumes a level of digital comfort and scheduling structure that does not match how Ram works. His model is: available now, call me, I'll come, we'll agree a price.",
            },
          ]}
        />
        <Callout type="amber" label="Why both personas matter equally">
          Nearby only works if Ram is on it. Without supply — real, nearby, available tradespeople — the customer has nothing to find. Every design decision that makes Praveen&rsquo;s experience faster also has to make Ram&rsquo;s experience trustworthy enough that he registers, stays active, and answers his calls. The two personas are not separate — they are one system.
        </Callout>
      </Section>

      <Section n="04" title="What AI Built When Given the Full Brief" accent="amber">
        <Para>
          After building V1 in Adobe XD based on that research, I documented the entire product as a written specification — the research findings, the persona insights, the trust model, the 3-tap emergency flow, the two-sided onboarding strategy, the Aadhaar rationale. Everything. I gave the complete document to AI and asked it to redesign the app.
        </Para>
        <Para>
          The output was polished, well-structured, and completely wrong for this user. A home screen with a full service category browser. A provider list sorted by platform star rating. A service detail page with cost breakdown, date selection, and a booking confirmation flow.
        </Para>
        <Callout type="amber" label="Why this happens — and why it matters">
          This wasn&rsquo;t a vague prompt. It was the complete, research-backed design specification — and AI still built a marketplace. Because &ldquo;home services app&rdquo; activates a dominant pattern in its training data: UrbanClap, Urban Company, TaskRabbit, Justdial, and hundreds of similar platforms. That pattern is so heavily represented that a fully specified brief pointing explicitly away from it isn&rsquo;t enough to override it. AI builds the weighted average of everything it has seen. It had never seen a non-metro Indian service discovery app built around direct calls, Aadhaar trust, and a 3-tap emergency flow. It had seen thousands of booking marketplaces.
        </Callout>

        <div className="grid grid-cols-3 gap-4 mt-6 not-prose">
          {[
            {
              src: "/nearby/ai-home.png",
              label: "Home — browse grid with categories",
              why: "AI gave the user a catalogue. The real user is standing next to a leaking pipe. They know exactly what broke. They need one tap to find someone close — not a grid of every service that has ever existed in a home.",
            },
            {
              src: "/nearby/ai-plumbers.png",
              label: "Providers — sorted by star rating",
              why: "AI sorted by platform rating. This user doesn't trust a rating from strangers on an app they've never used. They trust traceable identity — Aadhaar, which means the government knows who this person is. A 4.9-star rating from an unknown platform is not the same thing.",
            },
            {
              src: "/nearby/ai-details.png",
              label: "Service detail — multi-step booking flow",
              why: "AI added a service detail page, price quotes, date selection, and a booking confirmation. The real user wants one action: call. Every extra screen between 'I have a problem now' and 'I am speaking to someone nearby' is a reason to close the app and ask a neighbour instead.",
            },
          ].map((s) => (
            <div key={s.src} className="flex flex-col gap-2">
              <p className="text-xs font-mono tracking-[0.18em] uppercase mb-1" style={{ color: "#ef4444" }}>
                AI — from full brief
              </p>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(239,68,68,0.2)", background: "#0d0d0d" }}>
                <Image src={s.src} alt={s.label} width={400} height={800} className="w-full h-auto block" sizes="25vw" />
              </div>
              <p className="text-xs font-mono font-semibold" style={{ color: "#9ca3af" }}>{s.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{s.why}</p>
            </div>
          ))}
        </div>

        <Para>
          None of these screens are bad design. They are well-executed — for the urban, time-rich, app-comfortable user that UrbanClap was built for. Not for the person in a tier-2 town whose pipe burst at 10pm, whose trust is built on personal accountability rather than platform ratings, and who needs one clear action, not a browsing experience.
        </Para>
      </Section>

      <Section n="05" title="Teaching AI — One Real Constraint at a Time" accent="amber">
        <Para>
          Getting AI to produce screens that reflected the actual user required a full day of patient, constraint-by-constraint prompting. Not because the brief was incomplete — the research was thoroughly documented. The work was overriding assumptions so deeply embedded in AI&rsquo;s training that even explicit instructions weren&rsquo;t enough the first time. Each override required explaining not just what to change, but why — in terms of this specific user&rsquo;s specific behavior.
        </Para>
        <DecisionList
          items={[
            {
              title: "The trust model — three attempts to remove star ratings",
              body: "Attempt 1: 'Sort providers by proximity, not by rating.' AI added a 'Nearby' filter chip to a list still sorted by stars.\n\nAttempt 2: 'Remove the ratings entirely. Distance is the only sort signal.' AI kept a small star indicator on each card 'for reference.'\n\nAttempt 3: 'This user has never trusted a platform rating. Their trust comes from personal referral or government identity. Remove all star ratings. Show Aadhaar verification status and distance only.' That finally removed them. AI needed to understand why ratings don't work for this user before it would let go of them — telling it what to do without explaining why wasn't enough.",
            },
            {
              title: "The emergency flow — AI kept adding steps it thought were necessary",
              body: "Every time I asked AI to simplify the flow, it produced a 'streamlined' version that still had two more steps than needed. I eventually had to be entirely explicit: 'The complete user flow is: open app → see the nearest available provider → tap to call. Three taps. There is no sub-category screen, no booking confirmation, no calendar, no price negotiation inside the app.' AI had been trained on booking flows. Removing them felt architecturally incomplete to it — like removing a necessary step, rather than recognising that the step itself was solving the wrong problem.",
            },
            {
              title: "Aadhaar — not a generic 'Government ID Verified' label",
              body: "When I prompted 'use Aadhaar as the trust signal,' AI produced a badge that said 'Government ID Verified.' Technically accurate. Emotionally wrong. 'Government ID Verified' is product-manager language. 'Aadhaar' is something this user has used to open a bank account, activate a SIM card, and access government subsidies their whole life. It carries meaning that 'Government ID' doesn't — it means this person is real, registered, and locatable. The word itself is the trust signal. That required an explicit instruction: 'The badge must say Aadhaar, not Government ID. The word matters to this user.'",
            },
            {
              title: "Two separate onboarding paths — not a single signup with a role toggle",
              body: "AI repeatedly defaulted to one signup screen with a role selector. I had to explain the product strategy explicitly: the technician path is not a variant of customer onboarding — it is a completely different acquisition strategy. The 6-month free subscription offer must appear on screen 1, in the technician card, before they tap anything. That is a supply-side acquisition decision encoded directly into the UI design. AI had no way to know this from the brief alone — and telling it once wasn't enough. It required explaining why the two paths exist at the entry point, what business problem each one is solving, and why showing them together at launch is deliberate.",
            },
          ]}
        />
        <Callout type="blue" label="What this process showed">
          AI can take a brief and execute it at speed. But it cannot read the brief through the lens of someone who spent six weeks in the field. Every assumption I had to override was a training-data default — and overriding it required knowing exactly why that default is wrong for this specific user, in this specific context. That knowledge doesn't come from better prompting. It comes from research that happened before any tool was opened.
        </Callout>
      </Section>

      <Section n="06" title="What AI Built After the Research Brief" accent="amber">
        <Para>
          After a full day of patient, constraint-level prompting — with explicit user context, trust model reasoning, flow limits, and platform-specific rationale for each decision — Google Stitch produced screens that finally reflected the actual user.
        </Para>

        <div className="grid grid-cols-3 gap-4 mt-6 not-prose">
          {[
            {
              src: "/nearby-stitch-login.png",
              label: "Login",
              insight: "Phone number only. No email, no password, no social sign-in. Matches what this user already does every day — UPI payments, WhatsApp. The interaction pattern is already trusted before they've opened Nearby once.",
            },
            {
              src: "/nearby-stitch-otp.png",
              label: "OTP Verification",
              insight: "The same OTP experience as a bank transfer. Not a new pattern — a familiar one applied here. This user's established ritual for confirming identity is already associated with trust.",
            },
            {
              src: "/nearby-stitch-location.png",
              label: "Set Location",
              insight: "Set once, used always. Location isn't a filter — it is what 'nearby' means. The entire product is built on this one input. It should feel foundational, not like a settings preference.",
            },
            {
              src: "/nearby-stitch-home.png",
              label: "Home",
              insight: "Service first, not provider first. The user knows what broke — not who they want. The home screen asks one question: what kind of help do you need right now? Not a browse.",
            },
            {
              src: "/nearby-stitch-service.png",
              label: "Service Categories",
              insight: "9 categories — each one named by at least 10 respondents when asked what service they needed at home last year. Not assumed from a competitor teardown. Not inherited from UrbanClap's 300-category grid.",
            },
            {
              src: "/nearby-stitch-providers.png",
              label: "Nearby Providers",
              insight: "Distance first. Aadhaar badge second. No platform star rating. This card hierarchy was the hardest single thing to get AI to produce — and it is the most important screen in the entire product.",
            },
          ].map((screen) => (
            <div key={screen.src} className="flex flex-col gap-2">
              <p className="text-xs font-mono tracking-[0.18em] uppercase mb-1" style={{ color: "#f5f5f5" }}>
                After research brief
              </p>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#0d0d0d" }}>
                <Image src={screen.src} alt={screen.label} width={400} height={800} className="w-full h-auto block" sizes="25vw" />
              </div>
              <p className="text-xs font-mono font-semibold" style={{ color: "#9ca3af" }}>{screen.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{screen.insight}</p>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <a
            href="https://stitch.withgoogle.com/projects/7003159851725426893"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 text-white border border-transparent"
            style={{ background: "#FF4500" }}
          >
            Open full Google Stitch project ↗
          </a>
        </div>
      </Section>

      {/* ─── §06B Visual Design System ────────────────────────────────────────── */}
      <Section n="06B" title="Visual Style Guide &amp; Design System" accent="amber">
        <Para>
          To deliver a high-speed emergency utility, Nearby's interface relies on a strict high-contrast design system. Primary actions use an attention-grabbing Orange-Red to encourage split-second calls, while the trust architecture utilizes the government-official blue for Aadhaar verified tags.
        </Para>

        {/* Colors swatches */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 space-y-8 shadow-sm">
          <div>
            <h3 className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-1">Visual Identity</h3>
            <p className="text-xl font-bold text-zinc-800">Visual Color Design System</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Orange-Red */}
            <div className="flex gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
              <div className="w-20 h-20 rounded-xl flex-shrink-0 relative overflow-hidden border border-zinc-200 shadow-inner" style={{ background: "#FF4500" }}>
                <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white">#FF4500</span>
              </div>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-zinc-800">Hyperlocal Orange-Red</h5>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  The primary action color. Used for direct call triggers, active GPS tracking states, and emergency status flags.
                </p>
              </div>
            </div>
            {/* Aadhaar Trust Blue */}
            <div className="flex gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
              <div className="w-20 h-20 rounded-xl flex-shrink-0 relative overflow-hidden border border-zinc-200 shadow-inner" style={{ background: "#1C64F2" }}>
                <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white">#1C64F2</span>
              </div>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-zinc-800">Aadhaar Trust Blue</h5>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Specifically reserved for official biometric Aadhaar verification credentials, indicating a background-checked technician.
                </p>
              </div>
            </div>
          </div>

          {/* Semantic & Surfaces */}
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">Semantic Status &amp; Surfaces</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <div className="w-full h-10 rounded-lg border border-zinc-200 bg-[#0E9F6E]" />
                <p className="text-[10px] font-bold text-zinc-800">Available Green</p>
                <p className="text-[9px] font-mono text-zinc-400">#0E9F6E</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-10 rounded-lg border border-zinc-200 bg-[#FFFFFF]" />
                <p className="text-[10px] font-bold text-zinc-800">Surface White</p>
                <p className="text-[9px] font-mono text-zinc-400">#FFFFFF</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-10 rounded-lg border border-zinc-200 bg-[#111111]" />
                <p className="text-[10px] font-bold text-zinc-800">Device Bezel Dark</p>
                <p className="text-[9px] font-mono text-zinc-400">#111111</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-10 rounded-lg border border-zinc-200 bg-[#E5E7EB]" />
                <p className="text-[10px] font-bold text-zinc-800">Divider Gray</p>
                <p className="text-[9px] font-mono text-zinc-400">#E5E7EB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Showcase */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 space-y-8 shadow-sm">
          <div className="flex items-center gap-2 border-b pb-4 border-zinc-150">
            <div className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-300 text-[10px] font-mono font-bold text-zinc-500 uppercase">
              Typography System
            </div>
            <span className="text-xs font-mono text-zinc-400">— Outfit Display &amp; Inter Sans</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              </div>
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section n="07" title="What Still Needed Human Judgment" accent="amber">
        <Para>
          Even after a full day of specific, research-backed prompting, three things AI kept getting wrong. Not because the constraints weren&rsquo;t clear — but because these decisions require experiencing the user from the inside, not describing them from the outside.
        </Para>
        <DecisionList
          items={[
            {
              title: "Copy density — AI writes for someone who reads, not someone who is stressed",
              body: "Every screen AI produced had more text than V1 — feature descriptions on cards, body copy explaining what each section does, helpful context labels. The actual user under stress does not read. They scan for one clear action. V1 used icon plus a two-word label. AI's instinct was to inform. The user's instinct in an emergency is to act. Those are different design targets that produce different screen architectures.",
            },
            {
              title: "Sub-category screens — logical from a systems view, wrong from a human view",
              body: "AI kept inserting a screen between 'Plumbing' and the provider list: 'Tap Fixing / Wash Basin / Leakage / Toilet Fittings / RO Fitting / Pipe Fitting.' Logically structured. Behaviourally wrong. Someone whose pipe is leaking at 10pm cannot classify their own problem before calling for help — they know water is on the floor. The sub-category screen makes perfect sense from a systems architecture perspective and fails completely from a human context perspective. That distinction requires knowing how people think in an emergency, not how they think when calmly browsing an app.",
            },
            {
              title: "Trust signals — AI defaults to platform trust, not identity trust",
              body: "When prompted 'add trust signals,' AI suggested payment security badges, '30-day service guarantees,' and 'Verified Professional' labels. These answer the question: is this transaction safe? The actual trust question in Nearby is different: should I let this person into my house? Those are completely different threat models. Aadhaar verification answers the second one — it means traceable government identity, not a platform endorsement. Knowing which question the user is actually asking requires standing in their situation, not reading their description of it.",
            },
          ]}
        />
      </Section>

      <Section n="08" title="The Work" accent="amber">
        <OutcomeGrid
          items={[
            { n: "67",     label: "Field interviews — service seekers and providers across non-metro cities" },
            { n: "13",     label: "Behavioral personas distilled from interview patterns" },
            { n: "15",     label: "Screens across two complete user journeys — V1 and V2" },
            { n: "3 taps", label: "Home → Service → Call — the emergency flow that research produced" },
          ]}
        />
        <Para>
          The AI-generated screens look better than V1 — cleaner typography, more consistent spacing, better visual hierarchy. But the decisions that make those screens correct for this user — proximity over rating, Aadhaar over stars, call over booking, service-first navigation — none of those came from AI. They came from six weeks with real people. AI executed them. It could not have found them.
        </Para>
      </Section>

      <Section n="09" title="What Working With AI on This Project Taught Me" accent="amber">
        <Para>
          AI tools — Stitch, Copilot, any of them — work brilliantly within their training ecosystem. The failure mode is silent: you get a polished, confident output that is built for the wrong user. This project made that boundary visible.
        </Para>

        <DecisionList
          items={[
            {
              title: "Where AI works without intervention",
              body: "Vibe coding, rapid prototyping, design token systems, component consistency across 20 screens — AI is fast and accurate here because the patterns are well-documented in its training data. Standard onboarding flows, booking UIs, card layouts, colour systems. If the problem is well-represented in the existing ecosystem, AI can build it well and build it fast.",
            },
            {
              title: "Where human teaching is required",
              body: "The moment your user is outside AI's training distribution — non-metro India, informal service economies, low-literacy interfaces, trust models built on government identity rather than platform ratings — AI defaults to the nearest familiar pattern. It produces UrbanClap when you need Nearby. Not because the prompt was wrong. Because the right answer doesn't exist in its data.",
            },
            {
              title: "The designer's job is knowing which side of that line you're on",
              body: "Before opening any AI tool, the question is: is this problem well-represented in training data, or is my user outside it? If outside, AI needs to be taught — not prompted. The difference is in the depth of context required. A prompt says what to do. Teaching explains why the default is wrong for this specific person in this specific situation, one constraint at a time.",
            },
            {
              title: "That teaching only comes from research",
              body: "The constraint that finally got AI to remove star ratings was not a better-worded instruction. It was six weeks of knowing that Praveen has never trusted a platform he has never used, that his trust comes from Aadhaar-verified identity, and that in an emergency distance beats quality every time. You cannot generate that knowledge. You have to earn it in the field first.",
            },
          ]}
        />

        <Callout type="blue" label="The takeaway">
          Research is the work. Screens are the output. AI can produce the output fast — it built in minutes what would have taken days. But it cannot do what came before: sitting with real people, understanding what they actually need, and knowing which of its own defaults to override. That part still requires a Human to teach AI.
        </Callout>
      </Section>
    </CaseStudyPage>
  );
}
