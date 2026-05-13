type BenefitsProps = {
  benefits: string[];
  steps: { title: string; description: string }[];
};

export default function Benefits({ benefits, steps }: BenefitsProps) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.92fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] px-6 py-10 shadow-[var(--shadow)] md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Benefits
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            How You Benefit From This Consultation
          </h2>
          <div className="mt-8 grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-[rgba(15,92,88,0.08)] bg-white p-5 text-base leading-7 text-[var(--foreground)]/88"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--panel-strong)] px-6 py-10 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Process of This Consultation
          </h2>
          <div className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[rgba(15,92,88,0.1)] bg-[var(--accent)] p-5"
              >
                <p className="text-sm font-semibold text-[var(--brand)]">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--foreground)]/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
