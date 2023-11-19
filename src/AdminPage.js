// AdminPage.js
import React from 'react';

const AdminPage = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is the admin page.</p>
    </div>
  );
};

export default AdminPage;
