import React from 'react'
import Marquee from "react-fast-marquee";

function NFTs() {
  return (
   <section className=' py-8'>
    <Marquee>
        <img src="images/about/img1.jpeg" alt="" className='mx-auto rounded-lg   px-4 h-[300px]'/>
        <img src="images/about/img2.jpeg" alt="" className='mx-auto rounded-lg   px-4  h-[300px]'/>
        <img src="images/about/img3.jpeg" alt="" className='mx-auto rounded-lg   px-4 h-[300px]'/>
        <img src="images/about/img4.jpeg" alt="" className='mx-auto rounded-lg   px-4 h-[300px]'/>
        <img src="images/about/img5.jpeg" alt="" className='mx-auto rounded-lg   px-4 h-[300px]'/>
        <img src="images/about/img6.jpeg" alt="" className='mx-auto rounded-lg   px-4 h-[300px]'/>
        <img src="images/about/img7.jpeg" alt="" className='mx-auto rounded-lg   px-4 h-[300px]'/>
        <img src="images/about/img8.jpeg" alt="" className='mx-auto rounded-lg   px-4 h-[300px]'/>
    </Marquee>
   </section>
  )
}

export default NFTs