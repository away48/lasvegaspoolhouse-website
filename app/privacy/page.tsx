import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-sm hover:underline mb-2 block">&larr; Back to Home</Link>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <p className="text-lg text-slate-600 mb-8">
          Last updated: February 11, 2026
        </p>

        <p>
          ATW Properties, LLC ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. 
          This privacy policy explains how we collect, use, and safeguard your information when you visit our website or book our properties.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Personal Information You Provide</h3>
        <p>When you make a booking, we collect:</p>
        <ul>
          <li>Name, email address, phone number</li>
          <li>Payment information (credit card or bank account details)</li>
          <li>Government-issued ID for verification purposes</li>
          <li>Emergency contact information</li>
        </ul>

        <h3>1.2 Automatically Collected Information</h3>
        <p>When you visit our website, we may collect:</p>
        <ul>
          <li>IP address, browser type, device information</li>
          <li>Pages visited, time spent on pages</li>
          <li>Referring website</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Process bookings and payments</li>
          <li>Communicate about your reservation</li>
          <li>Verify identity and prevent fraud</li>
          <li>Send booking confirmations and receipts</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
          <li>Send promotional communications (with your consent)</li>
        </ul>

        <h2>3. Information Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share your data with:</p>

        <h3>3.1 Service Providers</h3>
        <ul>
          <li><strong>Payment Processors:</strong> Stripe, Forte (for credit card and ACH processing)</li>
          <li><strong>Property Management:</strong> Beds24 (for booking management)</li>
          <li><strong>Email Service:</strong> Zoho (for communications)</li>
        </ul>

        <h3>3.2 Legal Requirements</h3>
        <p>We may disclose information if required by law or to:</p>
        <ul>
          <li>Comply with legal process or government requests</li>
          <li>Enforce our Terms of Service</li>
          <li>Protect our rights, property, or safety</li>
          <li>Prevent fraud or security threats</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your personal data. 
          Payment information is encrypted using industry-standard SSL/TLS protocols. However, no method of transmission 
          over the Internet is 100% secure.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
          comply with legal obligations, resolve disputes, and enforce our agreements. Typically:
        </p>
        <ul>
          <li>Booking records: 7 years (for tax and legal compliance)</li>
          <li>Payment information: As required by payment processor and applicable law</li>
          <li>Marketing communications: Until you unsubscribe</li>
        </ul>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
          <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
          <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
          <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:info@atwproperties.com">info@atwproperties.com</a>.</p>

        <h2>7. Cookies and Tracking</h2>
        <p>We use cookies and similar technologies to:</p>
        <ul>
          <li>Remember your preferences</li>
          <li>Analyze website traffic and usage</li>
          <li>Provide a personalized experience</li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling cookies may affect website functionality.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. 
          We encourage you to read their privacy policies.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. 
          If you believe we have collected such information, please contact us immediately.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on this page with an updated "Last updated" date. 
          We encourage you to review this policy periodically.
        </p>

        <h2>11. Contact Us</h2>
        <p>For questions about this Privacy Policy or our data practices, contact:</p>
        <ul>
          <li><strong>Company:</strong> ATW Properties, LLC</li>
          <li><strong>Email:</strong> <a href="mailto:info@atwproperties.com">info@atwproperties.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+19073123456">(907) 312-3456</a></li>
        </ul>

        <div className="mt-12 p-6 bg-slate-50 rounded-xl">
          <p className="text-sm text-slate-600 mb-0">
            By using our services, you consent to the collection and use of your information as described in this Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}
