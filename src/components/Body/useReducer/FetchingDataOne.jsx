import axios from 'axios'
import React,{useState,useEffect} from 'react'

const FetchingDataOne = () => {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log("response data: ",res.data);
            setLoading(false)
            setPost(res.data)
            
        })
        .catch(err=>{
            setLoading(false)
            setError("Something went wrong !")
        })
    },[])
    console.log("post :",post);

    return (
        <div>
            {loading? "Loading" :
                <ul>
                    {
                        post.map(item=>{
                            return <li>{item.title}</li>
                        })
                    }
                </ul>
            }
            {error ? error : null}
        </div>
    )
}

export default FetchingDataOne
