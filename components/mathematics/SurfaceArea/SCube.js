import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function SCube() {
  const [side, setSide] = useState('');

  const calculateSurfaceArea = () => {
    const parsedSide = parseFloat(side);

    if (isNaN(parsedSide) || parsedSide <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid positive number for the side length.');
      return;
    }

    const surfaceArea = 6 * Math.pow(parsedSide, 2);
    Alert.alert('Surface Area Calculated', `The surface area of the cube is: ${surfaceArea.toFixed(2)} square units.`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Surface Area of Cube</Text>

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
        onPress={calculateSurfaceArea}
        style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Surface Area</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SCube;
