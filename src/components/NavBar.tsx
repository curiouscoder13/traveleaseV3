import { useState } from "react";
import "../styles/NavBar.css";
import { useMediaQuery } from "../utils/useMediaQuery";

export default function NavBar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(max-width: 480px)");

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="/">
          Travel<span>Ease</span>
        </a>
      </div>
      {!matches && (
        <>
          <div className="navbar-links">
            <a className="navbar-link" href="/">
              Home
            </a>
            <a className="navbar-link" href="/about">
              About
            </a>
            <a className="navbar-link" href="/contact">
              Contact
            </a>
          </div>
          <div className="navbar-login">Login</div>
        </>
      )}
      {matches && (
        <div
          className="navbar-menu-icon"
          onClick={() => setToggled((prevToggle) => !prevToggle)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            ></path>
          </svg>
        </div>
      )}
      {toggled && (
        <div className="navbar-menu-mobile">
          <div
            className="navbar-close-icon-mobile"
            onClick={() => setToggled((prevToggle) => !prevToggle)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="navbar-links-mobile">
            <a className="navbar-link-mobile" href="/">
              Home
            </a>
            <a className="navbar-link-mobile" href="/about">
              About
            </a>
            <a className="navbar-link-mobile" href="/contact">
              Contact
            </a>
          </div>
          <div className="navbar-login-mobile">Login</div>
        </div>
      )}
    </div>
  );
}
