import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Memanggil halaman
import Liga1 from './screens/Beranda/Liga1';

// Memanggil Komponen BottomTab
import BottomTab from './components/BottomTab';

const Stacks = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stacks.Navigator initialRouteName="root">
        <Stacks.Screen
          name="root"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stacks.Screen
          name="BRI Liga 1"
          component={Liga1}
          options={{
            headerTitleStyle: {
              color: '#09051C',
              fontWeight: 'bold',
            },
          }}
        />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}
