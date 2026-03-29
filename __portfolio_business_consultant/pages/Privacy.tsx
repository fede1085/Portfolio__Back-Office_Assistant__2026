import React from 'react';

export default function Privacy() {
  return (
    <main id="privacy" className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mt-2">Last updated: 2025-10-19</p>
        <p className="text-gray-600 mt-6">
          Federico Mosqueira | AI &amp; Automation Strategy (“we”, “us”) operates
          <span className="font-medium"> federicomosqueira.site</span> (the “Site”).
        </p>
      </header>

      <div className="space-y-10">
        {/* 1. Controller */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">1. Controller</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-[120px,1fr] gap-y-1 gap-x-6 text-gray-700">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd>Federico Mosqueira</dd>
            <dt className="font-medium text-gray-900">Address</dt>
            <dd>Lange Leemstraat 93, 2018 Antwerp, Belgium</dd>
            <dt className="font-medium text-gray-900">Email</dt>
            <dd>
              <a
                href="mailto:hello@federicomosqueira.site"
                className="underline decoration-gray-300 hover:decoration-gray-800"
              >
                hello@federicomosqueira.site
              </a>
            </dd>
          </dl>
        </section>

        {/* 2. What we collect */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">2. What we collect (minimal)</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>
              <span className="font-medium text-gray-900">Technical logs:</span> IP address, user agent,
              pages viewed, timestamps, and basic request metadata.
            </li>
            <li>
              <span className="font-medium text-gray-900">Direct communications:</span> emails you send us
              (subject, content, headers, attachments).
            </li>
          </ul>
          <p className="text-gray-600 text-sm">
            No forms, accounts or tracking pixels are active at this time.
          </p>
        </section>

        {/* 3. Purposes & legal bases */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">3. Purposes and legal bases (GDPR Art. 6)</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Operate, secure and improve the Site (WAF/CDN, uptime, troubleshooting) —{' '}
              <span className="font-medium text-gray-900">Legitimate interests (Art. 6(1)(f))</span>.
            </li>
            <li>
              Future analytics/marketing cookies (if enabled) —{' '}
              <span className="font-medium text-gray-900">Consent (Art. 6(1)(a))</span>.
            </li>
          </ul>
        </section>

        {/* 4. Retention */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">4. Retention</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Server/edge logs: up to 12 months.</li>
            <li>Email correspondence: up to 24 months.</li>
          </ul>
          <p className="text-gray-700">
            We may keep data longer if required by law or for ongoing matters; shorter if not needed.
          </p>
        </section>

        {/* 5. Processors */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">5. Processors (data handled on our behalf)</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Cloudflare, Inc. — CDN, caching, WAF, edge logs.</li>
            <li>GitHub Pages (GitHub, Inc.) — static hosting.</li>
          </ul>
          <p className="text-gray-700">
            Data may be processed outside the EEA under appropriate safeguards (e.g., Standard Contractual
            Clauses). <span className="font-medium text-gray-900">We do not sell personal data.</span>
          </p>
        </section>

        {/* 6. Rights */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">6. Your rights (GDPR)</h2>
          <p className="text-gray-700">
            You can request access, rectification, erasure, restriction, objection, and data portability. To
            exercise your rights, email{' '}
            <a
              href="mailto:hello@federicomosqueira.site"
              className="underline decoration-gray-300 hover:decoration-gray-800"
            >
              hello@federicomosqueira.site
            </a>
            . You may lodge a complaint with the Belgian Data Protection Authority (APD/GBA).
          </p>
          <p className="text-gray-700">
            Belgian Data Protection Authority:{' '}
            <a
              href="https://www.dataprotectionauthority.be"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-gray-300 hover:decoration-gray-800"
            >
              dataprotectionauthority.be
            </a>
          </p>
        </section>

        {/* 7. Cookies */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">7. Cookies</h2>
          <p className="text-gray-700">
            We currently use only essential cookies (if any) for security and performance. No analytics or
            marketing cookies are active now. If we add them, we will display a consent banner and update this
            Policy and a Cookie Notice.
          </p>
        </section>

        {/* 8. Security */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">8. Security</h2>
          <p className="text-gray-700">
            We apply HTTPS, CDN/WAF protection, least-privilege access and log minimisation. No payment
            processing is performed on this Site.
          </p>
        </section>

        {/* 9. Children */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">9. Children</h2>
          <p className="text-gray-700">Our services are not directed to children under 16.</p>
        </section>

        {/* 10. Changes */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">10. Changes</h2>
          <p className="text-gray-700">
            We may update this Policy. The “Last updated” date will reflect the latest version.
          </p>
        </section>
      </div>
    </main>
  );
}
