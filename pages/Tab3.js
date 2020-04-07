import React, { Component } from 'react'
import {  View } from 'react-native'
import Heading from '../components/Heading'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import HospitalCard from '../components/HospitalCard';
import { ScrollView } from 'react-native-gesture-handler';

export class Tab3 extends Component {
    render() {
        return (
<ScrollView>
            <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 20 }}>
                    <Heading Heading="Hospitals Report" Time={'Last Updated On:'+this.props.data.update_date_time} />
              
              
                {this.props.data.hospital_data.map((hospital, key) => {
                    return (
                        
                        <HospitalCard data={ hospital} />
                    );
                })}
            
       
            </View>
            </ScrollView>
        )
    }
}

export default Tab3
