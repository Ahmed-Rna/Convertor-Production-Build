import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Magnet = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitM, setFromUnitM] = useState('T');
    const [toUnitM, setToUnitM] = useState('T');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesMagnet = {
        T: 1,               // Tesla (T)
        mT: 0.001,          // Millitesla (mT)
        µT: 1e-6,           // Microtesla (µT)
        G: 0.0001,          // Gauss (G)
        Oe: 79.5775,        // Oersted (Oe)
    };

    const simulateConversion = () => {
        const fromRateMagnet = conversionRatesMagnet[fromUnitM];
        const toRateMagnet = conversionRatesMagnet[toUnitM];

        if (fromRateMagnet && toRateMagnet) {
            const result = (parseFloat(amount) * fromRateMagnet) / toRateMagnet;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Magnetic Field Strength Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Magnetic Field Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Magnetic Field Strength</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter strength value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker
                        selectedValue={fromUnitM}
                        onValueChange={(itemValue) => setFromUnitM(itemValue)}
                        style={tw`w-full p-0 bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Tesla (T)" value="T" />
                        <Picker.Item label="Millitesla (mT)" value="mT" />
                        <Picker.Item label="Microtesla (µT)" value="µT" />
                        <Picker.Item label="Gauss (G)" value="G" />
                        <Picker.Item label="Oersted (Oe)" value="Oe" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnitM}
                        onValueChange={(itemValue) => setToUnitM(itemValue)}
                        style={tw`w-full p-0 bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Tesla (T)" value="T" />
                        <Picker.Item label="Millitesla (mT)" value="mT" />
                        <Picker.Item label="Microtesla (µT)" value="µT" />
                        <Picker.Item label="Gauss (G)" value="G" />
                        <Picker.Item label="Oersted (Oe)" value="Oe" />
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
                {conversionResult !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Magnetic Field: {conversionResult} {toUnitM}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Magnet;
