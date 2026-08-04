"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

interface Question {
  question: string;
  options: {
    label: string;
    value: string;
    points: number;
    description: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    question: "Where is your primary marketing budget going right now?",
    options: [
      {
        label: "Direct Campaigns & Paid Ads",
        value: "A",
        points: 10,
        description: "Immediate cash layout to capture traffic before strategy is verified."
      },
      {
        label: "Content Production & Social Media",
        value: "B",
        points: 20,
        description: "Focusing on consistency and output ('100 posts a month') rather than strategy."
      },
      {
        label: "Positioning & Market Research",
        value: "C",
        points: 40,
        description: "Auditing user behavior, competitor loopholes, and reputation first."
      }
    ]
  },
  {
    question: "How deeply do you understand your customer's core frustrations?",
    options: [
      {
        label: "We target a broad demographic (everyone/any business)",
        value: "A",
        points: 10,
        description: "Marketing to a wide net increases acquisition costs and dilutes messaging."
      },
      {
        label: "We have basic buyer personas, but rarely consult them",
        value: "B",
        points: 20,
        description: "You have guidelines but they aren't driving daily design or copy decisions."
      },
      {
        label: "We do ground research and interview actual users",
        value: "C",
        points: 40,
        description: "Decisions are rooted in verified user struggles, not general assumptions."
      }
    ]
  },
  {
    question: "How do you define whether a campaign is successful?",
    options: [
      {
        label: "Ad impressions, click-throughs, and initial traffic",
        value: "A",
        points: 10,
        description: "Vanity metrics. Traffic is useless if users bounce immediately on landing."
      },
      {
        label: "Social engagement, likes, and follower growth",
        value: "B",
        points: 20,
        description: "Creates visibility, but does not translate directly into business metrics."
      },
      {
        label: "Conversion rates, retention, and customer lifetime value",
        value: "C",
        points: 40,
        description: "Hard data linked to profitability. Every single marketing asset is audited."
      }
    ]
  }
];

export default function ClarityChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [businessName, setBusinessName] = useState("");

  const handleSelect = (points: number) => {
    const updated = [...selectedAnswers, points];
    setSelectedAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setBusinessName("");
  };

  const calculateScore = () => {
    const totalPoints = selectedAnswers.reduce((a, b) => a + b, 0);
    const maxPoints = QUESTIONS.length * 40;
    return Math.round((totalPoints / maxPoints) * 100);
  };

  const getVerdict = (score: number) => {
    if (score >= 80) {
      return {
        title: "Strategic Foundation Ready",
        verdict: "You are making decisions based on strategy, user reality, and data metrics. Your foundation is stable.",
        action: "Let's build high-performance digital systems to scale what's already working.",
        icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
        colorClass: "bg-emerald-50 border-emerald-200"
      };
    } else if (score >= 45) {
      return {
        title: "Fragmented Execution",
        verdict: "You are executing marketing campaigns, but they are disconnected from a unified design system and core audience research.",
        action: "We need to align your conventional values with digital synergy before scaling.",
        icon: <HelpCircle className="w-8 h-8 text-amber-600" />,
        colorClass: "bg-amber-50 border-amber-200"
      };
    } else {
      return {
        title: "High Risk of Wasteful Ad Spend",
        verdict: "You are starting with ads and marketing execution without a baseline brand model or audience audit. This drains resources.",
        action: "Stop pushing campaigns. Let's start with understanding the business first.",
        icon: <AlertTriangle className="w-8 h-8 text-rose-600" />,
        colorClass: "bg-rose-50 border-rose-200"
      };
    }
  };

  const score = calculateScore();
  const verdict = showResults ? getVerdict(score) : null;

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const baseText = `Hi Praveen, I just completed the Focus Clarity Checker and scored ${score}%. I would like to schedule a free 1-to-1 business assessment call.`;
      const bizText = businessName.trim() ? ` My business type: ${businessName.trim()}.` : "";
      const fullText = encodeURIComponent(`${baseText}${bizText}`);
      window.open(`https://wa.me/919994837342?text=${fullText}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section 
      id="clarity-checker"
      className="relative w-full py-24 px-6 sm:px-12 bg-[#faf8f5] border-t border-zinc-200/50"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            03 / Assessment
          </p>
          <h2 className="text-4xl font-bold text-zinc-950 tracking-tight mb-4">
            Brand Clarity Checker
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-lg mx-auto">
            Answer 3 surgical questions to audit if your business is ready for digital execution or if you need strategic foundation work.
          </p>
        </div>

        {/* Quiz Body */}
        <div className="border border-zinc-200 bg-white rounded-2xl shadow-sm overflow-hidden">
          {!showResults ? (
            <div>
              {/* Progress bar */}
              <div className="w-full h-1 bg-zinc-100">
                <div 
                  className="h-full bg-zinc-900 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <div className="p-8 sm:p-12">
                {/* Step indicator */}
                <span className="text-xs font-mono text-zinc-400 uppercase">
                  Question {currentStep + 1} of {QUESTIONS.length}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mt-3 mb-8">
                  {QUESTIONS[currentStep].question}
                </h3>

                <div className="flex flex-col gap-4">
                  {QUESTIONS[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(opt.points)}
                      className="group flex flex-col text-left p-5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-900 hover:border-zinc-900 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex justify-between items-center w-full mb-1">
                        <span className="font-bold text-zinc-900 group-hover:text-white transition-colors">
                          {opt.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors group-hover:translate-x-1 duration-200" />
                      </div>
                      <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed">
                        {opt.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 sm:p-12">
              <div className="text-center mb-6">
                <span className="text-xs font-mono text-zinc-400 uppercase">Your Strategy Score</span>
                <div className="text-6xl font-black text-zinc-950 font-mono tracking-tighter mt-2 mb-4">
                  {score}%
                </div>

                {verdict && (
                  <div className={`flex flex-col sm:flex-row items-center gap-4 text-left p-5 border rounded-xl ${verdict.colorClass}`}>
                    <div className="shrink-0">{verdict.icon}</div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">{verdict.title}</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed mb-2">
                        {verdict.verdict}
                      </p>
                      <p className="text-xs font-semibold text-zinc-900">
                        Recommendation: {verdict.action}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Assessment Form inside quiz completion */}
              <form onSubmit={handleAssessmentSubmit} className="border-t border-zinc-150 pt-6 mt-6 flex flex-col gap-4">
                <div className="text-left flex flex-col gap-1.5">
                  <label htmlFor="quiz-business-input" className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    What is your business?
                  </label>
                  <input
                    id="quiz-business-input"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Describe your business type to schedule your assessment..."
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:outline-none focus:border-zinc-900 bg-zinc-50 text-sm font-sans placeholder-zinc-400 text-zinc-900"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-2">
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold border border-zinc-200 text-zinc-500 hover:text-zinc-950 hover:border-zinc-900 transition-colors cursor-pointer font-mono uppercase"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Quiz
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-950 text-white hover:bg-zinc-800 transition-colors cursor-pointer shadow-sm"
                  >
                    Request Free 1-to-1 Call
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
