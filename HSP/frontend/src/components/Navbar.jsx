import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <nav className="container" >
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links" >
          <Link to="/" onClick={() => setShow(false)}>
            <span>Home</span>
          </Link>
          <Link to="/appointment" onClick={() => setShow(false)}>
            <span>Appointment</span>
          </Link>
          <Link to="/myappointment" onClick={() => setShow(false)}>
            <span>My Appointment</span>
          </Link>
          <Link to="/" onClick={() => setShow(false)}>
            <span>Buy medicine</span>
          </Link>
          <Link to="/about" onClick={() => setShow(false)}>
            <span>About</span>
          </Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="loginBtn btn" onClick={goToLogin}>
            Login
          </button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow((prev) => !prev)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
