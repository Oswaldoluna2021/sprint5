import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import PagoAdmin from "./pages/PagoAdmin";
import PagoCrear from "./pages/PagoCrear";
import PagoEditar from "./pages/PagoEditar"


class App extends React.Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/PagoAdmin" exact component={PagoAdmin}/>
          <Route path="/Pago-crear" exact component={PagoCrear}/>
          <Route path="/PagoEditar" exact component={PagoEditar}/>
        </Switch>
      </Router>
    )
  }

}
export default App;