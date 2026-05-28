import Image from "next/image";
import { ConsultationForm } from "@/components/consultation-form";
import { FaqAccordion } from "@/components/faq-accordion";

const painPoints = [
  "You are posting on Facebook and Instagram, but the inquiries are still inconsistent.",
  "You have boosted posts before, but the sales never matched the money you spent.",
  "You are getting random leads, not serious buyers who are ready to take action.",
  "You still depend too much on referrals or word of mouth to grow your business.",
];

const solutionPoints = [
  "We will look at what is already happening in your business and where the leads are dropping.",
  "You will get a simple marketing direction that fits your business instead of generic advice.",
  "You will leave the call with practical next steps you can start using right away.",
];

const processSteps = [
  "Fill up the form",
  "Receive an email with the appointment link",
  "Fill the appointment form",
  "Join the 1:1 consultation call",
  "Get your customized digital marketing plan for FREE",
];

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The consultation is completely free. The goal is to understand your business, spot what is not working, and give you clear next steps you can use.",
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more leads, more customers, and more sales but feel stuck or confused about digital marketing.",
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You will get a one-on-one conversation focused on your business, your current marketing efforts, what may be slowing you down, and a simple action plan to move forward.",
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The call is designed to be around one hour so there is enough time to understand your business and give practical direction.",
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. You can still book the call if you are using only Facebook, Instagram, or another online presence. We can discuss what makes sense for your business stage.",
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "You will be redirected to the thank you page and then receive the next steps, including your appointment link, so you can continue the booking process smoothly.",
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The consultation is meant to give you clarity. You will get a marketing direction tailored to your business, not a one-size-fits-all script.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(25,162,157,0.28),_transparent_48%)]" />
      <div className="pointer-events-none absolute left-1/2 top-64 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(8,73,72,0.34),_transparent_68%)] blur-3xl" />

      <section className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-12 pt-8 sm:px-8 lg:px-10">
        <header className="mb-10 flex justify-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
            <Image
              src="/logo.png"
              alt="Digital Chitra logo"
              width={821}
              height={199}
              priority
              className="h-auto w-[220px] sm:w-[300px] lg:w-[360px]"
            />
          </div>
        </header>

        <section className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-sm font-semibold tracking-[0.16em] text-brand-100 uppercase">
            Free 1:1 consultation for Nepal-based business owners
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Helping Business Owners Get More Leads, Customers &amp; Sales Through
            Smart Digital Marketing
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-medium text-brand-100 sm:text-2xl">
            Book a FREE 1:1 marketing consultation call with me.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            In this 1-hour call, I&apos;ll understand your business and give you
            a simple digital marketing plan to get more leads, customers, and
            sales.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#consultation-form"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-500 px-8 text-base font-semibold text-slate-950 shadow-[0_20px_60px_rgba(25,162,157,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-400"
            >
              Book your FREE call now
            </a>
            <p className="text-sm text-slate-400">
              Clear next steps. No pressure. Just practical guidance for your
              business.
            </p>
          </div>
        </section>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur">
          <p className="text-sm font-semibold tracking-[0.18em] text-brand-200 uppercase">
            If this sounds familiar
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            You do not need more random marketing ideas. You need clarity.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            If you are a business owner in Nepal, you may already be putting in
            effort online but still not seeing steady leads, sales, or real
            momentum. That gets frustrating very quickly, especially when you
            are busy running the business itself.
          </p>
          <div className="mt-8 grid gap-4">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/8 bg-slate-950/50 p-4 text-slate-200"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-brand-400/20 bg-brand-500/10 p-8 shadow-[0_25px_80px_rgba(6,37,37,0.4)]">
          <p className="text-sm font-semibold tracking-[0.18em] text-brand-200 uppercase">
            What happens on the call
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            A simple conversation that helps you see what to do next.
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-50/90">
            In this free consultation call, I will understand your business,
            identify what is not working, and give you a clear digital
            marketing plan you can start implementing immediately.
          </p>
          <div className="mt-8 space-y-4">
            {solutionPoints.map((point, index) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/45 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-400 text-sm font-bold text-slate-950">
                  0{index + 1}
                </div>
                <p className="pt-1 text-slate-100">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[#071717] px-6 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-200 uppercase">
              Consultation process
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              How The Free Consultation Works
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The process is simple so you know exactly what happens next after
              you book.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-lg font-bold text-slate-950">
                  {index + 1}
                </div>
                <p className="text-lg font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur sm:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-200 uppercase">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Answers before you book
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              A few quick answers to help you feel confident before filling up
              the form.
            </p>
          </div>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section
        id="consultation-form"
        className="mx-auto w-full max-w-5xl px-6 pb-20 pt-12 sm:px-8 lg:px-10"
      >
        <div className="rounded-[2rem] border border-brand-400/20 bg-[linear-gradient(180deg,rgba(8,31,31,0.95),rgba(5,17,17,0.98))] p-6 shadow-[0_35px_90px_rgba(0,0,0,0.4)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-200 uppercase">
              Book your call
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Book Your FREE 1:1 Consultation Call
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Fill up the form below and we&apos;ll contact you with the next
              steps.
            </p>
          </div>
          <div className="mt-10">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
