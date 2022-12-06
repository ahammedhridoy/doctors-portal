import React from "react";

const ServiceDetails = ({ img, alt, cardTitle, desc }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt={alt} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{cardTitle}!</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
