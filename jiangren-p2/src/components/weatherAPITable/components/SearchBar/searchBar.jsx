import React from "react";
import "./searchBar.css";
import InputBox from "./components/inputBox/inputBox";
import ResponseBox from "./components/responseBox/responseBox";

class SearchBar extends React.Component {
    render() {
        const isRespond = this.props.isRespond;
        if (isRespond){
            return (
                <div className="searchBar">
                    <p>Right now in</p>
                    <InputBox country={this.props.country}/>
                    <ResponseBox />
                </div>
            );
        } else {
            return (
                <div className="searchBar">
                    <p>Right now in</p>
                    <InputBox country={this.props.country}/>
                </div>
            );
        }
    }
}

export default SearchBar;