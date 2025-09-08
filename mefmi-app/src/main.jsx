import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import App from "./pages/App.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import RankingsPage from "./pages/RankingsPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import UploadPage from "./pages/UploadPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/rankings",
    element: <RankingsPage />,
  },
  {
    path: "/compare",
    element: <ComparePage />,
  },
  {
    path: "/upload",
    element: (
      <PrivateRoute>
        <UploadPage />
      </PrivateRoute>
    ),
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  // Handle the error, e.g., throw or log
  console.error("Root element not found");
}
