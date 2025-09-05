// pages/About.jsx
export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-black-900 mb-6 text-center">
        About Us
      </h2>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
        Welcome to <span className="font-semibold">Job Portal</span>!  
        Our mission is to connect talented job seekers with top employers.  
        We aim to make the hiring process simple, efficient, and transparent for both companies and candidates.
      </p>

      {/* Vision / Mission / Values */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-900">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To be the leading platform that bridges the gap between job seekers
            and employers across industries.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-900">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            Empower individuals by providing the right opportunities and help
            businesses grow with the right talent.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-900">Our Values</h3>
          <p className="text-gray-600 mt-2">
            Integrity, innovation, and inclusivity are the pillars of our
            platform.
          </p>
        </div>
      </div>

      {/* ✅ Proof / Achievements Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-black-900">Our Achievements</h3>
        <p className="text-gray-600 mt-2">
          Trusted by thousands of professionals and companies worldwide.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-purple-100 rounded-2xl shadow-md">
            <h4 className="text-4xl font-bold text-purple-900">50K+</h4>
            <p className="text-gray-700 mt-2">Active Job Seekers</p>
          </div>

          <div className="p-6 bg-purple-100 rounded-2xl shadow-md">
            <h4 className="text-4xl font-bold text-purple-900">10K+</h4>
            <p className="text-gray-700 mt-2">Verified Companies</p>
          </div>

          <div className="p-6 bg-purple-100 rounded-2xl shadow-md">
            <h4 className="text-4xl font-bold text-purple-900">95%</h4>
            <p className="text-gray-700 mt-2">Successful Placements</p>
          </div>
        </div>
      </div>

      {/* ✅ Testimonials Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-black-900 text-center">
          What People Say
        </h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="text-gray-700 italic">
              "Job Portal helped me land my dream job within weeks. The process
              was smooth and transparent."
            </p>
            <h4 className="mt-4 font-semibold text-purple-900">– Priya Sharma</h4>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="text-gray-700 italic">
              "As an employer, we found highly skilled candidates quickly.
              Definitely recommend this platform."
            </p>
            <h4 className="mt-4 font-semibold text-purple-900">– TechCorp HR</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
