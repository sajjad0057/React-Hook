import React from 'react'

const Count = ({ text , count }) => {
    console.log(`Rendering ${text}`);
    return (
        <div>
            <button className="btn btn-danger btn-lg">{text} - {count}</button>
            
        </div>
    )
}

export default React.memo(Count)
