// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { token, role, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setProfileOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="shadow-md">
      {/* Top Heading */}
    

      {/* Navbar Section */}
      <nav className="bg-purple-900 text-white px-6 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Menu Links */}
          <ul className="flex space-x-8 text-lg font-semibold">
            <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
            <li><Link to="/jobs" className="hover:text-gray-300 transition">Jobs</Link></li>
            <li><Link to="/about" className="hover:text-gray-300 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gray-300 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300 transition">Contact Us</Link></li>

            {role === "jobseeker" && (
              <li><Link to="/my-applications" className="hover:text-gray-300 transition">My Applications</Link></li>
            )}
            {role === "recruiter" && (
              <li><Link to="/post-job" className="hover:text-gray-300 transition">Post Job</Link></li>
            )}
            {role === "admin" && (
              <>
                <li><Link to="/manage-users" className="hover:text-gray-300 transition">Manage Users</Link></li>
                <li><Link to="/manage-jobs" className="hover:text-gray-300 transition">Manage Jobs</Link></li>
              </>
            )}
          </ul>

          {/* Right Side */}
          <div className="flex space-x-4 items-center">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-lg bg-white text-purple-900 font-semibold hover:bg-gray-100 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 rounded-lg border border-white font-semibold hover:bg-white hover:text-purple-900 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center space-x-2">
                  <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofAPYdo8bJsvH5PzkEXRzL4IVZ75Ps1TkjssxIdO7Fgqn6_N6QfWrnxHcCY-qLl8W48o&usqp=CAU"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
/>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded shadow-md z-50">
                    <Link to="/profile" onClick={() => setProfileOpen(false)} className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                    {role === "jobseeker" && (
                      <Link to="/my-applications" onClick={() => setProfileOpen(false)} className="block px-4 py-2 hover:bg-gray-100">My Applications</Link>
                    )}
                    {role === "recruiter" && (
                      <Link to="/post-job" onClick={() => setProfileOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Post Job</Link>
                    )}
                    {role === "admin" && (
                      <>
                        <Link to="/manage-users" onClick={() => setProfileOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Manage Users</Link>
                        <Link to="/manage-jobs" onClick={() => setProfileOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Manage Jobs</Link>
                      </>
                    )}
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
