import React from "react";

const Input = (props) => {
    let inputElement;
    switch (props.type) {
        case "text": {
            inputElement = <input type="text" {...props}/>
            break;
        }
        case "email": {
            inputElement = <input type="email" {...props}/>
            break;
        }
        default : {
            inputElement = <input type="text" {...props}/>
        }
    }
    return inputElement;
};
export default Input