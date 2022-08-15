import React from "react";
import InputBox from "./components/inputBox/inputBox";
import ResponseBox from "./components/responseBox/responseBox";
import styled from "styled-components";

const ContainerForSearchBar = styled.div`
    display: flex;
    justify-content: center;
    height: 30px;
    column-gap: 5px;
`;

const Paragraph = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 5px;
`;

class SearchBar extends React.Component {
    render() {
        const country = this.props.country;

        if (country !== ''){
            return (
                <ContainerForSearchBar>
                    <Paragraph>Right now in</Paragraph>
                    <InputBox country={country} handleRespond={this.props.handleRespond}/>
                    <ResponseBox />
                </ContainerForSearchBar>
            );
        } else {
            return (
                <ContainerForSearchBar>
                    <Paragraph>Right now in</Paragraph>
                    <InputBox country={country} handleRespond={this.props.handleRespond}/>
                </ContainerForSearchBar>
            );
        }
    }
}

export default SearchBar;