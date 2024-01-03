import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <main>
      <h2 className="heading2">Welcome to Movies App</h2>
      <h3 className="heading3">This page contains</h3>
      <h4 className="heading4">styles</h4>

      <button className="btn btn-ghost">edit</button>
      <button className="btn btn-warning">add</button>
      <button className="btn btn-success">create</button>
      <button className="btn btn-danger">delete</button>
      <button className="btn btn-neutral">watch</button>

      <h5 className="heading5">
        Sort by: <span className="sort-select">name</span>
        <span className="sort-arrow sort-arrow-active">&uarr;</span>
        <span className="sort-arrow">&darr;</span>
      </h5>

      <p className="regularP">
        LOREM IPSUM dot sit amet so dot iso ewlr LOREM IPSUM dot sit amet so
        <Link className="regularLink" to="#">
          {" "}
          dot iso ewlr
        </Link>{" "}
        LOREM IPSUM dot sit amet so dot iso ewlr LOREM IPSUM dot sit amet so dot
        iso ewlr LOREM IPSUM dot sit amet so dot iso ewlr LOREM IPSUM dot sit
        amet so dot iso ewlr
      </p>
      <p className="regularP msgSuccess">Success</p>
      <p className="regularP msgError">Error</p>
    </main>
  );
};

export default Start;
