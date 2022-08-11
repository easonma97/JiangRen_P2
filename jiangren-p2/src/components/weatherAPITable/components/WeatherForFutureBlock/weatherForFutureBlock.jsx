import React from "react";
import WeatherBlock from "./components/weatherBlock";
import "./weatherForFutureBlock.css";

class WeatherForFutureBlock extends React.Component {
    render() {
        return (
        <div className="weatherForFutureBlock">
            <WeatherBlock forecast={this.props.forecast}/>
            <WeatherBlock forecast={this.props.forecast}/>
            <WeatherBlock forecast={this.props.forecast}/>
        </div>);
    }
}

export default WeatherForFutureBlock;