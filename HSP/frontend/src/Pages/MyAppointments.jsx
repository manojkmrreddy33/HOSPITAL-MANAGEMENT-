import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorTable from "../components/DoctorTable";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const getUserAppointments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/UserApp",
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setAppointments(response.data.appointments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserAppointments();
  }, []);

  return (
    <>
      <div className="appointments">
        {appointments.length > 0 ? (
          <DoctorTable doctorData={appointments} />
        ) : (
          <h1>No Appointments</h1>
        )}
      </div>
    </>
  );
};

export default MyAppointments;
