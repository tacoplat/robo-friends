import React, { Component } from 'react';

class ErrorBound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componenetDidCatch(e, i) {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBound;