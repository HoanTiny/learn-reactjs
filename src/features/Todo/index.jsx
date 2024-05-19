import React from "react";
import { Link, Outlet } from "react-router-dom";

TodoFeature.propTypes = {};

function TodoFeature() {
  return (
    <div>
      <nav>
        <Link to="listpage">List Page</Link>
      </nav>
      <nav>
        <Link to="detail-page">Detail Page</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default TodoFeature;
