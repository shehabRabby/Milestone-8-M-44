import React from 'react';

const SimpleForm = () => {

    const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }    

    return (
        <div className='m-20 text-center'>
            <form onSubmit={handleSubmit}>
                <input className=' h-8 w-100  bg-gray-100 px-2' name='name' type="text" placeholder='Enter name'/> <br />
                <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' name='email' type="email" placeholder='Enter email'/> <br />
                <input className='bg-gray-400 px-5 mt-2' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;