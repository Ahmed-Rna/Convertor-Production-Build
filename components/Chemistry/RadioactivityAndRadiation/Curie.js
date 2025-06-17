import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Curie = () => {
    const [becquerel, setBecquerel] = useState(''); // in Becquerel (Bq)
    const [curie, setCurie] = useState(null); // in Curie (Ci)

    const calculateCurie = () => {
        const Bq = parseFloat(becquerel);

        if (isNaN(Bq) || Bq <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid activity in Becquerel (Bq).');
            return;
        }

        const curieValue = Bq / 3.7e10; // Convert Becquerel to Curie (1 Ci = 3.7 × 10⁶ Bq)
        setCurie(curieValue.toFixed(10)); // Result in Curie (Ci)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Curie (Ci) Activity Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Becquerel Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Activity (Bq)</Text>
                    <TextInput
                        value={becquerel}
                        onChangeText={setBecquerel}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Activity in Becquerel"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateCurie}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {curie && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Activity: {curie} Ci
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Curie;
