import React,{useEffect,useRef} from 'react'

const Form = React.forwardRef((_,ref) => {

    return (
        <div>
            <p>
                <input ref={ref} type="text" placeholder="Enter something !" />
            </p>
            
        </div>
    )}
)



export default Form
