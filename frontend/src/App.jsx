import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/Layout";
import Signup from "./components/Singup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);

export default App;
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
