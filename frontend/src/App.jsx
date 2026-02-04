import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserList from './pages/admin/UserList';
import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyle';

// Create a basic GlobalStyle if it doesn't exist yet, or just ignore import for now
// But good practice to have it. I'll create it in next step or inline it?
// I'll create a dummy GlobalStyle file next or just remove import if not creating.
// I'll create it.

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UserList />} />
              {/* Placeholders for future routes */}
              <Route path="/inventory" element={<div>Inventory Page (Coming Soon)</div>} />
              <Route path="/pos" element={<div>POS Page (Coming Soon)</div>} />
              <Route path="/reports" element={<div>Reports Page (Coming Soon)</div>} />
              <Route path="/settings" element={<div>Settings Page (Coming Soon)</div>} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
