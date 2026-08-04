const LINK = { color: "#1e40af", textDecoration: "underline" } as const;

export default function Resume() {
  return (
    <>
      <div id="resume-page" style={{
        width: 794,
        height: 1123,
        margin: "0 auto",
        background: "#fff",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        color: "#111827",
        padding: "44px 54px 32px",
        boxSizing: "border-box",
        position: "relative",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}>

        {/* ── HEADER ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 12 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 805, margin: 0, letterSpacing: "-0.02em", color: "#0f172a" }}>
              Shanmuga Praveen
            </h1>
            <p style={{ fontSize: 12.5, fontWeight: 600, color: "#1e40af", margin: "2px 0 0" }}>
              UX Designer · 5 Years Experience · B2B SaaS &amp; AI Products
            </p>
          </div>
          <div style={{ textAlign: "right", fontSize: 10, color: "#4b5563", lineHeight: 1.55 }}>
            <div>+91 99948 37342 · <a href="mailto:shanupraveen6@gmail.com" style={LINK}>shanupraveen6@gmail.com</a></div>
            <div><a href="https://praveen-resume.vercel.app" style={LINK}>praveen-resume.vercel.app</a></div>
            <div><a href="https://linkedin.com/in/shanmuga-praveen-thanigasalam-87b2bb209/" style={LINK}>linkedin.com/in/shanmuga-praveen-thanigasalam</a></div>
          </div>
        </div>

        <Divider />

        {/* ── SUMMARY ── */}
        <Section title="Summary">
          <BulletList fontSize={11.8} items={[
            "5 years leading UX across 3 internal SaaS products and 15+ client ASO projects at India's top-10 SEO/ASO agency — partnering directly with product, engineering, and leadership to ship research-grounded design end-to-end.",
            "Every redesign starts with finding where users actually stop — not where we assume they do. On AppVector, two screens caused 88% of new-user drop in session one; I identified and fixed them in under a week.",
            "I stay through the full build: research, IA, wireframes, Figma specs, engineering QA, post-ship metric review. The work isn't done at handoff.",
          ]} />
        </Section>

        <Divider />

        {/* ── EXPERIENCE & HIGHLIGHT PROJECTS ── */}
        <Section title="Highlight Projects &amp; Workouts">

          <RoleHeader
            title="UX Designer"
            company="Multivariate AI · Nextgrowth Lab"
            period="Mar 2021 — Present"
            sub="India's top-10 SEO/ASO agency · Sole UX designer · Bangalore"
          />

          <SubRole label="1. AppVector — B2B ASO Analytics Platform" />
          <BulletList items={[
            "Led end-to-end UX research and product design for the analytics suite, auditing 1,004 user sessions to identify friction and streamline complex search-data visualisations.",
            "Doubled onboarding completion rate (14% to 37.5% in one week) by replacing a blocking 3-step setup gate with an automated demo-first preview dashboard.",
            "Boosted Chrome extension activation by 94% (22.3% to 43.2%) and expanded user base to 337 by redesigning the credentials page with live previews of unlocked features.",
          ]} />

          <SubRole label="2. SearchVector — B2B SEO Platform (Ahrefs / Semrush competitor)" />
          <BulletList items={[
            "Spearheaded platform-wide UX audit and product redesign for 8 core SEO modules post-codebase migration, correcting broken interactions and missing empty states.",
            "GSC connection: instead of asking users to connect before showing them anything, built a page showing 4 specific things they'd unlock, driving a 2.5× lift in organic impressions.",
            "Authored the company's AI-UX SOP defining output streaming states, latency feedback patterns, and fallback flows adopted as the team standard across all AI feature builds.",
          ]} />

          <SubRole label="3. Nextgrowth Lab — Client Work &amp; Internal Platforms" />
          <BulletList items={[
            "Managed UX strategy and creative asset design for 15+ client mobile apps, optimizing Play Store listing visuals to boost first-scroll conversion rates.",
            "Designed a zero-live-call async screening platform (candidate mobile audio recorder and split-viewport recruiter dashboard) that saved 500+ coordination hours.",
            "Conducted accessibility and multi-language/RTL design audits while standardizing templates to eliminate design-to-development handoff delays.",
          ]} />

          <SubRole label="4. TripAI — AI Travel App (Personal UX Experiment)" />
          <BulletList items={[
            "Conducted user research and end-to-end UX design for a sentiment-aware travel engine, converting unstructured reviews into queryable traveler interest tags.",
            "Designed cognitive latency-buffer animations, progressive loading states, and skeleton UI to manage LLM API wait times and reduce user anxiety.",
          ]} />

        </Section>

        <Divider />

        {/* ── SKILLS & TOOLS ── */}
        <Section title="Skills &amp; Tools">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <SkillGroup label="Design Craft" items={[
              "Information Architecture",
              "Design Systems (Figma)",
              "Wireframing & Prototyping",
              "Usability Testing",
            ]} />
            <SkillGroup label="Research &amp; Diagnostics" items={[
              "Heuristic Evaluation",
              "Behavioral Diagnostics",
              "Session Analysis (OpenReplay/Clarity)",
              "PLG Funnel Analysis",
            ]} />
            <SkillGroup label="Tools &amp; Analytics" items={[
              "A/B Testing & SQL for UX",
              "Figma & Adobe Suite",
              "PostHog & Clarity Analytics",
              "AI Prototyping (Claude/Gemini)",
            ]} />
          </div>
        </Section>

        <Divider />

        {/* ── EDUCATION ── */}
        <Section title="Education &amp; Certification">
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 10.5, fontWeight: 600 }}>UI/UX Design Certification <span style={{ color: "#6b7280", fontWeight: 400 }}>— Designboat, Bangalore</span></span>
              <span style={{ fontSize: 10, color: "#9ca3af" }}>2021</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 10.5, fontWeight: 600 }}>Master of Business Administration (MBA) <span style={{ color: "#6b7280", fontWeight: 400 }}>— Coimbatore</span></span>
              <span style={{ fontSize: 10, color: "#9ca3af" }}>2016</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 10.5, fontWeight: 600 }}>Bachelor of Engineering (B.E.) <span style={{ color: "#6b7280", fontWeight: 400 }}>— Sastra University, Thanjavur</span></span>
              <span style={{ fontSize: 10, color: "#9ca3af" }}>2014</span>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div style={{ position: "absolute", bottom: 12, left: 48, right: 48, borderTop: "1px solid #f3f4f6", paddingTop: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 9.5, color: "#9ca3af" }}>
            Full case studies with session data &amp; screens —{" "}
            <a href="https://praveen-resume.vercel.app" style={{ ...LINK, fontSize: 9.5 }}>praveen-resume.vercel.app</a>
          </span>
          <span style={{ fontSize: 9.5, color: "#9ca3af" }}>Shanmuga Praveen · UX Designer</span>
        </div>

      </div>

      <style>{`
        html, body { margin: 0; padding: 0; background: #f3f4f6; }
        @page { size: A4; margin: 0; }
        a { color: #1e40af; text-decoration: underline; }
        @media print {
          html, body { background: #fff; }
          #resume-page {
            margin: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </>
  );
}

/* ── Sub-components ── */

function Divider() {
  return <div style={{ height: 1, background: "#e5e7eb", margin: "10px 0" }} />;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <h2 style={{
        fontSize: 9.5, fontWeight: 700, letterSpacing: "0.18em",
        textTransform: "uppercase", color: "#1e40af",
        margin: "0 0 5px",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function RoleHeader({ title, company, period, sub }: { title: string; company: string; period: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 4 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontSize: 13.5, fontWeight: 700, color: "#0f172a" }}>{title} — {company}</span>
        <span style={{ fontSize: 10.5, color: "#9ca3af", whiteSpace: "nowrap", marginLeft: 12 }}>{period}</span>
      </div>
      {sub && <p style={{ fontSize: 10.5, color: "#6b7280", margin: "1px 0 0", fontStyle: "italic" }}>{sub}</p>}
    </div>
  );
}

function SubRole({ label }: { label: string }) {
  return (
    <p style={{ fontSize: 11, fontStyle: "italic", fontWeight: 700, color: "#374151", margin: "6px 0 2px" }}>
      {label}
    </p>
  );
}

function BulletList({ items, fontSize = 10.8 }: { items: string[]; fontSize?: number }) {
  return (
    <ul style={{ margin: "2px 0 0", paddingLeft: 12, listStyleType: "disc" }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize, lineHeight: 1.54, color: "#374151", marginBottom: 2.2 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p style={{ fontSize: 9.5, fontWeight: 700, color: "#1e40af", margin: "0 0 3px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</p>
      <ul style={{ margin: 0, paddingLeft: 12, listStyleType: "disc" }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 10.8, color: "#4b5563", lineHeight: 1.55 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
