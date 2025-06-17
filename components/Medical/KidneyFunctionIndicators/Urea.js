import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Urea = () => {
    const [amount, setAmount] = useState('0');
    const [ureaLevel, setUreaLevel] = useState('');
    const [fromUnit, setFromUnit] = useState('mg/dL');
    const [toUnit, setToUnit] = useState('mmol/L');
    const [convertedValue, setConvertedValue] = useState(null);

    // Normal range for BUN (Blood Urea Nitrogen) levels (in mg/dL)
    const normalRange = { min: 7, max: 20 };

    // Conversion rates for urea units
    const conversionRates = {
        'mg/dL': { toBase: (value) => value, fromBase: (value) => value },
        'g/L': { toBase: (value) => value * 0.1, fromBase: (value) => value / 0.1 },
        'mmol/L': { toBase: (value) => value / 6.021, fromBase: (value) => value * 6.021 },
        'mg/L': { toBase: (value) => value * 10, fromBase: (value) => value / 10 },
        'ppm': { toBase: (value) => value / 100, fromBase: (value) => value * 100 },
        'µmol/L': { toBase: (value) => value / 6.021, fromBase: (value) => value * 6.021 },
        'mol/L': { toBase: (value) => value / 6021, fromBase: (value) => value * 6021 },
        'ng/mL': { toBase: (value) => value * 10, fromBase: (value) => value / 10 },
        'mcg/dL': { toBase: (value) => value * 0.1, fromBase: (value) => value / 0.1 },
        'mol/dL': { toBase: (value) => value / 602100, fromBase: (value) => value * 602100 },
        'ng/L': { toBase: (value) => value * 10000, fromBase: (value) => value / 10000 },
    };

    const checkUreaLevel = () => {
        const ureaValue = parseFloat(amount);

        if (isNaN(ureaValue) || ureaValue <= 0) {
            setUreaLevel('Please enter a valid urea level.');
        } else if (ureaValue < normalRange.min) {
            setUreaLevel(`Urea level is low: ${ureaValue} mg/dL. Consult a doctor.`);
        } else if (ureaValue > normalRange.max) {
            setUreaLevel(`Urea level is high: ${ureaValue} mg/dL. Consult a doctor.`);
        } else {
            setUreaLevel(`Urea level is normal: ${ureaValue} mg/dL.`);
        }
    };

    const convertUrea = () => {
        const fromConverter = conversionRates[fromUnit];
        const toConverter = conversionRates[toUnit];

        if (fromConverter && toConverter) {
            const baseValue = fromConverter.toBase(parseFloat(amount));
            const convertedValue = toConverter.fromBase(baseValue);
            setConvertedValue(convertedValue.toFixed(4));
        } else {
            setConvertedValue('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-800 p-6`}>
            <Text style={tw`text-center text-3xl font-bold text-white mb-6`}>
                Urea Level Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Urea Level (mg/dL)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter urea level"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkUreaLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Urea Level</Text>
                </TouchableOpacity>

                {ureaLevel && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {ureaLevel}
                    </Text>
                )}

                <View style={tw`mt-6 flex-row justify-between`}>
                    <View style={tw`flex-1 mr-2`}>
                        <Text style={tw`text-white text-lg mb-2`}>From</Text>
                        <View style={tw`bg-white rounded-lg`}>
                            <Picker
                                selectedValue={fromUnit}
                                onValueChange={(itemValue) => setFromUnit(itemValue)}
                                style={tw`h-12`}
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
                                style={tw`h-12`}
                            >
                                {Object.keys(conversionRates).map((unit) => (
                                    <Picker.Item label={unit} value={unit} key={unit} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={convertUrea}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Urea</Text>
                </TouchableOpacity>

                {convertedValue && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Urea: {convertedValue} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Urea;
