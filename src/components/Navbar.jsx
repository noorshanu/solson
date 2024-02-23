import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="z-[100]  lg:bg-transparent mt-2 sm:mt-0 ">
        <div className="container-wrapper border-none sm:border-2 border-[#fff] bg-black h-14 lg:h-[5rem] 2xl:h-20 rounded-2xl flex justify-between lg:justify-normal lg:grid lg:grid-cols-[1fr_16rem_1fr] gap-8 items-center">
          <div className="items-center justify-evenly text-base font-medium text-white hidden lg:flex">
            <a
              href="/"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base uppercase"
            >
              BUY NOW
            </a>
            <a
              href="#road"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base uppercase"
            >
             Roadmap
            </a>
          </div>

          <a href="/">
            <img
              src="/images/logo.png"
              className="h-[70px] sm:h-auto w-auto mx-auto"
              alt=""
            />
          </a>

          <div
            className=" flex lg:hidden"
          
          >
          
          <div className="flex items-center gap-5 justify-center lg:justify-end">
             <a href="https://t.me/solsonso" target="_blank">
              <img src="TELEGRAM.png" alt="" className="w-auto h-[40px]" />
             </a>
         

             <a href="https://x.com/solson404/" target="_blank">
              <img src="X.png" alt="" className="w-auto h-[40px]" />
             </a>
            </div>
          </div>

          <div className="items-center justify-evenly text-base font-medium text-white hidden lg:flex">
            <a
              href="#token"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base uppercase"
            >
               TOKENOMICS
            </a>
            <a
              href="#prod"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base uppercase"
            >
           Products
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-[16rem] h-screen z-[10000] bg-white border-l-4 border-primary pt-6 px-8 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-[16rem]"
        }`}
      >
        <div className="flex items-center justify-between mb-8 z-50">
          <img src="/images/logo.png" className="w-full max-w-[9rem]" alt="" />

          <button className="text-black text-2xl" onClick={toggleSidebar}>
            <IoClose />
          </button>
        </div>

        <div className="space-y-5 flex flex-col text-left items-start text-black font-medium">
          {/* <Link
            to="/"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
           BUY NOW
          </Link> */}
          {/* <Link
            to="#"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            WHITEPAPER
          </Link> */}
          {/* <Link
            to="roadmap"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            ROADMAP
          </Link> */}
          {/* <Link
            to="tokenomics"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            TOKENOMICS
          </Link> */}
        </div>
      </div>

      <div
        className={`black-screen z-[900] ${sidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}

export default Navbar;
