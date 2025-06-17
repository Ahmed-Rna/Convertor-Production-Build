import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function ChiSquare() {
  const [observedValues, setObservedValues] = useState('');
  const [expectedValues, setExpectedValues] = useState('');

  const calculateChiSquare = () => {
    // Convert input strings into arrays of numbers
    const observed = observedValues.split(',').map(val => parseFloat(val.trim()));
    const expected = expectedValues.split(',').map(val => parseFloat(val.trim()));

    if (observed.length !== expected.length) {
      Alert.alert('Input Error', 'Please ensure both observed and expected values have the same length.');
      return;
    }

    // Calculate Chi-Square Statistic
    let chiSquare = 0;
    for (let i = 0; i < observed.length; i++) {
      chiSquare += Math.pow(observed[i] - expected[i], 2) / expected[i];
    }

    Alert.alert('Chi-Square Calculated', `The Chi-Square statistic is: ${chiSquare.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-800 p-6`}>
      <Text style={tw`text-white text-3xl font-bold mb-6 text-center`}>Chi-Square Calculator</Text>

      {/* Input Fields */}
      <Text style={tw`text-white font-semibold mb-2`}>Observed Frequencies (comma-separated):</Text>
      <TextInput
        value={observedValues}
        onChangeText={setObservedValues}
        placeholder="Enter observed frequencies"
        keyboardType="numeric"
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4`}
      />
      <Text style={tw`text-white font-semibold mb-2`}>Expected Frequencies (comma-separated):</Text>
      <TextInput
        value={expectedValues}
        onChangeText={setExpectedValues}
        placeholder="Enter expected frequencies"
        keyboardType="numeric"
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4`}
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={calculateChiSquare}
        style={tw`bg-blue-600 p-4 rounded-lg`}
      >
        <Text style={tw`text-white text-center text-xl`}>Calculate Chi-Square</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChiSquare;
