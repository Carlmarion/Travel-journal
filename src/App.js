import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./Data";

import "./App.css";

function App() {
  const cards = data.map((item) => {
    return (
      <li key={item.id}>
        <Card item={item} />
      </li>
    );
  });
  return (
    <div className="app-wrapper">
      <Header />
      <ul className="card-list">{cards}</ul>
    </div>
  );
}

export default App;
