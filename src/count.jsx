import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0);

    const handleAdd=()=>{
        const newCount = count+1;
        setCount(newCount)
    }

    const handleReduce=()=>{
        const newCount = count-1;
        setCount(newCount);
    }
    return(
        <div style ={{border: '5px solid gray', color:'white',margin:'10px', backgroundColor: 'black'}}>
            <h3>
                counter: {count}
            </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}