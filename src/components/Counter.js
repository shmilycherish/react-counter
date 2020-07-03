import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    plus = () =>  {
        this.props.addTotalNumber();
        this.setState({count: this.state.count + 1});
    };

    minus = () =>  {
        this.props.minusTotalNumber();
        this.setState({count: this.state.count - 1});
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