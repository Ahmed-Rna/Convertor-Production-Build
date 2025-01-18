import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const VolumeCharge = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('C_m3');
    const [toUnit, setToUnit] = useState('C_m3');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRates = {
        C_m3: 1,                  // Coulombs per cubic meter
        uC_m3: 1e-6,              // Microcoulombs per cubic meter
        nC_m3: 1e-9,              // Nanocoulombs per cubic meter
    };

    const simulateConversion = () => {
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
                Volume Charge Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Volume Charge Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Volume Charge</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter volume charge in C/m³"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`h-14 w-full text-black bg-white`}
                    >
                        <Picker.Item label="Coulombs per Cubic Meter (C/m³)" value="C_m3" />
                        <Picker.Item label="Microcoulombs per Cubic Meter (µC/m³)" value="uC_m3" />
                        <Picker.Item label="Nanocoulombs per Cubic Meter (nC/m³)" value="nC_m3" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`h-14 w-full text-black bg-white`}
                    >
                        <Picker.Item label="Coulombs per Cubic Meter (C/m³)" value="C_m3" />
                        <Picker.Item label="Microcoulombs per Cubic Meter (µC/m³)" value="uC_m3" />
                        <Picker.Item label="Nanocoulombs per Cubic Meter (nC/m³)" value="nC_m3" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={simulateConversion}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {/* Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Volume Charge: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default VolumeCharge;
