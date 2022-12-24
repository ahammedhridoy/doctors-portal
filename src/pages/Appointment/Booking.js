import React from "react";

const Booking = ({ service, setTreatment }) => {
  return (
    <div>
      <div className="shadow-xl card w-80 bg-slate-700 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary">{service.name}</h2>
          <p>
            {service.slots.length ? (
              <span className="text-green-500">{service.slots[0]}</span>
            ) : (
              <span className="text-red-500">No Slot avialable</span>
            )}
          </p>
          <h6 className="text-white">
            {service.slots.length}{" "}
            {service.slots.length > 1 ? "Spaces" : "Space"} Available
          </h6>
          <div className="card-actions justify-end">
            <label
              htmlFor="booking-modal"
              disabled={service.slots.length == 0}
              onClick={() => setTreatment(service)}
              className="btn text-white btn-primary"
            >
              Book appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
