export const fetchUsers = async () => [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Editor' },
  ];
  
  export const updateUser = async (id, data) => Promise.resolve();
  export const deleteUser = async (id) => Promise.resolve();
  