import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Area = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitA, setFromUnitA] = useState('sq_cm');
    const [toUnitA, setToUnitA] = useState('sq_m');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesArea = {
        sq_mm: 0.01,
        sq_cm: 1,
        sq_m: 10000,
        sq_km: 1e+10,
        acre: 40468564.2,
        hectare: 100000000,
        sq_mi: 2.59e+10,
        sq_yd: 8361.27,
        sq_ft: 929.0304,
        sq_in: 6.4516,
    };

    const simulateConversion = () => {
        const fromRateArea = conversionRatesArea[fromUnitA];
        const toRateArea = conversionRatesArea[toUnitA];

        if (fromRateArea && toRateArea) {
            const result = (parseFloat(amount) * fromRateArea) / toRateArea;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Area Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Area */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Area</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter area"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={fromUnitA}
                            onValueChange={(itemValue) => setFromUnitA(itemValue)}
                        >
                            <Picker.Item label="Square Millimeter" value="sq_mm" />
                            <Picker.Item label="Square Centimeter" value="sq_cm" />
                            <Picker.Item label="Square Meter" value="sq_m" />
                            <Picker.Item label="Square Kilometer" value="sq_km" />
                            <Picker.Item label="Acre" value="acre" />
                            <Picker.Item label="Hectare" value="hectare" />
                            <Picker.Item label="Square Mile" value="sq_mi" />
                            <Picker.Item label="Square Yard" value="sq_yd" />
                            <Picker.Item label="Square Foot" value="sq_ft" />
                            <Picker.Item label="Square Inch" value="sq_in" />
                        </Picker>
                    </View>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={toUnitA}
                            onValueChange={(itemValue) => setToUnitA(itemValue)}
                        >
                            <Picker.Item label="Square Millimeter" value="sq_mm" />
                            <Picker.Item label="Square Centimeter" value="sq_cm" />
                            <Picker.Item label="Square Meter" value="sq_m" />
                            <Picker.Item label="Square Kilometer" value="sq_km" />
                            <Picker.Item label="Acre" value="acre" />
                            <Picker.Item label="Hectare" value="hectare" />
                            <Picker.Item label="Square Mile" value="sq_mi" />
                            <Picker.Item label="Square Yard" value="sq_yd" />
                            <Picker.Item label="Square Foot" value="sq_ft" />
                            <Picker.Item label="Square Inch" value="sq_in" />
                        </Picker>
                    </View>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={simulateConversion}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {/* Results */}
                {conversionResult !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Area: {conversionResult} {toUnitA}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Area;
