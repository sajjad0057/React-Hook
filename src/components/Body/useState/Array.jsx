import React,{ useState } from "react";

const Array=()=>{
    const [items,setItem] = useState([])
    const AddNumber = () =>{
        setItem([...items,{
            id:items.length,
            value : Math.floor(Math.random()*10)+2
        }])
    }
    console.log(items);
    const addedNumber = items.map(item=>(
        <li key={item.id} class="list-group-item" > {item.value} </li>
    ))
    return(
        <div className="container">
            <button className="btn btn-info btn-lg" onClick={AddNumber}>Add Number</button>
            <br/>
            <hr/>
            
            <ul className="list-group">
                {addedNumber}
            </ul>

        </div>
    )
}

export default Array