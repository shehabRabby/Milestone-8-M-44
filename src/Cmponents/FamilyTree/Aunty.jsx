import React, { useCallback, useContext } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunty = ({asset}) => {
    const [money,setMoney] = useContext(MoneyContext);
    const handleAddMoney = () => {
        setMoney(money+5000);
    }
    return (
        <div className='border-1 m-4 p-5 bg-lime-500 text-white'>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin asset={asset} name="Fonix"></Cousin>
                <Cousin name="Tonis"></Cousin>
                  <button onClick={handleAddMoney} className='border-1 bg-red-600 px-4 text-white'>Add 5000 TK</button>
            </section>
        </div>
    );
};

export default Aunty;