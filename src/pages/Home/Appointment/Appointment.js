import React from "react";
import doctor from "../../../assets/images/doctor.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="my-32 bg-slate-600 flex justify-center items-center">
      <div className="flex-1 hidden lg:block mt-[-200px]">
        <img src={doctor} className=" " alt="" />
      </div>

      <div className="text-white flex-1 mx-auto p-5 lg:p-0 grid place-items-center lg:place-items-start">
        <h1 className="text-2xl my-2 font-bold">APPOINTMENT</h1>
        <h2 className="text-4xl my2 font-bold">Box Office News!</h2>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br />
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Appointment;
