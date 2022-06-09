import React from "react";
import Userfront from "@userfront/react";
import { Box, Container } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import { useStateMachine } from "little-state-machine";

Userfront.init("9ny84wyb");

const LoginForm = Userfront.build({
  toolId: "aollll",
});

export default function Login() {
  const {
    state: { isAuthenticated },
  } = useStateMachine();
  const location = useLocation();
  const to = location.state?.from?.pathname || "/";
  if (isAuthenticated) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <LoginForm />
      </Box>
    </Container>
  );
}
