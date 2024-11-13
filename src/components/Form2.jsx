import React from 'react'

import { useRef } from 'react'


let Username;
let Password;


const Forms2 = () => {

const UsernamRef = useRef(null)
const PasswordRef = useRef(null)

  return (
    
    <form onSubmit={(event) => {
        event.preventDefault()
        console.log({
            Username,Password
        });

        UsernamRef.current.value = ''
        PasswordRef.current.value = ''
        
    }}>
        <div className='div'>
            
            <label> Username :</label>
            <input onChange={() => Username = UsernamRef.current.value }
            ref={UsernamRef}
            type="text" placeholder='Enter your Name ...'/>
        </div>
        <div>
            <label> Password :</label>
            <input  onChange={() => Password = PasswordRef.current.value}
            ref={PasswordRef}
            type="password" placeholder='Enter your Password ...'/>
        </div>


    <div>
        <button type="submit" className='btn btn-primary'> Login</button>
    </div>

    </form>    


)
}

export default Forms2