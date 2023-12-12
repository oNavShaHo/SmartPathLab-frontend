import React from 'react'
import { useState } from 'react'
import Navbar from './navbar';

import Ans from './Ans';


export default function Form() {
  const [dd,setDD]=useState();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    sex: 'males',
    age: -1,
    "White Blood Cell (WBC)": -1,
    "Red Blood Cell (RBC)": -1,
    "Hemoglobin (Hb)": -1,
    "Hematocrit (HCT)":-1,
    "Mean Cell Volume (MCV)":-1,
    "Mean Cell Hemoglobin (MCH)":-1,
    "Mean Cell Hemoglobin Concentration (MCHC)":-1,
    "Red Cell Distribution Width (RDW)":-1,
    "Platelet Count" : -1,
    "Mean Platelet Volume (MPV)": -1

  });

  function handleChange(e) {
    const { name, value } = e.target;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e){
    e.preventDefault();
    const requestData = {
      info: {
        age: formData.age,
        sex: formData.sex,
      },
      report: {}
    };
  
    for (const [key, value] of Object.entries(formData)) {
      if (value !== -1) {
        requestData.report[key] = value;
      }
    }
  
    // Send a POST request with the requestData
    fetch('https://smart-path-lab.onrender.com/cbc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data, if needed

       // console.log('Response data:', data);
        setDD(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
       <Navbar/>

      {!dd?(<div className='flex bg-green-900'>
      <div className="bg-white mx-auto w-11/12 sm:w-9/12  md:w-7/12 my-5 rounded-sm">
        <div className="text-4xl text-center font-semibold mx-12 my-8">
           CBC Report Analyser
        </div>
        <hr className='w-11/12 mx-auto' />
        <div className='my-4 mx-12'>

          <form onSubmit={handleSubmit}>
            <div className=' col-span-2 font-semibold text-gray-800 mb-2 text-lg'>
              Full Name
            </div>
            <div className=' grid grid-cols-1 space-y-2 md:grid-cols-2 md:space-x-4 md:space-y-0 '>
              <div>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="text" name="firstName" id="firstName" required />
                <label htmlFor="firstName" className='text-gray-400 text-sm'> First Name</label>
              </div>
              <div>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb-1 rounded-sm px-2' type="text" name="lastName" id="lastName" required />
                <label htmlFor="lastName" className='text-gray-400 text-sm'> Last Name</label>
              </div>
            </div>
            <div className=' grid grid-cols-1 space-y-2 md:grid-cols-2 md:space-x-4 md:space-y-0 mt-4'>
            <div>
              <label htmlFor="sex" className="text-gray-500 font-semibold">What is your gender?</label>
              <select onChange={handleChange} className="block border-2 w-full mb-1 h-10 px-2 rounded-sm" name="sex" id="sex">
                <option value="males">Male</option>
                <option value="females">Female</option>
              </select>
            </div>
              <div>
                <label htmlFor="lastName" className=' font-semibold text-gray-500'> Age</label>
                <input onChange={handleChange} className='block border-2 w-full  leading-9 mb-1 px-2 rounded-sm' type="number" name="age" id="age"  required/>
              </div>
            </div>
            <p className='text-lg font-semibold text-gray-800 mt-8'>Report parameters</p>
            <hr className=' mx-auto mb-8' />
            <div className=' grid grid-cols-1 space-y-2 md:grid-cols-2 md:space-x-4 md:space-y-0 '>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">White Blood Cell (WBC)</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="number" name="White Blood Cell (WBC)" id="wbc" />
              </div>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">Red Blood Cell (RBC)</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="text" name="Red Blood Cell (RBC)" id="rbc" />
              </div>
            </div>
            <div className=' grid grid-cols-1 space-y-2 md:grid-cols-2 md:space-x-4 md:space-y-0 '>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">Hemoglobin (Hb):</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="number" name="Hemoglobin (Hb)" id="hb" />
              </div>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">Hematocrit (HCT)</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="text" name="Hematocrit (HCT)" id="hct" />
              </div>
            </div>
            <div className=' grid grid-cols-1 space-y-2 md:grid-cols-2 md:space-x-4 md:space-y-0 '>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">Mean Cell Volume (MCV)</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="number" name="Mean Cell Volume (MCV)" id="mcv" />
              </div>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">Mean Cell Hemoglobin (MCH)</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="text" name="Mean Cell Hemoglobin (MCH)" id="mch" />
              </div>
            </div>
            <div className=' grid grid-cols-1 space-y-2 md:grid-cols-2 md:space-x-4 md:space-y-0 '>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">Mean Cell Hemoglobin Concentration (MCHC):</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="number" name="Mean Cell Hemoglobin Concentration (MCHC)" id="mchc" />
              </div>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">Red Cell Distribution Width (RDW)</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="text" name="Red Cell Distribution Width (RDW)" id="rdw" />
              </div>
            </div>
            <div className=' grid grid-cols-1 space-y-2 md:grid-cols-2 md:space-x-4 md:space-y-0 '>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">Platelet Count</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="number" name="Platelet Count" id="platelet" />
              </div>
              <div>
                <label htmlFor="sex" className="text-gray-500 font-semibold">Mean Platelet Volume (MPV)</label>
                <input onChange={handleChange} className='block border-2 w-full leading-9 mb rounded-sm px-2' type="text" name="Mean Platelet Volume (MPV)" id="mpv" />
              </div>
            </div>
            <div className="flex my-8">
              <button className='bg-green-800  text-white px-4 py-2 rounded-md mx-auto' type="submit">Submit</button>
            </div>
            </form>
        </div>
      </div>
    </div>):(
      <Ans dataa={dd}/>
    )}
     
    
    </div>
  )
}
