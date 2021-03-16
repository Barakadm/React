// ייבוא של ספריות של ריאקט ודום

import React from "react";

import ReactDOM from "react-dom";

import Buttons from "../src/component/buttons"
// הגדרת המשתנה בתוך האפליקציה שלנו
const App = () => {
  return (
    <div>
      utton
     
    <Buttons />
  
    
       </div> )};

// קישור של המשתנה שהגדרנו לקובץ
// שיציג אותו בתוך הדיב של
// רוט
ReactDOM.render(<App />, document.querySelector("#root"));
