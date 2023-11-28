import React from "react";

const Header = ({handleToogleDarkMode}) => {

   return (
         <div className="header">
            <h1>Notes</h1>
            <button className="save"
                    onClick={() => handleToogleDarkMode((prevDarkMode) => !prevDarkMode)}>Toggle Mode</button>
         </div>
   )
}
export default Header;