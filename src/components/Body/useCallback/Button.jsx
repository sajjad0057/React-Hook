import React from 'react'

const Button = ({ handleClick, children}) => {
    console.log("Rendering Button - ",children);
    return (
        <div>
            <button onClick={handleClick} className="btn btn-info btn-lg mt-2">
                {children}

            </button>
            
        </div>
    )
}

export default React.memo(Button)
