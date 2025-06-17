import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/TabNavigation/Home';
import Math from './components/TabNavigation/Math';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Finance from './components/TabNavigation/Finance';
import Medical from './components/TabNavigation/Medical';
import Stats from './components/TabNavigation/Stats';
import Chemistry from './components/TabNavigation/Chemistry';

import Favorites from './components/Favorites';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' }, // Change the header background color to black
        headerTintColor: 'white', // Change the header text color to white
        tabBarStyle: { backgroundColor: 'black' }, // Change the tab bar background color to black
        tabBarActiveTintColor: 'white', // Change the active tab text/icon color to white
        tabBarInactiveTintColor: 'gray', // Change the inactive tab text/icon color to gray
      }}>
     <Tab.Screen
  name="Physics"
  component={Home}
  options={{
    tabBarIcon: ({ color, size }) => (
      <FontAwesome5 name="home" size={size} color={color} />
    ),
    tabBarLabel: () => null, 
    headerShown: false, 
  }}
/>
<Tab.Screen
        name="Math"
        component={Math}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color={color} size={size} />
          ),
          tabBarLabel: () => null, 
          headerShown: false, 
        }}
      />

      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calculator" color={color} size={size} />
          ),
          tabBarLabel: () => null, 
          headerShown: false, 
        }}
      />

     

      <Tab.Screen
        name="Finance"
        component={Finance}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="coins" color={color} size={size} />
          ),
          tabBarLabel: () => null, 
          headerShown: false, 
        }}
      />

      <Tab.Screen
        name="Medical"
        component={Medical}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="pump-medical" color={color} size={size} />
          ),
          tabBarLabel: () => null, 
          headerShown: false, 
        }}
      />

      <Tab.Screen
        name="Chemistry"
        component={Chemistry}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="flask" color={color} size={size} />
          ),
          tabBarLabel: () => null, 
          headerShown: false, 
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

