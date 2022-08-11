import React from 'react';
import "./checkbox.css";

class CheckBox extends React.Component{
    render(){
        const isCelsius = this.props.isCelsius;
        return(
            <div className="containerForCheckBox">
                <input type="checkbox" checked={isCelsius}></input>
                
                <label>C/F</label>
            </div>
        );
    }
}

export default CheckBox;