// ייבוא של ספריות של ריאקט ודום

import React from "react";

import ReactDOM from "react-dom";

// הגדרת המשתנה בתוך האפליקציה שלנו
const App = () => {
  return (
    <div
      style={{
        border: "5px pink solid",
        Width: `200px`,
        height: `200px`,
        marging: `50px`,
       
      }}
    >
        <h1 className="quiz title">how do you like frontend</h1>
        


        <div className="q1">
            <h3 className="q1title" >how much you like frontend</h3>

        
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>

        <div className="q2">
            <div className="q2titl">what is your favorite compiler?</div>

            <input type="text" name="" id=""/>

        </div>
      
        </div>










    </div>
  );
};

// קישור של המשתנה שהגדרנו לקובץ
// שיציג אותו בתוך הדיב של
// רוט
ReactDOM.render(<App />, document.querySelector("#root"));
