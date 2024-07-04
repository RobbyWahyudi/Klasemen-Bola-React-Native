import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Memanggil Halaman
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
            padding: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 7,
          },
          tabBarIconStyle: {
            marginTop: 7,
          },
          tabBarActiveTintColor: '#9B222F',
          tabBarInactiveTintColor: '#A4A4A6',
          headerShown: false,
          tabBarIcon: ({color}) => {
            let iconName;
            let iconSize;

            if (route.name === 'Beranda') {
              iconName = 'home-variant-outline';
              iconSize = 30;
            } else if (route.name === 'Klasemen') {
              iconName = 'table';
              iconSize = 30;
            } else if (route.name === 'Berita') {
              iconName = 'newspaper-variant-outline';
              iconSize = 28;
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={iconSize}
                color={color}
              />
            );
          },
        })}>
        <Tabs.Screen name="Beranda" component={Beranda} />

        <Tabs.Screen
          name="Klasemen"
          component={Klasemen}
          options={{
            headerShown: true,
            headerTitleStyle: {
              color: '#09051C',
              fontWeight: 'bold',
            },
            headerTitleContainerStyle: {
              alignItems: 'center',
              width: '100%',
            },
            headerStyle: {
              borderBottomWidth: 1,
            },
          }}
        />

        <Tabs.Screen
          name="Berita"
          component={Berita}
          options={{
            headerShown: true,
            headerTitleStyle: {
              color: '#09051C',
              fontWeight: 'bold',
            },
            headerTitleContainerStyle: {
              alignItems: 'center',
              width: '100%',
            },
            headerStyle: {
              borderBottomWidth: 1,
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
