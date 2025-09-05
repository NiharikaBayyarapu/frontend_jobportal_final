import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Reviews from "../components/Reviews";
function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const job = e.target.job.value;
    const location = e.target.location.value;
    const exp = e.target.exp.value;
    navigate(`/jobs?job=${job}&location=${location}&exp=${exp}`);
  };
  const jobTypes = [
    {
      title: "Full-Time",
      img: "https://img.icons8.com/color/96/briefcase.png",
    },
    {
      title: "Part-Time",
      img: "https://img.icons8.com/color/96/clock.png",
    },
    {
      title: "Contract",
      img: "https://img.icons8.com/color/96/contract-job.png",
    },
    {
      title: "Remote",
      img: "https://img.icons8.com/color/96/laptop.png",
    },
  ];

  // ✅ Companies List
  const companies = [
    {
      id: 2,
      name: "Google",
      logo: "data:image/jpeg;base64,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",
      rating: 4.8,
      reviews: 1250,
      tagline: "Build for Everyone",
      claimed: true,
    },
    {
      id: 3,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      rating: 4.7,
      reviews: 980,
      tagline: "Empowering Us All",
      claimed: true,
    },
    {
      id: 4,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      rating: 4.6,
      reviews: 1430,
      tagline: "Work Hard. Have Fun.",
      claimed: true,
    },
    {
      id: 5,
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png",
      rating: 4.4,
      reviews: 760,
      tagline: "Powered by Intellect",
      claimed: true,
    },
    {
      id: 6,
      name: "Accenture",
      logo: "data:image/png;base64,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",
      rating: 4.5,
      reviews: 620,
      tagline: "High Performance. Delivered.",
      claimed: true,
    },
  ];

  // ✅ Scroll Function
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      
        {/* Hero Section */}
      <div className="w-full bg-cover bg-center h-[550px] flex items-center justify-center" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1080277602/photo/these-night-owls-always-work-with-dedication.jpg?s=612x612&w=0&k=20&c=X4BC-h84Aeo_1crQz4JUUbQcd8j-vKWih22Pplh8q-8=)'}}>
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-wide">
            WELCOME
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white-900 leading-snug">
            Your Job <span className="text-white-900">Search</span> Ends Here
          </h1>
          <p className="mt-4 text-base md:text-lg text-white-900">
            Explore thousands of opportunities and build your career with
            JobPortal
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <input
              type="text"
              name="job"
              placeholder="Job title / Keyword"
              className="px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-900 focus:outline-none text-gray-700 border-0 bg-white"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-900 focus:outline-none text-gray-700 border-0 bg-white"
            />
            <input
              type="text"
              name="exp"
              placeholder="Experience (e.g. 2 years)"
              className="px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-900 focus:outline-none text-purple-900 border-0 bg-white"
            />
            <button
              type="submit"
              className="bg-purple-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition shadow-md"
            >
              Search
            </button>
          </form>
         

        </div>
      </div>
{/* ✅ Job Types Section (clickable, client-side only) */}
<section className="px-6 md:px-16 py-16 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
    Explore by <span className="text-purple-600">Job Types</span>
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {jobTypes.map((job, index) => (
      <button
        key={index}
        onClick={() => navigate(`/jobs?type=${encodeURIComponent(job.title.toLowerCase().replace(/\s+/g, ''))}`)}
        className="rounded-2xl p-8 text-center shadow-lg bg-gradient-to-br from-purple-50 to-white hover:from-purple-100 hover:to-white transform hover:-translate-y-2 transition duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200"
        aria-label={`View ${job.title} jobs`}
      >
        {/* keep your image */}
        <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-xl bg-white shadow-md mb-5">
          <img src={job.img} alt={job.title} className="w-12 h-12" />
        </div>

        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
      </button>
    ))}
  </div>
</section>

      {/* ✅ Top Companies Carousel with Side Arrows */}
      <div className="relative bg-white py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Explore Jobs by Top Companies
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 p-3 rounded-full shadow-md hover:bg-purple-100 z-10"
        >
          ←
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide px-12"
        >
          {companies.map((company) => (
            <div
              key={company.id}
              className="min-w-[260px] flex-shrink-0 bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-lg transition relative"
            >
              {/* Claim Now badge */}
              {!company.claimed && (
                <span className="absolute top-3 right-3 text-xs bg-yellow-400 text-black px-2 py-1 rounded-md font-semibold">
                  Claim Now
                </span>
              )}

              {/* Logo */}
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 mx-auto mb-4"
              />

              {/* Name */}
              <h3 className="font-semibold text-lg text-gray-800 text-center">
                {company.name}
              </h3>

              {/* Rating */}
              <p className="text-yellow-500 text-center mt-2">
                ⭐ {company.rating}{" "}
                <span className="text-gray-500 text-sm">
                  ({company.reviews} reviews)
                </span>
              </p>

              {/* Tagline */}
              <p className="text-gray-600 text-sm mt-2 text-center">
                {company.tagline}
              </p>

              {/* View Jobs Button */}
              <button
                onClick={() => navigate(`/company/${company.id}`)}
                className="mt-4 w-full bg-purple-900 text-white py-2 rounded-lg font-semibold hover:bg-purple-900 transition-colors"
              >
                View Jobs
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 p-3 rounded-full shadow-md hover:bg-purple-100 z-10"
        >
          →
        </button>
         <>
      {/* Other sections */}
      <Reviews />
      {/* Footer */}
    </>
      </div>
    </div>
  );
}

export default Home;
