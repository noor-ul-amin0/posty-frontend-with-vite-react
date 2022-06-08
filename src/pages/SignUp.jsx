import { Box, Container } from "@mui/material";
import Userfront from "@userfront/react";
import { useStateMachine } from "little-state-machine";
import { Navigate, useLocation } from "react-router-dom";

Userfront.init("9ny84wyb");

const SignupForm = Userfront.build({
  toolId: "rkaanb",
});

export default function SignUp() {
  const {
    state: { isAuthenticated },
  } = useStateMachine();
  const location = useLocation();
  // const to = location.state?.from?.pathname || "/";
  // if (isAuthenticated) {
  //   return <Navigate to={to} state={{ from: location }} replace />;
  // }
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <SignupForm />
      </Box>
    </Container>
  );
}
