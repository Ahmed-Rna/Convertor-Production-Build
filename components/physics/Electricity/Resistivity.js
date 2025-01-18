import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Resistivity = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('ohm_meter');
    const [toUnit, setToUnit] = useState('ohm_meter');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesResistivity = {
        ohm_meter: 1,            // Ohm-meter (Ω·m)
        ohm_centimeter: 1e-2,    // Ohm-centimeter (Ω·cm)
        ohm_millimeter: 1e-3,    // Ohm-millimeter (Ω·mm)
        megaohm_centimeter: 1e2, // Megaohm-centimeter (MΩ·cm)
        microohm_centimeter: 1e-4, // Microohm-centimeter (µΩ·cm)
    };

    const simulateConversion = () => {
        const fromRate = conversionRatesResistivity[fromUnit];
        const toRate = conversionRatesResistivity[toUnit];

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
                Resistivity Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Resistivity Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Resistivity (Ω·m)</Text>
                    <TextInput 
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter resistivity"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
                    <Picker 
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`h-14 w-full bg-white text-black rounded-lg`}
                    >
                        <Picker.Item label="Ohm-meter (Ω·m)" value="ohm_meter" />
                        <Picker.Item label="Ohm-centimeter (Ω·cm)" value="ohm_centimeter" />
                        <Picker.Item label="Ohm-millimeter (Ω·mm)" value="ohm_millimeter" />
                        <Picker.Item label="Megaohm-centimeter (MΩ·cm)" value="megaohm_centimeter" />
                        <Picker.Item label="Microohm-centimeter (µΩ·cm)" value="microohm_centimeter" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <Picker 
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`h-14 w-full bg-white text-black rounded-lg`}
                    >
                        <Picker.Item label="Ohm-meter (Ω·m)" value="ohm_meter" />
                        <Picker.Item label="Ohm-centimeter (Ω·cm)" value="ohm_centimeter" />
                        <Picker.Item label="Ohm-millimeter (Ω·mm)" value="ohm_millimeter" />
                        <Picker.Item label="Megaohm-centimeter (MΩ·cm)" value="megaohm_centimeter" />
                        <Picker.Item label="Microohm-centimeter (µΩ·cm)" value="microohm_centimeter" />
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

                {/* Conversion Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Resistivity: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Resistivity;
