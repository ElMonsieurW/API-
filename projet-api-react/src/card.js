import React, { Component } from "react";
import CTAComponent from "./CTA";

class card extends Component {
  render() {
    return (
      <div className="card">
        <h1> Crée un voyage unique à votre image</h1>
        <form>
          <div class="form-ou">
            <div>
              <label for="name">Ou? </label>
            </div>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="form-people">
            <div>
              <label for="name">Voyageur </label>
            </div>
            <input id="number" type="number" value="1" />
          </div>
        </form>
        <CTAComponent />
      </div>
    );
  }
}

export default card;
