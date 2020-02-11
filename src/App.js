import React from "react";
import Homepage from "./components/Homepage";
import { Helmet } from "react-helmet";


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Firmin Girard</title>
        <body style="background:black"></body>
      </Helmet>
      <Homepage />
    </div>
  );
}

export default App;
