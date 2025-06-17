import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Profile() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');

  const calculateVolume = () => {
    const parsedRadius = parseFloat(radius);
    const parsedHeight = parseFloat(height);

    if (isNaN(parsedRadius) || parsedRadius <= 0 || isNaN(parsedHeight) || parsedHeight <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid positive numbers for radius and height.');
      return;
    }

    const volume = (1 / 3) * Math.PI * Math.pow(parsedRadius, 2) * parsedHeight;
    Alert.alert('Volume Calculated', `The volume of the cone is: ${volume.toFixed(2)} cubic units.`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Volume of Cone</Text>

      {/* Input Fields */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Radius:</Text>
      <TextInput
        placeholder="Enter Radius"
        placeholderTextColor="gray"
        value={radius}
        onChangeText={setRadius}
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
        onPress={calculateVolume}
        style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Volume</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
