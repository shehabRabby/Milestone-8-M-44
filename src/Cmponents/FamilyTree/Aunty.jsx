import React from 'react';
import Cousin from './Cousin';

const Aunty = ({asset}) => {
    return (
        <div className='border-1 m-4 p-5 bg-lime-500'>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin asset={asset} name="Fonix"></Cousin>
                <Cousin name="Tonis"></Cousin>
            </section>
        </div>
    );
};

export default Aunty;