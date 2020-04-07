import React, { Component } from 'react'
import {
  Platform, StyleSheet, View, Text,
  Image, TouchableOpacity, Alert
} from 'react-native';  
import 'react-native-gesture-handler';
import { Router, Scene } from 'react-native-router-flux';
import HomePage from './pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Content, Thumbnail,H1 } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ActionButton from 'react-native-action-button';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


export class App extends Component {
  static navigationOptions = {
    header: {
      titleStyle: {
        /* this only styles the title/text (font, color etc.)  */
      },
      style: {
        backgroundColor: '#2c3e50',
      },
      tintColor: {
        /* this will color your back and forward arrows or left and right icons */
      }
    }
  }

  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
  } 

  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false
    });
  }

  

  render() {
    let Splash_Screen = (

      
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
        

          <Image source={{ uri: 'https://res.cloudinary.com/dw3zd8y3g/image/upload/v1584866302/8_ul2mg6.png' }} style={{width:200,height:200}}/>
        <H1 style={{ color:'white',fontWeight:'bold' }}>Covid-19</H1>
          <Text style={{ color: 'white', fontWeight: 'bold',textAlign:'center' }}>COVID-19 (Corona) Awareness App</Text>



        </View>
        <View style={styles.SplashScreen_ChildView2}>
        
<View style={{ marginBottom:20 }}>
         
          
            <Image large square source={{ uri: 'https://res.cloudinary.com/dw3zd8y3g/image/upload/v1584869695/Cyfer_1_ivshk3.png' }} style={{ height: 200, left: 0, right: 0 }}
              resizeMode="contain" />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center',fontSize:10 }}>Data Source  |  Epidemiology Unit , Ministry of Health</Text>

</View>
          


        </View>
      </View>
      
     
      
      )  

    
    return (

      this.state.isVisible === true ? 
       
        <View style={styles.MainContainer}>
          <Text style={{ textAlign: 'center' }}> Splash Screen Example</Text>
          {
            (this.state.isVisible === true) ? Splash_Screen : null
          }
        </View> 
        
        : 
        
        
        
        <NavigationContainer style={{ backgroundColor: '#2c3e50' }}>
          <Stack.Navigator style={{ backgroundColor: '#2c3e50' }} screenOptions={{
            headerStyle: {
              backgroundColor: '#049372',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="Home" component={HomePage} options={{
              title: 'COVID-19',
            
            }}/>
        </Stack.Navigator>
       </NavigationContainer>
       

     



    )
  }
componentDidMount(){
  var that = this;  
  
  setTimeout(function () {
    that.Hide_Splash_Screen();
  }, 5000);  
}


}


const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    SplashScreen_RootView:
    {
      
      flex: 1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%'
    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems:'center',
     
      backgroundColor: '#049372',
      flex: 1,
    },
    SplashScreen_ChildView2:
    {
      justifyContent: 'flex-end',
      alignItems:'center',
     
      backgroundColor: '#049372',
      flex: 1,
    },
   
  });  
export default App
