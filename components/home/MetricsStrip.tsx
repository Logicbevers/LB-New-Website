import AnimatedCounter from "@/components/shared/AnimatedCounter";

const metrics = [
  {
    value: 45000,
    prefix: "$",
    suffix: "",
    display: null,
    label: "Average Annual\nSavings Per Client",
    bg: "bg-brand-green",
    text: "text-white",
    sub: "text-green-200",
  },
  {
    value: 0,
    prefix: "",
    suffix: "",
    display: "99.99%",
    label: "Uptime SLA\nGuaranteed",
    bg: "bg-black",
    text: "text-white",
    sub: "text-slate-500",
  },
  {
    value: 0,
    prefix: "",
    suffix: "",
    display: "0",
    label: "Security Breaches\nAcross All Clients",
    bg: "bg-white",
    text: "text-black",
    sub: "text-slate-400",
    border: true,
  },
  {
    value: 15,
    prefix: "",
    suffix: " min",
    display: null,
    label: "Response Time\nSLA Guaranteed",
    bg: "bg-brand-gray",
    text: "text-black",
    sub: "text-slate-400",
    border: true,
  },
];

export default function MetricsStrip() {
  return (
    <section className="border-y border-black/8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/8">
        {metrics.map((m, i) => (
          <div
            key={i}
            className={`${m.bg} ${m.border ? "border-0" : ""} px-10 py-12 flex flex-col gap-4`}
          >
            <span className={`text-6xl lg:text-7xl font-black leading-none ${m.text}`}>
              {m.display !== null ? (
                m.display
              ) : (
                <AnimatedCounter
                  target={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                />
              )}
            </span>
            <span className={`text-xs font-bold uppercase tracking-[0.15em] whitespace-pre-line leading-5 ${m.sub}`}>
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
