import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Power = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('W');
    const [toUnit, setToUnit] = useState('kW');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesPower = {
        W: 1,                 // Watt
        kW: 1000,             // Kilowatt
        MW: 1e6,              // Megawatt
        GW: 1e9,              // Gigawatt
        TW: 1e12,             // Terawatt
        hp: 745.7,            // Horsepower (mechanical)
        BTU_h: 0.293071,      // BTU per hour
        cal_s: 4.184,         // Calorie per second
        ft_lbf_s: 1.35582,    // Foot-pound per second
        J_s: 1,               // Joule per second (same as Watt)
        kcal_h: 1.163,        // Kilocalorie per hour
        kJ_s: 1,              // Kilojoule per second (same as kilowatt)
        erg_s: 1e-7,          // Erg per second
    };

    const simulateConversion = () => {
        const fromRate = conversionRatesPower[fromUnit];
        const toRate = conversionRatesPower[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Power Converter
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Power Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Power</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter power"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Unit Selection */}
                <View style={tw`flex-row justify-between mb-4`}>
                    <View style={tw`flex-1 mr-2`}>
                        <Text style={tw`text-white text-lg mb-2`}>From</Text>
                        <Picker
                            selectedValue={fromUnit}
                            onValueChange={(itemValue) => setFromUnit(itemValue)}
                            style={tw`h-14 w-full bg-white rounded-lg text-black`}
                        >
                            {Object.keys(conversionRatesPower).map((key) => (
                                <Picker.Item label={key} value={key} key={key} />
                            ))}
                        </Picker>
                    </View>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-white text-lg mb-2`}>To</Text>
                        <Picker
                            selectedValue={toUnit}
                            onValueChange={(itemValue) => setToUnit(itemValue)}
                            style={tw`h-14 w-full bg-white rounded-lg text-black`}
                        >
                            {Object.keys(conversionRatesPower).map((key) => (
                                <Picker.Item label={key} value={key} key={key} />
                            ))}
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
                            Converted Power: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Power;
