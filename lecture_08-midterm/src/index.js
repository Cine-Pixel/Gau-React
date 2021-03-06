import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./contexts/Context";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
