import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Density = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitA, setFromUnitA] = useState('kg_m3'); // Kilograms per cubic meter
    const [toUnitA, setToUnitA] = useState('kg_m3'); // Kilograms per cubic meter
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesDensity = {
        kg_m3: 1, // Kilograms per cubic meter (kg/m³)
        g_cm3: 1000, // Grams per cubic centimeter (g/cm³)
        lb_ft3: 16.0185, // Pounds per cubic foot (lb/ft³)
        lb_in3: 0.0361273, // Pounds per cubic inch (lb/in³)
        oz_in3: 0.0610237, // Ounces per cubic inch (oz/in³)
        g_L: 1, // Grams per liter (g/L)
    };

    const simulateConversion = () => {
        const fromRateDensity = conversionRatesDensity[fromUnitA];
        const toRateDensity = conversionRatesDensity[toUnitA];

        if (fromRateDensity && toRateDensity) {
            const result = (parseFloat(amount) * fromRateDensity) / toRateDensity;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Density Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Value */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Density Value</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter density"
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
                            <Picker.Item label="Kilograms per Cubic Meter (kg/m³)" value="kg_m3" />
                            <Picker.Item label="Grams per Cubic Centimeter (g/cm³)" value="g_cm3" />
                            <Picker.Item label="Pounds per Cubic Foot (lb/ft³)" value="lb_ft3" />
                            <Picker.Item label="Pounds per Cubic Inch (lb/in³)" value="lb_in3" />
                            <Picker.Item label="Ounces per Cubic Inch (oz/in³)" value="oz_in3" />
                            <Picker.Item label="Grams per Liter (g/L)" value="g_L" />
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
                            <Picker.Item label="Kilograms per Cubic Meter (kg/m³)" value="kg_m3" />
                            <Picker.Item label="Grams per Cubic Centimeter (g/cm³)" value="g_cm3" />
                            <Picker.Item label="Pounds per Cubic Foot (lb/ft³)" value="lb_ft3" />
                            <Picker.Item label="Pounds per Cubic Inch (lb/in³)" value="lb_in3" />
                            <Picker.Item label="Ounces per Cubic Inch (oz/in³)" value="oz_in3" />
                            <Picker.Item label="Grams per Liter (g/L)" value="g_L" />
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
                            Converted Density: {conversionResult} {toUnitA}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Density;
