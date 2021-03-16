// ייבוא של ספריות של ריאקט ודום

import React from "react";

import ReactDOM from "react-dom";

// הגדרת המשתנה בתוך האפליקציה שלנו
const App = () => {
  return (
    <div
      style={{
        background: "green",
        Width: `300px`,
        height: `300px`,
        flexDirection:"column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "blue",
          Width: `200px`,
          height: `200px`,
          flexDirection:"column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "pink",
            Width: `100px`,
            height: `100px`,
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{
            background: "red",
            Width: `30px`,
            height: `30px`,
           

          }}></div>
          <div style={{
            background: "yellow",
            Width: `30px`,
            height: `30px`,
         
          }}></div>
        </div>
      </div>
    </div>
  );
};

// קישור של המשתנה שהגדרנו לקובץ
// שיציג אותו בתוך הדיב של
// רוט
ReactDOM.render(<App />, document.querySelector("#root"));
