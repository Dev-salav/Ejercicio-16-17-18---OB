import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <nav>
        <Link to="/">Login</Link> | <Link to="/formtask">tasks</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
