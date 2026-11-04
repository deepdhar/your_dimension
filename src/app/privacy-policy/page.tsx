import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Your Dimension — how we collect, use, and protect your information.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#FAFAF8] pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <FadeIn direction="up">
            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-5">
              Legal
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-[#1C1C1A] leading-tight mb-6">
              Privacy Policy
            </h1>
            <p className="font-body text-[#6B6560]">
              Last updated: November 2026
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#FAFAF8] pb-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <FadeIn direction="up">
            <div className="prose font-body text-[#6B6560] space-y-10">
              {[
                {
                  title: "1. Who we are",
                  content: `Your Dimension is a digital solutions and technology consulting company based in Siliguri, West Bengal, India. This privacy policy explains how we collect, use, and protect information submitted through our website (yourdimension.in) and when you contact us.`,
                },
                {
                  title: "2. Information we collect",
                  content: `When you submit an enquiry through our contact form, we collect the information you provide, which may include your name, business name, email address, phone number, and details about your project. We only collect information that you voluntarily provide to us.`,
                },
                {
                  title: "3. How we use your information",
                  content: `We use the information you provide to respond to your enquiry, understand your business needs, and explore whether we can help. We do not sell, rent, or share your personal information with third parties except where required to deliver our service (such as email delivery providers) or where required by law.`,
                },
                {
                  title: "4. Email communications",
                  content: `When you submit an enquiry, your message is delivered to us via Resend, a transactional email service. Your email address is used as the reply-to address so that we can respond to your enquiry directly. We do not add you to any mailing lists without your explicit consent.`,
                },
                {
                  title: "5. Cookies and analytics",
                  content: `Our website may use standard analytics tools (such as Google Analytics) to understand how visitors use the site. This may involve the use of cookies. These tools collect anonymized, aggregated data and do not identify you personally. You can disable cookies through your browser settings.`,
                },
                {
                  title: "6. Data retention",
                  content: `We retain enquiry information for as long as is reasonably necessary to respond to and manage the enquiry, and as required by applicable law. If you would like your information deleted, please contact us and we will act on your request promptly.`,
                },
                {
                  title: "7. Security",
                  content: `We take reasonable steps to protect the information you submit. Our website uses HTTPS encryption. However, no data transmission over the internet is entirely secure, and we cannot guarantee the absolute security of information transmitted to us.`,
                },
                {
                  title: "8. Your rights",
                  content: `You have the right to request access to the personal information we hold about you, to request corrections, or to request deletion. To exercise any of these rights, please contact us using the details on our contact page.`,
                },
                {
                  title: "9. Changes to this policy",
                  content: `We may update this privacy policy from time to time. The most current version will always be available on this page, with the last-updated date shown at the top.`,
                },
                {
                  title: "10. Contact",
                  content: `If you have any questions about this privacy policy or how we handle your information, please reach out to us through the contact form on our website.`,
                },
              ].map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-2xl text-[#1C1C1A] mb-3">{section.title}</h2>
                  <p className="leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
