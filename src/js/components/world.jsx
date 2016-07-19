import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
    constructor() {
        super();
        console.log('govno');
        debugger;
    }
    
    render() {
        return <h1>333</h1>
    }
}

ReactDOM.render(<World/>, document.getElementById('world'));