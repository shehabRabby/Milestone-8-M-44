import React, { createContext } from 'react';
import Grandpa from './Grandpa';

 export const AssetContext = createContext('');

const FamilyTree = () => {

    const asset = 'diamond';
    const newAsset = 'Gold';
    const anotherAsset = 'Platineum';
    return (
        <div className="m-20 text-center family-tree border-1 p-10 bg-green-200 ">
            <h2>Family Tree</h2>
            <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
           
        </div>
    );
};

export default FamilyTree;