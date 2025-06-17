import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Potential = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('volt');
    const [toUnit, setToUnit] = useState('volt');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesPotential = {
        volt: 1,               // volt (V)
        millivolt: 1e-3,       // millivolt (mV)
        kilovolt: 1e3,         // kilovolt (kV)
        microvolt: 1e-6,       // microvolt (µV)
        nanovolt: 1e-9,        // nanovolt (nV)
        picovolt: 1e-12,       // picovolt (pV)
    };

    const simulateConversion = () => {
        const fromRate = conversionRatesPotential[fromUnit];
        const toRate = conversionRatesPotential[toUnit];

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
                Electric Potential (Voltage) Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Voltage Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Voltage</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter voltage"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={fromUnit}
                            onValueChange={(itemValue) => setFromUnit(itemValue)}
                        >
                            <Picker.Item label="Volt (V)" value="volt" />
                            <Picker.Item label="Millivolt (mV)" value="millivolt" />
                            <Picker.Item label="Kilovolt (kV)" value="kilovolt" />
                            <Picker.Item label="Microvolt (µV)" value="microvolt" />
                            <Picker.Item label="Nanovolt (nV)" value="nanovolt" />
                            <Picker.Item label="Picovolt (pV)" value="picovolt" />
                        </Picker>
                    </View>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={toUnit}
                            onValueChange={(itemValue) => setToUnit(itemValue)}
                        >
                            <Picker.Item label="Volt (V)" value="volt" />
                            <Picker.Item label="Millivolt (mV)" value="millivolt" />
                            <Picker.Item label="Kilovolt (kV)" value="kilovolt" />
                            <Picker.Item label="Microvolt (µV)" value="microvolt" />
                            <Picker.Item label="Nanovolt (nV)" value="nanovolt" />
                            <Picker.Item label="Picovolt (pV)" value="picovolt" />
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
                            Converted Voltage: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Potential;
