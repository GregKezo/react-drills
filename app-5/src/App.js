import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image imgAddy={'https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/wgvyooh3tt8z7vrbnin3/cat'}/>
      </div>
    );
  }
}

export default App;
