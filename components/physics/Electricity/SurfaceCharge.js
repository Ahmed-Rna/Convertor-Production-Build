import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const SurfaceCharge = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('C_m2');
    const [toUnit, setToUnit] = useState('C_m2');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRates = {
        C_m2: 1,                  // Coulombs per square meter
        uC_m2: 1e-6,              // Microcoulombs per square meter
        nC_m2: 1e-9,              // Nanocoulombs per square meter
        pC_m2: 1e-12,             // Picocoulombs per square meter
        mC_m2: 1e-3,              // Millicoulombs per square meter
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
                Surface Charge Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Surface Charge Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Surface Charge</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter surface charge"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
                    <Picker
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`h-14 w-full text-black bg-white`}
                    >
                        <Picker.Item label="Coulombs per Square Meter (C/m²)" value="C_m2" />
                        <Picker.Item label="Microcoulombs per Square Meter (µC/m²)" value="uC_m2" />
                        <Picker.Item label="Nanocoulombs per Square Meter (nC/m²)" value="nC_m2" />
                        <Picker.Item label="Picocoulombs per Square Meter (pC/m²)" value="pC_m2" />
                        <Picker.Item label="Millicoulombs per Square Meter (mC/m²)" value="mC_m2" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <Picker
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`h-14 w-full text-black bg-white`}
                    >
                        <Picker.Item label="Coulombs per Square Meter (C/m²)" value="C_m2" />
                        <Picker.Item label="Microcoulombs per Square Meter (µC/m²)" value="uC_m2" />
                        <Picker.Item label="Nanocoulombs per Square Meter (nC/m²)" value="nC_m2" />
                        <Picker.Item label="Picocoulombs per Square Meter (pC/m²)" value="pC_m2" />
                        <Picker.Item label="Millicoulombs per Square Meter (mC/m²)" value="mC_m2" />
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
                            Converted Surface Charge: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default SurfaceCharge;
