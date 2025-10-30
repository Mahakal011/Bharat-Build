import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Help = () => {
  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black">Help & Support</h1>

        <p className="text-gray-700 mb-6">
          Welcome to the Help Center! Here you’ll find answers to common
          questions, troubleshooting tips, and ways to get in touch with our
          support team.
        </p>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-black">
                1. How can I contact support?
              </h3>
              <p className="text-gray-700">
                You can reach our support team anytime via email at{" "}
                <a
                  href="mailto:nothpy01@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  nothpy01@gmail.com
                </a>
                . We usually respond within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black">
                2. How do I report a problem or give feedback?
              </h3>
              <p className="text-gray-700">
                We value your feedback! Please use the “Contact Us” form on the{" "}
                <a href="/reachus" className="text-blue-600 hover:underline">
                  Reach Us
                </a>{" "}
                page to report any issue or share suggestions.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Help */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Need More Assistance?
          </h2>
          <p className="text-gray-700 mb-3">
            If your question isn’t covered above, feel free to contact our support
            team directly or visit our{" "}
            <a href="/policies" className="text-blue-600 hover:underline">
              Policies
            </a>{" "}
            page for more information.
          </p>
          <p className="text-gray-700">
            We’re here to help you make the most out of our platform!
          </p>
        </section>
      </div>
      <Footer />
    </>

  )
}

export default Help