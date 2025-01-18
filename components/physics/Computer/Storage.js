import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const StorageConverter = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('byte');
    const [toUnit, setToUnit] = useState('kilobyte');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRates = {
        byte: 1,
        kilobyte: 1 / 1024,
        megabyte: 1 / (1024 ** 2),
        gigabyte: 1 / (1024 ** 3),
        terabyte: 1 / (1024 ** 4),
        petabyte: 1 / (1024 ** 5),
        bit: 8,
        kilobit: 8 / 1024,
        megabit: 8 / (1024 ** 2),
        gigabit: 8 / (1024 ** 3),
        terabit: 8 / (1024 ** 4),
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
                Storage Unit Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Storage Value</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter storage value"
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
                        {Object.keys(conversionRates).map((unit) => (
                            <Picker.Item label={unit} value={unit} key={unit} />
                        ))}
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
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Convert
                    </Text>
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

export default StorageConverter;
