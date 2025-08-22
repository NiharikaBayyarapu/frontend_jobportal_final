// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ✅ Home page with categories
function JobCategories() {
  const categories = [
    {
      id: 1,
      title: "Jobs for Freshers",
      img: "https://via.placeholder.com/150x100.png?text=Freshers",
      link: "/jobs/freshers",
    },
    {
      id: 2,
      title: "Jobs for Experienced",
      img: "https://via.placeholder.com/150x100.png?text=Experienced",
      link: "/jobs/experienced",
    },
    {
      id: 3,
      title: "Jobs for Women",
      img: "https://via.placeholder.com/150x100.png?text=Women",
      link: "/jobs/women",
    },
    {
      id: 4,
      title: "Work from Home",
      img: "https://via.placeholder.com/150x100.png?text=Remote",
      link: "/jobs/work-from-home",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Popular Job Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="rounded-lg w-full h-28 object-cover mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {cat.title}
              </h3>
              <Link
                to={cat.link}
                className="mt-3 text-purple-700 font-medium hover:underline"
              >
                View all →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Pages (all in App.js)
function FreshersJobs() {
  return <h1 className="p-6 text-2xl font-bold">Jobs for Freshers</h1>;
}

function ExperiencedJobs() {
  return <h1 className="p-6 text-2xl font-bold">Jobs for Experienced</h1>;
}

function WomenJobs() {
  return <h1 className="p-6 text-2xl font-bold">Jobs for Women</h1>;
}

function WorkFromHomeJobs() {
  return <h1 className="p-6 text-2xl font-bold">Work from Home Jobs</h1>;
}

// ✅ App.js Routes
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobCategories />} />
        <Route path="/jobs/freshers" element={<FreshersJobs />} />
        <Route path="/jobs/experienced" element={<ExperiencedJobs />} />
        <Route path="/jobs/women" element={<WomenJobs />} />
        <Route path="/jobs/work-from-home" element={<WorkFromHomeJobs />} />
      </Routes>
    </Router>
  );
}
