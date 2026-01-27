import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NovaProwl",
  description:
    "Read how NovaProwl collects, uses, stores, and protects your data, including Google user data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-6 py-32 md:py-36 bg-gradient-to-b from-black via-[#05070B] to-[#050608] text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300">
          Privacy Policy
        </h1>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
          This Privacy Policy explains how NovaProwl (&quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;) collects, uses, stores, and protects your
          information when you use our website, products, and services,
          including any integration with Google services.
        </p>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Data Accessed
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            When you choose to sign in or connect your Google account, we only
            access the specific Google user data that is required to provide our
            services and the functionality you have requested. This typically
            includes:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
            <li>Your basic Google profile information (such as your name and email address).</li>
            <li>Other Google user data explicitly listed on the Google consent screen, where applicable.</li>
          </ul>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We do not access any Google user data beyond what is necessary for
            the stated features and only after you grant explicit consent.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Data Usage
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We use the Google user data we access solely to:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
            <li>Authenticate you and allow secure sign-in to your account.</li>
            <li>Personalize your experience within our platform.</li>
            <li>Provide core NovaProwl features related to analytics and dashboards.</li>
            <li>Communicate with you about your account, billing, and service-related updates.</li>
          </ul>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We do not use Google user data for advertising or for any purpose
            other than those explicitly disclosed to you.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Data Sharing
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We do not sell your Google user data or any personal information to
            third parties. We only share data in the limited circumstances
            described below:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
            <li>
              <span className="font-medium text-white">
                Service providers:
              </span>{" "}
              We may share data with trusted service providers who help us
              operate our services, such as cloud hosting, email delivery,
              analytics, and payment processing. These providers are bound by
              contractual obligations to protect your data and may not use it
              for any other purpose.
            </li>
            <li>
              <span className="font-medium text-white">
                Legal and compliance:
              </span>{" "}
              We may disclose information if required to do so by law or in
              response to valid legal requests (such as a court order or
              government inquiry).
            </li>
          </ul>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Any sharing of Google user data is limited to what is strictly
            necessary for the purpose described and is handled in accordance
            with Google API Services User Data Policy and applicable laws.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Data Storage &amp; Protection
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We take the security of your data seriously and implement reasonable
            technical and organizational measures to protect it from
            unauthorized access, loss, misuse, alteration, or disclosure. These
            measures may include:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
            <li>Using encryption in transit (such as HTTPS) for data transfer.</li>
            <li>Restricting access to production systems to authorized personnel only.</li>
            <li>Applying access controls and authentication safeguards.</li>
          </ul>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            While we strive to use commercially acceptable means to protect your
            information, no method of transmission over the internet or method
            of electronic storage is completely secure.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Data Retention &amp; Deletion
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We retain your data, including Google user data, only for as long as
            necessary to provide our services, comply with legal obligations,
            resolve disputes, and enforce our agreements. In general:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
            <li>
              Account-related data is retained while your account is active and
              for a reasonable period thereafter, unless you request deletion
              sooner.
            </li>
            <li>
              Log and analytics data may be retained for a limited period for
              security, auditing, and performance analysis.
            </li>
          </ul>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            You can request deletion of your data (including Google user data)
            by contacting us using the details provided below. Once your request
            is verified and processed, we will delete or anonymize your data
            unless we are required to retain it for legal or legitimate business
            purposes.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Your Rights &amp; Choices
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Depending on your jurisdiction, you may have certain rights with
            respect to your personal data, such as:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
            <li>Accessing the data we hold about you.</li>
            <li>Requesting correction of inaccurate or incomplete data.</li>
            <li>Requesting deletion of your data, subject to legal obligations.</li>
            <li>Withdrawing consent to data processing where consent is the basis.</li>
          </ul>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            If you revoke access to Google user data via your Google account
            settings or through our application, we will cease accessing that
            data and will handle existing data in accordance with this Privacy
            Policy.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Changes to This Policy
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. When we do, we
            will revise the &quot;Last updated&quot; date at the bottom of this
            page. We encourage you to review this page periodically to stay
            informed about how we are protecting your information.
          </p>
        </section>

        <section className="space-y-4 mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            If you have any questions about this Privacy Policy, or if you would
            like to request access, correction, or deletion of your data, you
            can contact us at:
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

