import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Dosage = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('mg');
    const [toUnit, setToUnit] = useState('g');
    const [conversionResult, setConversionResult] = useState(null);
    const [optimalDosage, setOptimalDosage] = useState(null);

    // Conversion functions for medication dosage units
    const conversionRates = {
        'mg': { toBase: (value) => value, fromBase: (value) => value },
        'g': { toBase: (value) => value * 1000, fromBase: (value) => value / 1000 },
        'mcg': { toBase: (value) => value * 1000000, fromBase: (value) => value / 1000000 },
        'IU': { toBase: (value) => value * 1, fromBase: (value) => value / 1 },
        'mL': { toBase: (value) => value, fromBase: (value) => value },
        'cc': { toBase: (value) => value, fromBase: (value) => value },
        'gtt': { toBase: (value) => value * 20, fromBase: (value) => value / 20 },
        'tsp': { toBase: (value) => value * 5, fromBase: (value) => value / 5 },
        'tbsp': { toBase: (value) => value * 15, fromBase: (value) => value / 15 },
    };

    const convertDosage = () => {
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

    const findOptimalDosage = () => {
        // Example: Find optimal dosage based on input
        const optimal = parseFloat(amount) * 1.2; // Assuming 1.2x the input is the optimal dose
        setOptimalDosage(optimal.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-800 p-6`}>
            <Text style={tw`text-center text-3xl font-bold text-white mb-6`}>
                Medication Dosage Converter
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Dosage</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter dosage amount"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={findOptimalDosage}
                    style={tw`bg-green-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Find Optimal Dosage</Text>
                </TouchableOpacity>

                {optimalDosage && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Optimal Dosage: {optimalDosage} {fromUnit}
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
                    onPress={convertDosage}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Dosage</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Dosage: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Dosage;
