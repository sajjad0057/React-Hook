import React, {useState,useEffect} from 'react'
import axios from "axios";

const FatchingData = () => {
    const [post,setPost] = useState({ })
    const [id, setId] = useState(null)
    const [jokesNo,setJokesNo] = useState(null)

    const handleJokesFetch = ()=>{
        setJokesNo(id)
    }
    //console.log("post",post);
    useEffect(()=>{
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${jokesNo}`)
        .then(res=>{
            
            setPost(res.data)
            
            
        })
        .catch(err=>console.log(err.message))
        
        
    },[jokesNo])

    let joke = null

    if(jokesNo !==null){
        joke = (
            <div className="bg-light mt-3">
                <h3><i>Title : {post.title}</i></h3>
                <hr/>
                <p>
                    {post.body}
                </p>

            </div>
        )
    }
    
    return (
        <div class="shadow p-3 mb-5 bg-light rounded container">
            <input 
            type="text"
            value = {id}
            placeholder = "set jokes id here"
            onChange = {(e)=>setId(e.target.value)}
            />
            <br/>
            <button onClick={handleJokesFetch} className="btn btn-info mt-2">get Jokes</button>
            {joke}


        </div>

    )
}

export default FatchingData
