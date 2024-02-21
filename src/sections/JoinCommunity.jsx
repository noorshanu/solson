import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";

const Button = ({ children, className, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`py-3 px-4 rounded-full bg-[rgba(255,255,255,.2)] text-sm transition-all duration-200 hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </a>
  );
};

const SocialLink = ({ children }) => {
  return (
    <a
      href="/"
      className="w-[4em] h-[4em] rounded-full bg-white flex items-center justify-center text-[100%] text-black"
    >
      {children}
    </a>
  );
};

function JoinCommunity() {
  return (
    <section className="pt-24 relative z-10 overflow-hidden ">
      <div className="container-wrapper">
        {/* <div className=" flex items-center justify-between"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-2 lg:mb-20 text-center lg:text-left space-y-6 lg:space-y-0">
          <div className=" max-w-xl">

          <img src="images/foot-logo.png" alt="" className="h-[16rem]" />
          </div>
          <div className=" w-full  max-w-xl  space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-dream lh-1_4">
              JOIN OUR COMMUNITY
            </h1>

            <input
              type="text"
              className="flex-1 h-14 bg-white rounded-full px-6 text-black w-full text-base"
              placeholder="Your email"
            />

            <div className="flex items-center gap-5 justify-center lg:justify-end">
             <a href="/">
              <img src="TELEGRAM.png" alt="" className="w-auto h-[55px]" />
             </a>
             <a href="/">
              <img src="WEB.png" alt="" className="w-auto h-[55px]" />
             </a>

             <a href="/">
              <img src="X.png" alt="" className="w-auto h-[55px]" />
             </a>
            </div>
          </div>
        </div> */}

        <div className="flex  items-center justify-center ">
          <p className="text-center text-sm  font-bold">
            All rights reserved | by SolSon 2023-24
          </p>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
