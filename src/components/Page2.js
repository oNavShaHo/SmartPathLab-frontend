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
        <p>
At Hemastats, our dedication to enhancing individual well-being extends beyond information accessibility. We recognize the importance of a holistic approach to health, encompassing both physical and mental aspects. In our pursuit of creating a comprehensive health ecosystem, we curate content that not only educates on medical matters but also delves into mental and emotional wellness. Through articles, webinars, and interactive tools, we provide insights into stress management, mindfulness practices, and lifestyle choices that contribute to overall health. Our commitment to your well-being goes beyond reactive measures, and we actively promote preventive care. We offer personalized health recommendations based on individual profiles, fostering a proactive and preventive approach to maintaining good health.</p>
        <p>Furthermore, we understand the significance of community support in the health journey. Hemastats provides a platform for individuals to connect, share experiences, and offer encouragement. Through forums, discussion boards, and virtual support groups, our community facilitates a sense of belonging and encouragement. We believe that a supportive community is a crucial aspect of well-being, and our platform is designed to be a virtual haven where individuals can seek advice, share triumphs, and find inspiration on their health journeys.</p>
        <p>In alignment with our commitment to accessibility, we continuously work to expand our language offerings, ensuring that our resources are available in multiple languages to cater to a diverse global audience. Hemastats is not just a health information hub; it's a dynamic, evolving ecosystem that grows alongside your health needs and aspirations. Your journey to a healthier, happier life is unique, and we are here to provide the guidance, resources, and community support you need every step of the way.</p>
         
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