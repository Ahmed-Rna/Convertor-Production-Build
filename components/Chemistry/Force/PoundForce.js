import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const PoundForce = () => {
    const [newton, setNewton] = useState(''); // in Newtons (N)
    const [poundForce, setPoundForce] = useState(null); // in Pound-Force (lbf)

    const calculatePoundForce = () => {
        const N = parseFloat(newton);

        if (isNaN(N) || N <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid force in Newtons (N).');
            return;
        }

        const poundForceValue = N / 4.44822; // Convert Newtons to Pound-Force (1 lbf = 4.44822 N)
        setPoundForce(poundForceValue.toFixed(2)); // Result in Pound-Force (lbf)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Pound-Force (lbf) Calculator
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
                    onPress={calculatePoundForce}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {poundForce && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Force: {poundForce} lbf
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default PoundForce;
