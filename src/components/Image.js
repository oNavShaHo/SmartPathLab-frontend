import React,{useRef} from 'react'

function Image() {

  const {height,width} = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 1440 737" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 736.683C0 736.683 308.277 638.338 508.292 635.378C708.306 632.417 812.106 712.307 987.909 692.045C1163.71 671.784 1441 557.167 1441 557.167V0H0V736.683Z" fill="#76b5c5"/>
</svg>
    </div>
  )
}

export default Image