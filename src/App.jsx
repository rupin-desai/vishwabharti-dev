import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import ContactPage from "./pages/ContactPage";
import BookPage from "./pages/BookPage";
import ProgramPage from "./pages/ProgramPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "learn",
        element: <LearnPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "book",
        element: <BookPage />,
      },
      {
        path: "program",
        element: <ProgramPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
