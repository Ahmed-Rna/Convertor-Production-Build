import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Cholesterol = () => {
    const [amount, setAmount] = useState('0');
    const [cholesterolAdvice, setCholesterolAdvice] = useState('');
    const [fromUnit, setFromUnit] = useState('mg/dL');
    const [toUnit, setToUnit] = useState('mmol/L');
    const [conversionResult, setConversionResult] = useState(null);

    // Normal range for cholesterol levels (in mg/dL)
    const normalRange = { min: 125, max: 200 };

    // Conversion rates for cholesterol units
    const conversionRates = {
        'mg/dL': { toBase: (value) => value, fromBase: (value) => value },
        'mmol/L': { toBase: (value) => value / 38.67, fromBase: (value) => value * 38.67 },
        'mg/L': { toBase: (value) => value / 10, fromBase: (value) => value * 10 },
        'µmol/L': { toBase: (value) => value / 0.03867, fromBase: (value) => value * 0.03867 },
        'g/L': { toBase: (value) => value / 100, fromBase: (value) => value * 100 },
        'g/dL': { toBase: (value) => value * 10, fromBase: (value) => value / 10 },
        'meq/L': { toBase: (value) => value / 0.5, fromBase: (value) => value * 0.5 },
    };

    const checkCholesterolLevel = () => {
        const cholesterolValue = parseFloat(amount);

        if (isNaN(cholesterolValue) || cholesterolValue <= 0) {
            setCholesterolAdvice('Please enter a valid cholesterol level.');
        } else if (cholesterolValue < normalRange.min) {
            setCholesterolAdvice(
                `Cholesterol level is low: ${cholesterolValue} mg/dL. Consider increasing your intake of healthy fats and consulting a doctor.`
            );
        } else if (cholesterolValue > normalRange.max) {
            setCholesterolAdvice(
                `Cholesterol level is high: ${cholesterolValue} mg/dL. Reduce saturated fats and cholesterol in your diet and consult a doctor.`
            );
        } else {
            setCholesterolAdvice(`Cholesterol level is normal: ${cholesterolValue} mg/dL.`);
        }
    };

    const convertCholesterol = () => {
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
                Cholesterol Level Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Cholesterol Level (mg/dL)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter cholesterol level"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkCholesterolLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Check Cholesterol Level
                    </Text>
                </TouchableOpacity>

                {cholesterolAdvice && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {cholesterolAdvice}
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
                    onPress={convertCholesterol}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Convert Cholesterol
                    </Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Cholesterol: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Cholesterol;
