import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Hemoglobin = () => {
    const [amount, setAmount] = useState('0');
    const [hemoglobinLevel, setHemoglobinLevel] = useState('');
    const [fromUnit, setFromUnit] = useState('g/dL');
    const [toUnit, setToUnit] = useState('g/L');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion rates for hemoglobin units
    const conversionRates = {
        'g/dL': { toBase: (value) => value, fromBase: (value) => value },
        'g/L': { toBase: (value) => value * 10, fromBase: (value) => value / 10 },
        'mmol/L': { toBase: (value) => value / 15.6, fromBase: (value) => value * 15.6 },
        'mol/L': { toBase: (value) => value * 0.001 / 15.6, fromBase: (value) => value * 15.6 / 0.001 },
        'mg/dL': { toBase: (value) => value * 100, fromBase: (value) => value / 100 },
        'mg/L': { toBase: (value) => value, fromBase: (value) => value },
        'ppm': { toBase: (value) => value / 1000, fromBase: (value) => value * 1000 },
        'µmol/L': { toBase: (value) => value / 0.156, fromBase: (value) => value * 0.156 },
        'µg/mL': { toBase: (value) => value / 100, fromBase: (value) => value * 100 },
        'ng/mL': { toBase: (value) => value / 100000, fromBase: (value) => value * 100000 },
    };

    // Normal range for hemoglobin levels (in g/dL)
    const normalRange = { min: 12, max: 17 };

    // Check Hemoglobin Level for normal range
    const checkHemoglobinLevel = () => {
        const hemoglobinValue = parseFloat(amount);

        if (isNaN(hemoglobinValue) || hemoglobinValue <= 0) {
            setHemoglobinLevel('Please enter a valid hemoglobin level.');
        } else if (hemoglobinValue < normalRange.min) {
            setHemoglobinLevel(`Hemoglobin level is low: ${hemoglobinValue} g/dL. Consult a doctor.`);
        } else if (hemoglobinValue > normalRange.max) {
            setHemoglobinLevel(`Hemoglobin level is high: ${hemoglobinValue} g/dL. Consult a doctor.`);
        } else {
            setHemoglobinLevel(`Hemoglobin level is normal: ${hemoglobinValue} g/dL.`);
        }
    };

    const convertHemoglobin = () => {
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
                Hemoglobin Level Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Hemoglobin Level (g/dL)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter hemoglobin level"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkHemoglobinLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Hemoglobin Level</Text>
                </TouchableOpacity>

                {hemoglobinLevel && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {hemoglobinLevel}
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
                    onPress={convertHemoglobin}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Hemoglobin</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Hemoglobin: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Hemoglobin;
