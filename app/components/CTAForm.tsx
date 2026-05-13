"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Active Email is required.";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.whatsapp.trim()) {
      nextErrors.whatsapp = "WhatsApp Number is required.";
    }
    if (!values.businessName.trim()) {
      nextErrors.businessName = "Business Name is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    router.push("/thank-you");
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  return (
    <section id="cta-form" className="px-4 py-8 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--panel-strong)] px-6 py-10 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Book the Call
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            1:1 Consultation
          </h2>
          <p className="mt-4 max-w-md text-base leading-8 text-[var(--muted)]">
            Get a customised strategy for your business.
          </p>
          <div className="mt-8 space-y-4 rounded-[1.75rem] border border-[rgba(15,92,88,0.1)] bg-[var(--accent)] p-6">
            {[
              "You book the call and share your business details.",
              "We review your current marketing and find the gaps.",
              "You get a customized strategy for your business."
            ].map((point) => (
              <p key={point} className="text-sm leading-7 text-[var(--foreground)]/82">
                {point}
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] px-6 py-10 shadow-[var(--shadow)] md:px-8">
          <form className="space-y-5" noValidate onSubmit={handleSubmit}>
            <FormField
              label="Full Name"
              placeholder="Enter your full name"
              value={values.fullName}
              error={errors.fullName}
              onChange={(value) => handleChange("fullName", value)}
            />
            <FormField
              label="Active Email"
              type="email"
              placeholder="Enter your active email"
              value={values.email}
              error={errors.email}
              onChange={(value) => handleChange("email", value)}
            />
            <FormField
              label="WhatsApp Number"
              placeholder="Enter your WhatsApp number"
              value={values.whatsapp}
              error={errors.whatsapp}
              onChange={(value) => handleChange("whatsapp", value)}
            />
            <FormField
              label="Business Name"
              placeholder="Enter your business name"
              value={values.businessName}
              error={errors.businessName}
              onChange={(value) => handleChange("businessName", value)}
            />
            <FormField
              label="Website / Facebook URL"
              placeholder="Add your website or Facebook page"
              value={values.website}
              error={errors.website}
              onChange={(value) => handleChange("website", value)}
            />
            <FormTextArea
              label="Anything you want to say"
              placeholder="Tell us about your business goals"
              value={values.message}
              error={errors.message}
              onChange={(value) => handleChange("message", value)}
            />
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Booking..." : "Book Free Consultation"}
              </button>
              <p className="text-center text-sm text-[var(--muted)]">
                We respect your privacy. No spam.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
};

function FormField({
  label,
  placeholder,
  value,
  error,
  type = "text",
  onChange
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[rgba(15,92,88,0.16)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)]/75 focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(15,92,88,0.1)]"
      />
      {error ? <span className="mt-2 block text-sm text-[#b42318]">{error}</span> : null}
    </label>
  );
}

function FormTextArea({
  label,
  placeholder,
  value,
  error,
  onChange
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[var(--foreground)]">
        {label}
      </span>
      <textarea
        rows={5}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[rgba(15,92,88,0.16)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)]/75 focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(15,92,88,0.1)]"
      />
      {error ? <span className="mt-2 block text-sm text-[#b42318]">{error}</span> : null}
    </label>
  );
}
