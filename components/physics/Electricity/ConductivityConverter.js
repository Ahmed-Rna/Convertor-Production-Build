import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const ConductivityConverter = () => {
  const [amount, setAmount] = useState('0');
  const [fromUnit, setFromUnit] = useState('S/m');
  const [toUnit, setToUnit] = useState('S/m');
  const [conversionResult, setConversionResult] = useState(null);

  // Conversion rates for conductivity units
  const conversionRates = {
    'S/m': 1,          // Siemens per Meter
    'mS/m': 1000,      // MilliSiemens per Meter
    'µS/m': 1000000,   // MicroSiemens per Meter
    'kS/m': 0.001,     // KiloSiemens per Meter
    'MS/m': 0.000001,  // MegaSiemens per Meter
    'GS/m': 0.000000001, // GigaSiemens per Meter
    '℧/m': 1,         // Mho per Meter (inverse of resistivity)
  };

  const simulateConversion = () => {
    const fromRate = conversionRates[fromUnit];
    const toRate = conversionRates[toUnit];

    if (fromRate && toRate) {
      const result = (parseFloat(amount) * fromRate) / toRate;
      setConversionResult(result.toFixed(6));
    } else {
      Alert.alert('Invalid Input', 'Invalid conversion.');
    }
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
      {/* Title */}
      <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
        Conductivity Converter
      </Text>

      {/* Calculator Container */}
      <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
        {/* Conductivity Input */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-lg mb-2`}>Enter Conductivity Value</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            style={tw`w-full p-4 bg-white rounded-lg text-black`}
            placeholder="Enter conductivity"
            keyboardType="numeric"
            placeholderTextColor="gray"
          />
        </View>

        {/* From Unit Picker */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
          <View style={tw`bg-white rounded-lg`}>
            <Picker
              selectedValue={fromUnit}
              onValueChange={(itemValue) => setFromUnit(itemValue)}
              style={tw`h-14 w-full text-black`}
            >
              <Picker.Item label="Siemens per Meter (S/m)" value="S/m" />
              <Picker.Item label="MilliSiemens per Meter (mS/m)" value="mS/m" />
              <Picker.Item label="MicroSiemens per Meter (µS/m)" value="µS/m" />
              <Picker.Item label="KiloSiemens per Meter (kS/m)" value="kS/m" />
              <Picker.Item label="MegaSiemens per Meter (MS/m)" value="MS/m" />
              <Picker.Item label="GigaSiemens per Meter (GS/m)" value="GS/m" />
              <Picker.Item label="Mho per Meter (℧/m)" value="℧/m" />
            </Picker>
          </View>
        </View>

        {/* To Unit Picker */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
          <View style={tw`bg-white rounded-lg`}>
            <Picker
              selectedValue={toUnit}
              onValueChange={(itemValue) => setToUnit(itemValue)}
              style={tw`h-14 w-full text-black`}
            >
              <Picker.Item label="Siemens per Meter (S/m)" value="S/m" />
              <Picker.Item label="MilliSiemens per Meter (mS/m)" value="mS/m" />
              <Picker.Item label="MicroSiemens per Meter (µS/m)" value="µS/m" />
              <Picker.Item label="KiloSiemens per Meter (kS/m)" value="kS/m" />
              <Picker.Item label="MegaSiemens per Meter (MS/m)" value="MS/m" />
              <Picker.Item label="GigaSiemens per Meter (GS/m)" value="GS/m" />
              <Picker.Item label="Mho per Meter (℧/m)" value="℧/m" />
            </Picker>
          </View>
        </View>

        {/* Convert Button */}
        <TouchableOpacity
          onPress={simulateConversion}
          style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
        >
          <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
        </TouchableOpacity>

        {/* Results */}
        {conversionResult !== null && (
          <View style={tw`mt-6`}>
            <Text style={tw`text-center text-xl text-white font-semibold`}>
              Converted Conductivity: {conversionResult} {toUnit}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ConductivityConverter;
