import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Glucose = () => {
    const [amount, setAmount] = useState('0');
    const [glucoseLevel, setGlucoseLevel] = useState('');
    const [fromUnit, setFromUnit] = useState('mg/dL');
    const [toUnit, setToUnit] = useState('mmol/L');
    const [conversionResult, setConversionResult] = useState(null);

    // Normal glucose range (in mg/dL)
    const normalRange = { min: 70, max: 140 };

    // Conversion rates for glucose units
    const conversionRates = {
        'mg/dL': { toBase: (value) => value, fromBase: (value) => value },
        'mmol/L': { toBase: (value) => value / 18.01559, fromBase: (value) => value * 18.01559 },
        'mg/L': { toBase: (value) => value / 10, fromBase: (value) => value * 10 },
        'g/dL': { toBase: (value) => value * 100, fromBase: (value) => value / 100 },
        'g/L': { toBase: (value) => value * 10, fromBase: (value) => value / 10 },
    };

    // Check glucose level and provide advice
    const checkGlucoseLevel = () => {
        const glucoseValue = parseFloat(amount);

        if (isNaN(glucoseValue) || glucoseValue <= 0) {
            setGlucoseLevel('Please enter a valid glucose level.');
        } else if (glucoseValue < normalRange.min) {
            setGlucoseLevel(`Low glucose level: ${glucoseValue} mg/dL. Consider eating something sugary.`);
        } else if (glucoseValue > normalRange.max) {
            setGlucoseLevel(`High glucose level: ${glucoseValue} mg/dL. Consult a healthcare professional.`);
        } else {
            setGlucoseLevel(`Normal glucose level: ${glucoseValue} mg/dL.`);
        }
    };

    // Convert glucose
    const convertGlucose = () => {
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
                Glucose Level Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Glucose Level (mg/dL)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter glucose level"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkGlucoseLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Glucose Level</Text>
                </TouchableOpacity>

                {glucoseLevel && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {glucoseLevel}
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
                    onPress={convertGlucose}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Glucose</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Glucose Level: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Glucose;