import React from "react";
import "./weatherBlock.css";

class WeatherForFutureBlock extends React.Component{
    render(){
        return(
            <div className="containerForWeatherFutureBlock">
                <p>TODAY</p>
                <div className="containerForTempatureBlock">
                    <p>20</p>
                    <p>/</p>
                    <p>25</p>
                </div>
                <p>TODAY</p>
            </div>
        );
    }
}

export default WeatherForFutureBlock;