import {
  CaseStudyPage, BackLink, CaseHeader, Section,
  Para, Highlight, DecisionList, OutcomeGrid,
  Callout, TableBlock, Split, SplitBlock, FunnelRow,
  ImageSlot, ImageRow,
} from "../components/CaseStudyLayout";

export const metadata = {
  title: "AppVector Intel — Shanmuga Praveen",
  description: "UX design on a B2B ASO analytics platform — diagnosing onboarding drop-offs with session recordings and SQL, redesigning the 3-step manual setup into an automated demo-first dashboard that moved configuration completion from 14% to 37.5%.",
};

export default function AppVectorIntelCase() {
  return (
    <CaseStudyPage>
      <BackLink />

      <CaseHeader
        tag="Project 04 — B2B SaaS · Growth Diagnostics · Multivariate.ai"
        title="AppVector Intel"
        tagline={<>
          AppVector is Multivariate&rsquo;s B2B ASO analytics platform. As sole UX designer, I restructured key conversion funnels—starting with a complete redesign of the onboarding flow that boosted setup completion from 14% to 37.5% in one week. By auditing 1,004 user sessions and identifying that 88% of users dropped off due to a blocking 3-step manual configuration gate, I replaced it with an automated demo-first experience. I scaled this data-led methodology across all core modules (Rank Tracker, Live Ranks, ASO Report, Review Manager) to systematically reduce user friction and drive product engagement.
          <br /><br />
          <span className="text-zinc-900 font-medium">Here&rsquo;s what the session data showed →</span>
        </>}
        wideTagline
        meta={[
          { label: "Role",    value: "UX Designer" },
          { label: "Team",    value: "CEO · 4 Engineers · Sales & Marketing — cross-functional" },
          { label: "Methods", value: "Behavioral Auditing · Funnel Diagnostics · SQL Analytics · A/B Testing" },
          { label: "Type",    value: "B2B SaaS · Growth Diagnostics" },
        ]}
      />

      {/* ── §00 Impact ──────────────────────────────────────────────────── */}
      <Section n="00" title="Impact" accent="green">
        <OutcomeGrid
          items={[
            { n: "14%→37.5%",  label: "Onboarding completion — +168% in one week" },
            { n: "1,004",      label: "Sessions analysed — 88% dropped before seeing any data" },
            { n: "3→7 min",    label: "Average session time after onboarding redesign" },
            { n: "4→1",        label: "Manual onboarding steps collapsed into automated single-click setup" },
          ]}
        />

        <Callout type="green" label="The Strategic Unlock">
          88% of users were dropping off before seeing a single data point. The 3-step manual gate — pick your app, pick competitor apps, pick keywords — was removed and replaced with a single automated modal. Onboarding completion moved from 14% to 37.5% in one week. Session time doubled: 3 minutes to 7.
        </Callout>

        <Para>
          What a new user saw before the redesign, and what they see now — the before sits at Step 3 of the old flow (the last manual barrier), the after shows the single modal that now handles all three steps automatically:
        </Para>

        <ImageRow
          slots={[
            {
              label: "Old — Step 1 of the 3-step onboarding: select platform, find your app, pick countries and languages",
              src: "/av-old-onboard-step1.png",
              alt: "Old AppVector onboarding Step 1 — Select Platform, Select Your App search field, Select Countries & Languages.",
              note: "Old onboarding Step 1: select platform, find your app, pick countries and languages.",
            },
            {
              label: "New — 'Add an app' modal: competitor apps and keywords auto-selected, one click to dashboard",
              src: "/av-screens/onboarding-after.png",
              alt: "New AppVector Add an app modal — Self app selected, Competitor apps auto, Keywords auto.",
              note: "New Add an app modal: competitor apps and keywords auto-selected, one click to dashboard.",
            },
          ]}
        />
      </Section>

      {/* ── §01 The Opportunity ────────────────────────────────────────── */}
      <Section n="01" title="The Opportunity — Finding Funnel Leakage" accent="amber">
        <Para>
          AppVector is a B2B ASO analytics platform. High conversion depends on users configuring their accounts during the first session — connecting their app, selecting competitors, and reaching live keyword data. Without configuration, the product delivers zero value.
        </Para>

        <Para>
          Our metrics showed high traffic but extremely low configuration completion. To find where users were dropping, I set up <Highlight>PostHog tracking</Highlight> and <Highlight>OpenReplay session recordings</Highlight> and ran SQL queries directly on the company account database.
        </Para>

        <Callout type="amber" label="The Root Core Challenge">
          Users were showing up. The product lost them before they saw a single data point — it asked for account setup before proving it had anything worth setting up for.
        </Callout>
      </Section>

      {/* ── §02 Conversion Diagnostics ──────────────────────────────────── */}
      <Section n="02" title="Conversion Diagnostics — Finding the Signals">
        <Para>
          I ran a <Highlight>30-day cohort diagnostic</Highlight> (excluding team and premium accounts) to analyse user flow traffic. The data showed where the largest drops occurred.
        </Para>

        <TableBlock
          headers={["Segment", "Sessions", "Business mail IDs", "Conversion rate"]}
          rows={[
            ["Direct AppVector users", "511", "105", "20%"],
            ["Extension users", "501", "74", "14%"],
            ["Total cohort", "1,004", "~143 unique", "—"],
          ]}
        />

        <Para>
          Page visit distribution validated where users were spending their focus — and where the highest-impact design investment should go:
        </Para>

        <TableBlock
          headers={["Page", "Sessions", "Growth"]}
          rows={[
            ["/keywords/ (Keyword Research)", "189", "+32%"],
            ["/aso-report/", "80", "+27%"],
            ["/app-profile/", "55", "+54%"],
            ["/settings/users", "20", "+85%"],
            ["/packages/pricing/", "9", "0%"],
          ]}
        />

        <ImageRow
          slots={[
            {
              label: "OpenReplay — 30-day funnel: 455 sessions on token page · 374 dropped (82%) at activation step",
              src: "/av-screens/openreplay-funnel-30d.png",
              alt: "OpenReplay funnel: 455 sessions on page_view_/users/get_token/, 81 sessions reached mobile-verification.",
              note: "OpenReplay 30-day funnel: 82% of users dropped during the setup token copy step.",
            },
            {
              label: "OpenReplay — session recordings: each drop-off reviewed individually by user and location",
              src: "/av-screens/openreplay-sessions.png",
              alt: "OpenReplay sessions list showing records of users from Jaipur, Cambodia, Bangalore, Delhi.",
              note: "Individual recordings reviewed session-by-session to isolate the abandonment triggers.",
            },
          ]}
        />

        <Callout type="blue" label="Key finding">
          Keyword pages dominated traffic at 189 sessions (+32%). Users who could complete onboarding engaged deeply with the product. The diagnostic confirmed that onboarding was the single highest-leverage fix — not because the product was broken, but because most users never reached it.
        </Callout>
      </Section>

      {/* ── §0A The Problem State ────────────────────────────────────────── */}
      <Section n="0A" title="The Problem State — What the Old Flow Looked Like">
        <Para>
          Before redesigning anything, I mapped the full old user journey from install to first data point. Four friction points compounded each other — every step demanded commitment before showing any value. Here is what users were hitting.
        </Para>

        <ImageRow
          slots={[
            {
              label: "Before — Discover: generic browse list, no filters, no app context",
              src: "/av-old-discover.png",
              alt: "Old Discover page with flat list layout.",
            },
            {
              label: "After — Discover: dark UI, 86,804 apps, filter by category, rating, installs",
              src: "/av-current/discover-dark.png",
              alt: "New Discover page with detailed category filter panel.",
            },
          ]}
        />

        <ImageRow
          slots={[
            {
              label: "Before — Live Ranks: keyword chips sidebar, static list layout",
              src: "/av-old-liveranks.png",
              alt: "Old Live App Ranks screen.",
            },
            {
              label: "After — Live Ranks: search-first, dark UI, real-time across Play Store + App Store",
              src: "/av-current/live-ranks.png",
              alt: "New Live App Ranks dashboard with search input.",
            },
          ]}
        />

        <ImageRow
          slots={[
            {
              label: "Before — Rank Comparison: dark sidebar, manual keyword list, competitor ranks side by side",
              src: "/av-old-rank.png",
              alt: "Old Rank comparison page.",
            },
            {
              label: "After — Keyword Rank Tracker: 14 keywords, avg rank 6.8, competitor movement columns, auto-populated",
              src: "/av-new-rank.png",
              alt: "New automated Keyword Rank Tracker dashboard.",
            },
          ]}
        />

        <ImageRow
          slots={[
            {
              label: "Before — Extension token: 'Token copied successfully', plain upsell, value shown too late",
              src: "/av-old-api.png",
              alt: "Old plain token copied success page.",
            },
            {
              label: "After — API Key Copied: product preview cards, ASO Tool + SEO Tool CTAs, value-first",
              src: "/av-new-api.png",
              alt: "New Key Copied modal with visual explore cards.",
            },
          ]}
        />

        <DecisionList
          items={[
            {
              title: "Session diagnostic: 30-day funnel built in OpenReplay",
              body: "Mapped the full user journey from extension install to first data point using PostHog events and OpenReplay session recordings. Identified the specific step where 82% of extension users dropped — the API token → mobile verification transition.",
            },
            {
              title: "SQL cohort query on company account database",
              body: "Ran direct SQL queries on user accounts to extract page visits, session duration, click rates, entry points, and email IDs of churned users. This gave ground-truth data — not sampled analytics.",
            },
            {
              title: "Onboarding redesign: automated competitor + keyword selection",
              body: "Designed the new 'Add an app' modal: user picks their app, system auto-selects competitor apps and relevant keywords in the background. Steps 2 and 3 are no longer manual — they are automatic.",
            },
            {
              title: "Demo-first dashboard: pre-populated on first login",
              body: "Designed the pre-populated Demo App dashboard state — a fully functional workspace with real ASO data visible on first login, before the user has connected their own app. 'Connect Your App' becomes a sidebar CTA, not a blocking gate.",
            },
          ]}
        />
      </Section>

      {/* ── §03 Onboarding Redesign ─────────────────────────────────────── */}
      <Section n="03" title="Onboarding — From 3-Step Manual Gate to Automated Demo Dashboard" accent="amber">
        <Para>
          The user journey starts with the Chrome extension. Users install it, come to AppVector to get their API token, activate the extension, then return to the web dashboard to begin onboarding. The first task: add their app, select competitors, set keywords. This is where 88% dropped off.
        </Para>

        <FunnelRow
          steps={[
            { label: "Entered onboarding", value: "~210", sub: "Clarity + OpenReplay avg" },
            { label: "Successfully added app", value: "14%", sub: "86% failure rate" },
            { label: "Time to convert (success)", value: "4 min", sub: "Median — Clarity session data" },
          ]}
        />

        <Callout type="amber" label="First fix — wrong diagnosis">
          The initial assumption was that the \"Add App\" modal was the problem — confusing copy, unclear OAuth prompt. We redesigned it: cleaner hierarchy, better CTA language, progress indicators. Completion barely moved. Deeper session recordings revealed users were not failing inside the modal — they were abandoning before they ever reached it. The real problem was the blank dashboard on first login: no data, no signal of what the product does, no reason to continue. We had fixed the wrong step entirely.
        </Callout>

        <Para>
          Microsoft Clarity confirmed a 4-minute median time-to-convert for users who did complete setup. Most did not make it — not because the product was complex, but because the stages demanded commitment before showing any proof of value.
        </Para>

        <Split>
          <SplitBlock label="Before — 3 Manual Steps, No Value Shown" accent="before">
            <p>User lands on empty dashboard — no data, no guidance.</p>
            <p>Must manually search for their app in the Discover page.</p>
            <p>Must manually scroll and select keywords with no suggestions.</p>
            <p>Play Console OAuth required before seeing any live data.</p>
          </SplitBlock>
          <SplitBlock label="After — One Click, Automated Setup, Demo Data Shown First" accent="after">
            <p>Dashboard pre-loads with a live Demo App and real keyword data.</p>
            <p>User selects their app — competitor apps auto-selected.</p>
            <p>Keywords auto-selected by app category — dashboard populates instantly.</p>
            <p>“Connect Your App” is a persistent sidebar CTA, not a blocking gate.</p>
          </SplitBlock>
        </Split>

        <ImageSlot
          label="New onboarding — automated demo-first walkthrough (animated)"
          src="/mv/onboarding-new.gif"
          alt="AppVector new automated onboarding walkthrough."
          note="The full new onboarding flow: demo workspace loads on first visit with real keyword data already visible → user searches their app → competitor apps and keywords are auto-selected → they are immediately in a live, populated dashboard. No manual steps, no blank screens."
        />

        <Callout type="green" label="37.5% onboarding completion (+168% uplift in one week)">
          Replacing the 3-step manual gate with an automated demo-first dashboard let users experience the product before being asked to commit. Auto-selected competitors and keywords meant the workspace had live data from the first visit. Onboarding completion went from <Highlight>14% to 37.5% within one week</Highlight>. Average session time increased from <Highlight>3 minutes to 7 minutes</Highlight>.
        </Callout>

        <Callout type="blue" label="What specifically changed">
          New “Add an app” modal: user picks their app in Step 1. Steps 2 (competitor apps) and 3 (keywords) are handled automatically by the system. On submission, the user lands in a pre-populated workspace with their app, auto-selected competitors, and category-relevant keywords already tracking. The product proves its value before asking for Play Console OAuth.
        </Callout>
      </Section>

      {/* ── §09 What I Learned ───────────────────────────────────────────── */}
      <Section n="09" title="What I Learned — Leverage Behavioural Analytics">
        <Callout type="blue">
          Conversion drop-offs are rarely caused by a single major bug. They are the result of accumulated micro-frictions — a blank dashboard, a manual step that could be automated, a value message that arrives after the action instead of before it.
        </Callout>

        <Para>
          The most effective diagnostic method was combining <Highlight>PostHog SQL funnel numbers</Highlight> with individual <Highlight>OpenReplay session recordings</Highlight>. The number tells you where. The recording tells you why. Both together give you enough specificity to fix the right step — not the step you assumed was broken.
        </Para>

        <Para>
          The first fix (redesigning the Add App modal) failed because the diagnosis was based on assumption. The second fix (demo-first dashboard) succeeded because the diagnosis was based on session recordings that showed users abandoning before the modal ever appeared. That distinction — assumption vs observation — is the entire lesson.
        </Para>
      </Section>

      {/* ── §10 What Shipped ─────────────────────────────────────────────── */}
      <Section n="10" title="What Shipped" accent="green">
        <Para>
          These are the core screens users reach after completing the automated onboarding. Before the redesign, 88% never got here. The completion lift unlocked this entire part of the product for the users who were previously dropping off at Step 1.
        </Para>

        <ImageRow
          slots={[
            {
              label: "My Apps — Flipkart and Instagram tracked, data populated from automated onboarding",
              src: "/av-current/my-apps.png",
              alt: "My Apps dashboard showing active tracked apps.",
            },
            {
              label: "App Profile — full ASO metadata: title length, description, graphics, publisher, category",
              src: "/av-current/app-profile.png",
              alt: "Flipkart app profile metadata screen.",
            },
          ]}
        />

        <ImageRow
          slots={[
            {
              label: "ASO Keyword Research — 23 high-opportunity keywords, High Opportunity filter, Play + App Store",
              src: "/av-current/aso-research.png",
              alt: "Flipkart keyword research console.",
            },
            {
              label: "ASO Report — Flipkart vs Amazon India: title length, description, short description compared",
              src: "/av-current/aso-report.png",
              alt: "ASO metadata report comparison dashboard.",
            },
          ]}
        />

        <ImageRow
          slots={[
            {
              label: "Before — Review Manager: light UI, Facebook app, no reply status tracking, manual app selection",
              src: "/av-old-review.png",
              alt: "Old review console layout.",
            },
            {
              label: "After — Review Manager: 54,464 reviews, REPLIED tracking, Play Console integration",
              src: "/av-current/review-manager.png",
              alt: "Redesigned review manager panel with status flags.",
            },
          ]}
        />

        <Callout type="green" label="The full arc">
          The OpenReplay funnel in §02 — 374 sessions lost, 82% drop at the token step — is where the diagnostic started. Session recordings showed users abandoning before the setup modal appeared. SQL cohort data confirmed it across 1,004 sessions. The fix was not a UI polish — it was removing the commitment gate and showing the product working first. Onboarding completion went from 14% to 37.5% in one week.
        </Callout>
      </Section>

      {/* ── V. CONCLUSION & REFLECTIONS ─────────────────────────────────── */}
      <Section n="05" title="V. CONCLUSION & REFLECTIONS — Establishing the UX Craft" accent="amber">
        <Para>
          An interface is only as strong as its underlying validation. By shifting AppVector from a manual configuration tool to an <Highlight>automated, preview-first intelligence platform</Highlight>, we didn&rsquo;t just clean up the visuals—we directly solved user activation drop-offs.
        </Para>

        <Callout type="amber" label="AppVector Design Interventions">
          My work on AppVector was focused on removing friction points in the core acquisition funnel and establishing developer-design workflows:
        </Callout>

        <DecisionList
          items={[
            {
              title: "Product-Led Growth (PLG) & Onboarding Optimization",
              body: "• Onboarding Conversion: Analyzed the Chrome extension-to-platform user journey to identify the API token drop-off, replacing the 3 manual setup steps with an automated modal that boosted onboarding completion from 14% to 37.5% in one week.\n• Demo-First Value Delivery: Designed pre-populated dashboard states with live demo data on first login, allowing users to experience the tool's value immediately without commitment gates.",
            },
            {
              title: "Component Libraries & Developer Synergy",
              body: "• Figma Design Tokens: Built a comprehensive, responsive component library to ensure pixel-perfect Next.js layouts across all modules (My Apps, App Profile, and ASO Report).\n• ClickUp Handovers: Worked directly with 4 developers, mapping out conditional UI states and managing front-end bug tracking inside ClickUp and Jira sprints.",
            },
            {
              title: "Global Product Localization",
              body: "• Multi-Language UX: Managed the UI translation workflow to localize AppVector's top-performing marketing blogs and ASO tools into multiple languages, maintaining visual consistency across varying text lengths and character sets.",
            },
          ]}
        />
      </Section>
    </CaseStudyPage>
  );
}
