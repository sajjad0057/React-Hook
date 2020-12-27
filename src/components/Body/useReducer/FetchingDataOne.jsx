import React,{useState,useEffect} from 'react'
import axios from 'axios'

const FetchingDataOne = (props) => {
    console.log("FetchingDataOne Props:",props);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            //console.log("response data: ",res.data);
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
        <div className="shadow p-3 mb-5 mt-3 bg-white rounded">
            <h3> <i>this is from FetchingDataOne that's using useState to fetch data</i></h3>
             <hr/>
            {loading? "Loading" :
                <ul>
                    {
                        post.map(item=>{
                            return <li key={item.id}>{item.title}</li>
                        })
                    }
                </ul>
            }
            {error ? error : null}
        </div>
    )
}

export default FetchingDataOne
