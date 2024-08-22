import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import SuspenseContent from "./components/SuspenseContent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseCotent />}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Suspense>
  </React.StrictMode>
);
