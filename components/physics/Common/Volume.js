import React, { useState } from 'react';
import { View, Text, TextInput,  TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';


const VolumeCharge = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('C_m3');
    const [toUnit, setToUnit] = useState('C_m3');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRates = {
        C_m3: 1,
        uC_m3: 1e-6,
        nC_m3: 1e-9,
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

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Volume Charge</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter charge amount"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
                    <Picker
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`w-full bg-white text-black rounded-lg`}
                    >
                        <Picker.Item label="Coulombs per Cubic Meter (C/m³)" value="C_m3" />
                        <Picker.Item label="Microcoulombs per Cubic Meter (µC/m³)" value="uC_m3" />
                        <Picker.Item label="Nanocoulombs per Cubic Meter (nC/m³)" value="nC_m3" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <Picker
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`w-full bg-white text-black rounded-lg`}
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

                {/* Results */}
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
