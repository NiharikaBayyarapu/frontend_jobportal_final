import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";
import axios from "axios";

export default function JobsPage() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs"); // ✅ use same port
        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  // Handle Apply
  const handleApply = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  // Handle Delete
  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${jobId}`);
      setJobs((prev) => prev.filter((job) => job._id !== jobId));
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  return (
    <div className="grid gap-6 p-6">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            onApply={handleApply}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p className="text-gray-600">No jobs available</p>
      )}
    </div>
  );
}
