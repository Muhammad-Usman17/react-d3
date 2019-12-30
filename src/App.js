import React from "react";
import D3Container from "d3-react-container";

import logo from "./logo.svg";
import d3s from "./d3.svg";
import "./App.css";

function App() {
  return (
    <div>
      <D3Container
        element="div"
        d3Callback={selection => {
          const div = selection.attr("class", "App");
          const header = div.append("header").attr("class", "App-header");

          header
            .append("img")
            .attr("src", logo)
            .attr("class", "App-logo")
            .attr("alt", "logo")
            .on("click", () => console.log("React is clicked"))
            .on("mouseenter", () => console.log("I am React"));

          header
            .append("img")
            .attr("src", d3s)
            .attr("class", "App-logo")
            .attr("alt", "logo")
            .on("click", () => console.log("D3 is clicked"))
            .on("mouseenter", () => console.log("I am d3"));
        }}
      />
    </div>
  );
}

export default App;
