import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NovaProwl",
  description:
    "Read the Terms of Service for NovaProwl. These terms govern your use of our website, products, and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen px-6 py-32 md:py-36 bg-gradient-to-b from-black via-[#05070B] to-[#050608] text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300">
          Terms of Service
        </h1>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
          Welcome to NovaProwl. Please read these Terms of Service (&quot;Terms&quot;)
          carefully before using our website, products, and services. By accessing
          or using our services, you agree to be bound by these Terms.
        </p>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            1. Acceptance of Terms
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            By creating an account, accessing, or using the NovaProwl platform,
            you confirm that you have read, understood, and agree to comply with
            these Terms. If you do not agree, you may not use our services.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            2. Description of Service
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            NovaProwl provides AI-powered analytics, predictive modeling, and
            data visualization tools (&quot;Services&quot;). We reserve the right to modify,
            suspend, or discontinue any part of the Services at any time, with or
            without notice.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            3. User Accounts
          </h2>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
            <li>
              You must provide accurate and complete information when creating an
              account.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You agree to notify us immediately of any unauthorized use of your
              account.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            4. Acceptable Use
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            You agree not to misuse our Services. Prohibited activities include,
            but are not limited to:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
            <li>Using the Services for any illegal or unauthorized purpose.</li>
            <li>Attempting to hack, reverse engineer, or disrupt our systems.</li>
            <li>Harassing, abusing, or harming others.</li>
            <li>
              Violating any applicable laws or regulations, including Google API
              Services User Data Policy where applicable.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            5. Intellectual Property
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            All content, trademarks, logos, and software associated with
            NovaProwl are the property of NovaProwl or its licensors. You are
            granted a limited, non-exclusive license to use the Services solely
            for their intended purpose.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            6. Termination
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We may suspend or terminate your access to the Services at our sole
            discretion, immediately and without notice, if you violate these
            Terms. Upon termination, your right to use the Services will cease
            immediately.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            7. Disclaimer of Warranties
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            The Services are provided &quot;as is&quot; and &quot;as available&quot; without
            warranties of any kind, whether express or implied. We do not
            guarantee that the Services will be uninterrupted, secure, or error-free.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            8. Limitation of Liability
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            In no event shall NovaProwl be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or related
            to your use of the Services.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            9. Changes to Terms
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We reserve the right to update these Terms at any time. If we make
            material changes, we will notify you by posting the new Terms on this
            page. Your continued use of the Services after any changes constitutes
            acceptance of the new Terms.
          </p>
        </section>

        <section className="space-y-4 mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            <span className="block">NovaProwl</span>
            <span className="block">Email: novaprowluser@gmail.com</span>
          </p>
        </section>

        <p className="text-[11px] md:text-xs text-gray-500 mt-6">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
