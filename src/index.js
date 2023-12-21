import React from "react";
import ReactDOM  from "react-dom";
import {Student, Teachers} from "./student";

ReactDOM.render(
  <div>
    <Student name = "Sabina" id = "126"/>,
    <Teachers name="Indra Chaudhary" id = "1452"/>
  </div>,
  document.getElementById("root")
)