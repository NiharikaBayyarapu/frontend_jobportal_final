export default function Services() {
  const services = [
    { title: "Job Listings", desc: "Access thousands of job opportunities across industries." },
    { title: "Career Guidance", desc: "Get expert advice to plan and grow your career." },
    { title: "Resume Building", desc: "Create an ATS-friendly resume that gets noticed." },
    { title: "Interview Prep", desc: "Practice with mock interviews & tips to succeed." },
  ];

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-black-600 mb-10">Our Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
