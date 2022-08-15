import React from "react";
import styled from "styled-components";

const ContainerForTempatureBlock = styled.div`
    min-width: 100px;
    min-height: 100px;
    background-color:aquamarine;
`;

const H1 = styled.h1`
    margin-bottom: 10px;
    padding-left: 10px;  
`;

const LowerPart = styled.div`
    display: flex;
    justify-content: center;
`;

class TempatureBlock extends React.Component {
    render() {
        const temp = this.props.forecast.current.temp_c;
        const humid = this.props.forecast.current.humidity;
        const precip = this.props.forecast.current.precip_mm;
        return (
            <ContainerForTempatureBlock>
                <H1>{temp}</H1>
                <LowerPart>
                    <p>{humid}</p>
                    <p>/</p>
                    <p>{precip}</p>
                </LowerPart>
            </ContainerForTempatureBlock>
        );
    }
}

export default TempatureBlock;