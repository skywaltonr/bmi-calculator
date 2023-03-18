import { useEffect, useState } from "react"

const Calculator = () =>{
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [age, setAge] = useState(0)
    const [BMI, setBMI] = useState(0)
    const [error, setError] = useState(false);
    const calculateBMI = (event) =>{
        event.preventDefault()
        if(weight == 0 || age == 0 || height ==0){
            setError(true)
            setBMI(null)
            return
        }
        setError(false)
        setBMI(weight / (height / 100)^2)
    }
    const calculateRange = () =>{
        if(BMI < 18.5) return "Underweight"
        if(BMI < 24.9) return "Helathy Weight"
        if(BMI < 29.9) return "Overweight"
        return "Obese"
    }
    return(
        <div className='p-12 mt-12 bg-slate-100 drop-shadow-lg border-2 border-black rounded-lg max-w-lg mx-auto my-3drop-shadow-md'>
            <div className="">
                <h1 className="mx-auto w-fit font-semibold text-xl">BMI Calculator</h1>
                <form className="flex flex-col" onSubmit={(event) => calculateBMI(event)}>
                    <label className="font-semibold mb-1">
                        Height (cm)
                    </label>
                    {error && height == 0 && <p className="text-red-500 text-sm mb-1">Please enter your height</p>}
                    <input value={height} onChange={(e)=> setHeight(e.target.value)} type="number" className="p-2 border-2 rounded-md border-black mb-2"/>
                    <label className="font-semibold mb-1">
                        Weight (kg)
                    </label>
                    {error && weight == 0 && <p className="text-red-500 text-sm mb-1">Please enter your weight</p>}
                    <input value={weight} onChange={(e)=> setWeight(e.target.value)} type="number" className="p-2 border-2 rounded-md border-black mb-2"/>
                    <label className="font-semibold mb-1">
                        Age
                    </label>
                    {error && age == 0 && <p className="text-red-500 text-sm mb-1">Please enter your age</p>}
                    <input value={age} onChange={(e)=> setAge(e.target.value)} type="number" className="p-2 border-2 rounded-md border-black mb-2"/>
                    <button className="rounded-md bg-blue-400 hover:bg-blue-300 border-2 border-black hover:border-blue-300  p-2 my-2" type="submit">Submit</button>
                </form>
                <div className="text-center my-1">
                    <h2 className="font-semibold font text-lg">Your BMI is:</h2>
                    {BMI && <><p className="text-2xl font-semibold">{BMI}</p>
                    <p>Your weight catergory is: {calculateRange()}</p></>}
                </div>
            </div>
        </div>
    )
}
export default Calculator