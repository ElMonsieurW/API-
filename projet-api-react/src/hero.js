import React, { Component } from "react";
import CardComponent from "./card";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <CardComponent />
      </div>
    );
  }
}

export default Hero;
