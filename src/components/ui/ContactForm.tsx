"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle, Loader2, ChevronDown } from "lucide-react";

const serviceOptions = [
  "Website (Digital Presence)",
  "SEO (Search Engine Optimization)",
  "AI Tele Agent",
  "WhatsApp Customer Communication",
  "Augmented Reality 3D Dish Modelling",
  "Online Advertising",
  "Other",
];

const budgetOptions = [
  "Below ₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "Above ₹1,00,000",
  "Not sure yet",
];

const timelineOptions = [
  "Immediately",
  "Within 1 month",
  "Within 3 months",
  "Exploring options",
];

const inputClasses =
  "w-full font-body text-sm text-[#1C1C1A] bg-[#FAFAF8] border border-[rgba(26,26,24,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0522D] focus:border-transparent transition-all duration-200 placeholder:text-[#9A948C]";
const selectClasses =
  "w-full font-body text-sm text-[#1C1C1A] bg-[#FAFAF8] border border-[rgba(26,26,24,0.15)] rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#A0522D] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer";
const labelClasses = "block font-body text-sm font-medium text-[#1C1C1A] mb-2";
const errorClasses = "font-body text-xs text-red-600 mt-1.5";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send your enquiry. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className="bg-[#F5F2EC] border border-[rgba(26,26,24,0.08)] rounded-xl p-10 text-center"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle size={40} className="text-[#A0522D] mx-auto mb-5" />
        <h3 className="font-display text-2xl text-[#1C1C1A] mb-3">Enquiry sent successfully</h3>
        <p className="font-body text-[#6B6560] leading-relaxed">
          Thanks for reaching out. Your enquiry has been sent successfully. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact enquiry form"
    >
      {/* Honeypot - hidden from real users */}
      <input
        type="text"
        {...register("honeypot")}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="space-y-6">
        {/* Row 1: Name + Company */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              Full Name <span className="text-[#A0522D]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              className={inputClasses}
              placeholder="Your full name"
              autoComplete="name"
              aria-required="true"
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && (
              <p id="fullName-error" className={errorClasses} role="alert">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="companyName" className={labelClasses}>
              Business / Company Name
            </label>
            <input
              id="companyName"
              type="text"
              {...register("companyName")}
              className={inputClasses}
              placeholder="Optional"
              autoComplete="organization"
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address <span className="text-[#A0522D]">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={inputClasses}
              placeholder="you@example.com"
              autoComplete="email"
              aria-required="true"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className={errorClasses} role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className={inputClasses}
              placeholder="Optional"
              autoComplete="tel"
            />
            {errors.phone && (
              <p className={errorClasses} role="alert">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClasses}>
            Service Interested In <span className="text-[#A0522D]">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              {...register("service")}
              className={selectClasses}
              aria-required="true"
              aria-describedby={errors.service ? "service-error" : undefined}
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#6B6560]">
              <ChevronDown size={16} />
            </div>
          </div>
          {errors.service && (
            <p id="service-error" className={errorClasses} role="alert">
              Please select a service
            </p>
          )}
        </div>

        {/* Row: Budget + Timeline */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="budget" className={labelClasses}>
              Approximate Budget
            </label>
            <div className="relative">
              <select
                id="budget"
                {...register("budget")}
                className={selectClasses}
                defaultValue=""
              >
                <option value="" disabled>Select a range</option>
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#6B6560]">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="timeline" className={labelClasses}>
              Project Timeline
            </label>
            <div className="relative">
              <select
                id="timeline"
                {...register("timeline")}
                className={selectClasses}
                defaultValue=""
              >
                <option value="" disabled>Select a timeline</option>
                {timelineOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#6B6560]">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            Message / Project Details <span className="text-[#A0522D]">*</span>
          </label>
          <textarea
            id="message"
            {...register("message")}
            className={`${inputClasses} resize-none`}
            rows={6}
            placeholder="Tell us about your business and what you're trying to achieve. The more context you share, the better we can help."
            aria-required="true"
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className={errorClasses} role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Error display */}
        {status === "error" && (
          <div
            className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4"
            role="alert"
            aria-live="assertive"
          >
            <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
            <p className="font-body text-sm text-red-700">{errorMessage}</p>
          </div>
        )}

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={status === "loading"}
            size="lg"
            className="w-full md:w-auto"
            id="contact-form-submit"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="mr-2 animate-spin" />
                Sending…
              </>
            ) : (
              "Send Enquiry"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
