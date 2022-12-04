import "./App.css";
import Navabr from "./pages/Shared/Navbar/Navabr";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import Reviews from "./pages/Reviews/Reviews";
import DentalServices from "./pages/DentalServices/DentalServices";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Navabr></Navabr>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
        <Route path="/Reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/dental-services"
          element={<DentalServices></DentalServices>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
