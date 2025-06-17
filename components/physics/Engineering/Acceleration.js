import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Acceleration = () => {
    const [velocityChange, setVelocityChange] = useState('0');
    const [timeInterval, setTimeInterval] = useState('1');
    const [fromUnit, setFromUnit] = useState('m_s2');
    const [toUnit, setToUnit] = useState('m_s2');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion rates for different acceleration units
    const conversionRates = {
        m_s2: 1, // meters per second squared (m/s²)
        cm_s2: 0.01, // centimeters per second squared (cm/s²)
        km_h2: 0.277778, // kilometers per hour squared (km/h²) to m/s²
        ft_s2: 0.3048, // feet per second squared (ft/s²)
        in_s2: 0.0254, // inches per second squared (in/s²)
    };

    const simulateConversion = () => {
        const fromRate = conversionRates[fromUnit];
        const toRate = conversionRates[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(velocityChange) / parseFloat(timeInterval)) * fromRate / toRate;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Acceleration Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Velocity Change Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Velocity Change (m/s)</Text>
                    <TextInput
                        value={velocityChange}
                        onChangeText={setVelocityChange}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter velocity change"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Time Interval Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Time Interval (s)</Text>
                    <TextInput
                        value={timeInterval}
                        onChangeText={setTimeInterval}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter time interval"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
                    <Picker
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Meters per Second Squared" value="m_s2" />
                        <Picker.Item label="Centimeters per Second Squared" value="cm_s2" />
                        <Picker.Item label="Kilometers per Hour Squared" value="km_h2" />
                        <Picker.Item label="Feet per Second Squared" value="ft_s2" />
                        <Picker.Item label="Inches per Second Squared" value="in_s2" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
                    <Picker
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Meters per Second Squared" value="m_s2" />
                        <Picker.Item label="Centimeters per Second Squared" value="cm_s2" />
                        <Picker.Item label="Kilometers per Hour Squared" value="km_h2" />
                        <Picker.Item label="Feet per Second Squared" value="ft_s2" />
                        <Picker.Item label="Inches per Second Squared" value="in_s2" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={simulateConversion}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Convert Acceleration
                    </Text>
                </TouchableOpacity>

                {/* Results */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Acceleration: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Acceleration;
