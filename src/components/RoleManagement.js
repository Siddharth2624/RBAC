import React, { useState } from "react";

const RoleManagement = () => {
  // State for roles and new role input
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin" },
    { id: 2, name: "Editor" },
    { id: 3, name: "Viewer" },
  ]);
  const [newRole, setNewRole] = useState("");

  // Add a new role
  const addRole = (roleName) => {
    const newRole = {
      id: roles.length + 1, // Generate a new unique ID
      name: roleName,
    };
    setRoles([...roles, newRole]);
  };

  // Delete a role by ID
  const deleteRole = (roleId) => {
    const updatedRoles = roles.filter((role) => role.id !== roleId);
    setRoles(updatedRoles);
  };

  // Handle form submission for adding a new role
  const handleAddRole = (e) => {
    e.preventDefault();
    if (newRole.trim()) {
      addRole(newRole);
      setNewRole(""); // Clear input after adding
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Role Management</h2>

      {/* Role List */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-indigo-500 mb-2">Existing Roles</h3>
        {roles.length > 0 ? (
          <ul className="space-y-2">
            {roles.map((role) => (
              <li
                key={role.id}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="font-medium text-gray-700">{role.name}</span>
                <button
                  onClick={() => deleteRole(role.id)}
                  className="text-red-600 hover:text-red-800 font-medium transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No roles available. Add a new role below.</p>
        )}
      </div>

      {/* Add New Role */}
      <form onSubmit={handleAddRole} className="space-y-4">
        <div>
          <label
            htmlFor="newRole"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            New Role Name
          </label>
          <input
            id="newRole"
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            placeholder="Enter role name"
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition"
        >
          Add Role
        </button>
      </form>
    </div>
  );
};

export default RoleManagement;
