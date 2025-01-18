import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Inductance = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('H');
    const [toUnit, setToUnit] = useState('H');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesInductance = {
        H: 1,        // Henry
        mH: 1000,     // MilliHenry
        µH: 1000000,  // MicroHenry
        kH: 0.001     // KiloHenry
    };

    const simulateConversion = () => {
        const fromRate = conversionRatesInductance[fromUnit];
        const toRate = conversionRatesInductance[toUnit];

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
                Inductance Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input for Inductance */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Inductance Value</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter inductance value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Picker for From Unit */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={fromUnit}
                            onValueChange={(itemValue) => setFromUnit(itemValue)}
                            style={tw`h-14 w-full text-black`}
                        >
                            <Picker.Item label="Henry (H)" value="H" />
                            <Picker.Item label="MilliHenry (mH)" value="mH" />
                            <Picker.Item label="MicroHenry (µH)" value="µH" />
                            <Picker.Item label="KiloHenry (kH)" value="kH" />
                        </Picker>
                    </View>
                </View>

                {/* Picker for To Unit */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={toUnit}
                            onValueChange={(itemValue) => setToUnit(itemValue)}
                            style={tw`h-14 w-full text-black`}
                        >
                            <Picker.Item label="Henry (H)" value="H" />
                            <Picker.Item label="MilliHenry (mH)" value="mH" />
                            <Picker.Item label="MicroHenry (µH)" value="µH" />
                            <Picker.Item label="KiloHenry (kH)" value="kH" />
                        </Picker>
                    </View>
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
                            Converted Inductance: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Inductance;
