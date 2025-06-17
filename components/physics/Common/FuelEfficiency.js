import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const FuelEfficiency = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitFuel, setFromUnitFuel] = useState('mpl');
    const [toUnitFuel, setToUnitFuel] = useState('kpl');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesFuel = {
        mpl: 1,           // meters per liter
        kpl: 1000,        // kilometers per liter
        mpg: 425.1437,    // miles per gallon (US)
        mpg_uk: 354.006,  // miles per gallon (UK)
        l_per_100km: 100000 // liters per 100 km
    };

    const simulateConversion = () => {
        const fromRateFuel = conversionRatesFuel[fromUnitFuel];
        const toRateFuel = conversionRatesFuel[toUnitFuel];

        if (fromRateFuel && toRateFuel) {
            const result = (parseFloat(amount) * fromRateFuel) / toRateFuel;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Fuel Efficiency Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Fuel Efficiency</Text>
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
                        selectedValue={fromUnitFuel}
                        onValueChange={(itemValue) => setFromUnitFuel(itemValue)}
                        style={tw`w-full bg-white rounded-lg`}
                    >
                        <Picker.Item label="Meters per Liter" value="mpl" />
                        <Picker.Item label="Kilometers per Liter" value="kpl" />
                        <Picker.Item label="Miles per Gallon (US)" value="mpg" />
                        <Picker.Item label="Miles per Gallon (UK)" value="mpg_uk" />
                        <Picker.Item label="Liters per 100 km" value="l_per_100km" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <Picker
                        selectedValue={toUnitFuel}
                        onValueChange={(itemValue) => setToUnitFuel(itemValue)}
                        style={tw`w-full bg-white rounded-lg`}
                    >
                        <Picker.Item label="Meters per Liter" value="mpl" />
                        <Picker.Item label="Kilometers per Liter" value="kpl" />
                        <Picker.Item label="Miles per Gallon (US)" value="mpg" />
                        <Picker.Item label="Miles per Gallon (UK)" value="mpg_uk" />
                        <Picker.Item label="Liters per 100 km" value="l_per_100km" />
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

                {/* Results */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Fuel Efficiency: {conversionResult} {toUnitFuel}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default FuelEfficiency;
