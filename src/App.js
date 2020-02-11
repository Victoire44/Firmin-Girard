import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Biographie from "./pages/Biographie";
import Nav from "./components/Nav";




function App() {
  return (
    <Router>
    <div className="App">
      <Helmet>
        <title>Firmin Girard</title>
        <body style="background:black"></body>
      </Helmet>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/Introduction" component={Introduction} />
      <Route exact path="/Biographie" component={Biographie} />
    </div>
    </Router>
  );
}

export default App;
