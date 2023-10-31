import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ClientsScreen from '../screens/ClientsScreen';
import ProvidersScreen from '../screens/ProvidersScreen';

const Tab = createMaterialBottomTabNavigator();

export default function HomeBottomTabNavigator(props) {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: '#007762' }} activeColor="#ffffff" inactiveColor="#000">
      <Tab.Screen name="Clients" component={ClientsScreen} />
      <Tab.Screen name="Providers" component={ProvidersScreen} />
    </Tab.Navigator>
  );
}
