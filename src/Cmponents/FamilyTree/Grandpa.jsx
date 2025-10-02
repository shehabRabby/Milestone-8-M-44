import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunty from "./Aunty";

const Grandpa = ({asset}) => {

    
  return (
    <div className="border-1 mt-2 bg-teal-500 text-white">
      <h3>Grand Pa</h3>
      <section className="flex justify-between">
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Aunty asset={asset}></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;
