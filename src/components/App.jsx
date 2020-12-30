import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

// function App() {
//   return <div className="container">{renderConditionally()}</div>;
// }

const hour = new Date().getHours();

console.log(hour);

function App() {
  return (
    <div className="container">
      {/* Ternary operator(expression) to replace if else (statement)  */}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {hour > 12 ? <h1>Good After Noon </h1> : null}
      {/* Since the time is 14 , nothing will be rendered */}
      {hour > 15 && <h1>Good After Noon </h1>}
    </div>
  );
}

export default App;
