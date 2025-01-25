import Slider from "react-slick";
import MedicineCard from "../components/MedicineCard";
import { NextArrow, PrevArrow } from "../components/CustomArrows";

const MedicineSection = () => {
  const medicines = [
    {
      name: "Paracetamol 500mg",
      price: 25,
      originalPrice: 50,
      discount: "50%",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Ibuprofen 400mg",
      price: 40,
      originalPrice: 80,
      discount: "50%",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Cough Syrup 100ml",
      price: 60,
      originalPrice: 120,
      discount: "50%",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Vitamin D Tablets",
      price: 80,
      originalPrice: 160,
      discount: "50%",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Calcium Supplement",
      price: 100,
      originalPrice: 200,
      discount: "50%",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Pain Relief Balm",
      price: 45,
      originalPrice: 90,
      discount: "50%",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const sliderSettings = {
    dots: false, 
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 style={{ margin: "10px 20px", fontSize: "20px", fontWeight: "bold" }}>
        Minimum 50 Percent Off
      </h2>
      <Slider {...sliderSettings}>
        {medicines.map((medicine, index) => (
          <MedicineCard key={index} {...medicine} />
        ))}
      </Slider>
    </div>
  );
};

export default MedicineSection;