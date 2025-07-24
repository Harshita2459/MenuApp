// client/src/pages/AdminHome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();

  const handleUploadMenu = () => navigate('/menu');
  const handleViewMenu = () => navigate('/view-menu');
  const handleSeeRequests = () => navigate('/requests');

  return (
    <div>
      <header>
        <h1>Hello, User!</h1>
      </header>

      <section>
        <h2>MenuPage</h2>
        <button onClick={handleUploadMenu}>Upload a New Menu</button>
        <button onClick={handleViewMenu}>View Menu</button>
        <button onClick={handleSeeRequests}>See Requested Changes</button>
      </section>

      <section>
        <p>[Any image placeholder here]</p>
      </section>
    </div>
  );
};

export default AdminHome;
