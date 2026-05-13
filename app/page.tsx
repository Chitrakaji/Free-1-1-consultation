import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Benefits from "./components/Benefits";
import Urgency from "./components/Urgency";
import CTAForm from "./components/CTAForm";

const headline =
  "Turn Your Marketing Into a System That Brings You Customers Consistently";
const subheadline =
  "Stop guessing. Get a clear plan that shows what’s wrong and how to fix it";

const description = [
  "This is for business owners who are working hard but not growing.",
  "If you’re getting reach but no sales, this is for you."
];

const benefits = [
  "Find out exactly why your business is not growing",
  "Get a clear plan to bring consistent customers",
  "See what’s wasting your time and money",
  "Learn how to turn your marketing into a system",
  "Get direction to scale step-by-step"
];

const steps = [
  {
    title: "You book the call and share your business details",
    description:
      "Share the essentials so the consultation stays focused on your business and your current situation."
  },
  {
    title: "We review your current marketing and find the gaps",
    description:
      "We look at what you are doing now, what is underperforming, and where your best opportunities are."
  },
  {
    title: "You get a customized strategy for your business",
    description:
      "You walk away with a plan that is tailored to your business and designed for consistent growth."
  }
];

const painPoints = [
  "You are putting in effort, but the business is not growing in a predictable way.",
  "You are getting attention or reach, but it is not turning into real sales.",
  "Your marketing feels scattered, so it is hard to know what is actually working.",
  "Time and money are being spent without a clear system for attracting customers consistently."
];

export default function HomePage() {
  return (
    <main className="pb-8">
      <Hero
        headline={headline}
        subheadline={subheadline}
        description={description}
        ctaText="Book Free Consultation"
      />
      <Problem
        title="Hard work alone does not create steady growth when the marketing system is unclear."
        painPoints={painPoints}
      />
      <Benefits benefits={benefits} steps={steps} />
      <Urgency />
      <CTAForm />
    </main>
  );
}
