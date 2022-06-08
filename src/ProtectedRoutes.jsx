import Userfront from "@userfront/react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
