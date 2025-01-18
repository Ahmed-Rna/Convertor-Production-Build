import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const NutrientElectrolyte = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('mg');
    const [toUnit, setToUnit] = useState('g');
    const [conversionResult, setConversionResult] = useState(null);
    const [nutrientStatus, setNutrientStatus] = useState('');

    // Conversion functions for nutrients and electrolytes
    const conversionRates = {
        'mg': { toBase: (value) => value, fromBase: (value) => value },
        'g': { toBase: (value) => value * 1000, fromBase: (value) => value / 1000 },
        'mcg': { toBase: (value) => value * 1000000, fromBase: (value) => value / 1000000 },
        'mmol': { toBase: (value) => value * 1000, fromBase: (value) => value / 1000 },
        'mol': { toBase: (value) => value * 1000000, fromBase: (value) => value / 1000000 },
        'mEq': { toBase: (value) => value, fromBase: (value) => value },
        'IU': { toBase: (value) => value, fromBase: (value) => value },
        '%': { toBase: (value) => value / 100, fromBase: (value) => value * 100 },
    };

    const normalRanges = {
        'mg': { min: 0.1, max: 100 }, // Example range
        'g': { min: 0.001, max: 1 },  // Example range
    };

    // Check Nutrient or Electrolyte Level for normal range
    const checkNutrientLevel = () => {
        const nutrientValue = parseFloat(amount);

        if (isNaN(nutrientValue) || nutrientValue <= 0) {
            setNutrientStatus('Please enter a valid amount.');
        } else if (nutrientValue < normalRanges[fromUnit]?.min) {
            setNutrientStatus(`Nutrient level is low: ${nutrientValue} ${fromUnit}. Consult a doctor.`);
        } else if (nutrientValue > normalRanges[fromUnit]?.max) {
            setNutrientStatus(`Nutrient level is high: ${nutrientValue} ${fromUnit}. Consult a doctor.`);
        } else {
            setNutrientStatus(`Nutrient level is normal: ${nutrientValue} ${fromUnit}.`);
        }
    };

    const convertNutrientElectrolyte = () => {
        const fromConverter = conversionRates[fromUnit];
        const toConverter = conversionRates[toUnit];

        if (fromConverter && toConverter) {
            const baseValue = fromConverter.toBase(parseFloat(amount));
            const convertedValue = toConverter.fromBase(baseValue);
            setConversionResult(convertedValue.toFixed(4));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-800 p-6`}>
            <Text style={tw`text-center text-3xl font-bold text-white mb-6`}>
                Nutrient & Electrolyte Converter
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Nutrient or Electrolyte Amount</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter value"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkNutrientLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Level</Text>
                </TouchableOpacity>

                {nutrientStatus && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {nutrientStatus}
                    </Text>
                )}

                <View style={tw`mt-6 flex-row justify-between`}>
                    <View style={tw`flex-1 mr-2`}>
                        <Text style={tw`text-white text-lg mb-2`}>From</Text>
                        <View style={tw`bg-white rounded-lg`}>
                            <Picker
                                selectedValue={fromUnit}
                                onValueChange={(itemValue) => setFromUnit(itemValue)}
                                style={tw`h-14`}
                            >
                                {Object.keys(conversionRates).map((unit) => (
                                    <Picker.Item label={unit} value={unit} key={unit} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={tw`flex-1`}>
                        <Text style={tw`text-white text-lg mb-2`}>To</Text>
                        <View style={tw`bg-white rounded-lg`}>
                            <Picker
                                selectedValue={toUnit}
                                onValueChange={(itemValue) => setToUnit(itemValue)}
                                style={tw`h-14`}
                            >
                                {Object.keys(conversionRates).map((unit) => (
                                    <Picker.Item label={unit} value={unit} key={unit} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={convertNutrientElectrolyte}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Amount: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default NutrientElectrolyte;
