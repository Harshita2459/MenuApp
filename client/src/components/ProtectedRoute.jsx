import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (!token) {
    return <Navigate to="/" />;
  }

  if (role && role !== userRole) {
    // Not authorized for this page
    return <Navigate to="/" />;
  }

  return children;
}
