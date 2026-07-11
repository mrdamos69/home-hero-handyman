import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: "list",
    title: "Tell Us About the Project",
    text: "Complete the request form and describe what needs to be repaired, installed or improved.",
  },
  {
    icon: "camera",
    title: "Send Photos",
    text: "Upload clear photos of the project area so we can better understand the scope.",
  },
  {
    icon: "chat",
    title: "Confirm the Details",
    text: "We will review the information, discuss scheduling and clarify the expected work.",
  },
  {
    icon: "check",
    title: "Get the Project Completed",
    text: "Your handyman arrives prepared, completes the agreed work and leaves the area clean.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-stone py-16 sm:py-20" aria-labelledby="how-heading">
      <div className="wrap">
        <SectionHeading
          eyebrow="Simple process"
          title="How It Works"
          intro="From first message to finished project — four clear steps."
          center
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li className="card h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal font-heading text-sm font-bold text-amber">
                    {i + 1}
                  </span>
                  <Icon name={step.icon} className="h-6 w-6 text-amber-dark" />
                </div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
