import React from "react";

export default function App() {
  return (
    <div className="app">
      <header class="page-header">
        <h1 id="page-title" class="title">
          Wombat Coffee Roasters
        </h1>
        <nav>
          <ul id="main-nav" class="nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/coffees">Coffees</a>
            </li>
            <li>
              <a href="/brewers">Brewers</a>
            </li>
            <li>
              <a href="/specials" class="featured">
                Specials
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
