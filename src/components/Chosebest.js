import React,{useState} from 'react'
import I1 from '../assests/27431020_7317077 1.svg'

import I3 from '../assests/5151519_51508 1.svg'
function Chosebest() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=' '>
      <h1 className='text-center text-4xl md:text-6xl text-[#023F3A] font-bold'>Use our other products too</h1>
    <div className='flex md:mt-6 xl:h-[100vh] p-10'>
        <div 
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}

        className=' h-[40vh] w-full   '>
          
        {isHovered ? (
        <img className= ' h-fit w-full lg:[200px]' src={I1} alt="Hover Image" />
      ) : (
        <img className= '  h-fit     w-full' src={I1} alt="Default Image" />
      )}
        
        </div>
        <div className= 'h-[40vh]  w-full  '><img  className=' h-fit  w-full m-0' src={I3} alt='as' /></div>
        
    </div>
    </div>
  )
}

export default Chosebest