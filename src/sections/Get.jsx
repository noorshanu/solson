function Get() {
  return (
    <div className="bg-sky-blue relative z-10">
      <div className="relative">
        <img
          src="/images/lip.png"
          className="absolute left-1/2 top-[32%] -translate-x-1/2 z-10 w-[16%]"
          alt=""
        />

        <img
          src="/images/pink-wave.svg"
          className="w-full scale-x-[1.2] rotate-180"
          alt=""
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[30%] -z-10 lg:bg-primary hidden lg:block">
        <img
          src="/images/pink-wave.svg"
          className="absolute bottom-[70%] left-1/2 -translate-x-1/2 w-full scale-x-[1.2]"
          alt=""
        />
      </div>

      <main className="pt-10 pb-16 lg:pb-0 lg:pt-20 container-wrapper grid md:grid-cols-2">
        <div className="relative">
          <img src="/images/get-phone.png" className="w-full" alt="" />
        </div>

        <div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl text-primary font-dream lh-1_3 mb-4">
            Get <br /> BarbieLove
          </h1>

          <p className="text-black font-daughter text-xl font-semibold mb-8">
          $PEPIE is a firecracker. Totally obsessed with PEPE but craving
            that viral meme spotlight. It's gonna hit that $100M market cap
            faster than you can imagine. Say goodbye to Pepe, 'cause $PEPIE
            is making history and her NFTs?
            They're gonna be hotter than a summer heatwave. 
          </p>
          <p className="text-black font-daughter text-xl font-semibold mb-8">
            Hold onto your hats 'cause we're blasting to the moon!
          </p>

          <button className="py-4 px-10 rounded-full bg-primary border-2 border-primary transition-all duration-200 hover:bg-transparent hover:text-primary relative">
            <img
              src="/images/heart.png"
              className="absolute top-0 left-0 translate-y-[-30%] translate-x-[-30%] w-[40%] pointer-events-none select-none"
              alt=""
            />
            Buy Now
          </button>
        </div>
      </main>
    </div>
  );
}

export default Get;
