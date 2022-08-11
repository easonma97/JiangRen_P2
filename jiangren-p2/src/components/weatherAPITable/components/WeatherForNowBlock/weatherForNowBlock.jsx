import React from "react";
import AnimationBlock from "./AnimationBlock";
import SpecificationBlock from "./SpecificationBlock";
import TempatureBlock from "./TempatureBlock";
import "./weatherForNowBlock.css";

class WeatherForNowBlock extends React.Component {
    render() {
        return (
            <div className="weatherForNowBlock">
                <AnimationBlock forecast={this.props.forecast}/>
                <TempatureBlock forecast={this.props.forecast}/>
                <SpecificationBlock forecast={this.props.forecast}/> 
            </div>
        );
    }
}

export default WeatherForNowBlock;