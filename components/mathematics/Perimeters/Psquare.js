import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Profile() {
  const [side, setSide] = useState('');

  const calculatePerimeter = () => {
    const parsedSide = parseFloat(side);

    if (isNaN(parsedSide) || parsedSide <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid positive number for the side length.');
      return;
    }

    const perimeter = 4 * parsedSide;
    Alert.alert('Perimeter Calculated', `The perimeter of the square is: ${perimeter.toFixed(2)} units.`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Perimeter of Square</Text>

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
        onPress={calculatePerimeter}
        style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Perimeter</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
