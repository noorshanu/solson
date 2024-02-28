function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#ffd51e]">
      <div className="container-wrapper lg:h-full flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <img
          src="images/cloud1.png"
          alt=""
          className="x1 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[160px]  "
        />
        <img
          src="images/star.png"
          alt=""
          className="floating  absolute top-[20%] sm:top-[46%] left-3 sm:left-[10%] w-auto h-[100px] "
        />
        <img
          src="images/star2.png"
          alt=""
          className="floating  absolute top-4 sm:top-[46%] right-[10%] w-auto h-[100px] "
        />
        <img
          src="images/cloud2.png"
          alt=""
          className="x2 absolute w-auto h-[170px] hidden sm:block"
        />
        <img
          src="images/cloud2.png"
          alt=""
          className="x4 absolute w-auto h-[150px] hidden sm:block"
        />
        <img
          src="images/cloud1.png"
          alt=""
          className="x3 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[170px]  "
        />
        <img
          src="/images/hero-img.png"
          className="w-full lg:w-[60%] lg:h-full  mt-0 sm:mt-[8rem] "
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          alt=""
        />
           <div className=" flex   sm:hidden  justify-center items-center  mt-7 sm:mt-8">
          <div className=" relative">
            <a
              href="/"
              className="  btn-main  font-bold text-sm sm:text-xl rounded-full px-12 py-2"
            >
            Trade
            </a>
          </div>
     
        </div>
        <div className=" text-center mt-4 sm:mt-0">
          <h1 className="text-center text-[#8431d6] text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  max-w-4xl mx-auto"> SolSon  - Solana's True child in Simpson Memes! </h1>
          <p className=" max-w-3xl  text-black text-xl mx-auto">
          SolSon, the child of Solana, brings Simpson characters to life in the blockchain world, creating a unique and playful vibe. Solson will be solana’s community one stop entry into lambo gang.
          </p>
        </div>
        <div className=" hidden   sm:flex  justify-center items-center gap-6 mt-7 sm:mt-8">
          <div className=" relative">
            <a
              href="https://raydium.io/" target="_blank"
              className="  btn-main  font-bold text-sm sm:text-xl rounded-full px-12 py-2"
            >
            Trade
            </a>
          </div>

          <div className=" relative">
            <a
           href="https://www.dextools.io/app/en/solana/pair-explorer/RE8gJW69vmdzZMDTEY1C6KAArFx89WVgtSRtjvWp7SZ?t=1709103392432" target="_blank"
              className=" "
            >
            <img src="images/dextool.png" alt="" className="h-[45px] btn-main   font-bold text-sm sm:text-xl rounded-full px-8 py-2" />
            </a>
          </div>
     
        </div>
         
        <div className="hidden sm:flex items-center gap-5 justify-center lg:justify-end mt-4">
             <a href="https://t.me/solsonso" target="_blank">
              <img src="TELEGRAM.png" alt="" className="w-auto h-[55px]" />
             </a>
          

             <a href="https://x.com/solson404/" target="_blank">
              <img src="X.png" alt="" className="w-auto h-[55px]" />
             </a>
          
            </div>
      </div>
    </section>
  );
}

export default Hero;
