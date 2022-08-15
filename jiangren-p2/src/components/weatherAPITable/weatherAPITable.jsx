import React from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import WeatherForNowBlock from "./components/WeatherForNowBlock";
import WeatherForFutureBlock from "./components/WeatherForFutureBlock";
import CheckBox from "./components/CheckBox";

const Wrapper = styled.div`
    min-width: 300px;
    min-height: 300px;
    background-color: burlywood;
`;

class WeatherAPITable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            isCelsius: false,
        };
        this.handleRespond = this.handleRespond.bind(this);
    }
    
    handleRespond (country) {
        this.setState({
            country: country
        });
    }

    render(){
        return (
            <Wrapper>
                <SearchBar country={this.state.country} handleRespond={this.handleRespond}/>
                <WeatherForNowBlock forecast={this.props.data} isCelsius={this.state.isCelsius}/>
                <WeatherForFutureBlock forecast={this.props.data} isCelsius={this.state.isCelsius}/>
                <CheckBox isCelsius={this.state.isCelsius}/>
            </Wrapper>
        );
    }
}

export default WeatherAPITable;