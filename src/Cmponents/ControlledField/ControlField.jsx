import React, { useState } from 'react';

const ControlField = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState('')

    const handleSubmit = (e) =>{
         e.preventDefault();
         console.log(name,email,password)
         //submit korar pore bolbe
          if(password.length < 6){
            setError("Password Must be 6 Character or more.")
        }else{
            setError("")
        }

    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }



    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        //Type korar sathe sathe bolbe
        if(password.length < 6){
            setError("Password Must be 6 Character or more.")
        }else{
            setError("")
        }
    }
    return (
        <div className='m-20 text-center'>
            <form onSubmit={handleSubmit}>
                <input className=' h-8 w-100  bg-gray-100 px-2' defaultValue={name} onChange={handleNameChange} name='name' type="name"  placeholder='Enter name' required/> <br />
                <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' name='email' type="email" onChange={handleEmailChange} defaultValue={email} placeholder='Enter email' required/> <br />
                <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' name='password' type="password" placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required/> <br />
                <input className='bg-gray-400 px-5 mt-2' type="submit" value="Submit"/>

                <p><small className='text-red-600 px-5 mt-2'>{error}</small></p>
            </form> 
        </div>
    );
};

export default ControlField;