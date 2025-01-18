import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Images = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('meter');
    const [toUnit, setToUnit] = useState('pixel');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRates = {
        meter: 1,
        centimeter: 100,
        millimeter: 1000,
        inch: 39.3701,
        foot: 3.28084,
        yard: 1.09361,
        pixel: 3779.5275591, // Assuming 96 DPI
        point: 2834.6456693, // PostScript point (1/72 inch)
        pica: 236.2204724, // 1/6 inch
    };

    const convert = () => {
        const fromRate = conversionRates[fromUnit];
        const toRate = conversionRates[toUnit];
        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(6));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Image Unit Converter
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

                {/* From Unit */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`h-14 w-full bg-white  text-black`}
                    >
                        {Object.keys(conversionRates).map((unit) => (
                            <Picker.Item label={unit} value={unit} key={unit} />
                        ))}
                    </Picker>
                </View>

                {/* To Unit */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`h-14 w-full bg-white  text-black`}
                    >
                        {Object.keys(conversionRates).map((unit) => (
                            <Picker.Item label={unit} value={unit} key={unit} />
                        ))}
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={convert}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {/* Conversion Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Value: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Images;
