import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";



const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
