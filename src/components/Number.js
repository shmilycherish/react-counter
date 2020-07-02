import React from "react";
import Line from "./Line";

class Number extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.count ? props.count : 0
        }
    }

    handleClick = () =>  {
        return this.setState({count: this.props.step(this.state.count)});
    };

    render() {
        const count = this.state.count;
        return (
        <div>
            <button onClick={this.handleClick}>
                Hello world!
            </button>
            &nbsp;number: {count}
            {Array(count).fill(0).map((value,index) => (<Line key={index} />))
       }
        </div>)
    }
}

export default Number;