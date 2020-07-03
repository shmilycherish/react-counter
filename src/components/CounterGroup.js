import React from "react";
import Counter from "./Counter";

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfCounter: props.numberOfCounter ? props.numberOfCounter : 0,
            total: props.total ? props.total : 0
        }
    }

    addTotalNumber = () => {
        this.setState({
            total: this.state.total +  1
        })
    };

    minusTotalNumber = () => {
        this.setState({
            total: this.state.total -  1
        })
    };

    render() {
        return (
            <div>
            <div>
            {Array(this.state.numberOfCounter).fill(0).map((value, index) =>
                <Counter key={index} addTotalNumber = {this.addTotalNumber}
                         minusTotalNumber = {this.minusTotalNumber}/>)}
            </div>
                <div>Total: {this.state.total}</div>
            </div>
        )
    }
}

export default CounterGroup;