// src/pages/admin/ManageUsers.jsx
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../api/axiosAPI.js";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  // ✅ Load Users
  const loadUsers = async () => {
    try {
      const { data } = await API.get("/admin/users");
      setUsers(data.users || []);
    } catch (err) {
      console.error("Error loading users:", err);
      toast.error("Failed to load users");
    }
  };

  // ✅ Delete User
  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await API.delete(`/admin/users/${userId}`); 
      toast.success("User deleted");
      setUsers(users.filter((user) => user._id !== userId));
    } catch (err) {
      console.error("Error deleting user:", err);
      toast.error("Failed to delete user");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <div className="space-y-4">
        {users.length === 0 && <p className="text-gray-500">No users found</p>}
        {users.map((user) => (
          <div
            key={user._id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
