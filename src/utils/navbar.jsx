import React from "react";

const NavBar = () => (
  <div className="bg-dark py-2 px-2">
    <span>
      <a
        className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
        href="https://github.com/InsouciantPrithvi"
      >
        <i className="fab text-light fa-github"></i>
        &nbsp; Github Profile
      </a>
      <a
        className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
        href="https://www.linkedin.com/in/prithvi-raj-0b93621b3/"
      >
        <i className="fab text-light fa-linkedin"></i>
        &nbsp; Prithvi Raj
      </a>
    </span>
    <span
      style={{
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "roboto",
        color: "skyblue",
        marginLeft: "30%",
      }}
    >
      Algo--Viz
    </span>
  </div>
);

export default NavBar;
