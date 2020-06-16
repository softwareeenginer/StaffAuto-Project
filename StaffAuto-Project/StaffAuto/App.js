/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Pages
//-------------------- HomePage --------------------//
import HomePage from './pages/EnterPages/HomePage';
//-------------------- ExaminedPage --------------------//
import ExaminedPage from './pages/ExaminedPage/ExaminedPage';
//-------------------- MenuPages --------------------//
import StaffAdd from './pages/EnterPages/MenuPages/StaffAdd';
import StaffEdit from './pages/EnterPages/MenuPages/StaffEdit';
//-------------------- EditStaff --------------------//
import EditStaff from './pages/ExaminedPage/EditStaff/EditStaff';
const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
            <Stack.Navigator headerMode={"none"} initialRouteName={'HomePage'}>
                <Stack.Screen name={'EditStaff'} component={EditStaff} />
                <Stack.Screen name={'StaffEdit'} component={StaffEdit} />
                <Stack.Screen name={'StaffAdd'} component={StaffAdd} />
                <Stack.Screen name={'ExaminedPage'} component={ExaminedPage} />
                <Stack.Screen name={'HomePage'} component={HomePage} />
            </Stack.Navigator>
      </NavigationContainer>
  );
}

