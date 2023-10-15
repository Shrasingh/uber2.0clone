import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import { Icon } from '@rneui/themed';

import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from "tailwind-react-native-classnames";
import Map from '../Components/Map';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCards from '../Components/NavigateCards';
import RiderOptionsCards from '../Components/RiderOptionsCards';
import { useNavigation } from '@react-navigation/native';
const MapScreen = () => {
  const Stack=createStackNavigator();
  const navigation = useNavigation();
  return (
   <View>
      <TouchableOpacity 
      onPress={() => navigation.navigate("HomeScreen")}
      style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3
      rounded-full shadow-lg`}>
        <Icon name="menu"/>
      </TouchableOpacity>
    <View 
     style={tw`h-1/2`}> 
     <Map/>
    </View>

    <View 
     style={tw`h-1/2`}> 
     
   
    <Stack.Navigator>
      <Stack.Screen
     name="NavigateCards"
     component={NavigateCards}
     options={{
      headerShown:false,
     }}
     />
     <Stack.Screen
     name="RiderOptionsCards"
     component={RiderOptionsCards}
     options={{
      headerShown:false,
     }}
     />
        </Stack.Navigator>
        </View>
     
   </View>
    
  );
};

export default MapScreen

