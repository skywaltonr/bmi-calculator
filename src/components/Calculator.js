const Calculator = () =>{
    return(
        <div className='p-3 border-2 rounded-md max-w-lg mx-auto my-3'>
            <div>
                <h1 className="mx-auto w-fit">BMI Calculator</h1>
                <form className="flex flex-col">
                    <label className="font-semibold mb-1">
                        Height
                    </label>
                    <input type="text" className="p-1 border-2 rounded-md mb-2"/>
                    <label className="font-semibold mb-1">
                        Weight
                    </label>
                    <input type="text" className="p-1 border-2 rounded-md mb-2"/>
                    <label className="font-semibold mb-1">
                        Age
                    </label>
                    <input type="text" className="p-1 border-2 rounded-md mb-2"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Calculator