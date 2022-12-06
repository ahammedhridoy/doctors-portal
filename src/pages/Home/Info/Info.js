import React from "react";
import timer from "../../../assets/images/timer.png";
import visit from "../../../assets/images/visit.png";
import phone from "../../../assets/images/phone.png";

const Info = () => {
  return (
    <div className="my-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:text-left  gap-5">
        <div className="bg-primary mx-auto text-white rounded  lg:flex sm:items-center px-8 py-8 ">
          <div className="">
            <img className="" src={timer} alt="" />
          </div>

          <div className="lg:ml-2">
            <h4 className="text-2xl">Opening Hours</h4>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>

        <div className="bg-slate-500  text-white rounded lg:flex sm:items-center mx-auto px-8 py-8">
          <div>
            <img src={visit} alt="" />
          </div>

          <div className="lg:ml-2">
            <h4 className="text-2xl">Opening Hours</h4>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>

        <div className="bg-primary rounded text-white lg:flex sm:items-center mx-auto px-8 py-8">
          <div>
            <img src={phone} alt="" />
          </div>

          <div className="lg:ml-2">
            <h4 className="text-2xl">Opening Hours</h4>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
      </div>

      {/* New system of info */}
    </div>
  );
};

export default Info;
