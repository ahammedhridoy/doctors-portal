import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Appointment from "../Appointment/Appointment";
import ContactForm from "../ContactForm/ContactForm";
import Hero from "../Hero/Hero";
import Info from "../Info/Info";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
