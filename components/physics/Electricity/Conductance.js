import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Conductance = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('Ω');
    const [toUnit, setToUnit] = useState('S');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesConductance = {
        Ω: 1,          // Ohm
        mS: 1000,      // MilliSiemens
        kS: 0.001,     // KiloSiemens
        µS: 0.000001,  // MicroSiemens
        MS: 1000000,   // MegaSiemens
        S: 1           // Siemens (1 Ohm = 1 Siemens of Conductance)
    };

    const simulateConversion = () => {
        const fromRate = conversionRatesConductance[fromUnit];
        const toRate = conversionRatesConductance[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(6));
        } else {
            Alert.alert('Invalid Input', 'Please select valid units for conversion.');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Conductance Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Value */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Conductance Value</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter conductance value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={fromUnit}
                            onValueChange={(itemValue) => setFromUnit(itemValue)}
                            style={tw`h-14`}
                        >
                            <Picker.Item label="Ohm (Ω)" value="Ω" />
                            <Picker.Item label="MilliSiemens (mS)" value="mS" />
                            <Picker.Item label="KiloSiemens (kS)" value="kS" />
                            <Picker.Item label="MicroSiemens (µS)" value="µS" />
                            <Picker.Item label="MegaSiemens (MS)" value="MS" />
                            <Picker.Item label="Siemens (S)" value="S" />
                        </Picker>
                    </View>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={toUnit}
                            onValueChange={(itemValue) => setToUnit(itemValue)}
                            style={tw`h-14`}
                        >
                            <Picker.Item label="Ohm (Ω)" value="Ω" />
                            <Picker.Item label="MilliSiemens (mS)" value="mS" />
                            <Picker.Item label="KiloSiemens (kS)" value="kS" />
                            <Picker.Item label="MicroSiemens (µS)" value="µS" />
                            <Picker.Item label="MegaSiemens (MS)" value="MS" />
                            <Picker.Item label="Siemens (S)" value="S" />
                        </Picker>
                    </View>
                </View>

                {/* Calculate Button */}
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
                            Converted Conductance: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Conductance;
