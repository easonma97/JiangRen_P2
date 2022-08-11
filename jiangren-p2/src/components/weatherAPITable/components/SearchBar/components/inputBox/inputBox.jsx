import React from "react";
import "./inputBox.css";

class InputBox extends React.Component {
    render() {
        const country = this.props.country;
        return(
            <div>
                <input id="test" value={country}></input>
            </div>
        );
    }
}

export default InputBox;