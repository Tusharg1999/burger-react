import React, { Component } from "react";
import './Order.css'
import Input from '../../ui/input/Input'
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: {
                    id: 'fjbfbfb',
                    value: '',
                    type: 'text',
                    properties: {
                        placeholder: 'Name'
                    }
                },
                email: {
                    value: '',
                    id: 'fjhfohfuihkdn',
                    type: 'email',
                    properties: {
                        placeholder: 'Email Id'
                    }
                },
                number: {
                    value: '',
                    id: 'fjbfbfbfnfkhie',
                    type: 'number',
                    properties: {
                        placeholder: 'Number'
                    }
                },
                city: {
                    value: '',
                    id: 'fjbfbfffi6db',
                    type: 'text',
                    properties: {
                        placeholder: 'city'
                    }
                },
                pin: {
                    value: '',
                    id: 'fjbhfhncbnmkfbfb',
                    type: 'number',
                    properties: {
                        placeholder: 'Postal code'
                    }
                }
            }
        }
    }
    valueChangeHandler(event, id) {
        const myInputs = {
            ...this.state.inputs
        }
        const updateFormElement = {
            ...myInputs[id],
            value: event.target.value
        }
        myInputs[id] = updateFormElement;
        this.setState({
            inputs: myInputs
        })

    }
    render() {
        let formArray = [];
        for (let key in this.state.inputs) {
            formArray.push({
                id: key,
                config: this.state.inputs[key]
            })
        }
        let input = (
            formArray.map((input) => {
                return <Input type={input.config.type} key={input.id} value={input.config.value} properties={input.config.properties} Change={(event) => this.valueChangeHandler(event, input.id)} />
            })
        )
        return (
            <div className="orderContainer">
                <h3>Please enter some information for order placement</h3>
                <form className="orderForm">
                    {input}
                </form>
            </div>
        );
    };
}

export default Order;