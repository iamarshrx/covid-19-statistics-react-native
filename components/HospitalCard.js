import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right,Body } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import  { Hospitalcardrow } from './Hospitalcardrow';
export class HospitalCard extends Component {
    render() {
        return (
        
                    <Card>
                <CardItem style={{ borderColor: '#049372', borderWidth: 5 }}>
                   
                    <Body style={{ flex:1, flexDirection:'column' }}>
                       <View>
                           
                            <Text style={{ color:'#049372',fontSize:18,fontWeight:"bold",textAlign:'center' }}>
                                <FontAwesome5 name={'hospital'} solid size={25} color={'#049372'} />    {this.props.data.hospital.name}

                           </Text>
                           </View> 
<View style={{ flex:1, flexDirection:'column' }}>

                            <Text style={{ color:'#049372'  }}>Count of people on treatment from the beginning upto now</Text>
                            <Hospitalcardrow name={'Sri Lankans'} value={this.props.data.cumulative_local}/>
                            <Hospitalcardrow name={'Foreigners'} value={this.props.data.cumulative_foreign}/>
                            <Hospitalcardrow name={'Total'} value={this.props.data.cumulative_total}/>
                            <Text style={{ color: '#049372' }}>Count of people on treatment at the moment</Text>
                            <Hospitalcardrow name={'Sri Lankans'} value={this.props.data.treatment_local} />
                            <Hospitalcardrow name={'Foreigners'} value={this.props.data.treatment_foreign} />
                            <Hospitalcardrow name={'Total'} value={this.props.data.treatment_total} />


</View>


                       
                       
                    </Body>
                </CardItem>
                    </Card>
         
        )
    }
}

export default HospitalCard
