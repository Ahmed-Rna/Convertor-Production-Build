import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const SurfaceTension = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('N/m');
    const [toUnit, setToUnit] = useState('dyn/cm');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRates = {
        "N/m": 1,            // Newton per meter
        "dyn/cm": 0.001,     // Dyne per centimeter
        "mN/m": 0.001,       // Millinewton per meter
        "kg/s²": 1,          // Kilogram per second squared
    };

    const convertSurfaceTension = () => {
        const fromRate = conversionRates[fromUnit];
        const toRate = conversionRates[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Surface Tension Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Surface Tension Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Surface Tension</Text>
                    <TextInput 
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter surface tension"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker 
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`w-full  bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Newton per meter (N/m)" value="N/m" />
                        <Picker.Item label="Dyne per centimeter (dyn/cm)" value="dyn/cm" />
                        <Picker.Item label="Millinewton per meter (mN/m)" value="mN/m" />
                        <Picker.Item label="Kilogram per second squared (kg/s²)" value="kg/s²" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Newton per meter (N/m)" value="N/m" />
                        <Picker.Item label="Dyne per centimeter (dyn/cm)" value="dyn/cm" />
                        <Picker.Item label="Millinewton per meter (mN/m)" value="mN/m" />
                        <Picker.Item label="Kilogram per second squared (kg/s²)" value="kg/s²" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={convertSurfaceTension}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {/* Conversion Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Surface Tension: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default SurfaceTension;
