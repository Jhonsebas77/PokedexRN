import React, { Component } from 'react';
import Router from './routes';
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(Router, null));
    }
}
