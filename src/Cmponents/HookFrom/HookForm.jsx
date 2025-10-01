import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {

    const [name,nameOnChange] = useInputField("");
    const [email,emailOnChange] = useInputField("");
    const [password,passwordOnChange] = useInputField("")
    const [dateTime,dateTimeOnChange] = useInputField("")
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,password,dateTime);
    }

    return (
        <div className='m-20 text-center'>
            <form onSubmit={handleSubmit}>
              <input className=' h-8 w-100  bg-gray-100 px-2' placeholder='Name' type="text" defaultValue={name} onChange={nameOnChange} /> <br />
              <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' onChange={emailOnChange} defaultValue={email} placeholder='Email' type="email" name="email" /> <br />
              <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' onChange={passwordOnChange} defaultValue={password} type="password" name="password" placeholder='password' />
              <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' onChange={dateTimeOnChange} defaultValue={dateTime} type="datetime" name="datetime" placeholder='Enter DateTime'/>
              <input className='bg-gray-400 px-5 mt-2' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;