// ייבוא של ספריות של ריאקט ודום

import React from "react"

import ReactDOM from "react-dom"

// הגדרת המשתנה בתוך האפליקציה שלנו 
const App = ()=> {
    return <div>
            <ul>
            <li>hi there</li>
            <li>starting good things with react </li>
            <li> lets go !!! </li>
            </ul>
    
         </div>

};

// קישור של המשתנה שהגדרנו לקובץ 
// שיציג אותו בתוך הדיב של
// רוט
ReactDOM.render(
  <App />, 
  document.querySelector('#root') 
);