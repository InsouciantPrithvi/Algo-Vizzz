import React from "react";
import { NavLink } from "react-router-dom";

import LinearThumb from "./thumbs/linear.jpg";
import BinaryThumb from "./thumbs/binary.jpg";
import NQueensThumb from "./thumbs/nqueens.jpg";
import PathThumb from "./thumbs/path.jpg";
import SortingThumb from "./thumbs/sorting.png";
import WordSearch from "./thumbs/word_search.jpg";

import "./bootstrap.min.css";

export default class IndexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mt-2">
        <center>
          <div className="row mt-2">
            <div className="col-sm-4 col-6" style={{ marginTop: 80 }}>
              <NavLink to="/word-search">
                <img
                  className="img-fluid w-20 shadowB"
                  src={WordSearch}
                  alt="Word Searching"
                />
                <p className="text-dark thumb-title">Word Searching</p>
              </NavLink>
            </div>
            <div className="col-sm-4 col-6" style={{ marginTop: 80 }}>
              <NavLink to="/pathfinder">
                <img
                  className="img-fluid w-20 shadowB"
                  src={PathThumb}
                  alt="Path Finding"
                />
                <p className="text-dark thumb-title">Path Finding</p>
              </NavLink>
            </div>
            <div className="col-sm-4 col-6" style={{ marginTop: 80 }}>
              <NavLink to="/sorting">
                <img
                  className="img-fluid w-20 shadowB"
                  src={SortingThumb}
                  alt="Sorting"
                />
                <p className="text-dark thumb-title">Sorting Visualiser</p>
              </NavLink>
            </div>
            <div className="col-sm-4 col-6">
              <NavLink to="/n-queens-problem">
                <img
                  className="img-fluid w-20 shadowB"
                  src={NQueensThumb}
                  alt="NQueens"
                />
                <p className="text-dark thumb-title">NQueens Problem</p>
              </NavLink>
            </div>
            <div className="col-sm-4 col-6">
              <NavLink to="/linear-search">
                <img
                  className="img-fluid w-20 shadowB"
                  src={LinearThumb}
                  alt="Linear Search"
                />
                <p className="text-dark thumb-title">Linear Search</p>
              </NavLink>
            </div>
            <div className="col-sm-4 col-6">
              <NavLink to="/binary-search">
                <img
                  className="img-fluid w-20 shadowB"
                  src={BinaryThumb}
                  alt="Binary Search"
                />
                <p className="text-dark thumb-title">Binary Search</p>
              </NavLink>
            </div>
          </div>
          <div className="text-center text-muted"> Keep Coding !!!</div>
        </center>
      </div>
    );
  }
}
