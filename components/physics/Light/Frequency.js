import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Frequency = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitF, setFromUnitF] = useState('hz');
    const [toUnitF, setToUnitF] = useState('hz');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesFrequency = {
        hz: 1,               // Hertz (Hz)
        mhz: 1e6,            // Megahertz (MHz)
        ghz: 1e9,            // Gigahertz (GHz)
        thz: 1e12,           // Terahertz (THz)
        khz: 1e3,            // Kilohertz (kHz)
        rpm: 1 / 60,         // Revolutions per minute (RPM)
        cps: 1,              // Cycles per second (CPS)
        bps: 1,              // Bits per second (BPS)
        khz_rpm: 1e3 / 60,   // Kilohertz to RPM
        mhz_rpm: 1e6 / 60,   // Megahertz to RPM
    };

    const simulateConversion = () => {
        const fromRateFrequency = conversionRatesFrequency[fromUnitF];
        const toRateFrequency = conversionRatesFrequency[toUnitF];

        if (fromRateFrequency && toRateFrequency) {
            const result = (parseFloat(amount) * fromRateFrequency) / toRateFrequency;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Frequency Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Enter Frequency */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Frequency</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter frequency"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker
                        selectedValue={fromUnitF}
                        onValueChange={(itemValue) => setFromUnitF(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Hertz (Hz)" value="hz" />
                        <Picker.Item label="Megahertz (MHz)" value="mhz" />
                        <Picker.Item label="Gigahertz (GHz)" value="ghz" />
                        <Picker.Item label="Terahertz (THz)" value="thz" />
                        <Picker.Item label="Kilohertz (kHz)" value="khz" />
                        <Picker.Item label="Revolutions per Minute (RPM)" value="rpm" />
                        <Picker.Item label="Cycles per Second (CPS)" value="cps" />
                        <Picker.Item label="Bits per Second (BPS)" value="bps" />
                        <Picker.Item label="Kilohertz to RPM" value="khz_rpm" />
                        <Picker.Item label="Megahertz to RPM" value="mhz_rpm" />
                    </Picker>
                </View>

                {/* To Unit */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnitF}
                        onValueChange={(itemValue) => setToUnitF(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Hertz (Hz)" value="hz" />
                        <Picker.Item label="Megahertz (MHz)" value="mhz" />
                        <Picker.Item label="Gigahertz (GHz)" value="ghz" />
                        <Picker.Item label="Terahertz (THz)" value="thz" />
                        <Picker.Item label="Kilohertz (kHz)" value="khz" />
                        <Picker.Item label="Revolutions per Minute (RPM)" value="rpm" />
                        <Picker.Item label="Cycles per Second (CPS)" value="cps" />
                        <Picker.Item label="Bits per Second (BPS)" value="bps" />
                        <Picker.Item label="Kilohertz to RPM" value="khz_rpm" />
                        <Picker.Item label="Megahertz to RPM" value="mhz_rpm" />
                    </Picker>
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
                            Converted Frequency: {conversionResult} {toUnitF}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Frequency;
