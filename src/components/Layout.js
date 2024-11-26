import React, { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  // State to toggle sidebar visibility on mobile screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block fixed inset-0 lg:sticky lg:w-1/4 bg-gradient-to-br from-purple-500 to-blue-500 text-white p-6 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold mb-6 text-center pl-10">RBAC Dashboard</h1>
        </div>
        <nav>
          <Link
            to="/"
            className="block py-3 px-4 rounded-lg hover:bg-purple-700 mb-3 text-lg transition-colors"
          >
            🧑‍💼 User Management
          </Link>
          <Link
            to="/roles"
            className="block py-3 px-4 rounded-lg hover:bg-purple-700 mb-3 text-lg transition-colors"
          >
            👑 Role Management
          </Link>
          <Link
            to="/permissions"
            className="block py-3 px-4 rounded-lg hover:bg-purple-700 text-lg transition-colors"
          >
            🔒 Permission Management
          </Link>
        </nav>
      </aside>

      {/* Overlay for sidebar on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main
        className={`flex-1 bg-gradient-to-br from-gray-100 to-gray-300  overflow-y-auto transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-0 lg:ml-1/4" : "ml-0 lg:ml-1/4"
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg p-6">{children}</div>
      </main>

      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-full"
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </div>
  );
};

export default Layout;
