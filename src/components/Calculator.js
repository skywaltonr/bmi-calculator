import { useState } from "react"

const Calculator = () =>{
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [age, setAge] = useState(0)
    const [BMI, setBMI] = useState(0)
    
    const calculateBMI = (event) =>{
        event.preventDefault()
        setBMI(weight / (height / 100)^2)
    }
    return(
        <div className='p-3 border-2 rounded-md max-w-lg mx-auto my-3'>
            <div>
                <h1 className="mx-auto w-fit font-semibold">BMI Calculator</h1>
                <form className="flex flex-col" onSubmit={(event) => calculateBMI(event)}>
                    <label className="font-semibold mb-1">
                        Height (cm)
                    </label>
                    <input value={height} onChange={(e)=> setHeight(e.target.value)} type="number" className="p-1 border-2 rounded-md mb-2"/>
                    <label className="font-semibold mb-1">
                        Weight (kg)
                    </label>
                    <input value={weight} onChange={(e)=> setWeight(e.target.value)} type="number" className="p-1 border-2 rounded-md mb-2"/>
                    <label className="font-semibold mb-1">
                        Age
                    </label>
                    <input value={age} onChange={(e)=> setAge(e.target.value)} type="number" className="p-1 border-2 rounded-md mb-2"/>
                    <button className="bg-blue-200 border-2 border-black rounded-md p-2 my-1" type="submit">Submit</button>
                </form>
                <div className="text-center my-1">
                    <h2 className="font-semibold">Your BMI is:</h2>
                    {BMI && <>{BMI}</>}
                </div>
            </div>
        </div>
    )
}
export default Calculator