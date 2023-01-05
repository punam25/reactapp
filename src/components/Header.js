import React from "react";
const Header=(props)=>{
    console.log("data passed from parent to child",props.info);    
    return(
        <div>
            <h1>using react app  is done</h1>
            {props.info}
            
             

        </div>
    
       
    );

    
};
export default Header;