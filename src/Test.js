import React from "react";



const Test = ({name = "", setName }) => {
  return (
  <div>
  <h1> The name is: {name}</h1>
  <input type="text"
  value={name}
   onChange={(e) => setName(e.target.value)}/>
  </div>
  );
};