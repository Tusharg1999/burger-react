import React from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from "../ui/toolBar/Toolbar";
const layout = (props) => {
    return (
        <Aux>
            <Toolbar/>
            <div>{props.children}</div>
        </Aux>
    )
}
export default layout