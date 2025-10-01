import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunty from "./Aunty";

const Grandpa = () => {

    
  return (
    <div className="border-1 mt-2">
      <h3>Grand Pa</h3>
      <section className="flex justify-between">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;
