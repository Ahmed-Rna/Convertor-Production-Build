import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Prectangle() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  const calculatePerimeter = () => {
    const parsedLength = parseFloat(length);
    const parsedWidth = parseFloat(width);

    if (isNaN(parsedLength) || parsedLength <= 0 || isNaN(parsedWidth) || parsedWidth <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid positive numbers for both length and width.');
      return;
    }

    const perimeter = 2 * (parsedLength + parsedWidth);
    Alert.alert('Perimeter Calculated', `The perimeter of the rectangle is: ${perimeter.toFixed(2)} units.`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Perimeter of Rectangle</Text>

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
        onPress={calculatePerimeter}
        style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Perimeter</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Prectangle;
