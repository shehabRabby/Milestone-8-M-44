import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div className='border-1 m-4 p-5 bg-blue-300 text-white'>
            <h3>Myself</h3>
            <section>
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;