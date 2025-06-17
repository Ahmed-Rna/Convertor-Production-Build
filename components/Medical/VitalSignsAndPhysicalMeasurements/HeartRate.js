import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const HeartRate = () => {
    const [amount, setAmount] = useState('0');
    const [heartRate, setHeartRate] = useState('');
    const [fromUnit, setFromUnit] = useState('bpm');
    const [toUnit, setToUnit] = useState('bps');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion functions for heart rate units
    const conversionRates = {
        'bpm': { toBase: (value) => value, fromBase: (value) => value },
        'bps': { toBase: (value) => value / 60, fromBase: (value) => value * 60 },
        'cpm': { toBase: (value) => value, fromBase: (value) => value },
        'cps': { toBase: (value) => value / 60, fromBase: (value) => value * 60 },
        'bph': { toBase: (value) => value * 60, fromBase: (value) => value / 60 },
        'ms/beat': { toBase: (value) => 60000 / value, fromBase: (value) => 60000 / value },
        'min/beat': { toBase: (value) => 1 / (value / 60), fromBase: (value) => 1 / (value / 60) },
    };

    // Check heart rate value and give advice
    const checkHeartRate = () => {
        const heartRateValue = parseFloat(amount);
        
        if (isNaN(heartRateValue) || heartRateValue <= 0) {
            setHeartRate('Please enter a valid heart rate value.');
        } else if (heartRateValue < 60) {
            setHeartRate(`Your heart rate is low: ${heartRateValue} bpm. Consider consulting a healthcare provider.`);
        } else if (heartRateValue > 100) {
            setHeartRate(`Your heart rate is high: ${heartRateValue} bpm. It's advised to consult a healthcare provider.`);
        } else {
            setHeartRate(`Your heart rate is normal: ${heartRateValue} bpm.`);
        }
    };

    // Convert Heart Rate
    const convertHeartRate = () => {
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
                Heart Rate Unit Converter
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                {/* Heart Rate Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Heart Rate (bpm)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter heart rate value"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Heart Rate Check Button */}
                <TouchableOpacity
                    onPress={checkHeartRate}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Heart Rate</Text>
                </TouchableOpacity>

                {/* Display Heart Rate Advice */}
                {heartRate && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {heartRate}
                    </Text>
                )}

                {/* Unit Conversion */}
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

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={convertHeartRate}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Heart Rate</Text>
                </TouchableOpacity>

                {/* Display Conversion Result */}
                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Heart Rate: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default HeartRate;
