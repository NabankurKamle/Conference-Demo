import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      id="home"
      className="w-[100vw] pt-36 px-12 lg:px-36 py-24 homeContainer flex justify-center md:justify-start"
    >
      <div className="md:w-[500px] lg:w-[700px] flex flex-col items-center md:items-start justify-between ">
        <div className="text-center md:text-start md:mb-36 lg:mb-44">
          <p className="text-[#FF6767] text-3xl mb-3">Get Ready For</p>
          <p className="text-white text-3xl">
            International Conference on Computer Science, Machine Learning and
            Big Data (ICCSMLBD)
          </p>
        </div>
        <div className="text-center md:text-start md:relative">
          <p className="text-white text-lg italic">Organised by</p>
          <p className="text-[#FF6767] text-2xl">Academy Of Technology</p>
          <button className="text-white px-4 py-2  bg-[#FF1E00] mt-5 rounded-lg md:absolute md:-right-32">
            Register Now
          </button>
        </div>
      </div>
      <div className="md:flex items-center justify-center space-x-5 absolute bottom-0 md:right-16 lg:right-36 hidden">
        <div className="w-[300px]">
          <span className="text-[#858585] text-2xl mr-3">Meet</span>
          <p className="text-white text-2xl inline-block">
            <Typewriter
              words={["Speaker Name"]}
              loop={Infinity}
              typeSpeed={250}
              deleteSpeed={250}
              delaySpeed={1000}
            />
          </p>
          <p className="text-white text-lg italic pt-1">
            Working Profession, Chief guest
          </p>
        </div>
        <div>
          <img
            className="h-[550px] w-[320px]"
            src="/img/speakerDynamic.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
