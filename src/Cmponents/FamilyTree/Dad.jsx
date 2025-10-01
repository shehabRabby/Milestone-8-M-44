import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = () => {
    return (
        <div className='border-1 m-4 p-5'>
            <h3>Dad</h3>
           <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
           </section>
        </div>
    );
};

export default Dad;