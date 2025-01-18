import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Gray = () => {
    const [rad, setRad] = useState(''); // in Rad (rd)
    const [gray, setGray] = useState(null); // in Gray (Gy)

    const calculateGray = () => {
        const rd = parseFloat(rad);

        if (isNaN(rd) || rd <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid radiation dose in Rad (rd).');
            return;
        }

        const grayValue = rd * 0.01; // Convert Rad to Gray (1 Rad = 0.01 Gy)
        setGray(grayValue.toFixed(2)); // Result in Gray (Gy)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Gray (Gy) Radiation Dose Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Rad Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Dose (Rad)</Text>
                    <TextInput
                        value={rad}
                        onChangeText={setRad}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Dose in Rad"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateGray}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {gray && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Radiation Dose: {gray} Gy
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Gray;
