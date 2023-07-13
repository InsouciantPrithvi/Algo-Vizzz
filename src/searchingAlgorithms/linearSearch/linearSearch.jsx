import React from "react";
import { randomIntFromInterval } from "./../../utils/randomIntFromInterval.js";
import { linearSearchAnimations } from "./../searchingAlgorithms";

import Header from "./../../utils/header";
import ArrayTile from "./../arrayTile";

import BackBar from "./../../utils/backbar";

// Stylesheets
import "./linearSearch.css";

const NUMBER_OF_ARRAY_BARS = 10;
const DEFAULT_COLOR = "#6376f1";
const FOUND_COLOR = "#28B463";
const NOT_FOUND_COLOR = "#F16388";
const ANIMATION_SPEED_SECONDS = 1;

export default class LinearSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            disabled: false,
            elementFoundAt: 0,
            target: null,
            msgAfterExecution: "",
            searchVal: '',
            minRange:1,
            maxRange:1000,
            arrayLength:NUMBER_OF_ARRAY_BARS
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        const prevArray = document.getElementsByClassName("l-array-bar");
        const disabled = false;
        for (let idx = 0; idx < prevArray.length; idx++) {
            prevArray[idx].style.backgroundColor = DEFAULT_COLOR;
            prevArray[idx].classList.remove("growFind");
            prevArray[idx].classList.remove("highlight");
        }

        for (let i = 0; i < this.state.arrayLength; i++) {
            array.push(randomIntFromInterval(this.state.minRange, this.state.maxRange));
        }
        this.setState({ array, disabled, msgAfterExecution: "Seach not performed yet" });
    }

    linearSearch() {
        const target =this.state.searchVal;
        if (target === "") return;
        const animations = linearSearchAnimations(this.state.array, target);
        console.log(animations);

        for (let i = 0; i < animations.length; i++) {
            const [idx, currentEle, found] = animations[i];
            const arrayBars = document.getElementsByClassName("l-array-bar");
            const arrayBar = arrayBars[idx];
            const arrayBarStyle = arrayBar.style;


            if (found) {
                setTimeout(() => {
                    this.setState({
                        disabled: true,
                        elementFoundAt: idx,
                        target: currentEle,
                        msgAfterExecution:`${target} found at index ${idx}`
                    });
                    arrayBarStyle.backgroundColor = FOUND_COLOR;
                    arrayBar.classList.add("growFind");
                    arrayBar.classList.add("highlight");
                }, i * ANIMATION_SPEED_SECONDS * 1000);
                break;
            } else {
                setTimeout(() => {
                    this.setState({
                        disabled: true,
                        msgAfterExecution:i===animations.length-1?`${target} not found in the array`:`${target} not found at index ${idx}`
                    });
                    arrayBarStyle.backgroundColor = NOT_FOUND_COLOR;
                    arrayBar.classList.add("growFind");
                }, i * ANIMATION_SPEED_SECONDS * 1000);
            }
        }
        setTimeout(()=>{
            this.setState({disabled:false})
        },animations.length*ANIMATION_SPEED_SECONDS*1000)
        
    }

    render() {
        const { array, disabled, msgAfterExecution } = this.state;

        return (
            <div>
                <BackBar />
                <div className="jumbotron jumbotron-fluid bg-light">
                    <center>
                        <Header title="Linear Search" />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="input-group col-sm-10">
                                    <input
                                        type="number"
                                        id="targetVal"
                                        value={this.state.searchVal}
                                        className="form-control"
                                        placeholder="Find Element"
                                        onChange={(e)=>this.setState({searchVal:e.target.value})}
                                    />
                                    <div className="input-group-append">
                                        <button
                                            onClick={() => this.linearSearch()}
                                            className="btn btn-success"
                                            type="button"
                                            id="button-addon2"
                                            disabled={disabled}
                                        >
                                            Search
                                        </button>
                                        <button
                                            onClick={() => this.resetArray()}
                                            className="btn btn-danger"
                                            id="resetArray"
                                            type="button"
                                            disabled={disabled}
                                        >
                                            Reset Array
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1"></div>

                                <div className="input-group col-sm-10 mt-2">
                                    <input
                                        type="number"
                                        id="targetVal"
                                        value={this.state.minRange}
                                        className="form-control"
                                        placeholder="Min Range"
                                        onChange={(e)=>this.setState({minRange:parseInt(e.target.value)})}
                                    />
                                    <input
                                        type="number"
                                        id="targetVal"
                                        value={this.state.maxRange}
                                        className="form-control"
                                        placeholder="Max Range"
                                        onChange={(e)=>this.setState({maxRange:parseInt(e.target.value)})}
                                    />
                                    <input
                                        type="number"
                                        id="targetVal"
                                        value={this.state.arrayLength}
                                        className="form-control"
                                        placeholder="Array Length"
                                        onChange={(e)=>this.setState({arrayLength:parseInt(e.target.value)})}
                                    />
                                </div>
                                <div className="col-sm-1 "></div>
                            </div>
                        </div>
                        <br />
                        {
                            <p className="found growFind">
                                {msgAfterExecution}
                            </p>
                        }
                        <div className="container">
                            {array.map((value, idx) => (
                                <ArrayTile
                                    type={`linearSearch`}
                                    key={idx}
                                    idx={idx}
                                    val={value}
                                />
                            ))}
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}
