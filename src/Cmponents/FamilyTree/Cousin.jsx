import React from 'react';
import Special from './Special';

const Cousin = ({name,asset}) => {
    return (
        <div className='border-1 m-4 p-5 bg-orange-500'>
            <h3>{name}</h3>
            {
                name === "Fonix" && <Special asset={asset}></Special>
            }
        </div>
    );
};

export default Cousin;