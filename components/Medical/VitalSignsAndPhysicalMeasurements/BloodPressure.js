import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const BloodPressure = () => {
    const [amount, setAmount] = useState('120/80');  // Default value with slash
    const [fromUnit, setFromUnit] = useState('mmHg');
    const [toUnit, setToUnit] = useState('kPa');
    const [conversionResult, setConversionResult] = useState(null);
    const [bpStatus, setBpStatus] = useState('');

    // Conversion functions for blood pressure units
    const conversionRates = {
        mmHg: {
            toBase: (value) => value,
            fromBase: (value) => value,
        },
        kPa: {
            toBase: (value) => value * 0.133322,
            fromBase: (value) => value / 0.133322,
        },
        cmH2O: {
            toBase: (value) => value * 0.013592,
            fromBase: (value) => value / 0.013592,
        },
        inHg: {
            toBase: (value) => value * 0.03937,
            fromBase: (value) => value / 0.03937,
        },
        Torr: {
            toBase: (value) => value,
            fromBase: (value) => value,
        },
        atm: {
            toBase: (value) => value * 0.0009869,
            fromBase: (value) => value / 0.0009869,
        },
        Pa: {
            toBase: (value) => value * 133.322,
            fromBase: (value) => value / 133.322,
        },
        psi: {
            toBase: (value) => value * 0.019336,
            fromBase: (value) => value / 0.019336,
        },
        mbar: {
            toBase: (value) => value * 1.33322,
            fromBase: (value) => value / 1.33322,
        },
        Bar: {
            toBase: (value) => value * 0.0009869,
            fromBase: (value) => value / 0.0009869,
        },
    };

    // Blood Pressure Range Check (Normal Range)
    const checkBpRange = (systolic, diastolic) => {
        if (systolic < 90 || diastolic < 60) {
            return 'Low Blood Pressure - Consult a Doctor';
        } else if (systolic >= 120 && diastolic < 80) {
            return 'Normal Blood Pressure';
        } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
            return 'Elevated Blood Pressure';
        } else if (systolic >= 130 || diastolic >= 80) {
            return 'High Blood Pressure - Consult a Doctor';
        }
        return 'Normal Blood Pressure';
    };

    const checkBloodPressure = () => {
        // Split input into systolic and diastolic values
        const [systolic, diastolic] = amount.split('/').map((val) => parseFloat(val.trim()));

        if (isNaN(systolic) || isNaN(diastolic)) {
            setBpStatus('Invalid input');
            return;
        }

        // Check blood pressure status
        const status = checkBpRange(systolic, diastolic);
        setBpStatus(status);
    };

    const convertBloodPressure = () => {
        // Split input into systolic and diastolic values
        const [systolic, diastolic] = amount.split('/').map((val) => parseFloat(val.trim()));

        if (isNaN(systolic) || isNaN(diastolic)) {
            setConversionResult('Invalid input');
            return;
        }

        const fromConverter = conversionRates[fromUnit];
        const toConverter = conversionRates[toUnit];

        if (fromConverter && toConverter) {
            // Convert systolic and diastolic separately
            const baseSystolic = fromConverter.toBase(systolic);
            const baseDiastolic = fromConverter.toBase(diastolic);

            const convertedSystolic = toConverter.fromBase(baseSystolic).toFixed(4);
            const convertedDiastolic = toConverter.fromBase(baseDiastolic).toFixed(4);

            setConversionResult(
                `Converted Blood Pressure: ${convertedSystolic} / ${convertedDiastolic} ${toUnit}`
            );
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Header */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Blood Pressure Unit Converter
            </Text>

            {/* Conversion Section */}
            <View style={tw`bg-gray-800 p-6 rounded-lg shadow-lg`}>
                {/* Input Section */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Blood Pressure (Systolic/Diastolic)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={(text) => {
                            // Allow only numbers and slash in the input
                            const validText = text.replace(/[^0-9/]/g, '');
                            // Automatically format with slash
                            const formattedText = validText.replace(/^(\d{1,3})(\d{0,2})$/, '$1/$2');
                            setAmount(formattedText);
                        }}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter value (e.g., 120/80)"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Check Button */}
                <TouchableOpacity
                    onPress={checkBloodPressure}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Blood Pressure</Text>
                </TouchableOpacity>

                {/* Blood Pressure Status */}
                {bpStatus && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            {bpStatus}
                        </Text>
                    </View>
                )}

                {/* From and To Pickers */}
                <View style={tw`flex-row justify-between mt-6`}>
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

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={convertBloodPressure}
                    style={tw`bg-green-500 py-3 rounded-lg mt-6 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert Blood Pressure</Text>
                </TouchableOpacity>

                {/* Conversion Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            {conversionResult}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default BloodPressure;