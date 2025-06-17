import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Text as RNText, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

function Profile() {
  const [fromSystem, setFromSystem] = useState('binary'); // Default "From" system
  const [toSystem, setToSystem] = useState('hexadecimal'); // Default "To" system
  const [inputValue, setInputValue] = useState('');

  const convertNumber = () => {
    try {
      let decimalValue;

      // Convert input to decimal first
      switch (fromSystem) {
        case 'binary':
          decimalValue = parseInt(inputValue, 2);
          break;
        case 'decimal':
          decimalValue = parseInt(inputValue, 10);
          break;
        case 'hexadecimal':
          decimalValue = parseInt(inputValue, 16);
          break;
        default:
          throw new Error('Invalid input system');
      }

      // Convert decimal to target system
      let result;
      switch (toSystem) {
        case 'binary':
          result = decimalValue.toString(2);
          break;
        case 'decimal':
          result = decimalValue.toString(10);
          break;
        case 'hexadecimal':
          result = decimalValue.toString(16).toUpperCase();
          break;
        default:
          throw new Error('Invalid target system');
      }

      Alert.alert('Conversion Result', `Converted Value: ${result}`);
    } catch (error) {
      Alert.alert('Error', 'Invalid input for the selected number system.');
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Number System Converter</Text>

      {/* From System Dropdown */}
      <Text style={tw`text-lg font-semibold mb-2`}>From:</Text>
      <View style={tw`w-full bg-white rounded-lg shadow-lg mb-4`}>
        <Picker
          selectedValue={fromSystem}
          onValueChange={(itemValue) => setFromSystem(itemValue)}
          style={tw``}
        >
          <Picker.Item label="Binary" value="binary" />
          <Picker.Item label="Decimal" value="decimal" />
          <Picker.Item label="Hexadecimal" value="hexadecimal" />
        </Picker>
      </View>

      {/* To System Dropdown */}
      <Text style={tw`text-lg font-semibold mb-2`}>To:</Text>
      <View style={tw`w-full bg-white rounded-lg shadow-lg mb-4`}>
        <Picker
          selectedValue={toSystem}
          onValueChange={(itemValue) => setToSystem(itemValue)}
          style={tw``}
        >
          <Picker.Item label="Binary" value="binary" />
          <Picker.Item label="Decimal" value="decimal" />
          <Picker.Item label="Hexadecimal" value="hexadecimal" />
        </Picker>
      </View>

      {/* Input Field */}
      <Text style={tw`text-lg font-semibold mb-2`}>Input Number:</Text>
      <TextInput
        placeholder="Enter a number"
        placeholderTextColor="gray"
        value={inputValue}
        onChangeText={setInputValue}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={convertNumber}
        style={tw` bottom-4 left-1 bg-red-500 px-4 py-2 rounded-lg shadow-lg mt-2 `}
      >
        <RNText style={tw`text-white font-bold`}>Convert</RNText>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
