import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({asset}) => {

    const newAsset = useContext(AssetContext);
    console.log(newAsset);

    return (
        <div  className='border-1 m-4 p-5 bg-pink-500'>
            <h3>Special</h3>
            <p>Asset: {asset}</p>
            <p>New Asseet: {newAsset}</p>
        </div>
    );
};

export default Special;