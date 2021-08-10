import "../Styles/whatwecando.css";
import { useState } from "react";
import Chart from "./Chart";
import IconMessage from "./IconMessage";
import Arrow from "./Arrow";


function WhatWeCanDo() {
const [selectedIcon, setSelectedIcon]= useState("rings")


  return (
    <div class="container" style={{ fontFamily: "AvenirNext" }}>
      <IconMessage 
      selectedIcon= {selectedIcon}/> 
      <Arrow 
      setSelectedIcon={setSelectedIcon}/>
      <Chart />
    </div>
  );
}

export default WhatWeCanDo;
