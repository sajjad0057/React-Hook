import React from 'react'

const Title = () => {
    console.log("Rendering Title");
    return (
        <div>
            <h4><i>useCallback Hook</i></h4>
            
        </div>
    )
}

export default React.memo(Title)
