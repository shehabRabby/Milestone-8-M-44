import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div className='border-1 m-4 p-5 bg-neutral-400'>
            <h3>Brother</h3>
            <button onClick={() => setMoney(money+1000)} className='border-1 bg-red-600 px-4 text-white'>Add 1000 TK</button>
        </div>
    );
};

export default Brother;