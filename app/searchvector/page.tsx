import {
  CaseStudyPage, BackLink, CaseHeader, Section,
  Para, Highlight, DecisionList, OutcomeGrid,
  Callout, TableBlock, Split, SplitBlock,
  ImageSlot, ImageRow, DocLink, HandoverSlider,
} from "../components/CaseStudyLayout";

export const metadata = {
  title: "SearchVector — Shanmuga Praveen",
  description: "Full-cycle UX design on a live B2B SEO analytics platform — iterative improvements, codebase migration rebuild across 8 tools, GSC connection redesign, and a UX SOP adopted by the dev team.",
};

export default function SearchVectorCase() {
  return (
    <CaseStudyPage>
      <BackLink />

      <CaseHeader
        tag="Project 05 — B2B SaaS · SEO Analytics Platform · Multivariate.ai"
        title="SearchVector"
        tagline={<>
          SearchVector is Multivariate&rsquo;s B2B SEO platform. Following a major codebase migration, I audited and rebuilt 8 core SEO modules to recover product usability, fix component regressions, and standardize layout systems. By redesigning the Google Search Console connection path from a buried, blocking modal to a dedicated value-first preview page, GSC connection rates increased by 32% and impressions grew 2.5× in week one. To prevent future regressions, I established a 6-phase UX diagnostic intake framework that was fully adopted by the engineering team.
          <br /><br />
          <span className="text-zinc-900 font-medium">Here&rsquo;s how each module was audited and redesigned →</span>
        </>}
        wideTagline
        meta={[
          { label: "Role",    value: "Sole UX Designer" },
          { label: "Team",    value: "2 Frontend Devs · 1 Backend Dev · CEO — cross-functional" },
          { label: "Methods", value: "Migration Audits · Conversion Redesigns · Figma Component Libraries · Engineering UX Checklists" },
          { label: "Type",    value: "B2B SaaS · SEO Platform · Competitor: Ahrefs, Semrush" },
        ]}
      />

      {/* ── §00 Impact ──────────────────────────────────────────────────── */}
      <Section n="00" title="Impact" accent="green">
        <OutcomeGrid
          items={[
            { n: "+32%",  label: "GSC connection rate after redesigning the console flow" },
            { n: "+8%",   label: "Google Ads connection rate increase" },
            { n: "8",     label: "Tools redesigned end-to-end across the platform" },
          ]}
        />
        <Para>
          The rebuild shipped a live product that outperforms the old one on GSC connection, Google Ads connection, and user reach. As a side effect, engineering now has a UX audit template they run before every release.
        </Para>
        <Para>
          This is what the rebuilt product looks like — demo project data showing the full capability of the live platform. The full story of how it got here is below.
        </Para>
        <ImageRow
          slots={[
            {
              label: "GSC Insights — demo.searchvector.io · 1.23M clicks · 45.20M impressions · 2.73% CTR · 12.40 avg position",
              src: "/sv-screens/live-gsc.png",
              alt: "GSC Insights screen.",
            },
            {
              label: "Campaign Overview — 66.45K spend · 55.23K clicks · what Ahrefs doesn't have",
              src: "/sv-screens/live-campaign.png",
              alt: "Campaign Overview screen.",
            },
          ]}
        />
      </Section>

      {/* ── §06 Dashboard ────────────────────────────────────────────────── */}
      <Section n="06" title="Dashboard — 3-State UX" accent="amber">
        <Callout type="amber" label="The break">
          Post-migration audit flagged it directly: &ldquo;Dashboard — no state differentiation — demo, added, and connected looked identical.&rdquo; That was the break. What follows is how it was rebuilt — from a flat, stateless layout to a system that guides users from first visit to fully connected without any support required.
        </Callout>
        <Para>
          The dashboard is the entry point for every user. After migration, it had no state differentiation — demo data, a newly added project, and a fully connected project all looked the same.
        </Para>
        <Para>
          I designed a clear 3-state progressive disclosure system that guides users from first visit to fully connected — without requiring any manual reading or support.
        </Para>

        <Para>
          <strong>State 1 — First visit (Demo data)</strong>: User lands on a fully functional dashboard with demo project data. All 3 tool buttons (GSC Insight, Rank Tracker, Audit) are visible and active. A demo banner with &lsquo;Clear demo data&rsquo; CTA is always visible below the page title. New users see a &lsquo;Create project&rsquo; button below the demo card — clicking it highlights the add website search bar at the top.
        </Para>
        <Para>
          <strong>State 2 — Project added, GSC not connected</strong>: Real project card appears. GSC data section is blurred with a &lsquo;Connect GSC&rsquo; button visible. The blur communicates locked real data — not a broken feature. Demo data remains below as reference.
        </Para>
        <Para>
          <strong>State 3 — GSC connected</strong>: Live GSC metrics replace blurred state. &lsquo;Connect GSC&rsquo; button changes to &lsquo;Connected ✓&rsquo;. Demo data removed. Country selection appears next to the project selector for Rank Tracker.
        </Para>

        <ImageSlot
          label="New dashboard — collapsible sidebar, 3-state project cards (demo / connect / connected)"
          src="/searchvector-dashboard.png"
          alt="New dashboard structure."
        />
      </Section>

      {/* ── §07 GSC Console Connection ──────────────────────────────────── */}
      <Section n="07" title="GSC Console Connection — Value Before Commitment">
        <Callout type="amber" label="Where this connects">
          The competitive audit named this explicitly: &ldquo;Console connection — the biggest UX gap. Both Ahrefs and Semrush surface value before asking for OAuth. SearchVector asked users to commit before showing what they&rsquo;d get.&rdquo; This is the redesign that fixed it — and the single most impactful UX change in the entire project.
        </Callout>
        <Para>
          Most SearchVector users added a website project and chose &ldquo;Google SERP&rdquo; — the path that required no OAuth connection. They never returned to connect GSC. Without GSC connected, they saw no real performance data. The product&rsquo;s core value — impressions, CTR, cannibalization, low-hanging keywords — was locked behind a connection step users were never motivated to take.
        </Para>

        <Callout type="amber" label="First fix — still wrong">
          The first redesign made the GSC option visually louder in the existing modal — blue highlight, stronger CTA text, a brief description of what GSC would unlock. Connection rate barely moved. Session recordings showed why: users had already mentally committed to SERP as the &ldquo;easy path&rdquo; the moment they saw two choices side by side. Visual weight didn&rsquo;t change the decision frame. The problem was not how the choices looked — it was that showing choices at all was the wrong pattern. We scrapped the modal entirely.
        </Callout>

        <Callout type="amber" label="The root cause">
          The old Add Website modal asked users to choose a project type before showing them what each type would unlock. Users picked SERP (no OAuth required) because the value of GSC connection was invisible at the decision moment.
        </Callout>

        <ImageRow
          slots={[
            {
              label: "Before — Add Website modal: choice before value, no explanation of what GSC unlocks",
              src: "/sv-screens/old-gsc-connect.jpeg",
              alt: "Old GSC connect modal.",
            },
            {
              label: "After — GSC Insights page: 4 benefits shown before the Connect CTA",
              src: "/sv-screens/gsc-insights-connect.png",
              alt: "New GSC connect page.",
            },
          ]}
        />

        <Split>
          <SplitBlock label="Before — commit first, value appears after" accent="before">
            <p>User adds website → chooses project type (no context).</p>
            <p>Picks SERP (no OAuth needed) — path of least resistance.</p>
            <p>GSC value is invisible at decision moment.</p>
            <p>Users don&rsquo;t return to connect — they already &ldquo;set up&rdquo; their project.</p>
          </SplitBlock>
          <SplitBlock label="After — preview first, then connect" accent="after">
            <p>Dedicated &ldquo;GSC Insights&rdquo; page with hero benefit section.</p>
            <p>4 specific unlocks shown: Real-time Metrics, Cannibalization, Low-Hanging Fruit, Page Fluctuation.</p>
            <p>&ldquo;Want to see it first?&rdquo; path — demo data fallback removes commitment anxiety.</p>
            <p>Internal links within benefit descriptions = SEO internal link equity for organic ranking.</p>
          </SplitBlock>
        </Split>
        <Para>
          The principle: show value before asking for action. GSC connection is now a destination page with a clear benefit hierarchy — not a modal step buried in the project setup flow.
        </Para>
      </Section>

      {/* ── §12B Wireframe & Figma Handover ──────────────────────────────── */}
      <Section n="12B" title="Wireframe & Figma Handover" accent="amber">
        <Callout type="amber" label="Where this connects">
          The two connection flows redesigned in §07 — the GSC Add Website flow and the GA4 integration — are the exact flows documented in these 8 handover screens. This is what &ldquo;value before commitment&rdquo; looks like when it gets handed to engineering: every modal state, every disabled vs active CTA, every OAuth step specced before a single line of production code was written.
        </Callout>
        <Para>
          As SearchVector migrated to an AI-assisted development stack, the UX workflow shifted to match. Wireframes were built live in Claude Code + VS Code and pushed to GitHub for the team to review in the browser — no waiting on static Figma shares. Once the layout was validated, full Figma handover specs were produced for engineering.
        </Para>
        <Para>
          <strong>The new workflow</strong>: Prompt → live wireframe in VS Code → push to GitHub → team reviews in browser → iterate → Figma handover → ClickUp ticket. Every connection flow went through this loop before a single line of production code was written.
        </Para>

        <ImageSlot
          label="Figma wireframe — My Projects dashboard · domain rating, backlinks, organic traffic, GSC Insights specced before build"
          src="/sv-screens/ai-wireframe.png"
          alt="AI wireframe spec sheet."
        />

        <Para>
          Once the wireframe was approved, two multi-step connection flows were specced in Figma and handed off — the GA4 integration flow (Connect Google Analytics → select property → complete setup) and the GSC Add Website flow (Connect Search Console → OAuth → select domains → setup dashboard). 8 screens total covering every state.
        </Para>

        <HandoverSlider
          label="Figma handover — 8 screens · GA4 + GSC connection flows"
          screens={[
            { label: "GA4 — Step 1: Connect Google Analytics (empty state)", src: "/sv-screens/handover-1.png" },
            { label: "GA4 — Step 2: Choose Google Analytics Account & Property", src: "/sv-screens/handover-2.png" },
            { label: "GA4 — Step 3: OAuth Authorization Confirmations", src: "/sv-screens/handover-3.png" },
            { label: "GA4 — Step 4: Final Integration Complete and Active", src: "/sv-screens/handover-4.png" },
          ]}
        />
      </Section>

      {/* ── §02 Competitive Research ────────────────────────────────────── */}
      <Section n="02" title="Competitive Research — SearchVector vs Ahrefs">
        <Para>
          Before redesigning anything, I ran a structured side-by-side audit of SearchVector against Ahrefs across every core SEO workflow. The goal was not to copy Ahrefs — it was to find where SearchVector already had an advantage and where it had parity gaps.
        </Para>
        <Para>
          <strong>Keyword Research — SearchVector wins on breadth</strong>: Ahrefs uses a single-source model (Google). SearchVector ships multi-source tabs: Google, LLM, YouTube, Amazon, Google Play, App Store. For content teams working across platforms, this is a genuine differentiator. The UX needed to surface this — not bury it in a tab row that looked like an afterthought.
        </Para>
        <Para>
          <strong>Backlink Analysis — parity gap</strong>: Ahrefs&apos; Domain Rating (DR) model is the industry benchmark. SearchVector&apos;s backlink data was present but not framed against a comparable authority score. Filed as a product gap — UX can&apos;t solve a data problem, but it can surface the gap clearly to the product team.
        </Para>
        <Para>
          <strong>Rank Tracking — different model, different value</strong>: Ahrefs uses crawl-based snapshot ranking. SearchVector uses live SERP rank at query time. This is not worse — it&apos;s different. Users who need real-time rank verification (not historical tracking) prefer the live model. The UX problem: this distinction was not explained anywhere in the product. Users were comparing like-for-like with Ahrefs and not seeing the unique value.
        </Para>
        <Para>
          <strong>Google Ads Integration — SearchVector wins, Ahrefs doesn&apos;t have it</strong>: Ahrefs offers zero paid campaign intelligence. SearchVector ships Campaign Overview, Search Ads Insights, and Multi Keyword Gap Analysis — giving SEO and SEM teams a unified platform. This is the single largest differentiator. It was buried in the sidebar under &lsquo;Google Ads&rsquo; with no callout in onboarding.
        </Para>
        <Para>
          <strong>Console connection — the biggest UX gap</strong>: Both Ahrefs and Semrush surface value before asking for OAuth connection. SearchVector&apos;s GSC connection flow asked users to choose a project type before showing what GSC would unlock — users defaulted to the SERP option (no OAuth needed) and never returned to connect.
        </Para>

        <TableBlock
          headers={["Score", "Functional Group", "Competitors", "SV Status"]}
          rows={[
            ["10", "Keyword Research & Discovery", "Ahrefs · SEMrush · SE Ranking", "Possible"],
            ["10", "Traffic Analytics & Audience Insights", "SEMrush · SE Ranking", "Partial ◐"],
            ["10", "Backlink Analysis & Link Building", "Ahrefs · SEMrush · SE Ranking", "Not P1"],
            ["10", "AI Search & ChatGPT Tracking", "SE Ranking · SEMrush", "Possible"],
            ["10", "AI Content Creation & Writing", "SEMrush · Writesonic", "Possible"],
            ["9", "Competitive Intelligence & Domain", "Ahrefs · SEMrush · SE Ranking", "Partial ◐"],
            ["9", "Gap Analysis (Content / KW / Links)", "Ahrefs · SEMrush · Writesonic", "Consider"],
            ["9", "PPC & Paid Advertising Research", "Ahrefs · SEMrush · SE Ranking", "Consider"],
            ["8", "Rank Tracking & Position Monitoring", "SEMrush · SE Ranking", "Ready ●"],
            ["8", "Site Audit & Technical SEO", "SEMrush · SE Ranking · Writesonic", "Planned"],
            ["8", "Content Optimization & SEO Writing", "SEMrush · SE Ranking · Writesonic", "Consider"],
            ["8", "Reporting & Analytics (GSC)", "SE Ranking · Writesonic", "In Review"],
            ["8", "Keyword Organization & Management", "SE Ranking", "Planned"],
            ["8", "Content Performance Analysis", "Ahrefs · SEMrush", "Consider"],
          ]}
        />
        <DocLink label="PDF · Ahrefs vs SearchVector — structured feature comparison (HTML deliverable for product + sales teams)" href="#" />
      </Section>

      {/* ── §09 Migration Evidence ──────────────────────────────────────── */}
      <Section n="09" title="Migration Evidence — Before & After">
        <Para>
          The migration was not just a visual refresh — it was a complete restructure of how the product communicates its value. The before/after shows the shift from a flat, generic dashboard to a data-dense, state-aware product.
        </Para>

        <ImageRow
          slots={[
            {
              label: "Before — My Projects: flat list, no state, GSC Projects sidebar",
              src: "/sv-screens/old-myprojects.jpeg",
              alt: "Old My Projects list.",
            },
            {
              label: "After — My Projects dashboard: 3-state cards, delta metrics, collapsible sidebar",
              src: "/sv-new-dashboard.png",
              alt: "New My Projects list.",
            },
          ]}
        />

        <ImageRow
          slots={[
            {
              label: "Before — GSC Insights: Potential Cannibalization table, no context or action",
              src: "/sv-screens/old-gsc-insight.jpeg",
              alt: "Old GSC Cannibalization.",
            },
            {
              label: "After — GSC Insights: 1.23M clicks, action-oriented layout, demo + connected states",
              src: "/sv-new-gsc.png",
              alt: "New GSC Insights.",
            },
          ]}
        />

        <ImageRow
          slots={[
            {
              label: "Before — Keyword Research: dark sidebar, no LLM tab, no bulk mode",
              src: "/sv-screens/old-keyword-research.jpeg",
              alt: "Old Keyword Research.",
            },
            {
              label: "After — Keyword Research: LLM tab, 187 suggestions, clean light UI",
              src: "/sv-screens/new-keyword-research.jpeg",
              alt: "New Keyword Research.",
            },
          ]}
        />

        <ImageSlot
          label="Session recording (OpenReplay) — 'Project limit reached' false banner firing on every dashboard load regardless of quota"
          src="/sv-session-analysis.png"
          alt="Session audit screenshot."
          note="Session diagnostic: the 'Project limit reached' toast was firing on every dashboard load regardless of actual quota state. Users on free plans saw an upgrade prompt every visit — not just when they hit the limit. Recommendation filed: suppress on load, show only on 'Add Website' action. Reframe from 'limit reached' to the user's plan name with a manage/upgrade CTA."
        />

        <Callout type="blue" label="What changed and why">
          Collapsible sidebar solves cognitive overload from a flat 12-item list. 3-state project cards show exactly where each project is in setup: demo on cold start, blurred Connect GSC for added-but-not-connected, full data when connected. GSC connection redesign surfaces 4 specific unlocks before OAuth — turning a commitment barrier into a destination page. Keyword Research now surfaces the multi-source advantage (LLM, YouTube, Amazon, App Stores) that was invisible in the old single-tab layout.
        </Callout>
      </Section>

      {/* ── §03 What Broke ──────────────────────────────────────────────── */}
      <Section n="03" title="What Broke — and Why" accent="amber">
        <Para>
          SearchVector was already a live, released product. I had been doing iterative UX improvements on the existing platform — fixing flows, improving tool layouts, running session diagnostics — when the company made a strategic decision to migrate the entire codebase to a new AI-assisted stack using Claude Code. The goal was faster development velocity and full cloud architecture.
        </Para>
        <Para>
          The technical migration was completed by the AI tooling. But the logic transferred — the UX didn&rsquo;t. Component states got collapsed. Edge cases disappeared. Interactions that relied on specific sequencing broke silently. The product looked functional on the surface, but users couldn&rsquo;t complete basic flows. Every tool in the product needed a UX audit and rebuild simultaneously.
        </Para>

        <TableBlock
          headers={["Area", "What broke"]}
          rows={[
            ["Dashboard", "No state differentiation — demo, added, and connected looked identical"],
            ["Onboarding", "No guidance for new users — blank state with no next step"],
            ["GSC Integration", "Connect flow had no progressive disclosure — users had no idea what state they were in"],
            ["Google Ads", "Table layout broke — filter, search, and export had no visual hierarchy"],
            ["Rank Tracker", "Auto-setup defaults missing — users had to manually configure everything"],
            ["Sidebar", "Navigation hierarchy was flat — no grouping, no active states"],
            ["Demo Mode", "No clear demo/live distinction — users didn't know if data was real"],
            ["Profile", "Settings scattered across tabs — integration and limits not visible on first view"],
          ]}
        />
        <Para>
          The company culture is speed-first — ship fast, fix later. UX had always been an afterthought. The migration made this visible across the entire product at once.
        </Para>
      </Section>

      {/* ── §04 Diagnosis ────────────────────────────────────────────────── */}
      <Section n="04" title="Diagnosis — How I Found Every Break">
        <Para>
          Before redesigning anything, I needed a complete picture of where and why the UX had failed. I used three sources in parallel.
        </Para>
        <DecisionList
          items={[
            {
              title: "Session DB queries — user behaviour at the data level",
              body: "Ran SQL queries directly on the company account database to extract page visits, session duration, click rates, user entry points, and email IDs of churned users. This gave a ground-truth view of where users were going and where they stopped.",
            },
            {
              title: "PostHog + OpenReplay — session-level UX diagnosis",
              body: "Used PostHog for funnel data and event tracking. Used OpenReplay for session recordings — watching real user sessions to identify entry points, roaming behaviour, exit points, and drop-off patterns. Every tool in the product was reviewed through recordings.",
            },
            {
              title: "Manual flow audit — state-by-state walkthrough",
              body: "Walked through every tool manually, documenting every broken state: missing empty states, unclear CTAs, missing feedback on actions, inconsistent component behaviour across tools.",
            },
          ]}
        />
      </Section>

      {/* ── §05 Design System ────────────────────────────────────────────── */}
      <Section n="05" title="Design System — Built from Scratch" accent="amber">
        <Para>
          The migration had produced an inconsistent visual system — components from the old codebase mixed with auto-generated patterns from Claude Code. The first step was establishing a unified foundation.
        </Para>
        <DecisionList
          items={[
            {
              title: "Material-3 token mapping",
              body: "Mapped the existing brand palette (primary orange #FF5722, premium neutral scale) to Material Design 3 role tokens — primary, secondary, surface, error, outline. Light and dark scheme both defined.",
            },
            {
              title: "Typography + spacing system",
              body: "Inter font family across all weights. 4px base grid for all spacing. Type scale from display (57px) down to caption (12px). Line heights and letter spacing defined per role.",
            },
            {
              title: "Component elevation system",
              body: "5-level shadow scale (elevation-0 to elevation-5). Brand glow reserved for hero CTAs only. Dark mode shadow adjustments defined separately.",
            },
            {
              title: "Premium SaaS design guidelines for the dev team",
              body: "Documented a full design guide for engineering — spacing rules, button hierarchy, card patterns, interaction timing, focus states, and what to avoid. This became the foundation for the UX SOP.",
            },
          ]}
        />
      </Section>

      {/* ── §08 8 Tools Redesigned ──────────────────────────────────────── */}
      <Section n="08" title="8 Tools Redesigned">
        <TableBlock
          headers={["Tool", "Key UX fix"]}
          rows={[
            ["Keyword Research", "Search + filter + export hierarchy restored. Light grey background on search above table. Suggestion selection added to header."],
            ["Live SERP Rank Tracker", "Auto-setup defaults added (competitor, keyword, US, English, Desktop). Export moved to top. Last scroll issue fixed."],
            ["GSC Insights Overview", "Demo banner added with 'Connect GSC' button. Search field with grey background above table. Action column removed — campaign name made clickable with hover underline."],
            ["GSC Index Status Checker", "Tooltip for tick/X indicators. Filter border reduced. Select all checkbox added with count display. Export moved to secondary button position."],
            ["Google Ads Campaign", "Demo entry screen removed — direct to demo data. Border container around search/export removed. Filter border weight increased for visual strength. Pagination border removed."],
            ["Apple Search Ads", "Consistent table layout with Google Ads. Demo banner maintained."],
            ["Sitemap Analyzer", "Export CSV moved to secondary button. Demo banner consistent with other tools."],
            ["Title Optimizer", "Manage (select all) disabled in demo with tooltip. Performance report insight numbers darkened. Export disabled in demo mode consistently."],
          ]}
        />
        <Para>
          Every fix followed the same pattern: session data or recording identified the break → root cause documented → Figma redesign → SVG wireframe → HTML prototype → dev handoff via ClickUp ticket.
        </Para>
      </Section>

      {/* ── §10 Live Product ─────────────────────────────────────────────── */}
      <Section n="10" title="Live Product — Current Screens" accent="green">
        <Para>
          These are the 4 core screens in the live SearchVector product today — each showing the new design system, the Google Ads integration (SearchVector&rsquo;s primary differentiator vs Ahrefs), and the GSC connected state.
        </Para>
        <ImageRow
          slots={[
            {
              label: "Google Ads — Campaign Overview (66.45K spend, 55.23K clicks)",
              src: "/sv-new-googleads.png",
              alt: "Google Ads Overview.",
            },
            {
              label: "Google Search Ads Insights — profitable keywords breakdown",
              src: "/sv-new-ads-insights.png",
              alt: "Google Ads Insights.",
            },
          ]}
        />
        <ImageRow
          slots={[
            {
              label: "Multi Keyword Gap Analysis — your domain rank vs competitor rank per keyword",
              src: "/sv-new-keyword-gap.png",
              alt: "Multi Keyword Gap.",
            },
            {
              label: "GSC Insights — demo project (1.23M clicks, 45.20M impressions)",
              src: "/sv-new-gsc.png",
              alt: "GSC Insights Dashboard.",
            },
          ]}
        />
        <Callout type="blue" label="Google Ads integration = the differentiator">
          Ahrefs does not offer paid campaign intelligence. SearchVector ships Campaign Overview, Search Ads Insights, and Multi Keyword Gap Analysis — giving SEO and SEM teams a unified platform. This is the single largest competitive advantage, and it is now surfaced clearly in the navigation and onboarding flow.
        </Callout>
      </Section>

      {/* ── §11 Supporting UX ───────────────────────────────────────────── */}
      <Section n="11" title="Supporting UX — Sidebar, Profile, Pricing, Alerts">
        <DecisionList
          items={[
            {
              title: "Sidebar redesign",
              body: "Rebuilt navigation hierarchy with proper grouping and active states. Google My Business moved to the bottom. Country selection moved next to project selector.",
            },
            {
              title: "Profile page",
              body: "Removed tab-based layout for integration and credit/limit sections. Credit, project count, API call count, and integration info placed next to profile name — visible on first fold. Project settings: 'Edit' renamed to 'Manage'. Archive project text set to red. Integration section moved to right side of project settings.",
            },
            {
              title: "Pricing + alerts",
              body: "Upgrade CTA set as primary button, Pricing as secondary on all alert popups. Alert text shortened and colour-coded. Three pricing tiers defined: growing businesses, mid-sized, large.",
            },
            {
              title: "Demo mode restrictions",
              body: "All export buttons disabled in demo mode. Analyse and submit buttons disabled with tooltip 'Add your project to use this'. Input fields disabled in demo mode across all tools.",
            },
          ]}
        />
      </Section>

      {/* ── §12 Landing Pages ───────────────────────────────────────────── */}
      <Section n="12" title="Landing Pages — Tool-Specific Pages">
        <Para>
          Alongside the dashboard rebuild, I designed a landing page system for SearchVector&rsquo;s individual tools — Keyword Research, ASO, Rank Tracker — using a shared layout that adapts per tool.
        </Para>
        <Para>
          Process: competitor landing page analysis → fold-by-fold component selection → low-fidelity SVG wireframe → HTML prototype → design system application → dev handoff.
        </Para>
        <Para>
          The shared layout approach meant each tool page only needed the hero input field and screenshots to change — the value proposition structure, social proof placement, and CTA hierarchy remained consistent.
        </Para>
      </Section>

      {/* ── §13 The UX SOP ──────────────────────────────────────────────── */}
      <Section n="13" title="The UX SOP — Built for a Speed-First Team" accent="green">
        <Para>
          Fixing the product once wasn&rsquo;t enough. The company ships fast — new features go out without UX review. Without a system, the same breaks would reappear on every new feature.
        </Para>
        <Para>
          I wrote a UX diagnostic SOP — a step-by-step process the development team now follows when building or updating any feature.
        </Para>
        <DecisionList
          items={[
            {
              title: "Phase 1 — Research & Audit",
              body: "• Audit dashboard against Ahrefs/Semrush UX patterns\n• Build structured competitor comparison (HTML deliverable for product + sales)\n• Identify product differentiators vs competitors\n• Map the funnel: Add Website → Visit GSC page → Connect Console → See real data",
            },
            {
              title: "Phase 2 — Console Connection Redesign",
              body: "• Document old flow — identify choice-before-value problem\n• Design new GSC Insights page: hero benefits, 4 feature bullets, OAuth CTA, demo fallback\n• Add SEO-intentional internal links within benefit descriptions for link equity\n• Cross-link from related feature pages to the connection page",
            },
            {
              title: "Phase 3 — Dashboard Rebuild",
              body: "• Redesign project cards with live GSC metrics and period-over-period delta\n• Restructure sidebar from flat list to collapsible category groups\n• Add dark header for visual consistency across the platform\n• Add pre-populated demo project for cold-start resolution\n• Verify demo data mode labelling is consistent across all inner pages",
            },
            {
              title: "Phase 4 — Keyword Research Rebuild",
              body: "• Add Bulk Research tab alongside Single Keyword\n• Build filter system: Match Type, Volume, Competition, Word Count, + Add Filter\n• Add Select All Visible + Export for power users\n• Make difficulty score load on-demand to avoid blocking page render\n• Validate all 6 source tabs: Google, LLM, YouTube, Amazon, Google Play, App Store",
            },
            {
              title: "Phase 5 — QA & Bug Identification",
              body: "• Identify session state bug: limit banner firing on every dashboard load regardless of quota — documented with screenshot, filed fix\n• Verify all demo data labels present on inner feature pages\n• Confirm GSC connected state shows full data across all tools\n• Run OpenReplay session check on rebuilt flows",
            },
            {
              title: "Phase 6 — Documentation & Handoff",
              body: "• Produce Ahrefs vs SearchVector comparison HTML for sales and product team\n• Document cross-feature navigation map as a product spec\n• Every fix has a written brief before becoming a ClickUp ticket — no verbal-only handoffs",
            },
          ]}
        />
        <Callout type="green" label="Adopted by the dev team">
          The SOP is now the standard process at Multivariate.ai for new feature UX. Developer and designer use the same diagnostic checklist before shipping anything user-facing.
        </Callout>
      </Section>

      {/* ── §14 Outcome ─────────────────────────────────────────────────── */}
      <Section n="14" title="Outcome" accent="green">
        <Callout type="green" label="Source — Deepak Shah">
          &ldquo;2.5x growth in SV impressions in a week.&rdquo;
        </Callout>
        <Para>
          The GSC Insights page and Campaign Overview you saw at the top of this case study — those are the two features that drove this growth. The GSC connection redesign in §07 turned a buried modal into a destination page that shows users exactly what they&rsquo;re unlocking before asking for OAuth. The Google Ads module moved from a sidebar item to SearchVector&rsquo;s lead differentiator — the one thing Ahrefs doesn&rsquo;t have. The dashboard 3-state system in §06 means users who land without connecting anything still see a populated, functional product.
        </Para>
        <Para>
          The impression growth reflects the landing page redesign (SEO-structured pages replacing broken layouts) and the onboarding fix (users reaching the product and not immediately dropping off). The SOP means the next feature ships with UX quality built in, not fixed after the fact.
        </Para>
        <Callout type="blue" label="The full arc">
          SearchVector went from a post-migration UX breakdown across 8 tools — blank states, broken flows, no state differentiation — to a coherent, data-dense product with measurable growth and a repeatable design process. Dashboard rebuilt (§06), GSC connection redesigned (§07), 8 tools audited (§08), SOP adopted (§13). Every fix diagnosed from session data, not assumption.
        </Callout>
      </Section>

      {/* ── V. CONCLUSION & REFLECTIONS ─────────────────────────────────── */}
      <Section n="15" title="V. CONCLUSION & REFLECTIONS — Establishing the UX Craft" accent="amber">
        <Para>
          An interface is only as strong as its underlying validation. By shifting SearchVector from a post-migration UX breakdown to a <Highlight>data-dense, state-aware product</Highlight>, we directly unlocked a 32% growth in GSC connection rates.
        </Para>

        <Callout type="amber" label="SearchVector Design Interventions">
          My work on SearchVector focused on restoring UX integrity post-codebase migration and designing complex data visualization modules:
        </Callout>

        <DecisionList
          items={[
            {
              title: "Post-Migration Rebuild of 8 Tools",
              body: "• Component Restructuring: Audited and rebuilt 8 broken SEO modules (Keyword Research, Rank Tracker, Sitemap Analyzer) after a codebase migration, ensuring all component states, tooltips, and table pagination remained stable.\n• 3-State Progressive Disclosure: Rebuilt the dashboard cards to differentiate between demo data, added projects, and GSC-connected states.",
            },
            {
              title: "Value-First GSC OAuth Redesign",
              body: "• OAuth Conversion: Shipped a dedicated GSC Insights page that demonstrated the exact value of connecting GSC (real-time metrics, cannibalization detection) before prompting for OAuth, increasing connection rates by 32%.\n• Google Ads Integration: Designed the SEM Campaign Overview and Search Ads Insights panels, introducing paid keyword gap analysis as the product's lead differentiator.",
            },
            {
              title: "Programmatic SEO & The 'Tool Factory' Model",
              body: "• High-Volume Acquisition: Designed templates and schema structures for 30+ programmatic SEO micro-tools (such as JSON to HTML editors, schema generators) to capture high-intent organic search traffic.\n• UX SOP Adoption: Authored a 6-phase diagnostic checklist (Research, Console Redesign, Dashboard Rebuild, Keyword Filter Restructuring, QA, and Handoff) which is now the standard engineering guideline.",
            },
          ]}
        />
      </Section>
    </CaseStudyPage>
  );
}
