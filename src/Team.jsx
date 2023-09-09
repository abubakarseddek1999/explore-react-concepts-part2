import { useState } from "react"

export default function Team (){
    const [ team,setTeam]=useState(11);

    const handleAdd=() =>{
        const newTeam =team +1;
        setTeam(newTeam);
    }
    const handleRemove = ()=>{
        setTeam(team-1);
    }

    return (
        <div  style ={{border: '5px solid gray', color:'white',margin:'10px', backgroundColor: 'black'}}>
            <h3>Players:{team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
            
        </div>
    )
}