import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const FluxDensity = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitF, setFromUnitF] = useState('g_cm3');
    const [toUnitF, setToUnitF] = useState('g_cm3');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesFlexDensity = {
        g_cm3: 1, // Gram per cubic centimeter
        kg_m3: 1000, // Kilogram per cubic meter
        lb_ft3: 62.42796, // Pound per cubic foot
        oz_in3: 0.57804, // Ounce per cubic inch
        mg_cm3: 1000, // Milligram per cubic centimeter
    };

    const simulateConversion = () => {
        const fromRateFlexDensity = conversionRatesFlexDensity[fromUnitF];
        const toRateFlexDensity = conversionRatesFlexDensity[toUnitF];

        if (fromRateFlexDensity && toRateFlexDensity) {
            const result = (parseFloat(amount) * fromRateFlexDensity) / toRateFlexDensity;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Flex Density Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Amount */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Flex Density</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
                    <Picker
                        selectedValue={fromUnitF}
                        onValueChange={(itemValue) => setFromUnitF(itemValue)}
                        style={tw`w-full bg-white rounded-lg`}
                    >
                        <Picker.Item label="Gram per cubic centimeter (g/cm³)" value="g_cm3" />
                        <Picker.Item label="Kilogram per cubic meter (kg/m³)" value="kg_m3" />
                        <Picker.Item label="Pound per cubic foot (lb/ft³)" value="lb_ft3" />
                        <Picker.Item label="Ounce per cubic inch (oz/in³)" value="oz_in3" />
                        <Picker.Item label="Milligram per cubic centimeter (mg/cm³)" value="mg_cm3" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <Picker
                        selectedValue={toUnitF}
                        onValueChange={(itemValue) => setToUnitF(itemValue)}
                        style={tw`w-full bg-white rounded-lg`}
                    >
                        <Picker.Item label="Gram per cubic centimeter (g/cm³)" value="g_cm3" />
                        <Picker.Item label="Kilogram per cubic meter (kg/m³)" value="kg_m3" />
                        <Picker.Item label="Pound per cubic foot (lb/ft³)" value="lb_ft3" />
                        <Picker.Item label="Ounce per cubic inch (oz/in³)" value="oz_in3" />
                        <Picker.Item label="Milligram per cubic centimeter (mg/cm³)" value="mg_cm3" />
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
                            Converted Flex Density: {conversionResult} {toUnitF}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default FluxDensity;
