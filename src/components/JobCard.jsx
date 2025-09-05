import { useState } from "react";
import {
  Bookmark,
  BookmarkCheck,
  MapPin,
  Briefcase,
  IndianRupee,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function JobCard({ job, status }) {
  const [bookmarked, setBookmarked] = useState(false);

  const isApplied = !!status; // ✅ true if already applied

  return (
    <div className="border rounded-2xl p-6 shadow-md bg-white hover:shadow-lg transition duration-300 flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          {/* Company + Title */}
          <h3 className="text-lg font-bold text-gray-900">{job?.company}</h3>
          <p className="text-xl font-semibold text-black-900">{job?.title}</p>

          {/* Location + Type + Salary */}
          <div className="flex gap-3 mt-2 text-sm text-gray-600 flex-wrap">
            {job?.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {job.location}
              </span>
            )}
            {job?.type && (
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" /> {job.type}
              </span>
            )}
            {job?.salary && (
              <span className="flex items-center gap-1">
                <IndianRupee className="w-4 h-4" /> {job.salary}
              </span>
            )}
          </div>
        </div>

        {/* Bookmark */}
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className="text-gray-500 hover:text-yellow-500 transition"
        >
          {bookmarked ? (
            <BookmarkCheck className="w-6 h-6" />
          ) : (
            <Bookmark className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Description */}
      {job?.description && (
        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          {job.description.slice(0, 150)}...
        </p>
      )}

      {/* Actions */}
      <div className="mt-5 flex items-center gap-3">
        {isApplied ? (
          <span className="flex-1 text-center py-2 rounded-xl font-medium bg-purple-900 text-white">
            {status || "Applied"}
          </span>
        ) : (
          <button className="flex-1 bg-purple-900 text-white py-2 rounded-xl hover:bg-purple-800 transition font-medium">
            <Link to={`/apply/${job._id}`} className="block w-full h-full">
              Apply Now
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}
