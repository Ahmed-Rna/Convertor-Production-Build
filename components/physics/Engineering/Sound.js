import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Sound = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitA, setFromUnitA] = useState('db'); // Decibels (dB)
    const [toUnitA, setToUnitA] = useState('db'); // Decibels (dB)
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesSound = {
        db: 1, // Decibels (dB)
        dbm: 1e-3, // Decibels milliwatt (dBm)
        dbu: 1e-6, // Decibels microwatt (dBu)
        bel: 1 / 10, // Bel (B)
    };

    const simulateConversion = () => {
        // Check if input is valid
        if (!amount || isNaN(parseFloat(amount))) {
            Alert.alert('Invalid Input', 'Please enter a valid sound value.');
            return;
        }

        const fromRateSound = conversionRatesSound[fromUnitA];
        const toRateSound = conversionRatesSound[toUnitA];

        if (fromRateSound && toRateSound) {
            const result = (parseFloat(amount) * fromRateSound) / toRateSound;
            setConversionResult(result.toFixed(2));
        } else {
            Alert.alert('Invalid Conversion', 'Please check the input values and units.');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Sound Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Sound Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Sound Value</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter sound value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Unit Selection */}
                <View style={tw`flex-row justify-between mb-4`}>
                    {/* From Unit */}
                    <View style={tw`flex-1 mr-2`}>
                        <Text style={tw`text-white text-lg mb-2`}>From</Text>
                        <View style={tw`bg-white rounded-lg`}>
                            <Picker
                                selectedValue={fromUnitA}
                                onValueChange={(itemValue) => setFromUnitA(itemValue)}
                                style={tw`h-12 w-full text-black`}
                            >
                                <Picker.Item label="Decibels (dB)" value="db" />
                                <Picker.Item label="Decibels Milliwatt (dBm)" value="dbm" />
                                <Picker.Item label="Decibels Microwatt (dBu)" value="dbu" />
                                <Picker.Item label="Bel (B)" value="bel" />
                            </Picker>
                        </View>
                    </View>

                    {/* To Unit */}
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-white text-lg mb-2`}>To</Text>
                        <View style={tw`bg-white rounded-lg`}>
                            <Picker
                                selectedValue={toUnitA}
                                onValueChange={(itemValue) => setToUnitA(itemValue)}
                                style={tw`h-12 w-full text-black`}
                            >
                                <Picker.Item label="Decibels (dB)" value="db" />
                                <Picker.Item label="Decibels Milliwatt (dBm)" value="dbm" />
                                <Picker.Item label="Decibels Microwatt (dBu)" value="dbu" />
                                <Picker.Item label="Bel (B)" value="bel" />
                            </Picker>
                        </View>
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

                {/* Result Display */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Sound: {conversionResult} {toUnitA}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Sound;
