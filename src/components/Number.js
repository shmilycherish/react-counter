import React from "react";

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
        return (
        <div>
            <button onClick={this.handleClick}>
                Hello world!
            </button>
            &nbsp;number: {this.state.count}
        </div>)
    }
}

export default Number;