"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { contactSchema, inquiryTypes, type ContactFormValues } from "@/lib/schemas";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-plum-950/15 bg-cream-50 px-4 py-3 text-sm text-plum-950 placeholder:text-plum-950/35 transition-colors focus:border-gold-600 focus:outline-none";

const errorClass = "border-berry-strawberry/60";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setSubmitState("success");
      reset();
    } catch (err) {
      setSubmitState("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl bg-plum-800/40 p-8 text-cream-50" role="status">
        <CheckCircle2 className="size-8 text-gold-400" aria-hidden="true" />
        <h3 className="font-serif text-2xl">Message sent.</h3>
        <p className="text-sm text-cream-50/70">
          Thank you for reaching out — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
          className="mt-2 text-sm font-medium text-gold-300 underline underline-offset-4 hover:text-gold-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            aria-invalid={!!errors.name}
            className={cn(inputClass, errors.name && errorClass)}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Company / Business Name" htmlFor="company" error={errors.company?.message} optional>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            {...register("company")}
            className={inputClass}
            placeholder="Your company name"
          />
        </Field>
        <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            aria-invalid={!!errors.email}
            className={cn(inputClass, errors.email && errorClass)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            className={cn(inputClass, errors.phone && errorClass)}
            placeholder="+971 50 123 4567"
          />
        </Field>
      </div>

      <Field label="Inquiry Type" htmlFor="inquiryType" error={errors.inquiryType?.message}>
        <select
          id="inquiryType"
          defaultValue=""
          {...register("inquiryType")}
          aria-invalid={!!errors.inquiryType}
          className={cn(inputClass, errors.inquiryType && errorClass)}
        >
          <option value="" disabled>
            Select inquiry type
          </option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          className={cn(inputClass, "resize-none", errors.message && errorClass)}
          placeholder="Tell us about your requirements..."
        />
      </Field>

      {submitState === "error" && serverError && (
        <p className="flex items-start gap-2 rounded-lg bg-berry-strawberry/10 p-3 text-sm text-berry-strawberry" role="alert">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-medium text-plum-950 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <p className="text-xs text-cream-50/45">Your information is secure and will never be shared.</p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium tracking-wide text-cream-50/70">
        {label} {optional ? <span className="text-cream-50/35">(optional)</span> : <span className="text-berry-strawberry">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-berry-strawberry" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
