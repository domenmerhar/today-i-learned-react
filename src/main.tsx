import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./GlobalStyles.ts";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Toaster
        position="top-center"
        toastOptions={{ duration: 5000 }}
        containerStyle={{ fontSize: "1.6rem" }}
      />
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>
);
