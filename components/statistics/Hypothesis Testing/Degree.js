import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Degree() {
  const [chiSquareValues, setChiSquareValues] = useState('');
  const [tTestValues, setTTestValues] = useState('');

  const calculateChiSquareDegreesOfFreedom = () => {
    // For Chi-Square Goodness of Fit Test: df = k - 1
    const categories = chiSquareValues.split(',').length;
    const df = categories - 1;

    Alert.alert('Chi-Square Degrees of Freedom', `Degrees of Freedom (df) = ${df}`);
  };

  const calculateTTestDegreesOfFreedom = () => {
    // For One-Sample t-Test: df = n - 1
    const n = parseInt(tTestValues, 10);

    if (isNaN(n) || n <= 1) {
      Alert.alert('Invalid Input', 'Please enter a valid sample size greater than 1.');
      return;
    }

    const df = n - 1;
    Alert.alert('T-Test Degrees of Freedom', `Degrees of Freedom (df) = ${df}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Degrees of Freedom Calculator</Text>

      {/* Chi-Square Input */}
      <Text style={tw`text-lg font-semibold mb-2`}>Chi-Square Test (Enter observed frequencies, separated by commas):</Text>
      <TextInput
        placeholder="Enter Observed Frequencies"
        placeholderTextColor="gray"
        value={chiSquareValues}
        onChangeText={setChiSquareValues}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
      />

      {/* Chi-Square Button */}
      <TouchableOpacity
        onPress={calculateChiSquareDegreesOfFreedom}
        style={tw`bg-green-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Chi-Square Degrees of Freedom</Text>
      </TouchableOpacity>

      {/* T-Test Input */}
      <Text style={tw`text-lg font-semibold mb-2 mt-6`}>T-Test (Enter sample size):</Text>
      <TextInput
        placeholder="Enter Sample Size"
        placeholderTextColor="gray"
        value={tTestValues}
        onChangeText={setTTestValues}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* T-Test Button */}
      <TouchableOpacity
        onPress={calculateTTestDegreesOfFreedom}
        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate T-Test Degrees of Freedom</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Degree;