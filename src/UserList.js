import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Yash', contactNumber: '1234567890', address: 'Miroli' },
    { id: 2, name: 'Sahir', contactNumber: '9876543210', address: 'Narol' },
  ]);

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: 'Pavan',
      contactNumber: '9876543210',
      address: 'Vejalpur',
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <span>{user.contactNumber}</span>
            <span>{user.address}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add New User</button>
    </div>
  );
}

export default UserList;