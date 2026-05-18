const clientLogos = [
  "NovaTech", "Apex Finance", "MedCore", "GreenPath",
  "LexPro Law", "SwiftLogix", "MediaFlow", "HealthFirst",
];

export default function TrustBar() {
  return (
    <section className="py-14 bg-white border-b border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
          Trusted by 150+ companies across 12 countries
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {clientLogos.map((name) => (
            <span
              key={name}
              className="text-slate-300 font-black text-lg tracking-tight select-none hover:text-slate-500 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
