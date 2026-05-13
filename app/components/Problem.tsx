type ProblemProps = {
  title: string;
  painPoints: string[];
};

export default function Problem({ title, painPoints }: ProblemProps) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--panel-strong)] px-6 py-10 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              The Problem
            </p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[rgba(15,92,88,0.1)] bg-[var(--accent)] p-5 text-sm leading-7 text-[var(--foreground)]/86"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
