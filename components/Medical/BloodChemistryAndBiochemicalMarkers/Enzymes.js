import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Enzymes = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('U/L');
    const [toUnit, setToUnit] = useState('IU/L');
    const [conversionResult, setConversionResult] = useState(null);
    const [enzymeAdvice, setEnzymeAdvice] = useState('');

    // Conversion rates for enzyme units
    const conversionRates = {
        'U/L': { toBase: (value) => value, fromBase: (value) => value },
        'kU/L': { toBase: (value) => value * 1000, fromBase: (value) => value / 1000 },
        'mU/L': { toBase: (value) => value / 1000, fromBase: (value) => value * 1000 },
        'IU/L': { toBase: (value) => value, fromBase: (value) => value },
        'µU/L': { toBase: (value) => value / 1e6, fromBase: (value) => value * 1e6 },
        'nkat/L': { toBase: (value) => value * 60, fromBase: (value) => value / 60 },
        'kat/L': { toBase: (value) => value * 60 * 1e9, fromBase: (value) => value / (60 * 1e9) },
        'µkat/L': { toBase: (value) => value * 60 * 1e3, fromBase: (value) => value / (60 * 1e3) },
        'pmol/s/L': { toBase: (value) => value / 1e12, fromBase: (value) => value * 1e12 },
        'nmol/s/L': { toBase: (value) => value / 1e9, fromBase: (value) => value * 1e9 },
    };

    // Check enzyme level and provide advice
    const checkEnzymeLevel = () => {
        const enzymeValue = parseFloat(amount);

        if (isNaN(enzymeValue) || enzymeValue <= 0) {
            setEnzymeAdvice('Please enter a valid enzyme level.');
        } else if (enzymeValue < 20) {
            setEnzymeAdvice('Enzyme level is very low. Consult a healthcare provider.');
        } else if (enzymeValue > 500) {
            setEnzymeAdvice('Enzyme level is very high. Immediate medical attention may be required.');
        } else {
            setEnzymeAdvice('Enzyme level is within the normal range.');
        }
    };

    // Convert enzyme units
    const convertEnzyme = () => {
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
            {/* Title */}
            <Text style={tw`text-center text-3xl font-bold text-white mb-6`}>
                Enzyme Unit Checker & Converter
            </Text>

            {/* Main Container */}
            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                {/* Enzyme Level Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Enzyme Level</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter enzyme level"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Check Button */}
                <TouchableOpacity
                    onPress={checkEnzymeLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Enzyme Level</Text>
                </TouchableOpacity>

                {/* Enzyme Level Advice */}
                {enzymeAdvice && (
                    <Text style={tw`text-center text-white text-lg font-semibold mb-4`}>
                        {enzymeAdvice}
                    </Text>
                )}

                {/* From and To Pickers */}
                <View style={tw`mt-4 flex-row justify-between`}>
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
                    onPress={convertEnzyme}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {/* Conversion Result */}
                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Enzyme Level: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Enzymes;