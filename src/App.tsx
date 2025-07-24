/* eslint-disable react-refresh/only-export-components */

import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoute";
import LoginPage from "./pages/loginPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import GuestPage from "./pages/GuestPage";

/* eslint-disable @typescript-eslint/no-unused-vars */
 const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
       
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute roles={['admin']}>
              <AdminPage />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/user" 
          element={
            <ProtectedRoute roles={['admin', 'user']}>
              <UserPage/>
            </ProtectedRoute>
          } 

        />
        <Route 
          path="/guest" 
          element={
            <ProtectedRoute roles={['admin', 'user', 'guest']}>
              <GuestPage />
            </ProtectedRoute>
          } 
        />
        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;