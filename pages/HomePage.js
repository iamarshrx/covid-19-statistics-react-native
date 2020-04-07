import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Tab, Tabs, ScrollableTab, Content, Spinner } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import { Tab3 } from './Tab3';
import { Tab4 } from './Tab4';
import Tab5 from './Tab5';
console.disableYellowBox = true;



export class HomePage extends Component {
   
   
    state = {
        data: null,
        isloading:true
       
    }
    render() {
        return (
            
            <Container>
             
                <Tabs style={{ backgroundColor: '#049372' }} tabBarBackgroundColor={{ backgroundColor: '#f9ec97' }} renderTabBar={() => <ScrollableTab />} onChangeTab={() => this.getdata()}  >
                    <Tab heading="Home" tabStyle={{ backgroundColor: '#049372' }} activeTabStyle={{ backgroundColor: '#049372' }}>
                        {this.state.isloading === false ?   <Tab4 data={this.state.data} />
                            :

                            <Container>
                               
                                <Content>

                                    <Spinner color='red' />

                                </Content>
                            </Container>
                        }
                        </Tab>
                    <Tab heading="SriLanka" tabStyle={{ backgroundColor: '#049372' }} activeTabStyle={{ backgroundColor: '#049372' }}>
                        {this.state.isloading === false ?   <Tab1 data={this.state.data} />
                            :

                            <Container>
                               
                                <Content>

                                    <Spinner color='red' />

                                </Content>
                            </Container>
                        }
                        </Tab>
                    <Tab heading="Global" tabStyle={{ backgroundColor: '#049372' }} activeTabStyle={{ backgroundColor: '#049372' }}>
                        {this.state.isloading === false ? <Tab2 data={this.state.data}/>
                            :

                            <Container>
                               
                                <Content>

                                    <Spinner color='red' />

                                </Content>
                            </Container>
                        }
                        </Tab>
                    <Tab heading="Hospital" tabStyle={{ backgroundColor: '#049372' }} activeTabStyle={{ backgroundColor: '#049372' }}>
                        {this.state.isloading === false ? <Tab3 data={this.state.data}/>
                            :

                            <Container>
                               
                                <Content>

                                    <Spinner color='red' />

                                </Content>
                            </Container>
                        }
                        </Tab>
                    <Tab heading="About" tabStyle={{ backgroundColor: '#049372' }} activeTabStyle={{ backgroundColor: '#049372' }}>
                        {this.state.isloading === false ? <Tab5 data={this.state.data}/>
                            :

                            <Container>
                               
                                <Content>

                                    <Spinner color='red' />

                                </Content>
                            </Container>
                        }
                        </Tab>

                 
              

                    </Tabs>   
                     
                  

              

            </Container>
        )
    }

    componentDidMount(){
        this.getdata();

    }




    getdata(){
        this.setState({
          
            isloading: true

        })


        fetch('https://www.hpb.health.gov.lk/api/get-current-statistical', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson.data,
                    isloading:false
                  
                })

                // console.log(responseJson.data);
              
                
            })
            .catch((error) => {
                console.error(error);
            });

    }

}



export default HomePage
