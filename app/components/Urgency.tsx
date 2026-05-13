export default function Urgency() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[rgba(15,92,88,0.14)] bg-[var(--brand)] px-6 py-8 text-white md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/78">
              Limited Availability
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Consultation slots are kept limited so every strategy stays focused and customised.
            </h2>
          </div>
          <a
            href="#cta-form"
            className="inline-flex min-w-56 items-center justify-center rounded-full bg-[var(--brand-soft)] px-8 py-4 text-base font-semibold text-black transition hover:bg-[#cfe4e2]"
          >
            <span className="leading-none">Reserve Your Call</span>
          </a>
        </div>
      </div>
    </section>
  );
}
