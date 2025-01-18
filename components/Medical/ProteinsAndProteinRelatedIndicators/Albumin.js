import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Albumin = () => {
    const [amount, setAmount] = useState('0');
    const [albuminLevel, setAlbuminLevel] = useState('');
    const [fromUnit, setFromUnit] = useState('g/dL');
    const [toUnit, setToUnit] = useState('g/L');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion rates for albumin levels
    const conversionRates = {
        'g/dL': 1,         // Grams per deciliter
        'g/L': 10,         // Grams per liter
        'mg/dL': 1000,     // Milligrams per deciliter
        'mg/L': 1000000,   // Milligrams per liter
        'kg/L': 0.001,     // Kilograms per liter
        'kg/dL': 0.0001,   // Kilograms per deciliter
        'µg/dL': 1000000,  // Micrograms per deciliter
        'µg/L': 1000000000, // Micrograms per liter
        'ng/dL': 1000000000, // Nanograms per deciliter
        'ng/L': 1000000000000, // Nanograms per liter
        'mol/L': 1,        // Moles per liter (assuming albumin in molar concentration)
        'mmol/L': 1000,    // Millimoles per liter
        'mol/dL': 0.1,     // Moles per deciliter
        'mEq/L': 1000,     // Milliequivalents per liter
        'IU/L': 1,         // International Units per liter
    };

    // Normal range for albumin levels (in g/dL)
    const normalRange = { min: 3.5, max: 5.0 };

    // Check Albumin Level for normal range
    const checkAlbuminLevel = () => {
        const albuminValue = parseFloat(amount);

        if (isNaN(albuminValue) || albuminValue <= 0) {
            setAlbuminLevel('Please enter a valid albumin level.');
        } else if (albuminValue < normalRange.min) {
            setAlbuminLevel(`Albumin level is low: ${albuminValue} g/dL. Consult a doctor.`);
        } else if (albuminValue > normalRange.max) {
            setAlbuminLevel(`Albumin level is high: ${albuminValue} g/dL. Consult a doctor.`);
        } else {
            setAlbuminLevel(`Albumin level is normal: ${albuminValue} g/dL.`);
        }
    };

    // Convert Albumin
    const convertAlbumin = () => {
        const fromRate = conversionRates[fromUnit];
        const toRate = conversionRates[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-800 p-6`}>
            <Text style={tw`text-center text-3xl font-bold text-white mb-6`}>
                Albumin Level Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Albumin Level (g/dL)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter albumin level"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkAlbuminLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Albumin Level</Text>
                </TouchableOpacity>

                {albuminLevel && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {albuminLevel}
                    </Text>
                )}

                <View style={tw`mt-6 flex-row justify-between`}>
                    <View style={tw`flex-1 mr-2`}>
                        <Text style={tw`text-white text-lg mb-2`}>From</Text>
                        <View style={tw`bg-white rounded-lg`}>
                            <Picker
                                selectedValue={fromUnit}
                                onValueChange={(itemValue) => setFromUnit(itemValue)}
                                style={tw`h-14`}
                            >
                                {Object.keys(conversionRates).map((unit) => (
                                    <Picker.Item label={unit} value={unit} key={unit} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={tw`flex-1`}>
                        <Text style={tw`text-white text-lg mb-2`}>To</Text>
                        <View style={tw`bg-white rounded-lg`}>
                            <Picker
                                selectedValue={toUnit}
                                onValueChange={(itemValue) => setToUnit(itemValue)}
                                style={tw`h-14`}
                            >
                                {Object.keys(conversionRates).map((unit) => (
                                    <Picker.Item label={unit} value={unit} key={unit} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={convertAlbumin}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Albumin</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Albumin: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Albumin;
