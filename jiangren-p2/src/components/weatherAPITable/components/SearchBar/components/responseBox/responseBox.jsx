import React from "react";
import styled from "styled-components";

const Response = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 5px;
`;

class ResponseBox extends React.Component {
    render() {
        return(
            <Response>Response according to the input.</Response>
        );
    }
}

export default ResponseBox;