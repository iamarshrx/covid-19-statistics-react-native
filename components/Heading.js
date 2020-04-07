import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Heading extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 30, color: '#049372' }}> {this.props.Heading} </Text>
                <Text style={{ color:'#049372' }} > {this.props.Time}</Text>
            </View>
        )
    }
}

export default Heading
