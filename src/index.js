import React from "react";
import ReactDOM from "react-dom/client";
import { GreetingComponent } from "./Greeting.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

//siempre debe haber un elemento padre (div)
root.render(
  <div>
    <GreetingComponent></GreetingComponent>
  </div>
);
