import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Dyne = () => {
    const [newton, setNewton] = useState(''); // in Newtons (N)
    const [dyne, setDyne] = useState(null); // in Dynes (dyne)

    const calculateDyne = () => {
        const N = parseFloat(newton);

        if (isNaN(N) || N <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid force in Newtons (N).');
            return;
        }

        const dyneValue = N * 100000; // Convert Newtons to Dynes (1 N = 100,000 dyne)
        setDyne(dyneValue.toFixed(2)); // Result in Dynes
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Dyne (dy) Force Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Newton Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Force (N)</Text>
                    <TextInput
                        value={newton}
                        onChangeText={setNewton}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Force in Newtons"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateDyne}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {dyne && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Force: {dyne} dyne
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Dyne;
