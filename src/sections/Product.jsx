import Title from "components/Title";
import React from "react";

function Product() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="text-center">
          <Title
            className="text-black"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
           Our Products
          </Title>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between gap-3 my-12 relative z-10"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <img
              src="images/cream.png"
              alt=""
              className=" -top-[120%] absolute -left-[40%] -z-10 w-auto h-12 sm:h-[800px]"
            />
          </div>

          <div className=" text-center">
            <img
              src="images/1.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
              Bongo AI Music <br /> Generator
            </h3>
          </div>
          <div className=" text-center">
            <img
              src="images/2.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
              Bongo Yield  <br />Farming
            </h3>
          </div>

          <div className=" text-center">
            <img
              src="images/3.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
              Bongo Concerts
            </h3>
          </div>
          <div className=" text-center">
            <img
              src="images/4.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
              Bongo Music NFTs <br />
              Trading Platform
            </h3>
          </div>
        </div>
        <div className="relative flex justify-center ml-0 sm:ml-14">
          <img
            src="/images/btn-green.png"
            className="w-[220px] h-auto"
            alt=""
          />
          <h1 className=" absolute top-[32%] left-[37%] sm:left-[46%]  font-bold text-xl">
            BUY NOW
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Product;
