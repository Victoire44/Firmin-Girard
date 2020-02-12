import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Biographie from "./pages/Biographie";
import Contact from "./pages/Contact";
import Actualites from "./pages/Actualites";

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
      <Route exact path="/introduction" component={Introduction} />
      <Route exact path="/biographie" component={Biographie} />
      <Route exact path="/actualites" component={Actualites} />
      <Route exact path="/contact" component={Contact} />
    </div>
    </Router>
  );
}

export default App;
