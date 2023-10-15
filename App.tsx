import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Import your Redux store configuration
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

import tw from 'tailwind-react-native-classnames';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      
      <NavigationContainer>
        
        <SafeAreaProvider>
          <KeyboardAvoidingView 
          behavior = {Platform.OS === "ios" ?"padding" : "height"}
          style={{flex:1}}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64:0}
          >
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
          </KeyboardAvoidingView>
          </SafeAreaProvider>
          
        </NavigationContainer>
        
      
    </Provider>
  );
}
