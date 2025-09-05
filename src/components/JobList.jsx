import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";

export default function JobsPage({ jobs }) {
  const navigate = useNavigate();

  const handleApply = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  const handleDelete = (jobId) => {
    console.log("Delete job:", jobId);
  };

  return (
    <div className="grid gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          onApply={handleApply}    //  function passed here
          onDelete={handleDelete}  //  function passed here
        />
      ))}
    </div>
  );
}
