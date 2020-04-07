import React, { Component } from 'react'
import ResultCard from '../components/ResultCard';

import { Container, Header, Content, Card, CardItem, Body, Text, H1, H3, View } from 'native-base';
import Heading from '../components/Heading';
export class Tab2 extends Component {
    render() {
        return (
            <Content style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 20 }}>

                <Heading Heading="Global Count" Time={'Last Updated On:'+this.props.data.update_date_time} />

                <ResultCard style={{ flex: 1 }} iconName="hospital" iconColor="#fdb01a" dataCount={this.props.data.global_new_cases} CardTitle="Total Cases" />
                <ResultCard style={{ flex: 1 }} iconName="ambulance" iconColor="#50cd8a" dataCount={this.props.data.global_total_cases} CardTitle="New Cases" />
                <ResultCard style={{ flex: 1 }} iconName="bed" iconColor="#f64a8f" dataCount={this.props.data.global_deaths} CardTitle="Total  Deaths" />
                <ResultCard style={{ flex: 1 }} iconName="running" iconColor="#50cd8a" dataCount={this.props.data.global_recovered} CardTitle="Total Recovered " />

            </Content>
        )
    }
}

export default Tab2
