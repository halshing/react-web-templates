import React from "react";
import { Link } from "react-router-dom";

// styles
import "../styles/App.scss";

const App = () => {
  return (
    <div>
      <h1>React Web Templates</h1>

      <ul>
        <li>
          <Link to="./web1">Web Template 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
