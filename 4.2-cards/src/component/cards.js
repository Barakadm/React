// נוסיף שורת ייבוא מריאקט 
import React from "react";


const Cards = (props) => {
return ( <div>
    
    <h2>{props.title}</h2>
    <div>
    <img src={props.link} alt=""/>    
    </div>    
    
 </div>

);

};


// ניצור שורת ייצוא שנוכל להשתמש 
export default Cards;