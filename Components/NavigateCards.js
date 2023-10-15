import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'; // Import your API key
import tw from "tailwind-react-native-classnames";
import { setDestination } from '../slices/navSlice';
import { RiderOptionsCards } from './RiderOptionsCards';
const NavigateCards = () => {
  const dispatch=useDispatch();
   const navigation=useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning</Text>
    <View style={tw`border-t border-gray-200 flex-shrink`}>
      <View>
        <GooglePlacesAutocomplete
        placeholder="Where to?"
        styles={toInputBoxStyles}
        fetchDetails={true}
        minLength={2}
        onPress={(data,details = null) => {
        dispatch(
          setDestination({
          location: details.geometry.location,
          description: data.description,
        }))
        navigation.navigate('RiderOptionsCards')
        
        }}
        enablePoweredByContainer={false}
        query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        
        />
      </View>
    </View>
    </SafeAreaView>
  );
};

const toInputBoxStyles=StyleSheet.create({
    container:{
       backgroundColor: "white",
       padding:20,
       flex:0 
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});

export default NavigateCards;
