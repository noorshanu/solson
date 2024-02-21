import React from 'react'
import Marquee from "react-fast-marquee";

function Partners() {
  return (
    <div>
        <div className=' '>
            <div className='relative'>
                
                <div className=' text-center '>
                    <h1 className=' text-2xl sm:text-4xl  font-dream  uppercase'>BONGO CAT Partners</h1>

                </div>
            </div>

            <div className=' mt-5 '>
            <Marquee autoFill={true} >

                
                <img src="images/nerve.png" alt="" className=' h-10 mx-5 sm:w-auto  ' />
                <img src="images/coin.png" alt="" className=' h-20 mx-5  sm:w-auto  '/>
                <img src="images/dex.png" alt="" className=' h-20 ml-5  sm:w-auto mx-5 '/>
                <img src="images/okk.png" alt="" className=' h-20 ml-5  sm:w-auto mx-5 '/>
                <img src="images/pink.png" alt="" className=' h-20  ml-5 sm:w-auto mx-5 '/>
                <img src="images/coinsult.svg" alt="" className=' h-10 ml-5  sm:w-auto mx-5 '/>
                <img src="images/solid.png" alt="" className=' h-12 ml-5  sm:w-auto mx-5 '/>
                <img src="images/gate.svg" alt="" className=' h-12 ml-5  sm:w-auto mx-5 '/>
                <img src="images/uniswap.png" alt="" className=' h-12 ml-5  sm:w-auto mx-5 '/>
              
               <img src="images/dextool.png" alt="" className=' h-12 ml-5  sm:w-auto mx-5 '/>  
</Marquee>

            </div>

        </div>
    </div>
  )
}

export default Partners
