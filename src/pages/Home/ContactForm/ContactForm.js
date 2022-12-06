import React from "react";

const ContactForm = () => {
  return (
    <section>
      <div className="bg-slate-600 my-20 overflow-hidden">
        <div className="text-center text-white mt-20">
          <h1 className="text-2xl mb-5 font-bold text-primary">
            CONTACT US
          </h1>
          <h4 className="text-5xl">Always Connect with us </h4>
        </div>

        <div className="grid grid-flow-row gap-4 place-items-center lg:my-20 p-20 lg:p-0">
          <input
            type="text"
            placeholder="Name"
            className="input input-primary w-full  max-w-xl"
          />
          <input
            type="email"
            placeholder="Enter e-mail"
            className="input input-primary w-full max-w-xl"
          />
          <textarea
            className="textarea w-full max-w-xl textarea-primary mb-5"
            placeholder="Message"
          ></textarea>
          <button className="btn px-10 text-white btn-primary">SUBMIT</button>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
