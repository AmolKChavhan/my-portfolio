import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme";
import { FaMoon, FaSun } from "react-icons/fa";
import { navbarOptions } from "./NavData";
import "./Navbar.css";

const Navbar = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav
      className={`navbar ${theme === "dark" ? "navbar-dark" : "navbar-light"}`}
    >
      <div className="navbar-brand">AKC</div>
      <ul className="navbar-links">
        {navbarOptions.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <button className="theme-button" onClick={handleToggleTheme}>
        {theme === "dark" ? (
          <FaMoon style={{ color: "whitesmoke" }} />
        ) : (
          <FaSun style={{ color: "darkgoldenrod" }} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
