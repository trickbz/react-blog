import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <h1>111</h1>
    }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));