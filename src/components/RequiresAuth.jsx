import { useStateMachine } from "little-state-machine";
import { Navigate, useLocation } from "react-router-dom";

export default function RequiresAuth({ children }) {
  const {
    state: { isAuthenticated, accessToken },
  } = useStateMachine();
  const location = useLocation();
  if (!isAuthenticated && !accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
