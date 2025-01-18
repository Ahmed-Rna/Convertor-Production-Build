import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Newton = () => {
    const [mass, setMass] = useState(''); // in Kilograms (kg)
    const [acceleration, setAcceleration] = useState(''); // in meters per second squared (m/s²)
    const [force, setForce] = useState(null); // in Newtons (N)

    const calculateForce = () => {
        const m = parseFloat(mass);
        const a = parseFloat(acceleration);

        if (isNaN(m) || m <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass (kg).');
            return;
        }

        if (isNaN(a) || a <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid acceleration (m/s²).');
            return;
        }

        const forceValue = m * a; // Force in Newtons (N)
        setForce(forceValue.toFixed(2)); // Result in Newtons
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Newton (N) Force Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Mass Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Mass (kg)</Text>
                    <TextInput
                        value={mass}
                        onChangeText={setMass}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Mass in Kilograms"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Acceleration Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Acceleration (m/s²)</Text>
                    <TextInput
                        value={acceleration}
                        onChangeText={setAcceleration}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Acceleration in meters per second squared"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateForce}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {force && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Force: {force} N
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Newton;
