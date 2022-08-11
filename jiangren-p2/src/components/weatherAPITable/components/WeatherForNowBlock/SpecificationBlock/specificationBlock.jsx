import React from "react";
import Item from "./components/itemBlock";
import "./specificationBlock.css";

class SpecificationBlock extends React.Component{
    render(){
        const rows = [];
        const forecast_date = this.props.forecast;
        rows.push(<Item
            weather_icon={forecast_date.current.condition.icon}
            number={forecast_date.current.temp_c}
            icon={forecast_date.current.temp_c}
            key={1}
        />);
        rows.push(<Item
            weather_icon={forecast_date.current.condition.icon}
            number={forecast_date.current.temp_c}
            icon={forecast_date.current.temp_c}
            key={2}
        />);
        rows.push(<Item
            weather_icon={forecast_date.current.condition.icon}
            number={forecast_date.current.temp_c}
            icon={forecast_date.current.temp_c}
            key={3}
        />);
        return (
            <div className="contenderForSpecificationBlock">
                {rows}
            </div>
        );
    }
}

export default SpecificationBlock;