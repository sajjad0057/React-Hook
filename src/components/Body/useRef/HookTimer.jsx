import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef()
  //console.log("interValRef",interValRef);
  useEffect(() => {
    interValRef.current = setInterval(() => {  
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      clearInterval(interValRef.current)
    }
  }, [])
  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button> 
      {/* here setInterval() access using interValRef.current ref, 
       otherwise we cann't access in the function of useEffect  local area
     */}
    </div>
  )
}

export default HookTimer