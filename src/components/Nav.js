import React from 'react';

//navbar with github link functional component
const Nav = () =>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" id = "titletext">Game of Memory</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="https://github.com/zoosissoos/memory-game">GitHub <span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>;

export default Nav;

