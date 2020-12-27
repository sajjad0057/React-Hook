  
import React, { useState, useMemo } from 'react'

const UseMemo=()=> {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while (i <  2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

	return (
		<div>
			<div>
        <button onClick={incrementOne} className="btn btn-warning btn-lg mb-3 mt-3">Count One - {counterOne}</button>
        <br/>
        <span style={{border:"1px solid red",padding:"5px",borderRadius:"3px"}}>{isEven ? 'Even' : 'Odd'}</span>
			</div>
			<div>
        <button onClick={incrementTwo} className="btn btn-warning btn-lg mt-3">Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default UseMemo
