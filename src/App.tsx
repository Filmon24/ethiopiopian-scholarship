import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import Scholarships from "./pages/Scholarships";
import ScholarshipDetail from "./pages/ScholarshipDetail";
import Support from "./pages/Support";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!user || !user.emailVerified) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/roadmap"
          element={
            <PrivateRoute>
              <Roadmap />
            </PrivateRoute>
          }
        />
        <Route
          path="/scholarships"
          element={
            <PrivateRoute>
              <Scholarships />
            </PrivateRoute>
          }
        />
        <Route
          path="/scholarships/:id"
          element={
            <PrivateRoute>
              <ScholarshipDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/support"
          element={
            <PrivateRoute>
              <Support />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
