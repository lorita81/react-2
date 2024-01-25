import React, {Component} from "react";
import  ReactDOM  from "react-dom/client";
import "./css/style.css";

class Index extends Component {
  render() {
    return ( 
        <h1> hello world </h1>
    )
  }

}
var root = document. getElementById("root");
ReactDOM.createRoot(root).render(<Index></Index>);