import { useState } from "react";
import { BsJustify, BsXLg } from "react-icons/bs";
import "./index.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const menuClicked = () => {
    setClicked((clicked) => !clicked);
  };
  return (
    <nav className="nav_container">
      <img
        src="https://stage.learnedze.com/logo.png"
        alt="image_logo"
        className="image_logo"
      />
      <ul className={clicked ? "nav_menu active" : "nav_menu"}>
        <li className="list_item">Home</li>
        <li className="list_item">About</li>
        <li className="list_item">Courses</li>
        <li className="list_item">Trainers</li>
        <li className="list_item">Corporaters</li>
      </ul>
      <div className="sign_container">
        <a href="index.html" className="sign_in">
          Login
        </a>
        <button type="button" className="sign_up_button">
          signup
        </button>
      </div>

      <div className="menu_icon" onClick={menuClicked}>
        {clicked ? <BsXLg className="icon" /> : <BsJustify className="icon" />}
      </div>
    </nav>
  );
};
export default Header;
