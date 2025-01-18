import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Inertia = () => {
    const [mass, setMass] = useState('0');
    const [radius, setRadius] = useState('0');
    const [conversionResult, setConversionResult] = useState(null);

    const simulateInertiaCalculation = () => {
        const massValue = parseFloat(mass);
        const radiusValue = parseFloat(radius);

        if (!isNaN(massValue) && !isNaN(radiusValue) && massValue > 0 && radiusValue > 0) {
            const inertia = massValue * Math.pow(radiusValue, 2); // I = m * r²
            setConversionResult(inertia.toFixed(2));
        } else {
            Alert.alert('Invalid Input', 'Please enter valid mass and radius values.');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Moment of Inertia Calculator
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
                        placeholder="Enter mass in kg"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Radius Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Radius (m)</Text>
                    <TextInput
                        value={radius}
                        onChangeText={setRadius}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter radius in meters"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={simulateInertiaCalculation}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Calculate 
                    </Text>
                </TouchableOpacity>

                {/* Results */}
                {conversionResult !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Moment of Inertia: {conversionResult} kg·m²
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Inertia;
