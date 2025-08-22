import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ApplyPage() {
  const { jobId } = useParams();
  const token = useSelector((state) => state.auth.token);

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    percentage: "",
    address: "",
    coverLetter: "",
    resume: null,
  });

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Using FormData for file upload
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

      await axios.post("http://localhost:5000/api/applications/apply", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Application submitted ✅");
    } catch (error) {
      console.error(error);
      alert("Error submitting application ❌");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Apply for Job</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Qualification */}
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Percentage */}
        <input
          type="number"
          name="percentage"
          placeholder="Percentage %"
          value={formData.percentage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Address */}
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 border rounded"
          required
        />

        {/* Cover Letter */}
        <textarea
          name="coverLetter"
          placeholder="Write your cover letter..."
          value={formData.coverLetter}
          onChange={handleChange}
          rows={5}
          className="w-full p-2 border rounded"
          required
        />

        {/* Resume Upload */}
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
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
