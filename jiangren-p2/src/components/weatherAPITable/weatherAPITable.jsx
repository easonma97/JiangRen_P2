import React from "react";
import './weatherAPITable.css';
import SearchBar from "./components/SearchBar";
import WeatherForNowBlock from "./components/WeatherForNowBlock";
import WeatherForFutureBlock from "./components/WeatherForFutureBlock";
import CheckBox from "./components/CheckBox";

class WeatherAPITable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            isCelsius: false,
            isRespond: false
        };
    }
    
    render(){
        return (
            <div className="container-box">
                <SearchBar country={this.state.country} isRespond={this.state.isRespond}/>
                <WeatherForNowBlock forecast={this.props.data} isCelsius={this.state.isCelsius}/>
                <WeatherForFutureBlock forecast={this.props.data} isCelsius={this.state.isCelsius}/>
                <CheckBox isCelsius={this.state.isCelsius}/>
            </div>
        );
    }
}

export default WeatherAPITable;