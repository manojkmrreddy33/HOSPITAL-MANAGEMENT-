import React, { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const gotoHomePage = () => {
    navigateTo("/");
  };
  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
  };
  const gotoMessagesPage = () => {
    navigateTo("/messages");
  };
  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
  };
  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
  };

  const sidebarStyle = {
    display: isAuthenticated ? "flex" : "none",
    flexDirection: "column",
    backgroundColor: "#f4f4f4", // Light background color
    width: "150px",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0, // Sidebar always stays on the left
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    zIndex: 1000,
  };

  const iconStyle = {
    fontSize: "3rem", // Increased font size for larger icons
    color: "#333",
    cursor: "pointer",
    margin: "10px 0",
    transition: "color 0.3s ease, transform 0.3s ease", // Smooth transition for color and scale
  };

  const hoverStyle = {
    color: "#8a2be2", // Violet color on hover
    transform: "scale(1.1)", // Slightly larger icon on hover
  };

  return (
    <nav style={sidebarStyle}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TiHome
          onClick={gotoHomePage}
          onMouseEnter={() => setHoveredIcon("home")}
          onMouseLeave={() => setHoveredIcon(null)}
          style={hoveredIcon === "home" ? { ...iconStyle, ...hoverStyle } : iconStyle}
        />
        <FaUserDoctor
          onClick={gotoDoctorsPage}
          onMouseEnter={() => setHoveredIcon("doctor")}
          onMouseLeave={() => setHoveredIcon(null)}
          style={hoveredIcon === "doctor" ? { ...iconStyle, ...hoverStyle } : iconStyle}
        />
        <MdAddModerator
          onClick={gotoAddNewAdmin}
          onMouseEnter={() => setHoveredIcon("admin")}
          onMouseLeave={() => setHoveredIcon(null)}
          style={hoveredIcon === "admin" ? { ...iconStyle, ...hoverStyle } : iconStyle}
        />
        <IoPersonAddSharp
          onClick={gotoAddNewDoctor}
          onMouseEnter={() => setHoveredIcon("addDoctor")}
          onMouseLeave={() => setHoveredIcon(null)}
          style={hoveredIcon === "addDoctor" ? { ...iconStyle, ...hoverStyle } : iconStyle}
        />
        <AiFillMessage
          onClick={gotoMessagesPage}
          onMouseEnter={() => setHoveredIcon("messages")}
          onMouseLeave={() => setHoveredIcon(null)}
          style={hoveredIcon === "messages" ? { ...iconStyle, ...hoverStyle } : iconStyle}
        />
        <RiLogoutBoxFill
          onClick={handleLogout}
          onMouseEnter={() => setHoveredIcon("logout")}
          onMouseLeave={() => setHoveredIcon(null)}
          style={hoveredIcon === "logout" ? { ...iconStyle, ...hoverStyle } : iconStyle}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
