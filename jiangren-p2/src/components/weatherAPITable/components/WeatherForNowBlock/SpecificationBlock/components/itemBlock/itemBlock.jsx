import React from "react";
import "./itemBlock.css";

class Item extends React.Component{
    render(){
        const weather_icon = this.props.weather_icon;
        const number = this.props.number;
        const icon = this.props.icon;
        return (
            <div className="containerBoxForItem">
                <img src={weather_icon} alt="weather"/>
                <p>{number}</p>
                <p>{icon}</p>
            </div>
        );
    }
}

export default Item;