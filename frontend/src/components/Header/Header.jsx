import "./Header.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logoimage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yphFHW1SsthmCBs3YOxyHHsOFDbsr_1pd5iG978VnCN6VPlEBKLx-WX7Kzo77zytVeY&usqp=CAU"
        />
        <h1 className="logo">Online Judge</h1>
      </div>
      <nav>
        <Link to="/signup">
          <button> Register</button>
        </Link>

        <button href="/Login"> Login</button>

        <button href="/logout">logout</button>
      </nav>
    </header>
  );
};
export default Header;
