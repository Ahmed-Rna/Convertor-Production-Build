import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Creatinine = () => {
    const [amount, setAmount] = useState('0');
    const [creatinineLevel, setCreatinineLevel] = useState('');
    const [fromUnit, setFromUnit] = useState('mg/dL');
    const [toUnit, setToUnit] = useState('mmol/L');
    const [convertedValue, setConvertedValue] = useState(null);

    // Normal range for creatinine levels (in mg/dL)
    const normalRange = { min: 0.6, max: 1.3 };

    // Conversion rates for creatinine units
    const conversionRates = {
        'mg/dL': { toBase: (value) => value, fromBase: (value) => value },
        'mmol/L': { toBase: (value) => value / 88.4, fromBase: (value) => value * 88.4 },
        'mg/L': { toBase: (value) => value / 10, fromBase: (value) => value * 10 },
        'µmol/L': { toBase: (value) => value / 0.0884, fromBase: (value) => value * 0.0884 },
        'g/L': { toBase: (value) => value / 100, fromBase: (value) => value * 100 },
        'g/dL': { toBase: (value) => value * 10, fromBase: (value) => value / 10 },
        'kg/m³': { toBase: (value) => value / 100, fromBase: (value) => value * 100 },
        'meq/L': { toBase: (value) => value / 0.5, fromBase: (value) => value * 0.5 },
        'ppm': { toBase: (value) => value / 10, fromBase: (value) => value * 10 },
        'mol/L': { toBase: (value) => value * 1000, fromBase: (value) => value / 1000 },
    };

    // Check Creatinine Level for normal range
    const checkCreatinineLevel = () => {
        const creatinineValue = parseFloat(amount);

        if (isNaN(creatinineValue) || creatinineValue <= 0) {
            setCreatinineLevel('Please enter a valid creatinine level.');
        } else if (creatinineValue < normalRange.min) {
            setCreatinineLevel(`Creatinine level is low: ${creatinineValue} mg/dL. Consult a doctor.`);
        } else if (creatinineValue > normalRange.max) {
            setCreatinineLevel(`Creatinine level is high: ${creatinineValue} mg/dL. Consult a doctor.`);
        } else {
            setCreatinineLevel(`Creatinine level is normal: ${creatinineValue} mg/dL.`);
        }
    };

    // Convert Creatinine
    const convertCreatinine = () => {
        const fromConverter = conversionRates[fromUnit];
        const toConverter = conversionRates[toUnit];

        if (fromConverter && toConverter) {
            const baseValue = fromConverter.toBase(parseFloat(amount));
            const convertedValue = toConverter.fromBase(baseValue);
            setConvertedValue(convertedValue.toFixed(4));
        } else {
            setConvertedValue('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-800 p-6`}>
            <Text style={tw`text-center text-3xl font-bold text-white mb-6`}>
                Creatinine Level Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Creatinine Level (mg/dL)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter creatinine level"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkCreatinineLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Creatinine Level</Text>
                </TouchableOpacity>

                {creatinineLevel && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {creatinineLevel}
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
                    onPress={convertCreatinine}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Creatinine</Text>
                </TouchableOpacity>

                {convertedValue && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Creatinine: {convertedValue} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Creatinine;