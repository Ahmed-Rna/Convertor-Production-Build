import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Concentration = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('M');
    const [toUnit, setToUnit] = useState('mM');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRates = {
        M: 1,              // Molar
        mM: 1000,          // milliMolar
        µM: 1000000,       // microMolar
        g_L: 1,            // gram per liter
        mg_L: 1000,        // milligram per liter
        ppm: 1000,         // parts per million
        ppb: 1000000       // parts per billion
    };

    const simulateConversion = () => {
        const fromRate = conversionRates[fromUnit];
        const toRate = conversionRates[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Concentration Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Concentration Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Concentration</Text>
                    <TextInput 
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter concentration"
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
                        <Picker.Item label="Molar (M)" value="M" />
                        <Picker.Item label="MilliMolar (mM)" value="mM" />
                        <Picker.Item label="MicroMolar (µM)" value="µM" />
                        <Picker.Item label="Gram/Liter (g/L)" value="g_L" />
                        <Picker.Item label="Milligram/Liter (mg/L)" value="mg_L" />
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
                        style={tw`w-full  bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Molar (M)" value="M" />
                        <Picker.Item label="MilliMolar (mM)" value="mM" />
                        <Picker.Item label="MicroMolar (µM)" value="µM" />
                        <Picker.Item label="Gram/Liter (g/L)" value="g_L" />
                        <Picker.Item label="Milligram/Liter (mg/L)" value="mg_L" />
                        <Picker.Item label="Parts per Million (ppm)" value="ppm" />
                        <Picker.Item label="Parts per Billion (ppb)" value="ppb" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={simulateConversion}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Convert
                    </Text>
                </TouchableOpacity>

                {/* Results */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Concentration: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Concentration;
