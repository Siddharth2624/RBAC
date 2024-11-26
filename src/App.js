import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';

const App = () => {
  // State to store roles
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin" },
    { id: 2, name: "Editor" },
    { id: 3, name: "Viewer" },
  ]);

  // Function to add a role
  const addRole = (role) => {
    const newRole = { id: roles.length + 1, ...role };
    setRoles([...roles, newRole]);
  };

  // Function to delete a role
  const deleteRole = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  return (
    <Router>
      {/* Layout Component wraps the Routes */}
      <Layout>
        <Routes>
          {/* Define all routes for the app */}
          <Route
            path="/"
            element={<UserManagement />}
          />
          <Route
            path="/roles"
            element={
              <RoleManagement
                roles={roles}
                onAddRole={addRole}
                onDeleteRole={deleteRole}
              />
            }
          />
          <Route
            path="/permissions"
            element={<PermissionManagement />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
