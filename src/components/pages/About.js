import React from "react";

// import { Container } from './styles';

export default function pages() {
  return (
    <React.Fragment>
      <h1>About</h1>
      <a href="https://ravn.design">
        <img alt="Ravn Design Logo" src={require("../../../src/ravn.jpg")} />
      </a>
      <p style={{ padding: 10 }}>
        This is a TodoList app v1.0.0 developed by <b>Ravn Studio</b>.
      </p>
      <p>
        Access <a href="https://ravn.design">www.ravn.design</a> to check more
        of our works
      </p>
    </React.Fragment>
  );
}
