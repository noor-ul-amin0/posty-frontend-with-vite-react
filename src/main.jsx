import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
export const queryClient = new QueryClient();
import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
// create a state management global store using little-state-machine
createStore({
  accessToken: null,
  isAuthenticated: false,
  user: null,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateMachineProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    <DevTool />
  </StateMachineProvider>
);
