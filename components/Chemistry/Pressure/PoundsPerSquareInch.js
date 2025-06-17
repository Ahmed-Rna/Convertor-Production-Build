import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const PoundsPerSquareInch = () => {
    const [force, setForce] = useState(''); // in Newtons (N)
    const [area, setArea] = useState(''); // in square meters (m^2)
    const [pressure, setPressure] = useState(null); // in psi

    const calculatePressure = () => {
        const F = parseFloat(force);
        const A = parseFloat(area);

        if (isNaN(F) || F <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid force (N).');
            return;
        }

        if (isNaN(A) || A <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid area (m²).');
            return;
        }

        const pressureInPa = F / A; // Pressure in Pascals (Pa)

        // 1 psi = 6894.76 Pa
        const pressureInPsi = pressureInPa / 6894.76;

        setPressure(pressureInPsi.toFixed(5)); // Result in psi
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Pounds per Square Inch (psi) Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Force Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Force (N)</Text>
                    <TextInput
                        value={force}
                        onChangeText={setForce}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Force in Newtons"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Area Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Area (m²)</Text>
                    <TextInput
                        value={area}
                        onChangeText={setArea}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Area in square meters"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculatePressure}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {pressure && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Pressure: {pressure} psi
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default PoundsPerSquareInch;
