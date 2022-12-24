import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentDetails = ({date, setDate}) => {

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 overflow-hidden ">
        <div className="hero-content flex overflow-hidden flex-col lg:flex-row-reverse ">
          <div className="flex-1 mt-56">
            <img
              src={chair}
              alt=""
              className="max-w-lg mr- rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex-1 grid place-items-center lg:place-items-start mt-10">
            <h1 className="font-bold text-3xl text-primary">Appointment</h1>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-slate-100"
            ></DayPicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
