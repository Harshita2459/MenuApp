import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminHome from './pages/AdminHome';
import UserHome from './pages/UserHome';
import ProtectedRoute from './components/ProtectedRoute';
import MenuPage from './pages/MenuPage'; 
import UploadMenu from './pages/UploadMenu';
import ViewMenu from './pages/ViewMenu';
import Requests from './pages/Requests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/upload-menu" element={<UploadMenu />} />
      <Route path="/view-menu" element={<ViewMenu />} />
      <Route path="/requests" element={<Requests />} />
        <Route
          path="/AdminHome"
          element={
            <ProtectedRoute role="admin">
              <AdminHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/UserHome"
          element={
            <ProtectedRoute role="user">
              <UserHome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
