import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Hospitalcardrow extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }} >
                <Text style={{ flex: 6 }}>{this.props.name}</Text>
                <Text style={{ flex: 6 }}>{this.props.value}</Text>
            </View>
        )
    }
}

export default Hospitalcardrow
