import React from 'react';
import Grandpa from './Grandpa';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunty from './Aunty';

const FamilyTree = () => {

    const asset = 'diamond';
    return (
        <div className="m-20 text-center family-tree border-1 p-10 ">
            <h2>Family Tree</h2>
            <Grandpa></Grandpa>
           
        </div>
    );
};

export default FamilyTree;