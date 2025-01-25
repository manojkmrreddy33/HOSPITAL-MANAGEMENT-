import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password,  role: "Admin" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");

        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section
        style={{
          boxShadow: "0 4px 8px rgba(138, 43, 226, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f4f4",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <img
          src="/logo.png"
          alt="logo"
          style={{
            width: "300px",
            height: "auto",
            marginBottom: "20px",
          }}
        />
        <h1
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          WELCOME
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#555",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Only Admins Are Allowed To Access These Resources!
        </p>
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "400px",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "1rem",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "1rem",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                color: "#fff",
                border: "none",
                backgroundColor: "#8a2be2",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.background = "#0056b3")}
              onMouseOut={(e) => (e.target.style.background = "#007bff")}
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
  
};

export default Login;
