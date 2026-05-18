import Link from "next/link";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";

const channels = [
  {
    icon: Calendar,
    label: "Schedule",
    desc: "Free 15-min discovery call",
    action: "Book a time →",
    href: "/contact",
    dark: true,
  },
  {
    icon: Phone,
    label: "Call",
    desc: "+1 (555) 000-0000",
    action: "Call now →",
    href: "tel:+15550000000",
    dark: false,
  },
  {
    icon: Mail,
    label: "Email",
    desc: "hello@logicbevers.com",
    action: "Send a message →",
    href: "mailto:hello@logicbevers.com",
    dark: false,
  },
];

export default function FinalCTA() {
  return (
    <section className="bg-white border-t border-black/8 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
            Talk to Us
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-black leading-none tracking-tight">
            No pitch. Just a<br />conversation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8 border border-black/8">
          {channels.map(({ icon: Icon, label, desc, action, href, dark }) => (
            <Link
              key={label}
              href={href}
              className={`group flex flex-col justify-between p-10 min-h-[240px] transition-all bento-card ${
                dark ? "bg-black text-white" : "bg-white text-black hover:bg-brand-gray"
              }`}
            >
              <div>
                <span className={`text-xs font-bold uppercase tracking-[0.15em] mb-3 block ${
                  dark ? "text-white/40" : "text-slate-400"
                }`}>
                  {label}
                </span>
                <Icon className={`w-8 h-8 mb-4 ${dark ? "text-white" : "text-black"}`} />
                <p className={`font-bold text-lg ${dark ? "text-white" : "text-black"}`}>
                  {desc}
                </p>
              </div>
              <span className={`inline-flex items-center gap-1 text-sm font-bold mt-6 group-hover:gap-2 transition-all ${
                dark ? "text-brand-light" : "text-brand-green"
              }`}>
                {action} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
