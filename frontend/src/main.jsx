import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/contact.jsx";
import Github from "./Github/Github.jsx";
import SignUp from "./Pages/SignUp.jsx";
import PlayGroundIDE from "./Playground/PlayGroundIDE.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//       },
//       {
//         path: "signIn",
//         element: <SignIn />,
//       },
//       {
//         path: "signup",
//         element: <SignUp />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="github" element={<Github />} />
      <Route path="PlayGroundIDE" element={<PlayGroundIDE />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition="Bounce"
    />
    <RouterProvider router={router} />
  </StrictMode>
);
