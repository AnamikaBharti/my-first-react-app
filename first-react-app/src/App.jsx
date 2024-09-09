import React from "react";
import Name from "./components/Name";
 

export default function App() {
 let nameofgirls=[
  "Anamika", "Ayushi", "alpha"
 ];
  return (
    <div>
      <ul>
        {
          nameofgirls.map((name) =>(
          <Name names={name}></Name>
          ))
        }
      </ul>
   
    </div>
  );
}
