import React, { Component } from 'react'

import { Container, Header, Content, Card, CardItem, Body, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AnimateNumber from 'react-native-animate-number';
export class ResultCard extends Component {
    render() {
        return (
      
        
            <Card style={{  borderRadius: 5 }}>
                <CardItem style={{ borderColor: '#049372', borderWidth: 5 }}>
                    <Body style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                          
                            <FontAwesome5 name={this.props.iconName} solid size={75} color={'#049372'} />
                            
                      </View>
                        <View style={{ flex: 4, alignItems:'center' }}>

                            <Text style={{ fontSize: 25, textAlign: 'center', color:'#049372' }}>{this.props.CardTitle}</Text>
                            <Text style={{ fontSize: 40, color: '#049372' }}><AnimateNumber value={this.props.dataCount} formatter={(val) => {
                                return Math.round(val)
                            }} /></Text>

                      </View>
                    </Body>
                </CardItem>
            </Card>
        
        )
    }
}

export default ResultCard
