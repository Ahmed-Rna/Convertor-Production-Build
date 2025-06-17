import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const WorkingCapital = () => {
    const [currentAssets, setCurrentAssets] = useState('');
    const [currentLiabilities, setCurrentLiabilities] = useState('');
    const [workingCapital, setWorkingCapital] = useState(null);

    const calculateWorkingCapital = () => {
        const assets = parseFloat(currentAssets); // Current Assets
        const liabilities = parseFloat(currentLiabilities); // Current Liabilities

        // Input validation
        if (isNaN(assets) || assets < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid amount for Current Assets.');
            return;
        }
        if (isNaN(liabilities) || liabilities < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid amount for Current Liabilities.');
            return;
        }

        // Calculate Working Capital
        const wc = assets - liabilities;
        setWorkingCapital(wc.toFixed(2)); // Working Capital
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Working Capital Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Current Assets ($)</Text>
                    <TextInput
                        value={currentAssets}
                        onChangeText={setCurrentAssets}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Current Assets"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Current Liabilities ($)</Text>
                    <TextInput
                        value={currentLiabilities}
                        onChangeText={setCurrentLiabilities}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Current Liabilities"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateWorkingCapital} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {workingCapital !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Working Capital: ${workingCapital}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default WorkingCapital;
