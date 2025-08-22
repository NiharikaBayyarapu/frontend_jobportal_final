import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ApplyPage() {
  const { jobId } = useParams();
  const token = useSelector((state) => state.auth.token);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    percentage: "",
    address: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("jobId", jobId);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("qualification", formData.qualification);
    data.append("percentage", formData.percentage);
    data.append("address", formData.address);
    data.append("coverLetter", formData.coverLetter);

    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/applications/apply",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Application submitted ✅");
      console.log("Server response:", res.data);
    } catch (error) {
      console.error("❌ Error submitting application:", error.response?.data || error.message);
      alert("Error submitting application ❌");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Apply for Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          className="w-full p-2 border rounded"
          value={formData.qualification}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="percentage"
          placeholder="Percentage"
          className="w-full p-2 border rounded"
          value={formData.percentage}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full p-2 border rounded"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <textarea
          name="coverLetter"
          placeholder="Write your cover letter..."
          className="w-full p-2 border rounded"
          rows={5}
          value={formData.coverLetter}
          onChange={handleChange}
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full"
          onChange={handleFileChange}
          required
        />
        <button
          type="submit"
          className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
