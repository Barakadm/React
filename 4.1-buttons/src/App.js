import React from "react";

import ReactDOM from "react-dom";

import Buttons from "./component/buttons";
// הגדרת המשתנה בתוך האפליקציה שלנו
const App = () => {
  return (
    <div>
    
      <Buttons />
    </div>
  );
};

// קישור של המשתנה שהגדרנו לקובץ
// שיציג אותו בתוך הדיב של
// רוט
export default App;
