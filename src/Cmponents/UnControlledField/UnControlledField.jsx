import React, { useRef } from 'react';

const UnControlledField = () => {

    const emailRef = useRef("");
    const passRef = useRef("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        const password = passRef.current.value;

        console.log(email,password);
    }


    return (
        <div className='m-20 text-center'>
            <form onSubmit={handleSubmit}>
                <input className=' h-8 w-100  bg-gray-100 px-2' name='email' type="email" ref={emailRef} placeholder='Enter name'/> <br />
                <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' name='email' type="password" ref={passRef} placeholder='Enter Pass'/> <br />
                <input className='bg-gray-400 px-5 mt-2' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default UnControlledField;