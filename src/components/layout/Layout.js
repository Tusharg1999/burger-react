import React from 'react'
import Aux from '../../hoc/Aux'
const layout = (props) => {
    return (
        <Aux>
            <p>Toolbar</p>
            <div>{props.children}</div>
        </Aux>
    )
}
export default layout