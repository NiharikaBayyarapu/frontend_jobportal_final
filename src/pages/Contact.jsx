export default function Contact() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-purple-900 mb-10">Contact Us</h2>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <p className="text-lg text-gray-700 mb-6 text-center">
          Have questions or need support? Reach out to us and we’ll respond quickly.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-purple-100 p-6 rounded-lg flex items-center gap-4">
            <img
              src="https://img.icons8.com/color/48/000000/email.png"
              alt="Email"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-1">Email</h3>
              <p>support@jobportal.com</p>
            </div>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg flex items-center gap-4">
            <img
              src="https://img.icons8.com/color/48/000000/phone.png"
              alt="Phone"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-1">Phone</h3>
              <p>+91 8374997919</p>
            </div>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg flex items-center gap-4">
            <img
              src="https://img.icons8.com/color/48/000000/office.png"
              alt="Office"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-1">Office</h3>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg flex items-center gap-4">
            <img
              src="https://img.icons8.com/color/48/000000/overtime.png"
              alt="Working Hours"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-1">Working Hours</h3>
              <p>Mon - Sat : 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
          ></textarea>

          {/* Button with Purple Gradient */}
          <button className="w-full bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 rounded-lg font-semibold hover:from-purple-900 hover:to-purple-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
