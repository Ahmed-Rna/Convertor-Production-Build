import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Correlation() {
  const [inputValueX, setInputValueX] = useState('');
  const [inputValueY, setInputValueY] = useState('');

  const calculateCorrelation = () => {
    // Split the inputs into arrays of numbers
    const xValues = inputValueX
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num)); // Filter out invalid numbers
    
    const yValues = inputValueY
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num)); // Filter out invalid numbers

    // Check if both arrays have the same length
    if (xValues.length !== yValues.length) {
      Alert.alert('Invalid Input', 'Both sets of numbers must have the same length.');
      return;
    }

    if (xValues.length === 0 || yValues.length === 0) {
      Alert.alert('Invalid Input', 'Please enter a valid list of numbers for both sets.');
      return;
    }

    // Calculate means
    const meanX = xValues.reduce((acc, num) => acc + num, 0) / xValues.length;
    const meanY = yValues.reduce((acc, num) => acc + num, 0) / yValues.length;

    // Calculate covariance and variances
    const covariance = xValues.reduce((acc, x, idx) => acc + (x - meanX) * (yValues[idx] - meanY), 0);
    const varianceX = xValues.reduce((acc, x) => acc + Math.pow(x - meanX, 2), 0);
    const varianceY = yValues.reduce((acc, y) => acc + Math.pow(y - meanY, 2), 0);

    // Pearson Correlation Coefficient Formula: r = covariance / sqrt(varianceX * varianceY)
    const correlationCoefficient = covariance / Math.sqrt(varianceX * varianceY);

    Alert.alert('Correlation Coefficient Calculated', `The correlation coefficient is: ${correlationCoefficient.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-800 p-6`}>
      {/* Title */}
      <Text style={tw`text-white text-3xl font-bold mb-6 text-center`}>Correlation Coefficient Calculator</Text>

      {/* Input Field for X */}
      <Text style={tw`text-lg text-white font-semibold mb-2`}>Input Set X (comma-separated):</Text>
      <TextInput
        placeholder="Enter numbers for X (e.g., 1, 2, 3)"
        placeholderTextColor="gray"
        value={inputValueX}
        onChangeText={setInputValueX}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="default"
      />

      {/* Input Field for Y */}
      <Text style={tw`text-lg text-white font-semibold mb-2`}>Input Set Y (comma-separated):</Text>
      <TextInput
        placeholder="Enter numbers for Y (e.g., 2, 4, 6)"
        placeholderTextColor="gray"
        value={inputValueY}
        onChangeText={setInputValueY}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-6 shadow-lg`}
        keyboardType="default"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={calculateCorrelation}
        style={tw`bg-green-500 px-4 py-3 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>Calculate Correlation</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={tw`mt-6`}>
        <Text style={tw`text-gray-300 text-sm text-center`}>
          Enter two sets of numbers (comma-separated) to calculate the correlation coefficient.
        </Text>
      </View>
    </View>
  );
}

export default Correlation;
