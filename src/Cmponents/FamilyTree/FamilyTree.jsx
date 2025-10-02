import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';

 export const AssetContext = createContext('');
 export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money,setMoney] = useState(0);

    const asset = 'diamond';
    const newAsset = 'Gold';
    
    return (
        <div className="m-20 text-center family-tree border-1 p-10 bg-green-200 ">
            <h2>Family Tree</h2>
            <h2>Total Family Money : {money}</h2>
            <MoneyContext value={[money,setMoney]}>
                <AssetContext.Provider value={newAsset}>
                   <Grandpa asset={asset}></Grandpa>
               </AssetContext.Provider>
            </MoneyContext>
           
        </div>
    );
};

export default FamilyTree;