import React, { useState } from "react";

const PermissionManagement = () => {
  // Initial permissions state
  const [permissions, setPermissions] = useState({
    Admin: ["Read", "Write", "Delete"],
    Editor: ["Read", "Write"],
    Viewer: ["Read"],
  });

  // States for handling new permission input and selected role
  const [newPermission, setNewPermission] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Function to handle adding a new permission
  const handleAddPermission = () => {
    // Validations for adding a permission
    if (!newPermission.trim()) {
      alert("Please enter a valid permission.");
      return;
    }

    if (!selectedRole) {
      alert("Please select a role.");
      return;
    }

    // Check if the permission already exists for the selected role
    if (permissions[selectedRole].includes(newPermission)) {
      alert("This permission already exists for the selected role.");
      return;
    }

    // Update the permissions state with the new permission
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [selectedRole]: [...prevPermissions[selectedRole], newPermission],
    }));

    // Clear the input field after adding
    setNewPermission("");
  };

  // Function to handle deleting a permission
  const handleDeletePermission = (role, permissionToDelete) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [role]: prevPermissions[role].filter(
        (permission) => permission !== permissionToDelete
      ),
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Permission Management
      </h1>

      {/* Role and Permissions Display */}
      {Object.keys(permissions).map((role) => (
        <div
          key={role}
          className="bg-white p-4 rounded-lg shadow-md mb-6 w-full sm:w-4/5 lg:w-3/4 mx-auto"
        >
          <h2 className="text-xl font-bold text-blue-600 mb-2">{role}</h2>

          <ul className="mb-4 space-y-2">
            {permissions[role].map((perm, index) => (
              <li
                key={index}
                className="text-gray-700 flex items-center justify-between"
              >
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                  {perm}
                </span>

                {/* Delete Permission Button */}
                <button
                  onClick={() => handleDeletePermission(role, perm)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          {/* Add Permission Form (Only for the selected role) */}
          {selectedRole === role && (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newPermission}
                onChange={(e) => setNewPermission(e.target.value)}
                placeholder="New Permission"
                className="p-2 border border-gray-300 rounded-lg w-full"
              />
              <button
                onClick={handleAddPermission}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                Add Permission
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Role Selector */}
      <div className="mt-6 flex justify-center">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full sm:w-1/2 lg:w-1/3"
        >
          <option value="">Select Role</option>
          {Object.keys(permissions).map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PermissionManagement;
