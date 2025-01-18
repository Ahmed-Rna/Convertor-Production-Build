import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const SolutionConverter = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('mol_per_l');
    const [toUnit, setToUnit] = useState('g_per_l');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion rates for solution units
    const conversionRatesSolution = {
        mol_per_l: 1,        // Molarity (mol/L)
        g_per_l: 0.1,        // Gram per liter
        percent: 10,         // Percentage concentration
        ppm: 10000,          // Parts per million
        ppb: 10000000,       // Parts per billion
    };

    const convertSolution = () => {
        const fromRate = conversionRatesSolution[fromUnit];
        const toRate = conversionRatesSolution[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(4));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Solution Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Amount</Text>
                    <TextInput 
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter amount"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker 
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`w-full  bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Molarity (mol/L)" value="mol_per_l" />
                        <Picker.Item label="Grams per Liter" value="g_per_l" />
                        <Picker.Item label="Percentage (%)" value="percent" />
                        <Picker.Item label="Parts per Million (ppm)" value="ppm" />
                        <Picker.Item label="Parts per Billion (ppb)" value="ppb" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Molarity (mol/L)" value="mol_per_l" />
                        <Picker.Item label="Grams per Liter" value="g_per_l" />
                        <Picker.Item label="Percentage (%)" value="percent" />
                        <Picker.Item label="Parts per Million (ppm)" value="ppm" />
                        <Picker.Item label="Parts per Billion (ppb)" value="ppb" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={convertSolution}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Convert
                    </Text>
                </TouchableOpacity>

                {/* Conversion Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Solution: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default SolutionConverter;
