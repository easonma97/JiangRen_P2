import React from "react";
import styled from "styled-components";

const ContainerBoxForItem = styled.div`
    display: flex;
    height: 35px;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;    
`;

class Item extends React.Component{
    render(){
        const weather_icon = this.props.weather_icon;
        const number = this.props.number;
        const icon = this.props.icon;
        return (
            <ContainerBoxForItem>
                <Img src={weather_icon} alt="weather"/>
                <p>{number}</p>
                <p>{icon}</p>
            </ContainerBoxForItem>
        );
    }
}

export default Item;