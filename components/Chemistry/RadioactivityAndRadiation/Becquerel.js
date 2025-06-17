import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Becquerel = () => {
    const [curie, setCurie] = useState(''); // in Curie (Ci)
    const [becquerel, setBecquerel] = useState(null); // in Becquerel (Bq)

    const calculateBecquerel = () => {
        const Ci = parseFloat(curie);

        if (isNaN(Ci) || Ci <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid activity in Curie (Ci).');
            return;
        }

        const becquerelValue = Ci * 3.7e10; // Convert Curie to Becquerel (1 Ci = 3.7 × 10⁶ Bq)
        setBecquerel(becquerelValue.toFixed(2)); // Result in Becquerels (Bq)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Becquerel (Bq) Activity Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Curie Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Activity (Ci)</Text>
                    <TextInput
                        value={curie}
                        onChangeText={setCurie}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Activity in Curie"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateBecquerel}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {becquerel && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Activity: {becquerel} Bq
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Becquerel;
