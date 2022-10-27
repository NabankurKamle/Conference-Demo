import "./App.css";
import About from "./components/About";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Sponsers from "./components/Sponsers";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Schedule />
      <Speakers />
      <Members />
      <Sponsers />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
