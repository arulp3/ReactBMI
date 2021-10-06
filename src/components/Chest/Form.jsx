import React from 'react'

import { useState } from 'react'
import '../Chest/form.css'

function Form() {

  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [bmiResult, setbmiResult] = useState(null)

  const [result, setResult] = useState("Please enter the Values above")

  function getBMi(){
      let bmi = (Math.floor(weight/(height/100)**2))
      setbmiResult(bmi)
      if(bmi< 18.5){
        setResult('Underweight')
      } else if (bmi<= 24.9){
        setResult("NormalWeight")
      } else if (bmi <= 29.9){
          setResult("OverWeight")
      } else {
          setResult("Obesity")
      }
    
      console.log(bmi)
  }

  



  return (
    <div className="forms">
        <div className="formChild">
            
        
       <label> Weight</label> <br />
      <input value={weight} type="number" name="" id="" placeholder="Enter your Weight in Kgs" onChange={(e) => setWeight(e.target.value)}/> <br />
      <label> Height</label> <br />
      <input value={height} type="number" name="" id="" placeholder="Enter your Height in Cms" onChange={(e) => setHeight(e.target.value)} /> <br />
      <button disabled = {weight === null} className="btn btn-primary" onClick= {getBMi} >Calculate BMI</button>
      
      <h1>{bmiResult}</h1>  
      <h2>{result}</h2>
      </div>
    </div>
  )
}

export default Form
