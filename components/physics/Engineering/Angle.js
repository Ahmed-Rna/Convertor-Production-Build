import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Angle = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitA, setFromUnitA] = useState('degree');
    const [toUnitA, setToUnitA] = useState('radian');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesAngle = {
        degree: 1,              // degree
        radian: Math.PI / 180,  // radian
        gradian: 0.9,           // gradian
        arcminute: 1 / 60,      // arcminute
        arcsecond: 1 / 3600,    // arcsecond
    };

    const simulateConversion = () => {
        const fromRateAngle = conversionRatesAngle[fromUnitA];
        const toRateAngle = conversionRatesAngle[toUnitA];

        if (fromRateAngle && toRateAngle) {
            const result = (parseFloat(amount) * fromRateAngle) / toRateAngle;
            setConversionResult(result.toFixed(6));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Angle Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Angle Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Angle</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter angle"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker
                        selectedValue={fromUnitA}
                        onValueChange={(itemValue) => setFromUnitA(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Degree" value="degree" />
                        <Picker.Item label="Radian" value="radian" />
                        <Picker.Item label="Gradian" value="gradian" />
                        <Picker.Item label="Arcminute" value="arcminute" />
                        <Picker.Item label="Arcsecond" value="arcsecond" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnitA}
                        onValueChange={(itemValue) => setToUnitA(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Degree" value="degree" />
                        <Picker.Item label="Radian" value="radian" />
                        <Picker.Item label="Gradian" value="gradian" />
                        <Picker.Item label="Arcminute" value="arcminute" />
                        <Picker.Item label="Arcsecond" value="arcsecond" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={simulateConversion}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {/* Results */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Angle: {conversionResult} {toUnitA}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Angle;
