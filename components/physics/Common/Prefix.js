import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Prefix = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('peta');
    const [toUnit, setToUnit] = useState('mega');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion rates for different prefixes
    const conversionRates = {
        peta: 1e15,  // Peta
        tera: 1e12,  // Tera
        giga: 1e9,   // Giga
        mega: 1e6,   // Mega
        kilo: 1e3,   // Kilo
        base: 1,     // Base unit (e.g., meter, byte, etc.)
        milli: 1e-3, // Milli
        micro: 1e-6, // Micro
        nano: 1e-9,  // Nano
        pico: 1e-12, // Pico
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
                Prefix Unit Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Value</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter value"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
                    <Picker
                        selectedValue={fromUnit}
                        onValueChange={setFromUnit}
                        style={tw`w-full p-0 bg-white rounded-lg`}
                    >
                        <Picker.Item label="Peta (P)" value="peta" />
                        <Picker.Item label="Tera (T)" value="tera" />
                        <Picker.Item label="Giga (G)" value="giga" />
                        <Picker.Item label="Mega (M)" value="mega" />
                        <Picker.Item label="Kilo (k)" value="kilo" />
                        <Picker.Item label="Base Unit" value="base" />
                        <Picker.Item label="Milli (m)" value="milli" />
                        <Picker.Item label="Micro (μ)" value="micro" />
                        <Picker.Item label="Nano (n)" value="nano" />
                        <Picker.Item label="Pico (p)" value="pico" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <Picker
                        selectedValue={toUnit}
                        onValueChange={setToUnit}
                        style={tw`w-full p-0 bg-white rounded-lg`}
                    >
                        <Picker.Item label="Peta (P)" value="peta" />
                        <Picker.Item label="Tera (T)" value="tera" />
                        <Picker.Item label="Giga (G)" value="giga" />
                        <Picker.Item label="Mega (M)" value="mega" />
                        <Picker.Item label="Kilo (k)" value="kilo" />
                        <Picker.Item label="Base Unit" value="base" />
                        <Picker.Item label="Milli (m)" value="milli" />
                        <Picker.Item label="Micro (μ)" value="micro" />
                        <Picker.Item label="Nano (n)" value="nano" />
                        <Picker.Item label="Pico (p)" value="pico" />
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
                {conversionResult !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Value: {conversionResult}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Prefix;
