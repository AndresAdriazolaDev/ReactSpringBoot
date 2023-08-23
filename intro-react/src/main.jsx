import React from "react";
import ReactDOM from "react-dom/client";
import { Hello } from "./Hello";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hello user={{"name":'Andrés' , "lastname":'Adriazola'}} id={2} email={"andres.adriazola.dev@outlook.com"} title="Software Engineer" />
    <Hello user={{"name":'Bayron' , "lastname":'Ahumada'}} id={1} email={"andres.adriazola@inacapmail.cl"} title="Data Analyst"  book={'Rich father poor father'} />
  </React.StrictMode> 
);
