import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text,H1, H3, View } from 'native-base';
import ResultCard from '../components/ResultCard';
import Heading from '../components/Heading';

export class Tab1 extends Component {
    render() {
        return (
          
          
          
            <Content style={{ flex: 1, flexDirection: 'column',paddingHorizontal:20 }}>
              

                <Heading Heading="SriLanka Count" Time={'Last Updated On:'+this.props.data.update_date_time}/>
      
  
           
              
                <ResultCard style={{ flex: 1 }} iconName="hospital" iconColor="#2c3e50" dataCount={this.props.data.local_total_cases} CardTitle="Total Cases"/>
                <ResultCard style={{ flex: 1 }} iconName="ambulance" iconColor="#2c3e50" dataCount={this.props.data.local_new_cases} CardTitle="New Cases"/>
                <ResultCard style={{ flex: 1 }} iconName="procedures" iconColor="#2c3e50" dataCount={this.props.data.local_total_number_of_individuals_in_hospitals} CardTitle="Total  individuals in hospitals"/>
                <ResultCard style={{ flex: 1 }} iconName="running" iconColor="#2c3e50" dataCount={this.props.data.local_recovered} CardTitle="Recovered And Discharged"/>
                <ResultCard style={{ flex: 1 }} iconName="bed" iconColor="#2c3e50" dataCount={this.props.data.local_deaths} CardTitle="Total  Deaths" />

            </Content>
        )
    }
}

export default Tab1
