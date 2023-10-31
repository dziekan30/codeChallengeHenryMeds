import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PickProviderScreen from '../screens/PickProviderScreen';
import ScheduleAppointmentScreen from '../screens/ScheduleAppointmentScreen';

const Stack = createStackNavigator();

const ClientStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PickProvider">
      <Stack.Screen name="PickProvider" component={PickProviderScreen} />
      <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointmentScreen} />
    </Stack.Navigator>
  );
};

export { ClientStackNavigator };
