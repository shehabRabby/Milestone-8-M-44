import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='border-1 m-4 p-5'>
            <h3>Uncle</h3>
           <section className='flex'>
             <Cousin name="khappa"></Cousin>
            <Cousin name="mappa"></Cousin>
           </section>
        </div>
    );
};

export default Uncle;