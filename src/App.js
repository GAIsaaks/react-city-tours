import React, { Component } from "react";
import NavBar from "./components/NavBar/navbar";
import "./App.scss";

import TourList from "./components/Tour_list";

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <TourList />
      </main>
    );
  }
}

export default App;
