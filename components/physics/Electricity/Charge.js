import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Charge = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('C');
    const [toUnit, setToUnit] = useState('C');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRates = {
        C: 1,          // Coulomb
        mC: 1000,      // MilliCoulomb
        µC: 1000000,   // MicroCoulomb
        nC: 1000000000, // NanoCoulomb
        pC: 1000000000000, // PicoCoulomb
        fC: 1000000000000000, // FemtoCoulomb
    };

    const simulateConversion = () => {
        if (!amount || isNaN(parseFloat(amount))) {
            Alert.alert('Invalid Input', 'Please enter a valid numeric charge value.');
            return;
        }

        const fromRate = conversionRates[fromUnit];
        const toRate = conversionRates[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(6));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Charge Converter
            </Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Charge Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Charge Value</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter charge value"
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
                            style={tw`h-14 text-black`}
                        >
                            <Picker.Item label="Coulomb (C)" value="C" />
                            <Picker.Item label="MilliCoulomb (mC)" value="mC" />
                            <Picker.Item label="MicroCoulomb (µC)" value="µC" />
                            <Picker.Item label="NanoCoulomb (nC)" value="nC" />
                            <Picker.Item label="PicoCoulomb (pC)" value="pC" />
                            <Picker.Item label="FemtoCoulomb (fC)" value="fC" />
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
                            style={tw`h-14 text-black`}
                        >
                            <Picker.Item label="Coulomb (C)" value="C" />
                            <Picker.Item label="MilliCoulomb (mC)" value="mC" />
                            <Picker.Item label="MicroCoulomb (µC)" value="µC" />
                            <Picker.Item label="NanoCoulomb (nC)" value="nC" />
                            <Picker.Item label="PicoCoulomb (pC)" value="pC" />
                            <Picker.Item label="FemtoCoulomb (fC)" value="fC" />
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

                {/* Conversion Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Charge: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Charge;
