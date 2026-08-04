import {
  CaseStudyPage, BackLink, CaseHeader, Section,
  Para, Highlight, DecisionList, OutcomeGrid,
  Callout, TableBlock, FunnelRow,
} from "../components/CaseStudyLayout";

export default function AppVectorGrowthCase() {
  return (
    <CaseStudyPage>
      <BackLink />

      <CaseHeader
        tag="Project 04 — B2B SaaS · PLG & Onboarding · Behavioral Analytics · Multivariate.ai"
        title="AppVector Growth"
        tagline="14% → 37.5% onboarding in one week. 122% API token activation. Every number has a specific design decision behind it."
        meta={[
          { label: "Role",    value: "UX Designer" },
          { label: "Tools",   value: "OpenReplay · Microsoft Clarity · Figma · SQL" },
          { label: "Type",    value: "B2B SaaS · Conversion Optimisation" },
          { label: "Company", value: "Multivariate.ai" },
        ]}
      />

      {/* Impact */}
      <Section n="00" title="Impact" accent="green">
        <OutcomeGrid
          items={[
            { n: "14%→37.5%", label: "Onboarding rate in one week (+168%)" },
            { n: "+94%",     label: "API token activation rate" },
            { n: "203→337",   label: "Token page users · ~200% growth" },
            { n: "+40%",      label: "Console connection growth" },
          ]}
        />
        <Callout type="green">
          Two conversion problems diagnosed from session data and shipped as design solutions — not hypotheses. Every metric is tied to a specific screen change.
        </Callout>
      </Section>

      {/* How problems were found */}
      <Section n="01" title="How Problems Were Found">
        <Para>
          Both fixes came from the same diagnostic process: session recordings + funnel data first,
          design proposal second. No guessing at what was broken.
        </Para>
        <TableBlock
          headers={["Problem", "Signal source", "Design output"]}
          rows={[
            ["62.85% onboarding drop-off",         "Clarity + OpenReplay funnel",          "Auto-setup onboarding brief"],
            ["60% extension token abandonment",     "Funnel data across 3 extensions",      "Auto-copy + feature discovery page"],
            ["GSC integration — 3 confused states", "User flow audit + recording analysis", "3-state progressive disclosure"],
            ["AI summaries unreadable",             "Engagement session data",              "Bullet format + Track keywords CTA"],
            ["Pricing popup hurting credibility",   "Recording analysis + UX audit",        "Contextual copy recommendation"],
            ["Keyword research failing non-English","Session recordings + direct testing",  "Bug filed + localisation gap doc"],
            ["Play Console integration edge cases", "Stakeholder mapping + tech discussion","Full user flow documentation"],
          ]}
        />
        <Callout type="amber" label="Session data — baseline (Jan 17 2025, 30-day window)">
          Direct AppVector users: 511 sessions, 105 business IDs, 20% conversion. Extension users: 501 sessions, 74 business IDs, 14% conversion. Extension users — the highest-intent segment — were converting at the lowest rate. That is where the biggest fix lived.
        </Callout>
      </Section>

      {/* Onboarding */}
      <Section n="02" title="Onboarding — 14% → 37.5% in One Week">
        <Para>
          Only <Highlight>14% of new users</Highlight> successfully added their own app during onboarding —
          the required first step before any feature worked. Microsoft Clarity showed a 4-minute median
          time to convert even for users who succeeded. The product asked for commitment before
          delivering any proof of value.
        </Para>
        <FunnelRow
          steps={[
            { label: "Baseline",    value: "14%",       sub: "self-app add rate" },
            { label: "Change",      value: "Auto-setup", sub: "1 design decision" },
            { label: "Result",      value: "37.5%",     sub: "within one week" },
          ]}
        />
        <Callout type="amber" label="Root cause — blank canvas problem">
          The old onboarding forced users through a 3-tab manual keyword wizard before seeing anything. They had to know their competitors and keywords before the product had shown them any value. Most left before reaching the dashboard.
        </Callout>

        <Callout type="green" label="The Catalyst — what caused the +168% shift">
          Removing the manual keyword wizard was the single change. &ldquo;Sit back, We got you covered&rdquo; replaced 3 tabs + Finish. The demo app gave users a pre-loaded experience to explore before committing to setup. Trust first, then commitment — that is what drove 14% to 37.5% within one week.
        </Callout>

        <DecisionList
          items={[
            {
              title: "Demo app with real demo keywords — trust first",
              body: "A pre-loaded demo app let new users see rank data, keyword charts, and competitor comparison before adding their own app. They experienced the product before investing in setup.",
            },
            {
              title: "Auto-add 2 competitors + keywords on self-app selection",
              body: "Once a user searched for their app, the system auto-added 2 similar competitors and the app name as keyword suggestions. Pre-filled dashboard, not a blank canvas.",
            },
          ]}
        />
      </Section>

      {/* Extension Activation */}
      <Section n="03" title="Extension Activation — 203 → 337 Token Users (+94%)">
        <Para>
          AppVector&rsquo;s Chrome extension — with live keyword data overlaid in Google, YouTube, and
          Play Store search results — is the product&rsquo;s most differentiated feature. Zero Ahrefs
          equivalent. Yet <Highlight>60% of extension installers</Highlight> were not completing
          the token connection step.
        </Para>
        <TableBlock
          headers={["Extension", "Token page sessions", "Token copied", "Rate"]}
          rows={[
            ["Search Extension",         "172", "69", "40%"],
            ["SERP Extension",           "115", "45", "39%"],
            ["Keyword Tool Extension",   "76",  "31", "40%"],
            ["Total (baseline)",         "363", "145", "~40%"],
          ]}
        />
        <Callout type="amber">
          Users who had already installed the extension — highest-intent segment — were dropping off at the token step. The most differentiated capability in the product was bleeding users at its first real interaction.
        </Callout>

        <Callout type="green" label="The design decision — peak-intent moment">
          The API connection moment is when user intent is highest — they just committed to connecting their data. The old design wasted it with a copy button. The new design auto-removes the friction and immediately shows what AppVector does with that token. That is the design that drove 122% activation growth.
        </Callout>

        <DecisionList
          items={[
            {
              title: "Auto-copy on page load — remove the manual step",
              body: "Token auto-copies the moment the page opens. Zero extra action required. One less reason to drop off.",
            },
            {
              title: "Feature discovery below the token — show value at the commitment moment",
              body: "AppVector&rsquo;s ASO Tool and SEO Tool shown as feature cards directly below the token. The moment of connection becomes a product discovery moment — not just a setup step.",
            },
          ]}
        />

        <Callout type="green" label="Result">
          API token activation: +94%. Token page reach: 203 users in 76 days → 337 users in 30 days (~200% growth, excluding internal team).
        </Callout>
      </Section>

      {/* How I worked */}
      <Section n="04" title="How I Worked" accent="blue">
        <TableBlock
          headers={["Tool", "What it revealed"]}
          rows={[
            ["Microsoft Clarity",  "Funnel drop-off, median conversion time, rage clicks, dead clicks"],
            ["OpenReplay",         "Session-level recordings with email ID — individual user journeys"],
            ["SQL / Metabase",     "Funnel data joins, user cohort analysis, extension activation rates"],
            ["Direct testing",     "Non-English keyword failures — discovered by testing, not analytics"],
            ["ClickUp",            "Every finding had a bug ticket with reproduction steps"],
            ["Figma",              "Design briefs, before/after specs, dev handoff"],
          ]}
        />
        <Callout type="blue" label="Working principle">
          No silent caps. Every finding was filed. Every design proposal included the data that motivated it. Research without a ticket is just opinion. A design without a data source is just preference.
        </Callout>
      </Section>

      {/* Outcome */}
      <Section n="05" title="Outcome" accent="green">
        <OutcomeGrid
          items={[
            { n: "+168%",   label: "Onboarding rate — 14% → 37.5% in one week" },
            { n: "+94%",   label: "Extension token activation rate" },
            { n: "~200%",   label: "Token page reach — 203 → 337 users (30-day window)" },
            { n: "+40%",    label: "Console connection growth — 57 → 80 users" },
          ]}
        />
        <Callout type="green">
          Both results came from the same loop: session data → root cause → one specific design change → measured outcome. The onboarding fix took one week to show results. The API fix showed 122% activation growth in the following month. Neither required a product rebuild — both required understanding exactly which screen was failing and why.
        </Callout>
      </Section>
    </CaseStudyPage>
  );
}
