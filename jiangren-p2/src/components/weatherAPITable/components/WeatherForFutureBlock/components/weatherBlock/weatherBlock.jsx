import React from "react";
import styled from "styled-components";

const ContainerForWeatherFutureBlock = styled.div`
    display: flex;
    flex-flow: column;
    background-color: crimson;
`;

const ContainerForTempatureBlock = styled.div`
     display: flex;
`;

class WeatherForFutureBlock extends React.Component{
    render(){
        return(
            <ContainerForWeatherFutureBlock>
                <p>TODAY</p>
                <ContainerForTempatureBlock>
                    <p>20</p>
                    <p>/</p>
                    <p>25</p>
                </ContainerForTempatureBlock>
                <p>TODAY</p>
            </ContainerForWeatherFutureBlock>
        );
    }
}

export default WeatherForFutureBlock;