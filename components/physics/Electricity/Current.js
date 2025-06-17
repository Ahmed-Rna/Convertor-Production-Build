import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Current = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('A');
    const [toUnit, setToUnit] = useState('mA');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesCurrent = {
        A: 1,               // Ampere
        mA: 1000,           // Milliampere
        μA: 1e6,            // Microampere
        kA: 0.001,          // Kiloampere
        MA: 1e-6,           // Megaampere
        GA: 1e-9,           // Gigaampere
        Ah: 3600,           // Ampere-hour (in terms of charge, 1A * 1 hour)
    };

    const simulateConversion = () => {
        const fromRate = conversionRatesCurrent[fromUnit];
        const toRate = conversionRatesCurrent[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(6));  // Display result with 6 decimals
        } else {
            Alert.alert('Invalid Conversion', 'Please select valid units for conversion.');
            setConversionResult(null);
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Current Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Current</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter current"
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
                        >
                            <Picker.Item label="Ampere (A)" value="A" />
                            <Picker.Item label="Milliampere (mA)" value="mA" />
                            <Picker.Item label="Microampere (μA)" value="μA" />
                            <Picker.Item label="Kiloampere (kA)" value="kA" />
                            <Picker.Item label="Megaampere (MA)" value="MA" />
                            <Picker.Item label="Gigaampere (GA)" value="GA" />
                            <Picker.Item label="Ampere-hour (Ah)" value="Ah" />
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
                        >
                            <Picker.Item label="Ampere (A)" value="A" />
                            <Picker.Item label="Milliampere (mA)" value="mA" />
                            <Picker.Item label="Microampere (μA)" value="μA" />
                            <Picker.Item label="Kiloampere (kA)" value="kA" />
                            <Picker.Item label="Megaampere (MA)" value="MA" />
                            <Picker.Item label="Gigaampere (GA)" value="GA" />
                            <Picker.Item label="Ampere-hour (Ah)" value="Ah" />
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
                {conversionResult !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Current: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Current;
