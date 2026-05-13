import Image from "next/image";

type HeroProps = {
  headline: string;
  subheadline: string;
  description: string[];
  ctaText: string;
};

export default function Hero({
  headline,
  subheadline,
  description,
  ctaText
}: HeroProps) {
  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] px-6 py-6 shadow-[var(--shadow)] backdrop-blur md:px-10 md:py-8">
        <div className="mb-10 flex items-center justify-center md:justify-start">
          <Image
            src="/logo.png"
            alt="Digital Chitra"
            width={1080}
            height={1080}
            priority
            className="h-auto w-[260px] sm:w-[320px]"
          />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[rgba(15,92,88,0.18)] bg-[var(--brand-soft)] px-4 py-2 text-sm font-medium text-[var(--brand-deep)]">
              Free 1:1 Digital Marketing Consultation
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              {subheadline}
            </p>
            <div className="mt-6 space-y-3 text-base leading-7 text-[var(--foreground)]/88">
              {description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#cta-form"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
              >
                {ctaText}
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(15,92,88,0.1)] bg-[linear-gradient(180deg,rgba(15,92,88,0.08),rgba(255,255,255,0.95))] p-6 sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,92,88,0.4),transparent)]" />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              What You Get
            </p>
            <div className="mt-6 space-y-4">
              {[
                "A clear view of what is blocking your growth",
                "A customised marketing plan for your business",
                "A focused next-step strategy you can act on immediately"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[rgba(15,92,88,0.08)] bg-white/82 p-4 text-sm leading-6 text-[var(--foreground)] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
