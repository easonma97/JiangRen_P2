import React from "react";
import "./animationBlock.css";

class AnimationBlock extends React.Component {
    render() {
        const weather_img = this.props.forecast.current.condition.icon;
        return (
            <div className="animationBlock">
                <img src={weather_img} alt="weather" />
            </div>
        );
    }
}

export default AnimationBlock;