import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black">Terms & Conditions</h1>

        <p className="text-gray-700 mb-8">
          Please read these Terms and Conditions carefully before using our website. By using our website, you agree to follow all the rules written here.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            When you open or use this website, it means you agree to these Terms and Conditions.
If you do not agree with them, please stop using the website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            2. Using the Website
          </h2>
          <p className="text-gray-700">
            You should use this website only for good and legal purposes.
Do not do anything that harms the website or stops others from using it.
Hacking, stealing data, or doing anything illegal is not allowed.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            3. Content and Ownership
          </h2>
          <p className="text-gray-700">
            All text, images, logos, and software on this website are not owned by us.
You can copy, share, or change the content freely — no permission is needed.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            4. Limitation of Responsibility
          </h2>
          <p className="text-gray-700">
            We try our best to give correct and updated information on this website.
But we cannot promise that everything is always right or complete.
We are not responsible for any kind of loss or problem caused by using this website.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            5. Third-Party Links
          </h2>
          <p className="text-gray-700">
            Our website may not have links to other websites.
If any links appear, we do not control those websites and are not responsible for their content or actions.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            6. Privacy Policy
          </h2>
          <p className="text-gray-700">
            Please read our Website Privacy Policy page to know how we collect and protect your personal information.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            7. Changes to Terms
          </h2>
          <p className="text-gray-700">
           We can change these Terms and Conditions anytime without telling you first.
The latest version will always be shown on this page. Please check it from time to time.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            8. Contact Information
          </h2>
          <p className="text-gray-700">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at{" "}
            <a
              href="mailto:nothpy01@gmail.com"
              className="text-blue-600 hover:underline"
            >
              nothpy01@gmail.com
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

export default TermsAndConditions