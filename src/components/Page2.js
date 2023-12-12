import React from 'react'
import p1 from '../assests/h1.png'
import p12 from '../assests/h3.jpeg'
import p13 from '../assests/h2.png'
import P2 from './p2'
import I1 from '../assests/Frame 81.svg'
function Page2() {
  return (
    <div id="d2" className='grid grid-cols-2'>
      <div className='p-5 flex flex-col gap-10'>
        <h1 className='text-4xl md:text-6xl text-red-800 font-bold'>Mission we are working on</h1>
        <p>In the realm of healthcare, we are driven by the belief that comprehensive insights into one's health can transform lives. Our second product delves into the intricate world of blood health analysis. By leveraging advanced technologies, we are on a mission to provide individuals with a deeper understanding of their well-being through detailed CBC (Complete Blood Count) analysis. With a focus on accuracy and accessibility, we aim to empower individuals to take proactive steps towards optimal health. From detecting anemia to uncovering potential health risks, our commitment is to unlock a new era in personalized healthcare, where every drop of blood tells a meaningful story about one's overall well-being.</p>
        <p>In uniting these diverse initiatives under our overarching mission, we envision a world where agriculture flourishes sustainably, and individuals take charge of their health with informed decisions. By marrying technology with a deep sense of responsibility, we strive to be catalysts for positive change, fostering a global community that values the intrinsic connection between environmental well-being and personal health. Our journey is guided by the belief that unlocking the full potential of agriculture and healthcare is not just a technological feat; it is a commitment to a harmonious and resilient future for our planet and its inhabitants. Together, we sow the seeds of progress, cultivating a world where both crops and individuals thrive. </p>
         
         <div className='xl:mt-[20vh]'></div>

        <div className='grid grid-cols-2 gap-y-10'>
             <P2 img={I1} text="Analyze"/>
             <P2 img={I1} text="Detect"/>
             <P2 img={I1} text="Prevent"/>
             <P2 img={I1} text="Cure"/>
        </div>
      </div>
      <div className='p-5   items-center'>
        <div>
          <img src={p1} className='gap-3 w-full' alt='yo'/>
        </div>
        <div className=' mt-4 flex justify-between'>
          <img src={p12} className=' w-5/12' alt='p12'/>
          <img src={p13} className='w-5/12' alt='p13'/>          
        </div>
      </div>
    </div>
  )
}

export default Page2