import Link from 'next/link';

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-sm hover:underline mb-2 block">&larr; Back to Home</Link>
          <h1 className="text-4xl font-bold">Accessibility Statement</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <p className="text-lg text-slate-600 mb-8">
          Last updated: February 11, 2026
        </p>

        <h2>Our Commitment to Accessibility</h2>
        <p>
          ATW Properties, LLC is committed to ensuring digital accessibility for people with disabilities. 
          We are continually improving the user experience for everyone and applying the relevant accessibility standards.
        </p>

        <h2>Conformance Status</h2>
        <p>
          We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
          These guidelines explain how to make web content more accessible for people with disabilities 
          and user-friendly for everyone.
        </p>

        <h2>Measures to Support Accessibility</h2>
        <p>ATW Properties takes the following measures to ensure accessibility:</p>
        <ul>
          <li>Include accessibility as part of our mission statement</li>
          <li>Integrate accessibility into our procurement practices</li>
          <li>Provide continual accessibility training for our staff</li>
          <li>Assign clear accessibility goals and responsibilities</li>
        </ul>

        <h2>Physical Accessibility</h2>
        <p>
          Our properties vary in accessibility features. Please contact us directly to discuss specific 
          accessibility needs for any property you are interested in booking. We will do our best to 
          accommodate your requirements or suggest suitable alternatives.
        </p>

        <h3>Common Accessibility Features (varies by property):</h3>
        <ul>
          <li>Ground-floor units available</li>
          <li>Wide doorways and hallways</li>
          <li>Accessible parking spaces</li>
          <li>Step-free entrances</li>
        </ul>

        <h2>Feedback</h2>
        <p>
          We welcome your feedback on the accessibility of our properties and this website. 
          Please let us know if you encounter accessibility barriers:
        </p>
        <ul>
          <li>Email: <a href="mailto:info@atwproperties.com">info@atwproperties.com</a></li>
          <li>Phone: <a href="tel:+19073123456">(907) 312-3456</a></li>
        </ul>
        <p>
          We try to respond to feedback within 2 business days.
        </p>

        <h2>Technical Specifications</h2>
        <p>
          Accessibility of this website relies on the following technologies to work:
        </p>
        <ul>
          <li>HTML</li>
          <li>WAI-ARIA</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <h2>Limitations and Alternatives</h2>
        <p>
          Despite our best efforts to ensure accessibility, there may be some limitations. 
          If you experience any difficulty accessing our website or properties, please contact 
          us and we will work to provide alternative access.
        </p>

        <h2>Assessment Approach</h2>
        <p>
          We assess the accessibility of our website and properties through:
        </p>
        <ul>
          <li>Self-evaluation</li>
          <li>User feedback</li>
          <li>External accessibility consultants when needed</li>
        </ul>

        <h2>Legal</h2>
        <p>
          This accessibility statement applies to properties operated by ATW Properties, LLC. 
          We are committed to compliance with the Americans with Disabilities Act (ADA) and 
          the Fair Housing Act (FHA).
        </p>

        <div className="mt-12 p-6 bg-slate-50 rounded-xl">
          <p className="text-sm text-slate-600 mb-0">
            For questions about this accessibility statement or to request accommodations, 
            please contact us at <a href="mailto:info@atwproperties.com" className="text-blue-600 hover:underline">info@atwproperties.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
