import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Length = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitL, setFromUnitL] = useState('cm');
    const [toUnitL, setToUnitL] = useState('m');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesLength = {
        mm: 0.1,        // millimeter to centimeter
        cm: 1,          // centimeter
        m: 100,         // meter
        km: 100000,     // kilometer
        mi: 160934.4,   // mile
        yd: 91.44,      // yard
        ft: 30.48,      // foot
        in: 2.54,       // inch
        nm: 1e-7,       // nanometer
        µm: 0.0001,     // micrometer
        Å: 1e-8,        // angstrom
        fathom: 182.88, // fathom
        lea: 482803.2   // league
    };

    const simulateConversion = () => {
        const fromRatelength = conversionRatesLength[fromUnitL];
        const toRatelength = conversionRatesLength[toUnitL];

        if (fromRatelength && toRatelength) {
            const result = (parseFloat(amount) * fromRatelength) / toRatelength;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Length Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Length</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter length"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker
                        selectedValue={fromUnitL}
                        onValueChange={(itemValue) => setFromUnitL(itemValue)}
                        style={tw`bg-white rounded-lg text-black`}
                    >
                        {Object.keys(conversionRatesLength).map((unit) => (
                            <Picker.Item key={unit} label={unit} value={unit} />
                        ))}
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnitL}
                        onValueChange={(itemValue) => setToUnitL(itemValue)}
                        style={tw`bg-white rounded-lg text-black`}
                    >
                        {Object.keys(conversionRatesLength).map((unit) => (
                            <Picker.Item key={unit} label={unit} value={unit} />
                        ))}
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

                {/* Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Length: {conversionResult} {toUnitL}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Length;
