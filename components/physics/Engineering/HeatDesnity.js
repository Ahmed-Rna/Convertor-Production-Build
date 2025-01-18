import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const HeatDensity = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitA, setFromUnitA] = useState('J_m3K'); // Joules per cubic meter per Kelvin
    const [toUnitA, setToUnitA] = useState('J_m3K');   // Joules per cubic meter per Kelvin
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesHeatDensity = {
        J_m3K: 1,          // Joules per cubic meter per Kelvin (J/m³·K)
        cal_m3K: 0.2390057, // Calories per cubic meter per Kelvin (cal/m³·K)
        kJ_m3K: 0.001,      // Kilojoules per cubic meter per Kelvin (kJ/m³·K)
        Btu_ft3F: 0.000947, // British Thermal Units per cubic foot per Fahrenheit (BTU/ft³·°F)
        Wh_m3K: 0.0002778,  // Watt-hour per cubic meter per Kelvin (Wh/m³·K)
    };

    const simulateConversion = () => {
        const fromRateHeatDensity = conversionRatesHeatDensity[fromUnitA];
        const toRateHeatDensity = conversionRatesHeatDensity[toUnitA];

        if (fromRateHeatDensity && toRateHeatDensity) {
            const result = (parseFloat(amount) * fromRateHeatDensity) / toRateHeatDensity;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Heat Density Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Heat Density Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Heat Density</Text>
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
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={fromUnitA}
                            onValueChange={(itemValue) => setFromUnitA(itemValue)}
                        >
                            <Picker.Item label="Joules per Cubic Meter per Kelvin (J/m³·K)" value="J_m3K" />
                            <Picker.Item label="Calories per Cubic Meter per Kelvin (cal/m³·K)" value="cal_m3K" />
                            <Picker.Item label="Kilojoules per Cubic Meter per Kelvin (kJ/m³·K)" value="kJ_m3K" />
                            <Picker.Item label="BTU per Cubic Foot per Fahrenheit (BTU/ft³·°F)" value="Btu_ft3F" />
                            <Picker.Item label="Watt-hour per Cubic Meter per Kelvin (Wh/m³·K)" value="Wh_m3K" />
                        </Picker>
                    </View>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={toUnitA}
                            onValueChange={(itemValue) => setToUnitA(itemValue)}
                        >
                            <Picker.Item label="Joules per Cubic Meter per Kelvin (J/m³·K)" value="J_m3K" />
                            <Picker.Item label="Calories per Cubic Meter per Kelvin (cal/m³·K)" value="cal_m3K" />
                            <Picker.Item label="Kilojoules per Cubic Meter per Kelvin (kJ/m³·K)" value="kJ_m3K" />
                            <Picker.Item label="BTU per Cubic Foot per Fahrenheit (BTU/ft³·°F)" value="Btu_ft3F" />
                            <Picker.Item label="Watt-hour per Cubic Meter per Kelvin (Wh/m³·K)" value="Wh_m3K" />
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
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Heat Density: {conversionResult} {toUnitA}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default HeatDensity;
