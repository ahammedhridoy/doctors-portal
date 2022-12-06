import React from "react";

const TestimonialDetails = ({testimonial}) => {
  return (
    <section>
      <div className=" p-16 shadow-lg">
        <div className="mb-10">
            <p>{testimonial.desc}</p>
        </div>

        <div className="flex justify-center items-center ">
            <div className="mr-5">
                <img src={testimonial.img} alt="" />
            </div>
            <div>
                <h1 className="text-primary text-xl font-bold">{testimonial.Name}</h1>
                <h4>{testimonial.Title}</h4>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialDetails;
