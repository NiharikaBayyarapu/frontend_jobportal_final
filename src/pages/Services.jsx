export default function Services() {
  const services = [
    {
      title: "Job Listings",
      desc: "Browse thousands of opportunities tailored to your skills and aspirations.",
      img: "https://img.icons8.com/color/96/briefcase--v1.png"
    },
    {
      title: "Career Guidance",
      desc: "Receive expert mentorship to plan, grow, and achieve your career goals.",
      img: "https://img.icons8.com/color/96/goal--v1.png"
    },
    {
      title: "Resume Building",
      desc: "Craft an ATS-optimized resume designed to capture recruiter attention.",
      img: "https://img.icons8.com/color/96/resume.png"
    },
    {
      title: "Interview Prep",
      desc: "Boost confidence with mock interviews, feedback, and proven strategies.",
      img: "https://img.icons8.com/color/96/interview.png"
    }
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Our <span className="text-purple-900">Services</span>
        </h2>
        <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
          Empowering your career journey with tools, guidance, and resources you can trust.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
          >
            <img src={service.img} alt={service.title} className="mx-auto mb-5 w-16 h-16" />
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
