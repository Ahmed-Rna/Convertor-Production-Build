import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Calcium = () => {
    const [amount, setAmount] = useState('0');
    const [calciumLevelAdvice, setCalciumLevelAdvice] = useState('');
    const [fromUnit, setFromUnit] = useState('mg/dL');
    const [toUnit, setToUnit] = useState('mmol/L');
    const [conversionResult, setConversionResult] = useState(null);

    // Normal calcium range in mg/dL
    const normalRange = { min: 8.5, max: 10.2 };

    // Conversion functions for each unit
    const conversionRates = {
        'mg/dL': { toBase: (value) => value, fromBase: (value) => value },
        'mmol/L': { toBase: (value) => value / 0.2495, fromBase: (value) => value * 0.2495 },
        'mg/L': { toBase: (value) => value / 10, fromBase: (value) => value * 10 },
        'µmol/L': { toBase: (value) => value / 249.5, fromBase: (value) => value * 249.5 },
        'g/dL': { toBase: (value) => value * 10, fromBase: (value) => value / 10 },
        'g/L': { toBase: (value) => value, fromBase: (value) => value },
        'kg/m³': { toBase: (value) => value * 1, fromBase: (value) => value },
        'meq/L': { toBase: (value) => value / 2, fromBase: (value) => value * 2 },
        'ppm': { toBase: (value) => value / 100, fromBase: (value) => value * 100 },
        'mol/L': { toBase: (value) => value * 1000, fromBase: (value) => value / 1000 },
    };

    const convertCalcium = () => {
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

    const checkCalciumLevel = () => {
        const calciumValue = parseFloat(amount);

        if (isNaN(calciumValue) || calciumValue <= 0) {
            setCalciumLevelAdvice('Please enter a valid calcium level.');
        } else if (calciumValue < normalRange.min) {
            setCalciumLevelAdvice(`Calcium level is low: ${calciumValue} mg/dL. Consult a doctor.`);
        } else if (calciumValue > normalRange.max) {
            setCalciumLevelAdvice(`Calcium level is high: ${calciumValue} mg/dL. Consult a doctor.`);
        } else {
            setCalciumLevelAdvice(`Calcium level is normal: ${calciumValue} mg/dL.`);
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-800 p-6`}>
            <Text style={tw`text-center text-3xl font-bold text-white mb-6`}>
                Calcium Level Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Calcium Level (mg/dL)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter calcium level"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkCalciumLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Calcium Level</Text>
                </TouchableOpacity>

                {calciumLevelAdvice && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {calciumLevelAdvice}
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
                    onPress={convertCalcium}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Calcium</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Calcium: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Calcium;
