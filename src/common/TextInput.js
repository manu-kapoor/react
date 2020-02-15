import React from "react";

function TextInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input
                    id={props.id}
                    type="text"
                    name={props.name}
                    className="form-control"
                    value={props.value}
                    onChange={props.onChange}
                    readOnly={props.readOnly || false} />
            </div>
        </div>
    );
}
export default TextInput;
