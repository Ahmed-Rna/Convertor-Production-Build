import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const OxygenLevel = () => {
    const [amount, setAmount] = useState('0');
    const [oxygenLevelStatus, setOxygenLevelStatus] = useState('');
    const [fromUnit, setFromUnit] = useState('Percentage');
    const [toUnit, setToUnit] = useState('Decimal');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion functions for blood oxygen levels
    const conversionRates = {
        Percentage: {
            toBase: (value) => value / 100,
            fromBase: (value) => value * 100,
        },
        Decimal: {
            toBase: (value) => value * 100,
            fromBase: (value) => value / 100,
        },
    };

    // Check Oxygen Level for normal range
    const checkOxygenLevel = () => {
        const oxygenValue = parseFloat(amount);

        if (isNaN(oxygenValue) || oxygenValue <= 0) {
            setOxygenLevelStatus('Please enter a valid oxygen level.');
        } else if (oxygenValue < 90) {
            setOxygenLevelStatus(`Oxygen level is low: ${oxygenValue}%. Consult a doctor.`);
        } else if (oxygenValue > 100) {
            setOxygenLevelStatus(`Oxygen level is high: ${oxygenValue}%. Consult a doctor.`);
        } else {
            setOxygenLevelStatus(`Oxygen level is normal: ${oxygenValue}%.`);
        }
    };

    const convertOxygenLevel = () => {
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
                Oxygen Level Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Oxygen Level</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter oxygen level"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Oxygen Level Finder Button */}
                <TouchableOpacity
                    onPress={checkOxygenLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Oxygen Level</Text>
                </TouchableOpacity>

                {oxygenLevelStatus && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {oxygenLevelStatus}
                    </Text>
                )}

                {/* From and To Unit Pickers */}
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
                    onPress={convertOxygenLevel}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Oxygen Level</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Oxygen Level: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default OxygenLevel;
