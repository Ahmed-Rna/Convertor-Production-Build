import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Flow = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitF, setFromUnitF] = useState('cubic_m_per_sec');
    const [toUnitF, setToUnitF] = useState('cubic_ft_per_sec');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesFlow = {
        cubic_m_per_sec: 1,            // cubic meters per second
        cubic_ft_per_sec: 35.3147,     // cubic feet per second
        cubic_m_per_min: 60,           // cubic meters per minute
        cubic_ft_per_min: 2118.88,     // cubic feet per minute
        liter_per_sec: 1000,           // liters per second
        liter_per_min: 60000,          // liters per minute
        gal_per_min: 15850.3,          // gallons per minute
        gal_per_sec: 264.172,          // gallons per second
    };

    const simulateConversion = () => {
        const fromRateFlow = conversionRatesFlow[fromUnitF];
        const toRateFlow = conversionRatesFlow[toUnitF];

        if (fromRateFlow && toRateFlow) {
            const result = (parseFloat(amount) * fromRateFlow) / toRateFlow;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Flow Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Flow Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Flow</Text>
                    <TextInput 
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter flow"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker 
                        selectedValue={fromUnitF}
                        onValueChange={(itemValue) => setFromUnitF(itemValue)}
                        style={tw`w-full  bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Cubic Meter/Second" value="cubic_m_per_sec" />
                        <Picker.Item label="Cubic Foot/Second" value="cubic_ft_per_sec" />
                        <Picker.Item label="Cubic Meter/Minute" value="cubic_m_per_min" />
                        <Picker.Item label="Cubic Foot/Minute" value="cubic_ft_per_min" />
                        <Picker.Item label="Liter/Second" value="liter_per_sec" />
                        <Picker.Item label="Liter/Minute" value="liter_per_min" />
                        <Picker.Item label="Gallon/Minute" value="gal_per_min" />
                        <Picker.Item label="Gallon/Second" value="gal_per_sec" />
                    </Picker>
                </View>

                {/* To Unit */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnitF}
                        onValueChange={(itemValue) => setToUnitF(itemValue)}
                        style={tw`w-full  bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Cubic Meter/Second" value="cubic_m_per_sec" />
                        <Picker.Item label="Cubic Foot/Second" value="cubic_ft_per_sec" />
                        <Picker.Item label="Cubic Meter/Minute" value="cubic_m_per_min" />
                        <Picker.Item label="Cubic Foot/Minute" value="cubic_ft_per_min" />
                        <Picker.Item label="Liter/Second" value="liter_per_sec" />
                        <Picker.Item label="Liter/Minute" value="liter_per_min" />
                        <Picker.Item label="Gallon/Minute" value="gal_per_min" />
                        <Picker.Item label="Gallon/Second" value="gal_per_sec" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={simulateConversion}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {/* Conversion Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Flow: {conversionResult} {toUnitF}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Flow;
