import React from "react";
import AnimationBlock from "./AnimationBlock";
import SpecificationBlock from "./SpecificationBlock";
import TempatureBlock from "./TempatureBlock";
import styled from "styled-components";

const ContainerForWeatherNowBlock = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;    
`;

class WeatherForNowBlock extends React.Component {
    render() {
        return (
            <ContainerForWeatherNowBlock>
                <AnimationBlock forecast={this.props.forecast}/>
                <TempatureBlock forecast={this.props.forecast}/>
                <SpecificationBlock forecast={this.props.forecast}/> 
            </ContainerForWeatherNowBlock>
        );
    }
}

export default WeatherForNowBlock;