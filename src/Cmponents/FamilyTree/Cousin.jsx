import React from 'react';
import Special from './Special';
import Friend from '../Friend';

const Cousin = ({name,asset}) => {
    return (
        <div className='border-1 m-4 p-5 bg-orange-500'>
            <h3>{name}</h3>
            {
                name === "Fonix" && <Special asset={asset}></Special>
            }
            {
                name === "Tonis" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;