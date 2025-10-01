import React from 'react';
import Cousin from './Cousin';

const Aunty = () => {
    return (
        <div className='border-1 m-4 p-5'>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin name="Fonix"></Cousin>
                <Cousin name="Tonis"></Cousin>
            </section>
        </div>
    );
};

export default Aunty;