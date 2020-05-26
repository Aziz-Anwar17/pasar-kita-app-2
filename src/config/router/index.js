import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Wellcome, Register, Login, Order, Help } from '../../containers/pages/index';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavBarIcon from './../../components/molecules/NavBarIcon/index';

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();



const Router = () => {

  const BottomTabs = () =>
    <MaterialBottomTabs.Navigator initialRouteName="Home" activeColor="black" inactiveColor="white" barStyle={{ backgroundColor: 'white' }}>
      <MaterialBottomTabs.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <NavBarIcon img={require('../../../images/rumah.png')} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen 
        name="Others" 
        component={Order}
        options={{
          tabBarLabel: 'Others',
          tabBarIcon: () => (
            <NavBarIcon img={require('../../../images/order.png')} />
          ),
        }} 
      />
      <MaterialBottomTabs.Screen 
        name="Notification" 
        component={Help} 
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: () => (
            <NavBarIcon img={require('../../../images/help.png')} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>

  return(
    <Stack.Navigator>
      <Stack.Screen name="Wellcome" component={Wellcome} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabs" children={BottomTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Router;