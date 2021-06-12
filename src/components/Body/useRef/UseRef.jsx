import React, { useRef, useEffect } from 'react'
import ClassTimer from './ClassTimer'
import Form from './Form'
import HookTimer from './HookTimer'

const UseRef = () =>  {
	const inputRef = useRef(null)
	useEffect(() => {
            console.log("Form ---->",inputRef.current); //
		inputRef.current.focus()
	}, [])
	return (
		<div className="shadow-none p-3 mb-5 mt-3 bg-light rounded container">
            <input 
            ref={inputRef} 
            placeholder="field focused when rendered this page"
            type="text"  
            style={{marginTop:"5px",width:"95%"}}
            />
            <hr/>
            <h3><i>Class Timer :</i></h3>
            <br/>
            <ClassTimer/>
            <hr/>
            <h3><i>Hook Timer :</i></h3>
            <br/>
            <HookTimer/>
            <hr />
            <Form ref={inputRef}/>  
            {/* forwardRef  */}

		</div>
	)
}

export default UseRef
