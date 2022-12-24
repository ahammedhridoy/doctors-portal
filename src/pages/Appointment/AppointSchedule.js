import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import Booking from "./Booking";
import BookingModal from "./BookingModal";

const AppointSchedule = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section>
      <div className="my-20">
        <div className="text-center text-2xl text-primary font-bold my-10">
          <h1>Available Appointments on {format(date, "PP")}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {services.map((service) => (
            <Booking
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Booking>
          ))}
        </div>
        {treatment && (
          <BookingModal
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AppointSchedule;
