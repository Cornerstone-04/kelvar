import { InternalPageHero } from "@/components/ui/internal-page-hero";
import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-bg pt-16.25">
      <InternalPageHero
        label="Get In Touch"
        title="Contact"
        outline="Kelvar"
        description="For partnerships, investment conversations, demonstrations, or general enquiries, contact the Kelvar Industries team."
      />
      <div className="grid grid-cols-1 border-b border-border-col md:grid-cols-2">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
}
