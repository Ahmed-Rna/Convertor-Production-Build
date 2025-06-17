import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Pressure = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitA, setFromUnitA] = useState('pa');  // Pascal
    const [toUnitA, setToUnitA] = useState('atm');    // Atmosphere
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesPressure = {
        pa: 1,                  // Pascal
        atm: 101325,            // Atmosphere (atm)
        bar: 100000,            // Bar
        mmhg: 133.322,          // Millimeter of mercury (mmHg)
        torr: 133.322,          // Torr
        psi: 6894.76,           // Pound per square inch (psi)
        kgfcm2: 98066.5,        // Kilogram per square centimeter (kgf/cm²)
        inhg: 3386.39,          // Inch of mercury (inHg)
    };

    const simulateConversion = () => {
        const fromRatePressure = conversionRatesPressure[fromUnitA];
        const toRatePressure = conversionRatesPressure[toUnitA];

        if (fromRatePressure && toRatePressure) {
            const result = (parseFloat(amount) * fromRatePressure) / toRatePressure;
            setConversionResult(result.toFixed(2));
        } else {
            Alert.alert('Invalid Conversion', 'Please check the input values and units.');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Pressure Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                {/* Pressure Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Pressure</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter pressure value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Unit Selection */}
                <View style={tw`flex-row justify-between mb-4`}>
                    {/* From Unit */}
                    <View style={tw`flex-1 mr-2`}>
                        <Text style={tw`text-white text-lg mb-2`}>From</Text>
                        <View style={tw`bg-white rounded-lg`}>
                            <Picker
                                selectedValue={fromUnitA}
                                onValueChange={(itemValue) => setFromUnitA(itemValue)}
                                style={tw`h-12 w-full text-black`}
                            >
                                <Picker.Item label="Pascal (Pa)" value="pa" />
                                <Picker.Item label="Atmosphere (atm)" value="atm" />
                                <Picker.Item label="Bar" value="bar" />
                                <Picker.Item label="Millimeter of Mercury (mmHg)" value="mmhg" />
                                <Picker.Item label="Torr" value="torr" />
                                <Picker.Item label="Pound per Square Inch (psi)" value="psi" />
                                <Picker.Item label="Kilogram per Square Centimeter (kgf/cm²)" value="kgfcm2" />
                                <Picker.Item label="Inch of Mercury (inHg)" value="inhg" />
                            </Picker>
                        </View>
                    </View>

                    {/* To Unit */}
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-white text-lg mb-2`}>To</Text>
                        <View style={tw`bg-white rounded-lg`}>
                            <Picker
                                selectedValue={toUnitA}
                                onValueChange={(itemValue) => setToUnitA(itemValue)}
                                style={tw`h-12 w-full text-black`}
                            >
                                <Picker.Item label="Pascal (Pa)" value="pa" />
                                <Picker.Item label="Atmosphere (atm)" value="atm" />
                                <Picker.Item label="Bar" value="bar" />
                                <Picker.Item label="Millimeter of Mercury (mmHg)" value="mmhg" />
                                <Picker.Item label="Torr" value="torr" />
                                <Picker.Item label="Pound per Square Inch (psi)" value="psi" />
                                <Picker.Item label="Kilogram per Square Centimeter (kgf/cm²)" value="kgfcm2" />
                                <Picker.Item label="Inch of Mercury (inHg)" value="inhg" />
                            </Picker>
                        </View>
                    </View>
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

                {/* Result Display */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Pressure: {conversionResult} {toUnitA}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Pressure;
