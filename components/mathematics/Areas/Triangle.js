import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Triangle() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  const calculateArea = () => {
    const parsedLength = parseFloat(length);
    const parsedWidth = parseFloat(width);

    if (isNaN(parsedLength) || parsedLength <= 0 || isNaN(parsedWidth) || parsedWidth <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid positive numbers for length and width.');
      return;
    }

    const area = parsedLength * parsedWidth;
    Alert.alert('Area Calculated', `The area of the rectangle is: ${area.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Area of Rectangle</Text>

      {/* Input Fields */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Length:</Text>
      <TextInput
        placeholder="Enter Length"
        placeholderTextColor="gray"
        value={length}
        onChangeText={setLength}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Enter Width:</Text>
      <TextInput
        placeholder="Enter Width"
        placeholderTextColor="gray"
        value={width}
        onChangeText={setWidth}
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

export default Triangle;