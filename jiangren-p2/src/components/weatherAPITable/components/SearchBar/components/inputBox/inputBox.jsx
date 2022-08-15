import React from "react";
import styled from "styled-components";

const Input = styled.input`
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid black;
    text-align: center;
    padding-top: 6px;
    width: 100px;
`;

class InputBox extends React.Component {
    constructor(props){
        super(props);
        this.handleInputTextChange= this.handleInputTextChange.bind(this);
    }

    handleInputTextChange(e) {
        this.props.handleRespond(e.target.value);
    }

    render() {
        const country = this.props.country;
        return(
            <div>
                <Input id="country" value={country} onChange={this.handleInputTextChange}></Input>
            </div>
        );
    }
}

export default InputBox;