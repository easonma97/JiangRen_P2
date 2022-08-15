import React from "react";
import WeatherBlock from "./components/weatherBlock";
import styled from "styled-components";

const ContainerForWeatherFutureBlock = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
`;

class WeatherForFutureBlock extends React.Component {
    render() {
        return (
        <ContainerForWeatherFutureBlock>
            <WeatherBlock forecast={this.props.forecast}/>
            <WeatherBlock forecast={this.props.forecast}/>
            <WeatherBlock forecast={this.props.forecast}/>
        </ContainerForWeatherFutureBlock>);
    }
}

export default WeatherForFutureBlock;