import Header from '../../components/Header';
import Footer from '../../components/Footer';

const WebsitePolicies = () => {
  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black">Website Policies</h1>

        <p className="text-gray-700 mb-8">
          This page explains how we collect, use, and protect your personal
          information while you use our website and related services. We are
          committed to maintaining your trust and ensuring data privacy.
        </p>

        {/* Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            1. Privacy Policy
          </h2>
          <p className="text-gray-700">
            We respect your privacy and are dedicated to safeguarding any personal
            data shared with us. When you use our website, we may collect certain
            information such as your name, email, or usage patterns to improve our
            services. This data is used only for legitimate purposes and never
            shared without your consent.
          </p>
        </section>

        {/* Data Collection and Usage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            2. Data Collection & Usage
          </h2>
          <p className="text-gray-700 mb-3">
            We may collect non-personal information such as browser type, device,
            and IP address to enhance website performance and user experience.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To provide and maintain our website’s functionality.</li>
            <li>To personalize user experience and content.</li>
            <li>To communicate with you regarding support or updates.</li>
            <li>To analyze traffic and improve our services.</li>
          </ul>
        </section>

        {/* Cookies Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            3. Cookies Policy
          </h2>
          <p className="text-gray-700">
            Cookies are small data files stored on your device to enhance
            navigation and remember your preferences. You can choose to disable
            cookies through your browser settings, but some features of the site
            may not function properly as a result.
          </p>
        </section>

        {/* Data Protection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            4. Data Protection & Security
          </h2>
          <p className="text-gray-700">
            We implement modern security measures, including encryption and secure
            access controls, to prevent unauthorized access or disclosure of your
            personal data. However, please note that no online system can be 100%
            secure.
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            5. Your Rights
          </h2>
          <p className="text-gray-700 mb-3">As a user, you have the right to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access and review the data we hold about you.</li>
            <li>Request corrections to inaccurate or outdated information.</li>
            <li>Request deletion of your personal data, where applicable.</li>
            <li>Opt out of receiving marketing or promotional messages.</li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            6. Third-Party Services
          </h2>
          <p className="text-gray-700">
            Our website may include links or integrations with third-party
            platforms. We are not responsible for their privacy practices or
            content. We recommend reviewing their policies before providing any
            personal information.
          </p>
        </section>

        {/* Policy Updates */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            7. Policy Updates
          </h2>
          <p className="text-gray-700">
            We may revise this policy from time to time. Any significant changes
            will be communicated through the website. Continued use of our site
            after updates indicates your acceptance of the revised policies.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-black">
            8. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions or concerns about our policies or how your
            data is handled, please contact us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:underline"
            >
              support@example.com
            </a>
            .
          </p>
        </section>

        <p className="text-gray-700 mt-10">
          <strong>Last updated:</strong> October 2025
        </p>
      </div>
      <Footer />
    </>

  )
}

export default WebsitePolicies