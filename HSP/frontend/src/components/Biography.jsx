import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          We are a dedicated healthcare institution committed to providing exceptional medical care with compassion, integrity, and expertise. Our mission is to improve the health and well-being of our community by offering comprehensive medical services, state-of-the-art facilities, and a team of highly skilled professionals.
          </p>
          <p>We are all in 2024!</p>
          <p>
          We are more than just a healthcare facility – we are a trusted partner in your health journey. Whether you need emergency care, specialized treatments, or preventive services, we are here to support you every step of the way. Our hospital is equipped with state-of-the-art technology and cutting-edge medical advancements to ensure the best outcomes for our patients.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
