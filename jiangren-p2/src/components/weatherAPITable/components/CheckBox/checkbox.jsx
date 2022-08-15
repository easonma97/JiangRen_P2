import React from 'react';
import styled from 'styled-components';

const ContainerForCheckBox = styled.div`
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    width: 18px;
`;

class CheckBox extends React.Component{
    render(){
        const isCelsius = this.props.isCelsius;
        return(
            <ContainerForCheckBox>
                <Input type="checkbox" checked={isCelsius}></Input>
                <label>C/F</label>
            </ContainerForCheckBox>
        );
    }
}

export default CheckBox;