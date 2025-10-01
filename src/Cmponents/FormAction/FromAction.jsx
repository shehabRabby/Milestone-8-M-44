import React from 'react';

const FromAction = () => {

    const handleFormAction = (formData) => {
        console.log(formData.get("name"));
        console.log(formData.get("email"));
        
    }

    return (
        <div className='m-20 text-center'>
            <form action={handleFormAction}>
                <input className=' h-8 w-100  bg-gray-100 px-2' name='name' type="text" placeholder='Enter name'/> <br />
                <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' name='email' type="email" placeholder='Enter email'/> <br />
                <input className='bg-gray-400 px-5 mt-2' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default FromAction;