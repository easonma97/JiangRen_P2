import React from "react";
import "./tempatureBlock.css";

class TempatureBlock extends React.Component {
    render() {
        const temp = this.props.forecast.current.temp_c;
        const humid = this.props.forecast.current.humidity;
        const precip = this.props.forecast.current.precip_mm;
        return (
            <div className="containerBoxForTempatureBlock">
                <div className="upperPart">
                    <h1>{temp}</h1>
                </div>
                <div className ="lowerPart">
                    <p>{humid}</p>
                    <p>/</p>
                    <p>{precip}</p>
                </div>
            </div>
        );
    }
}

export default TempatureBlock;