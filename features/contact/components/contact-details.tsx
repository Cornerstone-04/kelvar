import { SectionLabel } from "@/components/ui/section-label";
import { site } from "@/content/site";

const contactInfo = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Location", value: site.location },
  {
    label: "Availability",
    value: "Open to partnerships, investment & collaboration",
  },
];

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-4 bg-surface px-6 py-16 md:px-12">
      <SectionLabel>Details</SectionLabel>
      <div>
        {contactInfo.map((item) => (
          <div key={item.label} className="border-b border-border-col py-5">
            <p className="mb-1 font-mono text-[0.58rem] uppercase tracking-[0.25em] text-muted">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="font-mono text-[0.82rem] text-white/60 transition-colors duration-200 hover:text-white"
              >
                {item.value}
              </a>
            ) : (
              <span className="font-mono text-[0.82rem] text-white/50">
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
