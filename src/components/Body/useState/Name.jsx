import React,{ useState } from "react";



const SetName = () =>{
    const [name,setName] = useState({
        firstname : "",
        lastname : ""   
    })
    return(
        <div className="container">
            <form >
                <input 
                type="text"
                className="form-control"
                placeholder = "first name"
                value = {name.firstname}
                onChange = {(e)=>setName({...name,firstname:e.target.value})}
                />
                <br/>
                <br/>
                <input 
                type="text"
                className="form-control"
                placeholder = "last name"
                value = {name.lastname}
                onChange = {(e)=>setName({...name,lastname:e.target.value})}
                />
            </form>
            <hr/>
            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Your Name :</h4>
                <i>{name.firstname} {name.lastname}</i>
            </div>

        </div>
    )
}

export default SetName;