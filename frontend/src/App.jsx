import { useEffect } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./Redux/Features/User/userSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/isloggedin")
      .then((res) => {
        dispatch(addUser(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
