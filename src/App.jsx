import Navbar from "components/Navbar";
import About from "sections/About";
import BelowMark from "sections/BelowMark";
// import FeaturedOn from "sections/Partners";
import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";
import NFTs from "sections/NFTs";
import Product from "sections/Product";
// import Product from "sections/Product";
import Roadmap from "sections/Roadmap";
import Tokenomics from "sections/Tokenomics";
// import Tokenomics from "sections/Tokenomics";

function App() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="relative z-10">
          <div className="lg:absolute relative sm:top-8 2xl:top-1 left-0 w-full z-50">
            <Navbar />
          </div>

          <div className=" ">
          {/* <section className="section">
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
        </section> */}
            <Hero />
          </div>
          <div className=" py-2">
            <BelowMark/>

          </div>
        </div>

        <div className="" id="about">
          <About />
        </div>
        <Roadmap/>
        <Product/>

        <Tokenomics/>
        <div className=" flex justify-center items-center py-4 gap-4">
          <a href="https://birdeye.so/" target="_blank"><img src="images/bird.png" alt="" className=" bg-black rounded-xl px-2 h-[80px]" /></a>
          <a href="https://raydium.io/" target="_blank"><img src="images/rayduim.svg" alt="" className=" bg-black rounded-xl px-4  py-3 h-[80px]" /></a>


        </div>
        <div className=" mt-3">
          <NFTs/>

        </div>
 
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;
