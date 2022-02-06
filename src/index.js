// modules allow us to seperate our java script into more managable
// components

// prior to es6 we would use
// var react = require("react");
// when working with node when were not sure if we can really use es6
// because out of 100 users 20 of them might not be able to render the
// code were using with es6 were able to use es6 because we can rely
// on bable to convert it on es6

import React from "react";
import ReactDOM from "react-dom";

// when importing default you can name the import what ever you like
// to import other exports from the file you can add {} and add the
// files within it in this case the names do matter
// import PI, { doublePi, tripplePI } from "./math.js";

// instead of importing everything seperatly we can use the wild card *
import * as PI from "./math.js";

ReactDOM.render(
  <ul>
    <li>{PI.default}</li>
    <li>{PI.doublePi()}</li>
    <li>{PI.tripplePI()}</li>
  </ul>,
  document.getElementById("root")
);
