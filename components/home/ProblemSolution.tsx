const points = [
  {
    number: "01",
    problem: "Unpredictable IT costs draining your budget",
    solution: "Flat-rate managed IT. Predictable, budgetable, always-on.",
  },
  {
    number: "02",
    problem: "System downtime costing you revenue",
    solution: "99.99% uptime SLA with proactive 24/7 monitoring.",
  },
  {
    number: "03",
    problem: "Security threats your team can't detect",
    solution: "Zero-trust framework + EDR blocking threats in real time.",
  },
  {
    number: "04",
    problem: "No in-house IT expertise on your team",
    solution: "A dedicated team of senior IT specialists — yours to keep.",
  },
  {
    number: "05",
    problem: "Cloud bills growing out of control",
    solution: "Cloud cost optimization cutting average bills by 47%.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-24">
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
              The Problem We Solve
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-black leading-none tracking-tight mb-6">
              Most SMBs overspend on IT by{" "}
              <span className="text-brand-green">40%.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
              We turn your IT from a constant cost centre into a competitive advantage.
            </p>
          </div>

          {/* Right — scrolling list */}
          <div className="divide-y divide-black/8 border-y border-black/8">
            {points.map((p) => (
              <div key={p.number} className="py-7 group">
                <div className="flex items-start gap-5">
                  <span className="text-xs font-black text-slate-200 mt-1 w-6 flex-shrink-0">
                    {p.number}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-slate-400 mb-1 line-through decoration-slate-300">
                      {p.problem}
                    </p>
                    <p className="font-bold text-base text-black group-hover:text-brand-green transition-colors">
                      → {p.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
