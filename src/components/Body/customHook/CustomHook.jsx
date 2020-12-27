import React from 'react'
import DocTitleOne from './DocTitleOne'
import DocTitleTwo from './DocTitleTwo'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import UserForm from './UserForm'



const CustomHook = () => {
    return (
        <div class="shadow-none p-3 mb-5 mt-3 bg-light rounded container">
            <hr/>
            <h1><i>Practicing Custom Hook :</i></h1>
            <hr/>
            <DocTitleOne/>
            <hr/>
            <DocTitleTwo/>
            <hr/>
            <CounterOne/>
            <hr/>
            <CounterTwo/>
            <hr/>
            <UserForm/>

            
        </div>
    )
}

export default CustomHook
