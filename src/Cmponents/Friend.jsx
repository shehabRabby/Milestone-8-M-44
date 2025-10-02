import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree/FamilyTree';

const Friend = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div className='border-1 m-4 p-5 bg-purple-700 text-white'>
            <h3>Friend</h3>
            <p>Family Got: {money}</p>
        </div>
    );
};

export default Friend;