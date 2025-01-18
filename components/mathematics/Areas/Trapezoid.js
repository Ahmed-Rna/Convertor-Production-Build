import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Trapezoid() {
  const [base1, setBase1] = useState('');
  const [base2, setBase2] = useState('');
  const [height, setHeight] = useState('');

  const calculateArea = () => {
    const parsedBase1 = parseFloat(base1);
    const parsedBase2 = parseFloat(base2);
    const parsedHeight = parseFloat(height);

    if (
      isNaN(parsedBase1) || parsedBase1 <= 0 ||
      isNaN(parsedBase2) || parsedBase2 <= 0 ||
      isNaN(parsedHeight) || parsedHeight <= 0
    ) {
      Alert.alert('Invalid Input', 'Please enter valid positive numbers for both bases and height.');
      return;
    }

    const area = 0.5 * (parsedBase1 + parsedBase2) * parsedHeight;
    Alert.alert('Area Calculated', `The area of the trapezoid is: ${area.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Area of Trapezoid</Text>

      {/* Input Fields */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Base 1:</Text>
      <TextInput
        placeholder="Enter Base 1"
        placeholderTextColor="gray"
        value={base1}
        onChangeText={setBase1}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Enter Base 2:</Text>
      <TextInput
        placeholder="Enter Base 2"
        placeholderTextColor="gray"
        value={base2}
        onChangeText={setBase2}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Enter Height:</Text>
      <TextInput
        placeholder="Enter Height"
        placeholderTextColor="gray"
        value={height}
        onChangeText={setHeight}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={calculateArea}
        style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Area</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Trapezoid;


