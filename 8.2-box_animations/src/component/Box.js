// נוסיף שורת ייבוא מריאקט
import React from "react";
import "./Box.css";

const Box = (props) => {
  return (
    <div
      className="box1 slide-in-left"
      style={{ width: props.width, height: props.height }}
    >
      
    </div>
  );
};

// ניצור שורת ייצוא שנוכל להשתמש
export default Box;
