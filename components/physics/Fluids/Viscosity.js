import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Viscosity = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitV, setFromUnitV] = useState('poise');
    const [toUnitV, setToUnitV] = useState('pascalSecond');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesViscosity = {
        poise: 0.1,              // poise to pascal second
        centipoise: 0.001,       // centipoise to pascal second
        pascalSecond: 1,         // pascal second
        millipascalSecond: 0.001 // millipascal second to pascal second
    };

    const convertViscosity = () => {
        const fromRateViscosity = conversionRatesViscosity[fromUnitV];
        const toRateViscosity = conversionRatesViscosity[toUnitV];

        if (fromRateViscosity && toRateViscosity) {
            const result = (parseFloat(amount) * fromRateViscosity) / toRateViscosity;
            setConversionResult(result.toFixed(4));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Viscosity Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Viscosity Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Viscosity</Text>
                    <TextInput 
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter viscosity value"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Selector */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker 
                        selectedValue={fromUnitV}
                        onValueChange={(itemValue) => setFromUnitV(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Poise" value="poise" />
                        <Picker.Item label="Centipoise" value="centipoise" />
                        <Picker.Item label="Pascal Second" value="pascalSecond" />
                        <Picker.Item label="Millipascal Second" value="millipascalSecond" />
                    </Picker>
                </View>

                {/* To Unit Selector */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnitV}
                        onValueChange={(itemValue) => setToUnitV(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Poise" value="poise" />
                        <Picker.Item label="Centipoise" value="centipoise" />
                        <Picker.Item label="Pascal Second" value="pascalSecond" />
                        <Picker.Item label="Millipascal Second" value="millipascalSecond" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={convertViscosity}
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
                            Converted Viscosity: {conversionResult} {toUnitV}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Viscosity;
