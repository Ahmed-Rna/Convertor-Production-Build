import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Force = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitA, setFromUnitA] = useState('n'); // Newton (N)
    const [toUnitA, setToUnitA] = useState('kgf'); // Kilogram-force (kgf)
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesForce = {
        n: 1, // Newton (N)
        kgf: 9.80665, // Kilogram-force (kgf)
        lbf: 4.44822, // Pound-force (lbf)
        dyn: 1e-5, // Dyne (dyn)
        kN: 1000, // Kilonewton (kN)
        mN: 0.001, // Millinewton (mN)
        gf: 0.00980665, // Gram-force (gf)
        ozf: 0.2780139, // Ounce-force (ozf)
    };

    const simulateConversion = () => {
        const fromRateForce = conversionRatesForce[fromUnitA];
        const toRateForce = conversionRatesForce[toUnitA];

        if (fromRateForce && toRateForce) {
            const result = (parseFloat(amount) * fromRateForce) / toRateForce;
            setConversionResult(result.toFixed(2));
        } else {
            Alert.alert('Invalid Conversion', 'Please select valid units for conversion.');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Force Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input for Amount */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Force Value</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter force value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={fromUnitA}
                            onValueChange={(itemValue) => setFromUnitA(itemValue)}
                            style={tw`w-full`}
                        >
                            <Picker.Item label="Newton (N)" value="n" />
                            <Picker.Item label="Kilogram-force (kgf)" value="kgf" />
                            <Picker.Item label="Pound-force (lbf)" value="lbf" />
                            <Picker.Item label="Dyne (dyn)" value="dyn" />
                            <Picker.Item label="Kilonewton (kN)" value="kN" />
                            <Picker.Item label="Millinewton (mN)" value="mN" />
                            <Picker.Item label="Gram-force (gf)" value="gf" />
                            <Picker.Item label="Ounce-force (ozf)" value="ozf" />
                        </Picker>
                    </View>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={toUnitA}
                            onValueChange={(itemValue) => setToUnitA(itemValue)}
                            style={tw`w-full`}
                        >
                            <Picker.Item label="Newton (N)" value="n" />
                            <Picker.Item label="Kilogram-force (kgf)" value="kgf" />
                            <Picker.Item label="Pound-force (lbf)" value="lbf" />
                            <Picker.Item label="Dyne (dyn)" value="dyn" />
                            <Picker.Item label="Kilonewton (kN)" value="kN" />
                            <Picker.Item label="Millinewton (mN)" value="mN" />
                            <Picker.Item label="Gram-force (gf)" value="gf" />
                            <Picker.Item label="Ounce-force (ozf)" value="ozf" />
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

                {/* Result Display */}
                {conversionResult !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Force: {conversionResult} {toUnitA}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Force;
