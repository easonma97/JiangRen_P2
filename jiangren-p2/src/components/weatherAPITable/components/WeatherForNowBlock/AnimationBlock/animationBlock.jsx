import React from "react";
import styled from "styled-components";

const ContianerForAnimationBlock = styled.div`
    padding: 20px;
`;

class AnimationBlock extends React.Component {
    render() {
        const weather_img = this.props.forecast.current.condition.icon;
        return (
            <ContianerForAnimationBlock>
                <img src={weather_img} alt="weather" />
            </ContianerForAnimationBlock>
        );
    }
}

export default AnimationBlock;