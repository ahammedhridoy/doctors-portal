import React from "react";
import people1 from "../../../assets/images/people-1.png";
import people2 from "../../../assets/images/people-2.png";
import people3 from "../../../assets/images/people-3.png";
import TestimonialDetails from "./TestimonialDetails";

const Testimonial = () => {
  const testimonials = [
    {
      _id: 1,
      desc: "It is a long established fact that by the readable content of a lot layou The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      Name: "Winson Herry",
      Title: "California",
    },
    {
      _id: 2,
      desc: "It is a long established fact that by the readable content of a lot layou The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      Name: "Winson Herry",
      Title: "California",
    },
    {
      _id: 3,
      desc: "It is a long established fact that by the readable content of a lot layou The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      Name: "Winson Herry",
      Title: "California",
    },
  ];

  return (
    <section>
      <div className="">
        <div className="text-center">
          <h1 className="py-4 text-2xl font-bold text-primary">TESTIMONIAL</h1>
          <h4 className="text-5xl">What’s Our Patients Says</h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 mx-4">
          {
            testimonials.map(testimonial => <TestimonialDetails
            key={testimonial._id}
            testimonial={testimonial}
            ></TestimonialDetails>)
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
