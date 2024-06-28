import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/Beranda';
import Berita from './screens/Berita';
import Klasemen from './screens/Klasemen';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Beranda"
        screenOptions={({route}) => ({
          tabBarStyle: {
            height: 60,
            // paddingBottom: 6,
            padding: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 7,
          },
          tabBarIconStyle: {
            marginTop: 7,
          },
          tabBarActiveTintColor: '#15BE77',
          tabBarInactiveTintColor: '#A4A4A6',
          headerShown: false,
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = 'home';
            } else if (route.name === 'Klasemen') {
              iconName = 'table';
            } else if (route.name === 'Berita') {
              iconName = 'newspaper-variant';
            }

            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
        })}>
        <Tabs.Screen name="Beranda" component={Beranda} />
        <Tabs.Screen name="Klasemen" component={Klasemen} />
        <Tabs.Screen name="Berita" component={Berita} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
