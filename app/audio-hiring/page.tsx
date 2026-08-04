import Image from "next/image";
import {
  CaseStudyPage, BackLink, CaseHeader, Section,
  Para, Highlight, DecisionList, OutcomeGrid,
  Callout, TableBlock, Split, SplitBlock, FunnelRow,
  ImageSlot, ImageRow,
} from "../components/CaseStudyLayout";

export const metadata = {
  title: "Audio Hiring Tool — Shanmuga Praveen",
  description: "Async audio screening platform that removed scheduling from recruitment. 500+ hours saved. 35% acceptance rate — 2× industry benchmark.",
};

export default function AudioHiringCase() {
  return (
    <CaseStudyPage>
      <BackLink />

      <CaseHeader
        tag="Project 03 — B2B SaaS · Dual-sided · Multivariate.ai"
        title="Audio Hiring Tool"
        tagline="This project involved building an async audio interviewing platform from the ground up. I owned the end-to-end user experience across research, workflows, information architecture, interaction design, and validation. The challenge was designing a seamless dual-sided experience that served both candidates and recruiters while supporting scalable hiring operations."
        meta={[
          { label: "Role", value: "UX Designer" },
          { label: "Tools", value: "Figma · Prototype · Dev Handoff" },
          { label: "Type", value: "Dual-sided B2B SaaS" },
          { label: "Company", value: "Multivariate.ai" },
        ]}
      />

      {/* ── §00 Impact ──────────────────────────────────────────────────── */}
      <Section n="00" title="Impact" accent="green">
        <OutcomeGrid
          items={[
            { n: "3,285", label: "Interview invites sent" },
            { n: "35%",   label: "Acceptance rate — 2× benchmark" },
            { n: "399",   label: "Audio interviews submitted" },
            { n: "500+",  label: "Man-hours saved" },
          ]}
        />
        <FunnelRow
          steps={[
            { label: "Invites sent",  value: "3,285" },
            { label: "Accepted",      value: "1,129" },
            { label: "Submitted",     value: "399" },
            { label: "Round 2",       value: "274" },
            { label: "Round 3",       value: "10" },
          ]}
        />
        <Callout type="green" label="Business metric">
          500+ coordination hours returned to the business is not a UX metric — it is a business metric. Equivalent to 3 full-time HRs handling scheduling for one month.
        </Callout>
      </Section>

      {/* ── §0A Process & Deliverables ──────────────────────────────────── */}
      <Section n="0A" title="Process &amp; Deliverables" accent="blue">
        <Callout type="blue" label="End-to-end">
          Stakeholder brief reframe → two-persona Figma design (candidate web UI + recruiter dashboard) → prototype reviewed with hiring team → Figma spec handoff to engineering → shipped.
        </Callout>
        <Callout type="amber" label="Deliverables">
          Product icon + brand mark · Figma wireframes (candidate invite flow + recruiter dashboard) · Component library (recording UI, waveform, modal, invite card) · Interactive prototype · Figma spec handoff to engineering
        </Callout>

        <ImageRow
          useSlider={false}
          slots={[
            {
              label: "Candidate entry — invite landing with Google sign-in",
              src: "/hiring/screen-1.png",
              alt: "Hiring Tool candidate invite landing — accept invite from Next labs, sign in with Google",
              note: "First touchpoint after invite email. Single CTA — no account setup until the candidate commits to the invite.",
            },
            {
              label: "Recruiter admin — evaluation summary with shortlist/reject data",
              src: "/hiring/screen-12.png",
              alt: "Hiring Tool recruiter admin — Sales Manager: 102 submissions, 52 pending, 50 evaluated (40 rejected, 10 shortlisted)",
              note: "102 total submissions · 52 pending · 40 rejected · 10 shortlisted. Position selector drives the full summary view.",
            },
          ]}
        />
      </Section>

      {/* ── §01 The Problem ─────────────────────────────────────────────── */}
      <Section n="01" title="The Problem">
        <Para>
          The hiring team was not slow because they were inefficient. They were slow because every
          candidate screening required 3–4 rounds of scheduling coordination before a single
          question was asked. Email → availability check → calendar invite → reminder → reschedule
          if no-show. For every 10 candidates, that cycle repeated 30–40 times.
        </Para>
        <Para>
          Coordination was consuming the time that should have gone into evaluation — the team was
          running 30+ live phone screening sessions a week just to get through first-round volume.
        </Para>
        <Callout type="blue" label="Brief reframe">
          The original brief was: reduce scheduling friction. The brief I rewrote: remove synchronous scheduling from the screening stage entirely.
        </Callout>
        <Para>
          The reframe required stakeholder alignment before design began. I presented the brief
          change to the product lead and hiring team with a simple comparison: the current flow
          required 6 touchpoints per candidate before screening began; the proposed flow required 1.
          The metric framed the conversation — alignment took one session, not three.
        </Para>
        <DecisionList
          items={[
            {
              title: "Stakeholders involved",
              body: "Product lead (brief owner), hiring team (primary users of the recruiter side), engineering lead (feasibility of async audio infrastructure). All three were consulted before wireframing began.",
            },
            {
              title: "What engineering flagged early",
              body: "Audio file storage and playback speed were flagged as constraints in the first alignment session. Both became design inputs — the 2× speed playback feature was engineered in because it was identified as a recruiter need, not added later.",
            },
            {
              title: "What the hiring team validated",
              body: "Recruiter column design, evaluation status labels, and the resume+audio layout were reviewed in a prototype session with 2 hiring managers before the final Figma spec was handed to engineering.",
            },
          ]}
        />
      </Section>

      {/* ── §02 What I Designed ─────────────────────────────────────────── */}
      <Section n="02" title="What I Designed">
        <DecisionList
          items={[
            {
              title: "Product icon and brand mark",
              body: "Created the hiring tool identity — the icon was the first visual artifact, establishing the visual language before UI design began.",
            },
            {
              title: "Complete candidate-side web UI",
              body: "Invite landing, signup (job seeker + recruiter variants), dashboard with interview list, pre-interview instructions, audio recording flow (Q1→Q2→Q3), submission confirmation. Delivered as a single consolidated PDF spec to engineering — one file, one source of truth.",
            },
            {
              title: "Audio recording interaction component",
              body: "Researched Cutshort's audio message feature as UX reference. Designed the recording UI, dual timer system, and all recording states — from idle to recording to submitted.",
            },
            {
              title: "Recruiter evaluation dashboard",
              body: "Position-based evaluation selector, summary view (total/pending/evaluated), candidate table with custom columns, audio player, PDF resume viewer, and Shortlist/Reject actions.",
            },
            {
              title: "Reusable modal system",
              body: "All-purpose dialog component — heading, body text, 2 action buttons — used across confirmation, warning, and error states throughout the product.",
            },
          ]}
        />
        <Callout type="blue">
          Core design principle driving every screen: <strong>&ldquo;The mood of the job seeker will travel straight without distraction until they start the interview.&rdquo;</strong> I ran every screen decision — what to show, what to cut — against that principle before finalizing.
        </Callout>
      </Section>

      {/* ── §03 The Two Users ───────────────────────────────────────────── */}
      <Section n="03" title="The Two Users">
        <Para>
          This product serves two completely different people. Designing for both on the same
          platform — without either feeling like an afterthought — was the core design challenge.
        </Para>
        <Split>
          <SplitBlock label="Candidate — mobile-first" accent="neutral">
            <p>Receiving a screening request on their phone, possibly during a lunch break. Unfamiliar with the format. Worried about mic quality, not content quality. Needs the flow to feel low-stakes and recoverable.</p>
          </SplitBlock>
          <SplitBlock label="Recruiter — desktop, high-volume" accent="neutral">
            <p>Processing 50+ responses in a single session. Scanning for signals, not deep-listening. Needs to evaluate, tag, and decide without breaking flow. Time per candidate is measured in minutes.</p>
          </SplitBlock>
        </Split>

        <ImageRow
          useSlider={false}
          slots={[
            {
              label: "Candidate — dashboard showing all active interview invites",
              src: "/hiring/screen-5.png",
              alt: "Candidate dashboard — Sample Assessment section + job interview table with Sales executive (Pending), Sales Manager (Ongoing), BD Manager (Completed)",
              note: "Three status states visible at once: Pending · Ongoing · Completed. Candidate tracks all open invites from one view.",
            },
            {
              label: "Recruiter — full evaluation detail: audio responses + resume + decision",
              src: "/hiring/screen-13.png",
              alt: "Recruiter evaluation view — Sharuk Khan, Sales Manager, Q1 and Q2 audio players, Q3 Unanswered, PDF Resume panel, Shortlist/Reject buttons",
              note: "Audio player + Resume PDF in one view. No switching screens to evaluate a candidate. Shortlist or Reject without leaving the page.",
            },
          ]}
        />
      </Section>

      {/* ── §04 Candidate Side ──────────────────────────────────────────── */}
      <Section n="04" title="Design Decisions — Candidate Side">
        <DecisionList
          items={[
            {
              title: "No retry button — intentional one-shot recording",
              body: "This was a deliberate product decision, not a UX cost. Authentic, unprepared responses are more valuable than rehearsed takes. I researched Cutshort's audio message UX and validated this pattern. The remove-retry choice was made after team alignment.",
            },
            {
              title: "No discard — same rationale",
              body: "Discard would have encouraged perfectionism and re-takes. The flow is record → review timer → submit. One direction.",
            },
            {
              title: "Submit button removed from the recording area",
              body: "Kept in its original wireframe location, separate from the recording component, to prevent accidental early submission.",
            },
            {
              title: "Dual timer: total interview time + question time",
              body: "Two running timers visible simultaneously — total interview time (large, prominent) and question time remaining (smaller, below). Both run continuously regardless of recording state. Constant time pressure is intentional.",
            },
            {
              title: "Skip button — red, low placement",
              body: "Prototype testing with the hiring team revealed accidental skips when the Skip button was adjacent to the Upload button — candidates were losing portfolio data they intended to submit. Fix: Upload moved up (primary), Skip moved down and coloured red. Visual friction makes the skip intentional. Validated in a second review session before handoff.",
            },
            {
              title: "Invite email as the first UX touchpoint",
              body: "The invite email shows: role name, estimated time (8–10 mins), what to expect, privacy note. Every element addressed a specific abandonment reason before the candidate opened the product.",
            },
          ]}
        />

        {/* Entry + Instructions */}
        <ImageRow
          useSlider={false}
          slots={[
            {
              label: "Invite landing — accept invite, sign in with Google",
              src: "/hiring/screen-1.png",
              alt: "Candidate invite landing — Finish Your Signup to accept invite, Sign in with Google CTA",
              note: "Single CTA. No form until after Google auth. Removes signup abandonment at the first screen.",
            },
            {
              label: "Pre-interview instructions — rules, timings, auto-end warning",
              src: "/hiring/screen-6.png",
              alt: "Pre-interview instructions — Sales Executive at CRED, 25 min total, Q1=5min Q2=10min Q3=10min, no pause, auto-end at 25min",
              note: "All rules front-loaded before the clock starts. Candidates cannot claim they didn't know the constraints — reduces disputed submissions.",
            },
          ]}
        />

        {/* Recording Q1 + Q2 */}
        <ImageRow
          useSlider={false}
          slots={[
            {
              label: "Recording — Question 1/3 (dual timer: 24:30 remaining · 5 min per question)",
              src: "/hiring/screen-7.png",
              alt: "Recording screen Q1 — Remaining Time 24.30, Question remaining 05.00, mic button active, Skip and Upload buttons",
              note: "Dual timer always visible. Red mic button signals active recording. Skip left, Upload right — visual hierarchy forces intentional action.",
            },
            {
              label: "Recording — Question 2/3 (21:30 remaining · 10 min per question)",
              src: "/hiring/screen-8.png",
              alt: "Recording screen Q2 — Remaining Time 21.30, Question remaining 10.00 — professional accomplishment question",
              note: "Timer counts down continuously — even while not recording. Persistent time pressure is intentional product design.",
            },
          ]}
        />

        {/* Recording Q3 + Submission */}
        <ImageRow
          useSlider={false}
          slots={[
            {
              label: "Recording — Question 3/3 (10:30 remaining · final question)",
              src: "/hiring/screen-9.png",
              alt: "Recording screen Q3 — Remaining Time 10.30, Question remaining 10.00 — major project question",
              note: "Same recording UI across all 3 questions — consistent interaction model, no relearning between questions.",
            },
            {
              label: "Submission confirmation — sets expectations for next 24–48 hrs",
              src: "/hiring/screen-10.png",
              alt: "Submission confirmation — Your interview is successfully submitted for sales manager position at Cred. 24-48hr evaluation message.",
              note: "Sets expectation: 24–48 hrs for evaluation response. Prevents follow-up anxiety from candidates. Dashboard CTA keeps them in the product.",
            },
          ]}
        />
      </Section>

      {/* ── §05 Recruiter Side ──────────────────────────────────────────── */}
      <Section n="05" title="Design Decisions — Recruiter Side">
        <DecisionList
          items={[
            {
              title: "Candidate table — custom column design",
              body: "Columns: S.No · Candidate Name · Position · Evaluation Status · Total Recording Time · Time Completed. Evaluation Status was designed as 'Completed / Pending' rather than true/false or tick/cross — clearer at a glance for non-technical reviewers.",
            },
            {
              title: "Resume + audio — scroll-based coexistence",
              body: "Resume is positioned alongside the audio player — so the recruiter can listen to audio while reading the resume simultaneously. No competing panels, no modal, no page switch. One natural flow.",
            },
            {
              title: "2× speed playback — always visible",
              body: "Moved from hidden toggle to always-visible beside the progress bar. Recruiters who used 2× speed reviewed significantly more candidates per session.",
            },
            {
              title: "Notes system with pre-set common notes",
              body: "Common notes can be added with one click (pre-populated options) or typed freehand. Notes are internal — never visible to the candidate.",
            },
          ]}
        />

        <ImageRow
          useSlider={false}
          slots={[
            {
              label: "Recruiter admin — position selector opens evaluation view",
              src: "/hiring/screen-11.png",
              alt: "Recruiter admin panel — Evaluations with Position dropdown showing Sales Manager, SEO Executive, BD Executive, Digital Marketing",
              note: "Position-first entry. Recruiter picks the role, gets the summary for that role — no mixed-position confusion in high-volume sessions.",
            },
            {
              label: "Evaluation summary — 102 submissions, pipeline breakdown, candidate table",
              src: "/hiring/screen-12.png",
              alt: "Recruiter admin Sales Manager summary — 102 total, 52 pending, 50 evaluated (40 rejected, 10 shortlisted) + candidate table with Sharuk Khan, Vijay, Naveen",
              note: "Summary card + candidate table on one page. Continue Evaluation and View Shortlisted Candidates are the only two actions — no decision paralysis.",
            },
          ]}
        />

        <ImageSlot
          label="Evaluation detail — audio responses, unanswered flag, PDF resume, Shortlist / Reject"
          src="/hiring/screen-13.png"
          alt="Full recruiter evaluation view — Sharuk Khan Sales Manager, Q1 answered (audio), Q2 answered (audio), Q3 Unanswered (red), PDF Resume panel, Shortlist and Reject buttons"
          note="Q3 flagged Unanswered in red — gives recruiter signal quality data without listening through all audio. Resume PDF loads inline. One-click decision: Shortlist or Reject."
        />
      </Section>

      {/* ── §06 Onboarding — Friction by Design ────────────────────────── */}
      <Section n="06" title="Onboarding — Friction by Design">
        <Para>
          The signup flow serves two completely different user types — job seekers and recruiters — from the same form entry point. The design decision was to branch on the "Signup as" radio, not create two separate onboarding URLs.
        </Para>
        <TableBlock
          headers={["Problem", "Before", "After"]}
          rows={[
            ["Skip placement", "Same level as Upload", "Lower, separated from primary action"],
            ["Skip colour",    "Neutral / default",    "Red — signals opt-out, not next step"],
            ["Upload placement","Mid-form",             "Top — primary action, first in reach"],
            ["Required vs optional", "Visually identical", "Clear optional label + skip affordance"],
          ]}
        />

        <ImageRow
          useSlider={false}
          slots={[
            {
              label: "Candidate signup — name, email, mobile + CV upload",
              src: "/hiring/screen-3.png",
              alt: "Candidate signup form — Full name, Email, Mobile Number, Signup as Job seeker (selected), Upload CV (PDF only), Complete Signup",
              note: "CV upload is primary — placed at the bottom of the form but above the CTA. Job seeker path: no organisation field.",
            },
            {
              label: "Recruiter signup — same form, org name replaces CV upload",
              src: "/hiring/screen-4.png",
              alt: "Recruiter signup form — Full name, Email, Mobile Number, Signup as Recruiter (selected), Your Organisation Name field, Complete Signup",
              note: "Single radio switch branches the form. Recruiter sees org name field. Candidate sees CV upload. Same URL, same component, different fields.",
            },
          ]}
        />

        <Callout type="amber" label="Friction rationale">
          Making the Skip button red was a UX-driven product decision, not a styling preference. Red on a dark background creates enough pause that the user reads the label before tapping — preventing accidental skips of portfolio and project data that would have reduced shortlisting quality.
        </Callout>
      </Section>

      {/* ── §07 Reusable Modal System ───────────────────────────────────── */}
      <Section n="07" title="Reusable Modal System">
        <Para>
          Designed a general-purpose dialog component used across confirmation, warning, and error
          states — a heading, body text area, and two action buttons. The dev team used one component
          for all modal instances instead of building per-screen variations.
        </Para>
      </Section>

      {/* ── §07B Response Data ──────────────────────────────────────────── */}
      <Section n="07B" title="Real Candidate Response Data — Platform Analysis">
        <Para>
          The numbers in Section 00 come from actual submissions. The data below is from the live Google Forms integration — candidate responses collected during active hiring campaigns. Personal fields (email, phone) are blurred.
        </Para>
        <Callout type="amber" label="Why this data exists here">
          Response data was used to analyse drop-off patterns, submission quality, and question-level engagement — informing ongoing UX improvements to the candidate flow. This is not a testimonial screenshot. It is the raw output the recruiter dashboard was built to process.
        </Callout>
        <div className="mt-6 rounded-xl overflow-hidden not-prose" style={{ border: "1px solid #1e1e1e" }}>
          <div className="px-4 py-2 flex items-center gap-2" style={{ background: "#0d0d0d", borderBottom: "1px solid #1e1e1e" }}>
            <span className="text-[13px] font-mono tracking-[0.15em] uppercase" style={{ color: "#9ca3af" }}>
              Feedback for Audio Hiring Platform — Google Forms · Live response data
            </span>
          </div>
          <div className="relative">
            <Image
              src="/hiring/feedback-responses.png"
              alt="Google Sheets showing live candidate feedback responses from the audio hiring platform"
              width={1200}
              height={600}
              className="w-full h-auto block"
            />
            <div className="absolute" style={{ top:"22%", left:"13%", width:"14%", bottom:0, backdropFilter:"blur(7px)", WebkitBackdropFilter:"blur(7px)", background:"rgba(59,130,246,0.13)", borderLeft:"1px solid rgba(59,130,246,0.25)", borderRight:"1px solid rgba(59,130,246,0.25)" }} />
            <div className="absolute" style={{ top:"22%", left:"37.5%", width:"12%", bottom:0, backdropFilter:"blur(7px)", WebkitBackdropFilter:"blur(7px)", background:"rgba(59,130,246,0.13)", borderLeft:"1px solid rgba(59,130,246,0.25)", borderRight:"1px solid rgba(59,130,246,0.25)" }} />
          </div>
        </div>
        <Callout type="blue" label="What the responses revealed">
          Responses showed repeated instances of candidates receiving automated question submission before they had finished answering. Several noted the audio was not recording or not moving to the next question — pointing to specific UX edge cases in the question-advance logic and audio state machine. Each became a filed dev ticket. The feedback loop from submission → analysis → fix is what kept the 35% acceptance rate stable across 3,285 invites.
        </Callout>
      </Section>

      {/* ── §08 What I Learned ──────────────────────────────────────────── */}
      <Section n="08" title="What I Learned">
        <Para>
          Designing for two users with completely different contexts on one platform requires
          treating them as two separate products that happen to share data. The candidate never
          sees the recruiter dashboard. The recruiter never touches the recording flow. The
          architecture is shared. The experience is not.
        </Para>
        <Para>
          Rewriting the brief was the most important design decision in this project. The
          original brief described a solution. The real problem was upstream of it.
        </Para>
        <Callout type="blue">
          Design time spent on this: if design takes time, the product will be more satisfying. Shipped Monday after the initial brief Friday. The timeline discipline forced every screen to earn its place.
        </Callout>
      </Section>

      {/* ── V. CONCLUSION & REFLECTIONS ─────────────────────────────────── */}
      <Section n="09" title="V. CONCLUSION & REFLECTIONS — Establishing the UX Craft" accent="amber">
        <Para>
          An interface is only as strong as its underlying validation. By shifting the first-round screening process from a synchronous scheduling nightmare to an <Highlight>asynchronous audio platform</Highlight>, we returned over 500 hours of coordination time to recruiters while doubling the industry benchmark for candidate activation.
        </Para>

        <Callout type="amber" label="Hiring Platform Design Interventions">
          My design work for the async screening platform was focused on candidate flow psychology and recruiter workflow efficiency:
        </Callout>

        <DecisionList
          items={[
            {
              title: "Candidate-Side Audio-First Interactions",
              body: "• Intentional Authenticity: Researched CutShort's audio UX to design a recording system without a 'retry' or 'discard' button, capturing candidates' raw, unprepared responses.\n• Dual-Timer Anxiety Reduction: Designed a layout showing both total remaining time and question remaining time, providing clarity while candidates navigated the one-shot recording flow.\n• Resume Upload Safeguards: Structured CV uploads with visual priority—moving the upload button up and placing the optional skip CTA lower and in warning-red to prevent accidental skips.",
            },
            {
              title: "Recruiter Admin & Simultaneous Evaluation",
              body: "• Combined Resume & Audio View: Engineered a split viewport allowing recruiters to scroll candidate resumes while simultaneously listening to their audio screening answers.\n• Custom Evaluation Columns: Designed recruiter dashboards tracking candidate name, position, evaluation status (Completed/Pending), and exact recording durations to speed up high-volume review sessions.",
            },
            {
              title: "Lifecycle, Cross-Functional Sync, & Testing",
              body: "• Agile Timeline Management: Led UX/UI design (producing comprehensive mobile and web wireframe libraries) from August 2021 to March 2022, gathering feedback from team stakeholders.\n• API & Logic Integration: Partnered with backend engineering to synchronize audio APIs and state-machine transitions, testing edge cases to maintain a high-velocity, reliable pipeline.",
            },
          ]}
        />
      </Section>
    </CaseStudyPage>
  );
}
