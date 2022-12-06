import React from "react";
import chair from "../../../assets/images/chair.png";
import appointment from "../../../assets/images/appointment-bg.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${appointment})` }}>
      <div className="hero min-h-screen overflow-hidden	 bg-slate-50 bg-opacity-80">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="mt-32">
            <img
              src={chair}
              alt=""
              className="md:mx-8 lg:mx-8  max-w-100% ml-0  rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid place-items-center lg:place-items-start">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the
            </p>
            <button className="btn text-white btn-primary">
              Get Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
<h1>Hero Section</h1>;
