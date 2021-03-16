// ייבוא של ספריות של ריאקט ודום

import React from "react";

import ReactDOM from "react-dom";

import Cards from "./component/cards"
// הגדרת המשתנה בתוך האפליקציה שלנו
const App = () => {
  return (
    <div>
      utton
     
    <Cards link="https://images-na.ssl-images-amazon.com/images/I/612KpcXcFBL._AC_UL160_SR160,160_.jpg"
    title="my choice" />
    <Cards link="https://images-na.ssl-images-amazon.com/images/I/61jZ27iFBfL._AC_UL160_SR160,160_.jpg"
    title="wife choice" />
  
    
       </div> )};

// קישור של המשתנה שהגדרנו לקובץ
// שיציג אותו בתוך הדיב של
// רוט
ReactDOM.render(<App />, document.querySelector("#root"));
