import Navbar from "components/Navbar";
import About from "sections/About";
// import FeaturedOn from "sections/Partners";
import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";
import Product from "sections/Product";
// import Product from "sections/Product";
import Roadmap from "sections/Roadmap";
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
        </div>

        <div className="" id="about">
          <About />
        </div>
        <Roadmap/>
        <Product/>
 
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;
