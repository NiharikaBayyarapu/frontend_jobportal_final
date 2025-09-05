import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import { toast } from "react-toastify";
import API from "../api/axiosAPI";

export default function MyApplicationsPage() {
  const { token } = useSelector((state) => state.auth);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const { data } = await API.get("/applications/my", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setApplications(data.applications || []);
      } catch (err) {
        console.error("Error fetching applications:", err);
        toast.error("Failed to load applications");
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchApplications();
  }, [token]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Applications</h2>
      {applications.length === 0 ? (
        <p className="text-gray-600">No applications yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app) => (
            <JobCard key={app._id} job={app.job} status={app.status} />
          ))}
        </div>
      )}
    </div>
  );
}
