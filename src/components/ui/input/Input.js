import React from "react";

const Input = (props) => {
    let inputElement;
    switch (props.type) {
        case "text": {
            inputElement = <input type="text" value={props.value} {...props.properties} onChange={props.Change} />
            break;
        }
        case "email": {
            inputElement = <input type="email" value={props.value} {...props.properties} onChange={props.Change} />
            break;
        }
        case "number": {
            inputElement = <input type="number" value={props.value} {...props.properties} onChange={props.Change} />
            break;
        }
        default: {
            inputElement = <input type="text" value={props.value} {...props.properties} onChange={props.Change} />
        }
    }
    return inputElement;
};
export default Input;