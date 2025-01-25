import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", fullName); // Updated to fullName
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      await axios
        .post("http://localhost:4000/api/v1/user/doctor/addnew", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFullName(""); // Updated to setFullName
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "30px 10px",
        backgroundColor: "#f7f7f7",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 4px 8px rgba(138, 43, 226, 0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "#8a2be2",
            fontSize: "24px",
            color: "white",
            width: "400px",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            margin: "50px auto",
            display: "block",
            position: "relative",
            transform: "translateY(-50%)",
          }}
        >
          REGISTER A NEW DOCTOR
        </h1>

        <form onSubmit={handleAddNewDoctor}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={docAvatarPreview ? docAvatarPreview : "/docHolder.jpg"}
                alt="Doctor Avatar"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <input
                type="file"
                onChange={handleAvatar}
                style={{
                  marginTop: "10px",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <input
                type="text"
                placeholder="Full Name" // Updated to Full Name
                value={fullName} // Updated to fullName
                onChange={(e) => setFullName(e.target.value)} // Updated to setFullName
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
              <input
                type="number"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
              <input
                type="number"
                placeholder="NFC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
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
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
              <select
                value={doctorDepartment}
                onChange={(e) => setDoctorDepartment(e.target.value)}
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                style={{
                  padding: "12px 20px",
                  color: "white",
                  backgroundColor: "#8a2be2",
                  fontSize: "1rem",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                Register New Doctor
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddNewDoctor;
