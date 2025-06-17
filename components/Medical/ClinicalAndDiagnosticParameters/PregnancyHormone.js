import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const PregnancyHormone = () => {
    const [amount, setAmount] = useState('0');
    const [hormoneLevel, setHormoneLevel] = useState('');
    const [fromUnit, setFromUnit] = useState('mIU/mL');
    const [toUnit, setToUnit] = useState('ng/mL');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion functions for pregnancy hormones
    const conversionRates = {
        'mIU/mL': { toBase: (value) => value, fromBase: (value) => value },
        'ng/mL': { toBase: (value) => value * 1000, fromBase: (value) => value / 1000 },
        'pg/mL': { toBase: (value) => value * 1000000, fromBase: (value) => value / 1000000 },
        'mIU/L': { toBase: (value) => value / 1000, fromBase: (value) => value * 1000 },
        'ng/dL': { toBase: (value) => value * 100, fromBase: (value) => value / 100 },
    };

    // Hormone Level Finder logic
    const checkHormoneLevel = () => {
        const hormoneValue = parseFloat(amount);

        if (isNaN(hormoneValue) || hormoneValue <= 0) {
            setHormoneLevel('Please enter a valid hormone level.');
        } else if (hormoneValue < 5) {
            setHormoneLevel(`Hormone level is low: ${hormoneValue}. Consult a doctor.`);
        } else if (hormoneValue > 50) {
            setHormoneLevel(`Hormone level is high: ${hormoneValue}. Consult a doctor.`);
        } else {
            setHormoneLevel(`Hormone level is normal: ${hormoneValue}.`);
        }
    };

    // Convert Hormones
    const convertHormones = () => {
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
                Pregnancy Hormone Converter
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                {/* Hormone Finder and Conversion Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Hormone Level</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter hormone level"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Check Hormone Level */}
                <TouchableOpacity
                    onPress={checkHormoneLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Hormone Level</Text>
                </TouchableOpacity>

                {hormoneLevel && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {hormoneLevel}
                    </Text>
                )}

                {/* Conversion Section */}
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

                {/* Convert Hormones Button */}
                <TouchableOpacity
                    onPress={convertHormones}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Hormones</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Hormone Level: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default PregnancyHormone;
