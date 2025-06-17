import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Cube() {
  const [side, setSide] = useState('');

  const calculateVolume = () => {
    const parsedSide = parseFloat(side);

    if (isNaN(parsedSide) || parsedSide <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid positive number for the side length.');
      return;
    }

    const volume = Math.pow(parsedSide, 3);
    Alert.alert('Volume Calculated', `The volume of the cube is: ${volume.toFixed(2)} cubic units.`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Volume of Cube</Text>

      {/* Input Field */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Side Length:</Text>
      <TextInput
        placeholder="Enter Side Length"
        placeholderTextColor="gray"
        value={side}
        onChangeText={setSide}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={calculateVolume}
        style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Volume</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Cube;
