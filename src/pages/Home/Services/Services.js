import React from "react";
import ServiceDetails from "./ServiceDetails";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";

const Services = () => {
  return (
    <div className="">
      {/* service titile section */}
      <div className="text-center">
        <h1 className="text-2xl py-5 text-primary font-bold">OUR SERVICES</h1>
        <h4 className="text-4xl py-5 font-semibold">Services We Provide</h4>
      </div>

      {/* service Main section */}

      <div className="grid py-8 grid-cols-1 lg:grid-cols-3">
        <div className=" mx-auto py-4">
          <ServiceDetails
            img={cavity}
            cardTitle="Fluoride Treatment"
            alt="cavity"
            desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the "
          ></ServiceDetails>
        </div>

        <div className="grid-cols-1 lg:grid-cols-3 mx-auto py-4">
          <ServiceDetails
            img={fluoride}
            alt="Fluoride"
            cardTitle="Cavity Filling"
            desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the "
          ></ServiceDetails>
        </div>

        <div className="grid-cols-1 lg:grid-cols-3 mx-auto py-4">
          <ServiceDetails
            img={whitening}
            alt="whitening"
            cardTitle="Teath Whitening"
            desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the "
          ></ServiceDetails>
        </div>
      </div>

      {/* service bottom section */}
      <div className="hero min-h-screen overflow-hidden">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="mr-5 mt-32">
            <img
              src={treatment}
              className="max-w-sm rounded-lg  lg:h-full shadow-2xl"
              alt="treatment"
            />
          </div>

          <div className="grid place-items-center lg:place-items-start ">
            <h1 className="text-4xl lg:text-left text-center font-bold">
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="py-6 text-center lg:text-left">
              It is a long established fact that a reader will be distracted by{" "}
              <br />
              the readable content of a page when looking at its layout. <br />{" "}
              The point of using Lorem Ipsumis that it has a more-or-less normal{" "}
              <br />
              distribution of letters,as opposed to using ‘Content here, cont
            </p>
            <button className="btn  text-white btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
