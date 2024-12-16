import React from "react";
import ProfileList from "./ProfileList";
import "./app.css"
/**
 * App Component:
Acts as the parent component.
Defines a static array of user profiles with details like name, age, and occupation.
Passes the array as a prop to the child components.
 */

function App() {
  const users =[
    {key:1, name:"Giorgi", age:17, occupation:"Software developer"},
    {key:2, name:"Luka", age:25, occupation:"Senior front-end developer"}
  ]
  return(
    <div className="app">
      <h1>User profiles</h1>
      <ProfileList profiles = {users}/>
    </div>

  )
 
}


export default App;