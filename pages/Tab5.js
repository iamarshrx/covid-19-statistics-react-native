import React, { Component } from 'react'

import { Container, Header, Content, Card, CardItem, Body, Text, H3, View, Thumbnail, H1 } from 'native-base';
import Heading from '../components/Heading';
import { Image } from 'react-native';

export class Tab5 extends Component {
    render() {
        return (
            <Content style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 20 }}>


                <Heading Heading="About" Time={"About Application"} />
                <Container style={{ alignItems:'center',justifyContent:'center' }}>
                
                <Image source={{ uri: 'https://res.cloudinary.com/dw3zd8y3g/image/upload/v1584866302/8_ul2mg6.png' }} style={{ width: 200, height: 200 }} />
                <H1 style={{ color: 'black', fontWeight: 'bold' }}>Covid-19</H1>
                <Text>Version 1.0</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 13 }}>Data Source  |  Epidemiology Unit , Ministry of Health</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 13 }}>Design & Developed By  |  Cyfer Solutions</Text>

                </Container>

</Content>
        )
    }
}

export default Tab5
