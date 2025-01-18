import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Ptriangle() {
  const [side1, setSide1] = useState('');
  const [side2, setSide2] = useState('');
  const [side3, setSide3] = useState('');

  const calculatePerimeter = () => {
    const parsedSide1 = parseFloat(side1);
    const parsedSide2 = parseFloat(side2);
    const parsedSide3 = parseFloat(side3);

    if (
      isNaN(parsedSide1) || parsedSide1 <= 0 ||
      isNaN(parsedSide2) || parsedSide2 <= 0 ||
      isNaN(parsedSide3) || parsedSide3 <= 0
    ) {
      Alert.alert('Invalid Input', 'Please enter valid positive numbers for all sides.');
      return;
    }

    const perimeter = parsedSide1 + parsedSide2 + parsedSide3;
    Alert.alert('Perimeter Calculated', `The perimeter of the triangle is: ${perimeter.toFixed(2)} units.`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Perimeter of Triangle</Text>

      {/* Input Fields */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Side 1 Length:</Text>
      <TextInput
        placeholder="Enter Side 1 Length"
        placeholderTextColor="gray"
        value={side1}
        onChangeText={setSide1}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Enter Side 2 Length:</Text>
      <TextInput
        placeholder="Enter Side 2 Length"
        placeholderTextColor="gray"
        value={side2}
        onChangeText={setSide2}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Enter Side 3 Length:</Text>
      <TextInput
        placeholder="Enter Side 3 Length"
        placeholderTextColor="gray"
        value={side3}
        onChangeText={setSide3}
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

export default Ptriangle;
