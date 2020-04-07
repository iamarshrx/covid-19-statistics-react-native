import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export class FaqCard extends Component {
    render() {
        return (
            <Card>
                <CardItem style={{ borderColor: '#049372', borderWidth: 5 }}>

                    <Body style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <Text style={{ flex: 6, fontSize: 20, textAlign: 'left', fontWeight: 'bold', color: '#049372' }}>{this.props.num}.{this.props.title}</Text>
                           
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <Text style={{ flex: 6, fontSize: 18, textAlign: 'left', color: '#049372' }}>{this.props.content}</Text>
                           
                        </View>
                    




                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export default FaqCard
