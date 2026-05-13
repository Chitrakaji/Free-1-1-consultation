import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-3xl rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-8 shadow-[var(--shadow)] sm:p-12">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Digital Chitra"
            width={1080}
            height={1080}
            className="h-auto w-[220px] sm:w-[280px]"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Thank You
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Your consultation request has been received.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Please keep an eye on your email and WhatsApp. The next step is to review your details and follow up with you about the consultation.
          </p>
        </div>
        <div className="mt-10 grid gap-4 rounded-[1.75rem] border border-[rgba(15,92,88,0.1)] bg-white p-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-[var(--accent)] p-4 text-sm leading-7 text-[var(--foreground)]/84">
            Check your email for the next update.
          </div>
          <div className="rounded-2xl bg-[var(--accent)] p-4 text-sm leading-7 text-[var(--foreground)]/84">
            Keep your WhatsApp active for quick communication.
          </div>
          <div className="rounded-2xl bg-[var(--accent)] p-4 text-sm leading-7 text-[var(--foreground)]/84">
            Be ready to share a little more about your business if needed.
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
          >
            Back to Landing Page
          </Link>
        </div>
      </section>
    </main>
  );
}
