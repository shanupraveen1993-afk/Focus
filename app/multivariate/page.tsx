import {
  CaseStudyPage, BackLink, CaseHeader, Section,
  Para, Highlight, DecisionList, OutcomeGrid,
  Callout, Split, SplitBlock, FunnelRow,
  ImageSlot, ImageRow, TableBlock, DocLink,
} from "../components/CaseStudyLayout";

export const metadata = {
  title: "Multivariate.ai — Shanmuga Praveen",
  description: "Full-stack UX across two B2B SaaS products — AppVector (ASO) and SearchVector (SEO). 14%→37.5% onboarding, 122% API activation, 9 competitors benchmarked, 8 tools rebuilt, 2.5× GSC growth.",
};

export default function MultivariateCase() {
  return (
    <CaseStudyPage>
      <BackLink />

      <CaseHeader
        tag="Project 04 — B2B SaaS · ASO + SEO Platform · Growth · Research · Systems · Multivariate.ai"
        title="Multivariate.ai"
        tagline="Two products, one research loop: session recordings found where users failed, competitor benchmarks showed what the fix looked like, design decisions turned both into measurable outcomes."
        meta={[
          { label: "Role",     value: "UX Designer" },
          { label: "Products", value: "AppVector (appvector.io) · SearchVector (searchvector.io)" },
          { label: "Tools",    value: "OpenReplay · Clarity · PostHog · Figma · SQL · Claude Code" },
          { label: "Type",     value: "B2B SaaS · PLG · Growth · Competitive Research · Design Systems" },
        ]}
      />

      {/* ── §00 Impact ──────────────────────────────────────────────────────── */}
      <Section n="00" title="Impact" accent="green">
        <OutcomeGrid
          items={[
            { n: "14%→37.5%", label: "Onboarding rate — 1 design change, 1 week" },
            { n: "+94%",      label: "API token activation — 203 → 337 users" },
            { n: "9",          label: "Competitors benchmarked across ASO + SEO" },
            { n: "7→1",        label: "Keyword patterns unified into 1 component" },
            { n: "2.5×",       label: "GSC impressions — SearchVector week 1 post-launch" },
            { n: "8+",         label: "SearchVector tools redesigned end-to-end" },
          ]}
        />
        <Callout type="green">
          Every metric above is tied to a specific screen change. No hypotheses — session data first, design decision second, outcome measured.
        </Callout>
      </Section>

      {/* ── §01 The Products ─────────────────────────────────────────────────── */}
      <Section n="01" title="The Products">
        <Para>
          <Highlight>AppVector</Highlight> and <Highlight>SearchVector</Highlight> are our own products —
          built and shipped at <Highlight>Multivariate AI Pvt Ltd</Highlight>, under{" "}
          <Highlight>Nextgrowth Lab</Highlight>, a top-10 SEO/ASO agency in India. AppVector is an ASO
          and competitive intelligence platform: keyword research, rank tracking, competitor benchmarking,
          and review management for mobile apps. SearchVector is an all-in-one SEO platform: keyword
          research, live SERP rank tracking, GSC insights, Google Ads intelligence, and site health.
        </Para>
        <Para>
          These products serve two audiences in parallel — our SaaS users (growth teams at mobile-first
          companies) and our agency clients at Nextgrowth Lab who use the same tools for client campaigns.
          My job: fix UX debt across both, measure every outcome, and build a system so the same issues
          don&rsquo;t accumulate again.
        </Para>
        <TableBlock
          headers={["Product", "Domain", "Core value", "Live"]}
          rows={[
            ["AppVector", "ASO · App intelligence", "Keyword rank tracking, competitor analysis, review management", "appvector.io"],
            ["SearchVector", "SEO · Web intelligence", "SERP tracking, GSC insights, Google Ads overview, site audit", "searchvector.io"],
          ]}
        />
      </Section>

      {/* ── §02 Research Method ──────────────────────────────────────────────── */}
      <Section n="02" title="How I Found Every Problem">
        <Para>
          Every fix in this case study came from the same diagnostic loop — data before design,
          root cause before solution. Three sources in parallel.
        </Para>
        <DecisionList
          items={[
            {
              title: "Session recordings — OpenReplay + Microsoft Clarity",
              body: "OpenReplay gave session-level recordings with email IDs — individual user journeys, entry points, roaming behaviour, exit points. Clarity gave funnel drop-off rates, rage clicks, dead clicks, and median conversion times. Combined: I could see exactly which user, on which screen, stopped doing what — and why the product made it hard.",
            },
            {
              title: "Funnel data — PostHog + SQL queries",
              body: "Ran SQL queries directly on the company account database to extract page visits, session duration, click rates, user entry points, and email IDs of churned users. PostHog tracked event-level funnels. This gave ground-truth numbers before any design proposal was made.",
            },
            {
              title: "Competitor benchmarking — 9 competitors, continuous",
              body: "Every sprint, every feature decision was informed by structured competitive analysis across 9 direct and indirect competitors — Sensor Tower, AppTweak, MobileAction, ASODesk, AppFigures, Ahrefs, SEMrush, SimilarWeb, and AppFollow. This was not a one-time audit. When auditing a new feature area, I searched for who was solving it best and added them to the matrix.",
            },
          ]}
        />
        <ImageSlot
          label="Rank Comparison — competitor keyword positions (Instagram vs Facebook, Snapchat, Twitter, Threads)"
          src="/av-screens/rank-old.png"
          alt="AppVector Rank Comparison — keyword rank data for Instagram vs 4 direct competitors with % movement"
          note="This is the type of data collected every sprint — not just for our client apps, but to understand how competitor apps were tracking each other. Rank movement percentages (+85%, -61%) gave context for which keyword areas were contested versus owned."
        />

        <Callout type="blue">
          No silent caps. Every finding became a ClickUp ticket — what broke, root cause, reproduction steps, design solution. Research without a ticket is just opinion.
        </Callout>
      </Section>

      {/* ── §03 Segment Growth ───────────────────────────────────────────────── */}
      <Section n="03" title="Segment Growth — Onboarding + API Activation">
        <Para>
          Session data from January 2025 (30-day window) showed two conversion problems that were
          costing the product its highest-intent users — and both had a specific design decision behind them.
        </Para>

        <Callout type="amber" label="Baseline — Jan 17 2025, 30-day window">
          Direct AppVector users: 511 sessions, 105 business IDs, 20% conversion.
          Extension users: 501 sessions, 74 business IDs, 14% conversion.
          Extension users — the highest-intent segment — were converting at the lowest rate.
        </Callout>

        {/* Onboarding */}
        <Para>
          <Highlight>Problem 1 — Onboarding: 14% self-app add rate.</Highlight>{" "}
          Only 14% of new users successfully added their own app during onboarding — the required
          first step before any feature worked. Microsoft Clarity showed a 4-minute median time to
          convert even for users who succeeded. The product asked for commitment before proof of value.
        </Para>

        <FunnelRow
          steps={[
            { label: "Baseline onboarding rate",   value: "14%",      sub: "Jan 2025, 30-day window" },
            { label: "Design change",               value: "Auto-setup", sub: "1 screen, 1 decision" },
            { label: "Result — one week later",     value: "37.5%",    sub: "+168% lift" },
          ]}
        />

        <Split>
          <SplitBlock label="Before — blank canvas, manual setup" accent="before">
            <p>3-tab keyword wizard before any product value visible.</p>
            <p>User must know competitors and keywords before using the product.</p>
            <p>Empty dashboard on first login — no data, no guidance.</p>
            <p>Most users left before reaching the dashboard.</p>
          </SplitBlock>
          <SplitBlock label="After — pre-filled, value first" accent="after">
            <p>Demo app with real rank data — explore before committing.</p>
            <p>Select your app → system auto-adds 2 competitors + keyword suggestions.</p>
            <p>Pre-filled dashboard on first login.</p>
            <p>&ldquo;Sit back, We got you covered&rdquo; — trust first, commitment second.</p>
          </SplitBlock>
        </Split>

        <ImageSlot
          label="New onboarding flow — auto-setup in action"
          src="/mv/onboarding-new.gif"
          alt="AppVector new onboarding — animated demo showing auto-setup pre-fill flow"
          note="Single field: select your app. System handles the rest — 2 competitors auto-added, keyword suggestions pre-filled. First data visible within seconds of sign-up."
        />

        {/* API Activation */}
        <Para>
          <Highlight>Problem 2 — API activation: 60% of extension installers abandoned at the token step.</Highlight>{" "}
          AppVector&rsquo;s Chrome extension overlays live keyword data in Google, YouTube, and Play Store
          search results — zero Ahrefs equivalent. Yet 60% of users who had already installed the
          extension were not completing the token connection.
        </Para>

        <TableBlock
          headers={["Extension", "Token page sessions", "Token copied", "Rate"]}
          rows={[
            ["Search Extension",       "172", "69",  "40%"],
            ["SERP Extension",         "115", "45",  "39%"],
            ["Keyword Tool Extension",  "76",  "31",  "40%"],
            ["Total (baseline)",        "363", "145", "~40%"],
          ]}
        />

        <ImageRow
          slots={[
            {
              label: "Before — manual copy, upsell at highest-intent moment",
              src: "/mv/api-old.png",
              alt: "Old AppVector token page — generic 'Token copied successfully' with distracting upsell",
            },
            {
              label: "After — auto-copy + feature preview at connection moment",
              src: "/mv/api-new.png",
              alt: "New AppVector API page — API key auto-copies, ASO Tool and SEO Tool shown below",
            },
          ]}
        />

        <Split>
          <SplitBlock label="Before — friction at the commitment moment" accent="before">
            <p>User had to manually click copy — one more action to drop off at.</p>
            <p>Page content: generic upsell copy unrelated to the extension they just installed.</p>
            <p>Peak-intent moment wasted — no product value shown.</p>
          </SplitBlock>
          <SplitBlock label="After — value at the commitment moment" accent="after">
            <p>Token auto-copies on page load. Zero manual action required.</p>
            <p>Feature cards shown below: ASO Tool + SEO Tool with screenshots.</p>
            <p>Connection moment = product discovery moment.</p>
          </SplitBlock>
        </Split>

        <Callout type="green">
          API token activation: <Highlight>+94%</Highlight>. Token page reach: 203 users (76 days) → 337 users (30 days) — ~200% growth excluding internal team. Auto-copy removed the action; feature cards showed the value. That is what drove the lift.
        </Callout>

        <DocLink href="/docs/openreplay-observation.pdf" label="User behaviour in AppVector — OpenReplay observation document" />
        <DocLink href="/docs/pricing-session-insights.pdf" label="Pricing page session analysis — 20 sessions, 3.1 min avg" />
      </Section>

      {/* ── §04 Competitor Intelligence ──────────────────────────────────────── */}
      <Section n="04" title="Competitor Intelligence — 9 Competitors Benchmarked">
        <Para>
          Competitive analysis was not a one-time audit. I built and maintained a feature matrix
          across <Highlight>9 direct and indirect competitors</Highlight> — continuously updated
          across 6 months, filtered by feasibility × user impact.
        </Para>

        <Callout type="blue" label="Discovery mindset">
          ASODesk and AppFigures were not on the original list. I found them by following the
          problem — when auditing review management gaps, I searched for who was solving it best.
          Finding a new competitor mid-cycle and adding them is what separates ongoing research
          from a one-time audit.
        </Callout>

        <div style={{ maxHeight: "320px", overflow: "hidden", borderRadius: "12px" }}>
          <ImageSlot
            label="Competitive intelligence matrix — 9 competitors, 15 features (top rows)"
            src="/av-screens/competitor-matrix.png"
            alt="AppVector competitive intelligence matrix — 9 competitors benchmarked across 15 features"
          />
        </div>
        <p className="text-[13px] text-[#9ca3af] leading-relaxed mt-2 italic">Feature matrix maintained across 6 months — not a one-time audit. Updated every sprint, filtered by user impact × feasibility.</p>
        <ImageSlot
          label="Discover Android Apps — used to audit competitor apps mid-cycle"
          src="/av-old-competitor.png"
          alt="AppVector Discover Android Apps — advanced search used for competitive research, with PLG upgrade wall visible"
          note="The upgrade wall visible here was the PLG pattern I redesigned — based on what Sensor Tower and AppTweak showed value before locking it."
        />

        <DecisionList
          items={[
            {
              title: "PLG Upgrade Moments — Discovery vs Wall",
              body: "Competitor analysis revealed a consistent pattern: high-converting upgrade prompts showed the locked value rather than announcing the lock. AppVector was using the low-converting pattern — a wall that blocked access. Redesigned to show partial value first, then reveal the gap. 'You found 89 untapped keywords — unlock all of them' converts through desire, not frustration.",
            },
            {
              title: "Sensor Tower benchmark — Preview before commitment",
              body: "Sensor Tower shows keyword overlap, estimated downloads, and ranking data before you confirm a competitor connection. You see what you get before you commit. AppVector asked users to commit first, then showed the data. The value proposition was hidden behind the friction. This benchmark directly became the competitor connection redesign.",
            },
            {
              title: "Play Console — 4.2% connection rate",
              body: "494 users added apps. Only 21 connected Play Console (4.2%) despite Review Manager, Search Term Report, and Localization all requiring it. Strategy from AppTweak research: promote Connect Console contextually on every feature page that depends on it — with copy specific to that page's value, not a generic CTA. Result: +40% console connection growth.",
            },
            {
              title: "Review + AI Reply — Retention Driver",
              body: "Deep dive into Appbot and ASODesk: AI-powered review reply features were driving repeated return visits — a high-engagement loop competitors were monetising. Quality and framing (sharp summaries vs paragraph dumps) was the differentiator. This directly informed AppVector's AI review reply wireframe — research to design artifact in the same session.",
            },
            {
              title: "Localisation Gap — JP, KR, CN Markets",
              body: "Studied how top competitors localised for Japanese, Korean, and Chinese markets. Finding: most direct competitors had localised landing pages and app store screenshots; AppVector did not. Coordinated screenshot localisation workflow, collaborated on translation for web extension store listings. Localisation bug in keyword search filed with dev team for non-English markets.",
            },
          ]}
        />

        <DocLink href="/docs/console-connect-analysis.pdf" label="Cross-function features & Play Console integration strategy" />
      </Section>

      {/* ── §04b Console Connect ─────────────────────────────────────────────── */}
      <Section n="04b" title="Console Connect — Value Before Access">
        <Para>
          494 users added their app to AppVector. Only 21 connected Play Console —{" "}
          <Highlight>4.2% connection rate</Highlight>, despite Review Manager, Search Term Report,
          and Localisation all requiring it. Session recordings showed users landing on "Add Website"
          and not understanding why they were being asked to connect at all.
        </Para>

        <Split>
          <SplitBlock label="Before — GSC buried in Add Website modal" accent="before">
            <p>GSC presented as a project type choice: Google SERP vs Google Search Console.</p>
            <p>No explanation of what Console actually unlocks. No value preview.</p>
            <p>Users chose SERP by default — skipping console connection entirely.</p>
            <p>4.2% connection rate after 6 months of the feature being live.</p>
          </SplitBlock>
          <SplitBlock label="After — dedicated GSC Insights page" accent="after">
            <p>Dedicated GSC Insights page shows 4 concrete benefits before asking for access.</p>
            <p>Value-first: clicks, impressions, queries, index coverage visible before OAuth CTA.</p>
            <p>Demo mode lets users explore the feature before connecting a real account.</p>
            <p>OAuth CTA appears after value is demonstrated — not as the first ask.</p>
          </SplitBlock>
        </Split>

        <ImageRow
          slots={[
            {
              label: "Before — GSC buried as a modal project type choice",
              src: "/mv/console-old.png",
              alt: "SearchVector Add Website modal — GSC buried as 'Google Search Console' project type option alongside Google SERP",
            },
            {
              label: "After — GSC Insights as a dedicated product page",
              src: "/mv/console-new.png",
              alt: "SearchVector GSC Insights page — value-first layout with benefit bullets, demo mode, and OAuth CTA after",
            },
          ]}
        />

        <Callout type="green">
          Console connection rate: <Highlight>+40%</Highlight> — 57 → 80 users. Moving GSC from a
          buried modal choice to a dedicated page showing value before asking for access changed what
          users understood about the feature before committing to OAuth.
        </Callout>
      </Section>

      {/* ── §05 Design System — 7→1 ─────────────────────────────────────────── */}
      <Section n="05" title="Design System — 7 Keyword Patterns → 1 Component">
        <Para>
          The most-used action in AppVector — adding keywords — had been built incrementally by
          different developers. The result was <Highlight>7 different interaction patterns</Highlight> for
          the same task across 12 instances. Support tickets consistently referenced confusion about{" "}
          <Highlight>&ldquo;how to add keywords&rdquo;</Highlight> — not which keywords to add.
        </Para>

        <FunnelRow
          steps={[
            { label: "Set up dashboard",         value: "508",  sub: "100% of users" },
            { label: "Visited keyword research",  value: "202",  sub: "39.7% explored" },
            { label: "Clicked Add Keywords",      value: "70",   sub: "13.8% took action" },
            { label: "Clicked Track Rank",        value: "7",    sub: "1.4% completed the loop" },
          ]}
        />

        <Callout type="amber" label="The core finding">
          202 users explored keyword research. Only 7 clicked Track Rank. Users were copying
          results without tracking them. 6 of 8 user interviews: <Highlight>&ldquo;I&rsquo;m not sure if I selected it or not.&rdquo;</Highlight>{" "}
          The interaction gap was the product — 7 patterns, no persistent selection state, no live count.
        </Callout>

        <Split>
          <SplitBlock label="Before — 7 inconsistent patterns" accent="before">
            <p>Checkboxes on one screen. Click-to-select on another.</p>
            <p>Immediate add on some pages. Confirm button on others.</p>
            <p>No persistent keyword count anywhere in the product.</p>
            <p>Non-English markets (JP, KR, CN) — multi-word queries return zero results.</p>
            <p>Users re-learning the same interaction on every screen.</p>
          </SplitBlock>
          <SplitBlock label="After — 1 unified component" accent="after">
            <p>Checkbox-first selection, consistent across all entry points.</p>
            <p>Persistent selection tray at bottom — always visible.</p>
            <p>Live count of selected keywords at all times.</p>
            <p>Single &ldquo;Add X keywords&rdquo; action — no modal, no re-confirmation.</p>
            <p>Engineering implements once — all 12 entry points use the same code.</p>
          </SplitBlock>
        </Split>

        <ImageSlot
          label="Before — old 3-tab keyword wizard: Add app → Add competitors → Add keywords"
          src="/mv/keyword-old.png"
          alt="Old AppVector onboarding keyword step — 3-tab wizard with keyword suggestions and separate 'Selected Keywords (28)' panel"
          note="Three separate tabs. Keywords listed on the left, selected count tracked in a separate right panel. Users couldn't tell if they were tracking keywords or just viewing suggestions — the persistent confusion that drove the 7-pattern audit."
        />

        <Callout type="green">
          Unified into 1 Figma component with state variants and handoff annotations.
          Engineering implements once — all entry points use the same code.
          Result: <Highlight>+54% keyword feature engagement</Highlight>.
        </Callout>

        <DocLink href="/docs/keyword-flow-analysis.pdf" label="Keyword selection user flow analysis — 30-day funnel document" />
      </Section>

      {/* ── §06 SearchVector Rebuild ─────────────────────────────────────────── */}
      <Section n="06" title="SearchVector — AI Migration Broke the UX, I Rebuilt It">
        <Para>
          Multivariate.ai made a decision to migrate the entire codebase — AppVector and SearchVector
          — from React and Node to a new stack, using Claude Code to handle the migration. The AI
          completed the technical migration. But the UX failed completely in the process.
        </Para>
        <Para>
          This is a known pattern with AI-driven code migration:{" "}
          <Highlight>the logic transfers, the UX doesn&rsquo;t.</Highlight>{" "}
          Component states collapse. Edge cases disappear. Interactions that relied on specific
          sequencing break silently. The product looked functional but users couldn&rsquo;t complete
          basic flows.
        </Para>

        <TableBlock
          headers={["Area", "What broke"]}
          rows={[
            ["Dashboard",     "No state differentiation — demo, added, and connected looked identical"],
            ["Onboarding",    "No guidance for new users — blank state with no next step"],
            ["GSC Integration","Connect flow had no progressive disclosure — users couldn't tell what state they were in"],
            ["Google Ads",    "Table layout broke — filter, search, and export had no visual hierarchy"],
            ["Rank Tracker",  "Auto-setup defaults missing — users had to manually configure everything"],
            ["Sidebar",       "Navigation hierarchy flat — no grouping, no active states"],
            ["Demo Mode",     "No clear demo/live distinction — users didn't know if data was real"],
            ["Profile",       "Settings scattered across tabs — integrations and limits not visible on first fold"],
          ]}
        />

        <Callout type="amber">
          The company culture is speed-first — ship fast, fix later. UX had always been an afterthought. The migration made this visible across the entire product at once.
        </Callout>

        <DecisionList
          items={[
            {
              title: "Dashboard — 3-state progressive disclosure",
              body: "Designed a clear 3-state system: State 1 — demo data with a visible 'Clear demo data' banner and 'Create project' CTA; State 2 — real project added, GSC section blurred with 'Connect GSC' button (blur communicates locked real data, not a broken feature); State 3 — GSC connected, live metrics replace blurred state. Users always know exactly what state they're in.",
            },
            {
              title: "Design system — Material-3 token mapping",
              body: "Mapped the existing brand palette (primary orange #FF5722, neutral scale) to Material Design 3 role tokens. Inter font, 4px base grid, 5-level shadow scale, type scale from display (57px) to caption (12px). Documented as a full design guide for engineering — spacing rules, button hierarchy, card patterns, focus states, and what to avoid.",
            },
            {
              title: "8 tools redesigned — same diagnostic loop, every screen",
              body: "Keyword Research, Live SERP Rank Tracker, GSC Insights, GSC Index Checker, Google Ads Campaign, Apple Search Ads, Sitemap Analyzer, Title Optimizer. Every fix: session data identified the break → root cause documented → Figma redesign → wireframe → HTML prototype → ClickUp dev ticket.",
            },
            {
              title: "UX SOP — built so the same breaks can't happen again",
              body: "Wrote a UX diagnostic SOP adopted by the dev team. 5 steps: competitor analysis before building, shared reference library, OpenReplay session analysis for every change, PostHog page visit tracking, written fix brief before any ClickUp ticket. No verbal-only handoffs. The SOP is now the standard process at Multivariate.ai for every new feature.",
            },
          ]}
        />

        <Callout type="green" label="Result — Deepak Shah, CEO, May 28">
          &ldquo;2.5x growth in SV impressions in a week, will cross 10k today.&rdquo;
          The impression growth reflects both the landing page redesign (SEO-structured pages
          replacing broken layouts) and the onboarding fix (users reaching the product and not
          immediately dropping off).
        </Callout>
      </Section>

      {/* ── §07 What Shipped ─────────────────────────────────────────────────── */}
      <Section n="07" title="What Shipped" accent="green">
        <Para>
          Every screen below is live at appvector.io. The design decisions documented above are
          visible in every interaction — the sidebar, the keyword selection tray, the competitor
          comparison tables, the review reply workflow.
        </Para>

        <OutcomeGrid
          items={[
            { n: "+168%",  label: "Onboarding — 14% → 37.5% in one week" },
            { n: "+94%",  label: "API token activation — 203 → 337 users" },
            { n: "+40%",   label: "Console connections — 57 → 80 users" },
            { n: "2.5×",   label: "SearchVector GSC impressions (week 1)" },
          ]}
        />

        <ImageSlot
          label="My Apps — rebuilt dashboard (unified app management)"
          src="/mv/appvector-0.png"
          alt="AppVector My Apps dashboard — current live product showing Flipkart and Instagram tracked apps"
        />

        <ImageRow
          slots={[
            {
              label: "ASO Report — competitor metadata comparison (shipped)",
              src: "/mv/appvector-2.png",
              alt: "AppVector ASO Report — Flipkart vs Amazon India metadata comparison",
            },
            {
              label: "Review Manager — Play Console connected, AI reply enabled",
              src: "/mv/appvector-3.png",
              alt: "AppVector Review Manager — 54,464 reviews, AI reply inline",
            },
          ]}
        />

        <ImageSlot
          label="Keyword Rank Tracker — 14 keywords tracked, 9 in top 10"
          src="/mv/keyword-rank-new.png"
          alt="AppVector Keyword Rank Tracker — Instagram tracked, rank movements shown"
        />

        <Callout type="green" label="The full arc">
          Session recordings found where users failed. Competitor benchmarks showed what the fix
          looked like. Design decisions were documented, submitted to the dev team, and shipped.
          The products that exist at appvector.io and searchvector.io today are a direct consequence
          of that research loop.
        </Callout>
      </Section>

    </CaseStudyPage>
  );
}
