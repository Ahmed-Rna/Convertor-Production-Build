import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Ferritin = () => {
    const [amount, setAmount] = useState('0');
    const [ferritinLevel, setFerritinLevel] = useState('');
    const [fromUnit, setFromUnit] = useState('ng/mL');
    const [toUnit, setToUnit] = useState('µg/L');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion rates for ferritin units
    const conversionRates = {
        'ng/mL': { toBase: (value) => value, fromBase: (value) => value },
        'µg/L': { toBase: (value) => value, fromBase: (value) => value },
        'ng/dL': { toBase: (value) => value / 10, fromBase: (value) => value * 10 },
        'pg/mL': { toBase: (value) => value * 1000, fromBase: (value) => value / 1000 },
        'mg/L': { toBase: (value) => value * 1000, fromBase: (value) => value / 1000 },
        'µmol/L': { toBase: (value) => value / 55.847, fromBase: (value) => value * 55.847 },
        'nmol/L': { toBase: (value) => (value / 55.847) * 1000, fromBase: (value) => (value * 55.847) / 1000 },
        'µg/dL': { toBase: (value) => value / 100, fromBase: (value) => value * 100 },
        'g/L': { toBase: (value) => value * 1000000, fromBase: (value) => value / 1000000 },
        'pmol/L': { toBase: (value) => (value / 55.847) * 1e12, fromBase: (value) => (value * 55.847) / 1e12 },
    };

    // Normal range for Ferritin levels (in ng/mL)
    const normalRange = { min: 30, max: 400 };

    // Check Ferritin Level for normal range
    const checkFerritinLevel = () => {
        const ferritinValue = parseFloat(amount);

        if (isNaN(ferritinValue) || ferritinValue <= 0) {
            setFerritinLevel('Please enter a valid ferritin level.');
        } else if (ferritinValue < normalRange.min) {
            setFerritinLevel(`Ferritin level is low: ${ferritinValue} ng/mL. Consult a doctor.`);
        } else if (ferritinValue > normalRange.max) {
            setFerritinLevel(`Ferritin level is high: ${ferritinValue} ng/mL. Consult a doctor.`);
        } else {
            setFerritinLevel(`Ferritin level is normal: ${ferritinValue} ng/mL.`);
        }
    };

    // Convert Ferritin
    const convertFerritin = () => {
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
                Ferritin Level Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Ferritin Level (ng/mL)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter ferritin level"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkFerritinLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Ferritin Level</Text>
                </TouchableOpacity>

                {ferritinLevel && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {ferritinLevel}
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
                    onPress={convertFerritin}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Ferritin</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Ferritin: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Ferritin;
