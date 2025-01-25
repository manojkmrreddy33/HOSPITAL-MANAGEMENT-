import React, { useState } from "react";

const AddNewAdmin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleAddNewAdmin = (e) => {
    e.preventDefault();
    // Handle the logic for adding a new admin here
  };

  return (
    <section
      className="page"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "30px 10px",
        backgroundColor: "#f7f7f7",
      }}
    >
      <section
        className="container form-component add-admin-form"
        style={{
          width: "100%",
          maxWidth: "700px",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(138, 43, 226, 0.3)",
        }}
      >
        <img
          src="/logo.png"
          alt="logo"
          className="logo"
          style={{
            height: "150px",
            objectFit: "contain",
          }}
        />
        <h1
          className="form-title"
          style={{
            fontSize: "28px",
            color: "white", 
            backgroundColor: "#8a2be2",
            marginBottom: "20px",
            padding: "10px",
            borderRadius:"10px",
            textAlign: "center",
          }}
        >
          ADD NEW ADMIN
        </h1>

        <form onSubmit={handleAddNewAdmin}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                padding: "12px",
                width: "48%",
                borderRadius: "6px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                backgroundColor: "#fafafa",
                outline: "none",
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{
                padding: "12px",
                width: "48%",
                borderRadius: "6px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                backgroundColor: "#fafafa",
                outline: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "12px",
                width: "48%",
                borderRadius: "6px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                backgroundColor: "#fafafa",
                outline: "none",
              }}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                padding: "12px",
                width: "48%",
                borderRadius: "6px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                backgroundColor: "#fafafa",
                outline: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              type="number"
              placeholder="NFC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              style={{
                padding: "12px",
                width: "48%",
                borderRadius: "6px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                backgroundColor: "#fafafa",
                outline: "none",
              }}
            />
            <input
              type={"date"}
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={{
                padding: "12px",
                width: "48%",
                borderRadius: "6px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                backgroundColor: "#fafafa",
                outline: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{
                padding: "12px",
                width: "48%",
                borderRadius: "6px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                backgroundColor: "#fafafa",
                outline: "none",
              }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "12px",
                width: "48%",
                borderRadius: "6px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                backgroundColor: "#fafafa",
                outline: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#8a2be2", // Violet color
                color: "white",
                fontSize: "1rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.3s",
              }}
            >
              ADD NEW ADMIN
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddNewAdmin;
