import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StoreScreen from './screen/Store';
import CartScreen from './screen/Cart';
import Itembrought from './itembrought';
import Store from './redux/Store';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();





export default function App() {


  return (
    <Provider store={Store}>
      <NavigationContainer>

        <Tab.Navigator>
          <Tab.Screen name="Store" component={StoreScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>

      </NavigationContainer>

    </Provider>

  );
}



