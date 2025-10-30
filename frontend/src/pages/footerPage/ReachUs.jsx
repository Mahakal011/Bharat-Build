import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ReachUs = () => {
  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black">Reach Us</h1>

        <p className="text-gray-700 mb-6">
          We’re here to help! Whether you have a question, feedback, or need
          technical support, feel free to contact us using the information or form
          below.
        </p>

        {/* Contact Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Contact Information
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              📍 <span className="font-semibold">Address:</span> Jasola, Industrial area , Sout East Delhi, India - 110076
            </li>
            <li>
              📧 <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:nothpy01@gmail.com"
                className="text-blue-600 hover:underline"
              >
                nothpy01@gmail.com
              </a>
            </li>
            <li>
              ☎️ <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+916398105848"
                className="text-blue-600 hover:underline"
              >
                +91 6398105848
              </a>
            </li>
            <li>
              🕒 <span className="font-semibold">Working Hours:</span> Monday –
              Friday, 9:00 AM – 6:00 PM
            </li>
          </ul>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Send Us a Message
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for reaching out! We’ll get back to you soon.");
            }}
            className="space-y-4 bg-gray-50 p-6 rounded-2xl shadow"
          >
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Mobile Number
              </label>
              <input
                type="number"
                placeholder="Enter your number"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>

  )
}

export default ReachUs