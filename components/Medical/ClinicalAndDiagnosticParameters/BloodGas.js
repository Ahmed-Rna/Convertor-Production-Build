import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const BloodGas = () => {
    const [amount, setAmount] = useState('0');
    const [bloodGasLevel, setBloodGasLevel] = useState('');
    const [fromUnit, setFromUnit] = useState('mmHg');
    const [toUnit, setToUnit] = useState('kPa');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion functions for blood gas analysis
    const conversionRates = {
        'mmHg': { toBase: (value) => value, fromBase: (value) => value },
        'kPa': { toBase: (value) => value / 7.50062, fromBase: (value) => value * 7.50062 },
        'mEq/L': { toBase: (value) => value, fromBase: (value) => value },
        '%': { toBase: (value) => value / 100, fromBase: (value) => value * 100 },
        'mL O₂/dL': { toBase: (value) => value, fromBase: (value) => value },
    };

    // Check blood gas level for normal range (example for PaO₂ and SaO₂)
    const checkBloodGasLevel = () => {
        const paO2Value = parseFloat(amount);
        if (isNaN(paO2Value) || paO2Value <= 0) {
            setBloodGasLevel('Please enter a valid value.');
        } else if (paO2Value < 60) {
            setBloodGasLevel(`PaO₂ is low: ${paO2Value} mmHg. Seek medical attention.`);
        } else if (paO2Value > 100) {
            setBloodGasLevel(`PaO₂ is high: ${paO2Value} mmHg. Seek medical attention.`);
        } else {
            setBloodGasLevel(`PaO₂ is normal: ${paO2Value} mmHg.`);
        }
    };

    const convertBloodGas = () => {
        const fromConverter = conversionRates[fromUnit];
        const toConverter = conversionRates[toUnit];

        if (fromConverter && toConverter) {
            const baseValue = fromConverter.toBase(parseFloat(amount));
            const convertedValue = toConverter.fromBase(baseValue);
            setConversionResult(convertedValue.toFixed(4));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-800 p-6`}>
            <Text style={tw`text-center text-3xl font-bold text-white mb-6`}>
                Blood Gas Analysis Converter
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Blood Gas Value</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter value"
                        placeholderTextColor="gray"
                    />
                </View>

                <TouchableOpacity
                    onPress={checkBloodGasLevel}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Blood Gas Level</Text>
                </TouchableOpacity>

                {bloodGasLevel && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {bloodGasLevel}
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
                    onPress={convertBloodGas}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Blood Gas</Text>
                </TouchableOpacity>

                {conversionResult && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        Converted Blood Gas: {conversionResult} {toUnit}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default BloodGas;
