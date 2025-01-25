import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import axios from "axios";
import DoctorTable from "../components/DoctorTable";


const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment "}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
