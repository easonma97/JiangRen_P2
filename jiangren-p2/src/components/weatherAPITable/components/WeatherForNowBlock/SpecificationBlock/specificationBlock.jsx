import React from "react";
import styled from "styled-components";
import Item from "./components/itemBlock";

const ContainerForSpecificationBlock = styled.div`
    display: flex;
    flex-flow: column;
    padding-top: 10px;   
`;

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
            <ContainerForSpecificationBlock>
                {rows}
            </ContainerForSpecificationBlock>
        );
    }
}

export default SpecificationBlock;