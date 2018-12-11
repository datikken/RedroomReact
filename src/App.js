import React, { Component } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import Header from "../src/Components/Main/Header/Header";
import Card from "./Components/Main/Cards/Card";
import Footer from "./Components/Main/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
         <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
