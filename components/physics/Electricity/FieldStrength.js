import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const FieldStrength = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('N_C');
    const [toUnit, setToUnit] = useState('N_C');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesFieldStrength = {
        N_C: 1,           // Newtons per Coulomb (Electric Field)
        V_m: 1,           // Volts per meter (Electric Field)
        A_m: 1,           // Amperes per meter (Magnetic Field)
        N_kg: 9.81,       // Newtons per kilogram (Gravitational Field, Earth's Surface)
    };

    const simulateConversion = () => {
        const fromRate = conversionRatesFieldStrength[fromUnit];
        const toRate = conversionRatesFieldStrength[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(2));
        } else {
            Alert.alert('Invalid Conversion', 'Please select valid units for conversion.');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Field Strength Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Field Strength */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Field Strength</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter field strength"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
                    <Picker
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`bg-white rounded-lg`}
                    >
                        <Picker.Item label="Newtons per Coulomb (N/C)" value="N_C" />
                        <Picker.Item label="Volts per Meter (V/m)" value="V_m" />
                        <Picker.Item label="Amperes per Meter (A/m)" value="A_m" />
                        <Picker.Item label="Newtons per Kilogram (N/kg)" value="N_kg" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <Picker
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`bg-white rounded-lg`}
                    >
                        <Picker.Item label="Newtons per Coulomb (N/C)" value="N_C" />
                        <Picker.Item label="Volts per Meter (V/m)" value="V_m" />
                        <Picker.Item label="Amperes per Meter (A/m)" value="A_m" />
                        <Picker.Item label="Newtons per Kilogram (N/kg)" value="N_kg" />
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
                {conversionResult !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Field Strength: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default FieldStrength;
