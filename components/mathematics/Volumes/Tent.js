import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Profile() {
  const [baseWidth, setBaseWidth] = useState('');
  const [triangleHeight, setTriangleHeight] = useState('');
  const [tentLength, setTentLength] = useState('');

  const calculateVolume = () => {
    const parsedBaseWidth = parseFloat(baseWidth);
    const parsedTriangleHeight = parseFloat(triangleHeight);
    const parsedTentLength = parseFloat(tentLength);

    if (
      isNaN(parsedBaseWidth) ||
      parsedBaseWidth <= 0 ||
      isNaN(parsedTriangleHeight) ||
      parsedTriangleHeight <= 0 ||
      isNaN(parsedTentLength) ||
      parsedTentLength <= 0
    ) {
      Alert.alert('Invalid Input', 'Please enter valid positive numbers for all dimensions.');
      return;
    }

    const baseArea = (1 / 2) * parsedBaseWidth * parsedTriangleHeight;
    const volume = baseArea * parsedTentLength;

    Alert.alert('Volume Calculated', `The volume of the tent is: ${volume.toFixed(2)} cubic units.`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Volume of Tent</Text>

      {/* Input Fields */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Base Width of Triangle:</Text>
      <TextInput
        placeholder="Enter Base Width"
        placeholderTextColor="gray"
        value={baseWidth}
        onChangeText={setBaseWidth}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Enter Height of Triangle:</Text>
      <TextInput
        placeholder="Enter Triangle Height"
        placeholderTextColor="gray"
        value={triangleHeight}
        onChangeText={setTriangleHeight}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Enter Length of Tent:</Text>
      <TextInput
        placeholder="Enter Tent Length"
        placeholderTextColor="gray"
        value={tentLength}
        onChangeText={setTentLength}
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

export default Profile;
