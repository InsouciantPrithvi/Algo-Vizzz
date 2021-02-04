import React from "react";

const NavBar = () => (
  <div className="bg-dark py-2 px-2">
    <span>
      <a
        className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
        href="https://github.com/image0of0pie"
      >
        <i className="fab text-light fa-github"></i>
        &nbsp; Github Profile
      </a>
      <a
        className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
        href="https://www.linkedin.com/in/sarvajit-kumar-80329b185/"
      >
        <i className="fab text-light fa-linkedin"></i>
        &nbsp; Sarvajit Kumar
      </a>
    </span>
  </div>
);

export default NavBar;
