import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import bcg from '../assests/Image (1).svg'
import Image from '../components/Image'
import Home1 from '../components/Home'
import Page2 from '../components/Page2'
import Chosebest from '../components/Chosebest'
import ContactUs from '../components/ContactUs'
import Team from '../components/Team'

//create navbar again stupid
function Home() {

 

  return (
    <div className='home'>
      <Navbar/>
      
     <div className='flex flex-col gap-y-[10vw] '>
      <div id="d1" className='app-container mt-[2vh]'>
      <Image/>
      <Home1/>
      </div>
      <br/>
     
      <Page2/>
      <Team />
      <ContactUs />
      <Footer />
      </div>
    </div>
  )
}

export default Home