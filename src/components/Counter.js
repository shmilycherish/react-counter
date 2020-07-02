import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    plus = () =>  {
        return this.setState({count: this.state.count + 1});
    };

    minus = () =>  {
        return this.setState({count: this.state.count - 1});
    };

    render() {
        return (
        <div>
            <button onClick={this.plus}>
                +
            </button>
            &nbsp;number: {this.state.count}
            <button onClick={this.minus}>
                -
            </button>
        </div>)
    }
}

export default Counter;