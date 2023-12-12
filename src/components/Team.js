import React from 'react'
//import img2 from '../images/logo.svg'
import ar from '../assests/aryan sharma.jpg'
import na from '../assests/nav.jpg'
import ak from '../assests/anreen kour.jpg'
function Team() {
  return (
    <div id='d3' className='screen3 text-center pt-4'>
         <h1 >Meet Us</h1>
         <div className='justify-center flex ]'>
         <div className='flex w-[100%] justify-center pb-[100px] gap-6 '>
            <div className='yo w-[25%] justify-center flex flex-col gap-[15px] contactbox'>
                <p>Hello, I am a frontend developer </p>
                <img src={na} alt='yo' className='h-[140px] w-[100px] self-center  '/>
                <h2>Navdeep Shah</h2>
            </div>
            <div className='yo  w-[25%] justify-center flex flex-col gap-[15px] contactbox'>
                <p>Hello, I am a backend developer </p>
                <img src={ar}  alt='yo' className='  h-[140px] w-[120px] self-center'/>
                <h2>Aryan Sharma</h2>
            </div>
            <div className='yo  w-[25%] justify-center flex flex-col gap-[15px] contactbox'>
                <p>Hello,I am a data engineer </p>
                <img src={ak} alt='yo'  className='  h-[140px] w-[130px]  self-center'/>
                <h2>Anreen Kaur</h2>
            </div>
         </div>
         </div>
    </div>
  )
}

export default Team