import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class ItemPokemon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name } = this.props;
        return (React.createElement(View, { style: { backgroundColor: 'blue', height: 100, width: 300 } },
            React.createElement(Text, null,
                " ",
                name,
                " ")));
    }
}
