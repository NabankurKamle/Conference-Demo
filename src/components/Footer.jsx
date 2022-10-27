import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-[100vw]">
      <div className="px-5 md:px-32 py-32 footerContainer relative overflow-hidden flex justify-center w-full md:h-[380px]">
        <p
          style={{
            webkitTextFillColor: "transparent",
            webkitTextStroke: "1px",
          }}
          className="hidden md:block absolute top-10 -left-12 text-9xl text-[#FF6767]"
        >
          READY TO
          <br />
          GET STARTED ?
        </p>
        <div className="w-full relative flex flex-col">
          <input
            className="w-full backdrop-blur-[7px] px-20 py-5 outline-none rounded-full bg-transparent  text-lg"
            type="email"
            placeholder="your mail here"
          />
          <button className="px-5 md:px-12 bg-[#59CE8F] text-lg md:absolute  top-1 right-0 py-4 text-white rounded-full">
            Register Now
          </button>
        </div>
      </div>
      <div className="bg-[#59CE8F] px-5 md:px-5 py-3 flex space-x-5 md:space-x-20 text-[#004D23] font- text-lg">
        <p>Terms and conditions</p>
        <p>Privacy Policy</p>
        <p>Contact us</p>
      </div>
    </div>
  );
};

export default Footer;
