import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Sievert = () => {
    const [gray, setGray] = useState(''); // in Gray (Gy)
    const [sievert, setSievert] = useState(null); // in Sievert (Sv)

    const calculateSievert = () => {
        const Gy = parseFloat(gray);

        if (isNaN(Gy) || Gy <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid radiation dose in Gray (Gy).');
            return;
        }

        const sievertValue = Gy; // Assuming dose equivalent factor is 1 (1 Gy = 1 Sv)
        setSievert(sievertValue.toFixed(2)); // Result in Sievert (Sv)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Sievert (Sv) Radiation Dose Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Gray Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Dose (Gy)</Text>
                    <TextInput
                        value={gray}
                        onChangeText={setGray}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Dose in Gray"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateSievert}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {sievert && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Radiation Dose: {sievert} Sv
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Sievert;
