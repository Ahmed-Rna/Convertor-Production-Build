import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const LiquidityRatio = () => {
    const [currentAssets, setCurrentAssets] = useState('');
    const [currentLiabilities, setCurrentLiabilities] = useState('');
    const [inventory, setInventory] = useState('');
    const [currentRatio, setCurrentRatio] = useState(null);
    const [quickRatio, setQuickRatio] = useState(null);

    const calculateRatios = () => {
        const assets = parseFloat(currentAssets);
        const liabilities = parseFloat(currentLiabilities);
        const inv = parseFloat(inventory);

        // Input validation
        if (isNaN(assets) || assets <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid value for Current Assets.');
            return;
        }
        if (isNaN(liabilities) || liabilities <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid value for Current Liabilities.');
            return;
        }
        if (isNaN(inv) || inv < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid value for Inventory.');
            return;
        }

        // Calculate Current Ratio
        const currentRatioValue = assets / liabilities;

        // Calculate Quick Ratio
        const quickRatioValue = (assets - inv) / liabilities;

        setCurrentRatio(currentRatioValue.toFixed(2));
        setQuickRatio(quickRatioValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Liquidity Ratios Calculator</Text>

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
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Inventory ($)</Text>
                    <TextInput
                        value={inventory}
                        onChangeText={setInventory}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Inventory"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateRatios} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {currentRatio && quickRatio && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Current Ratio: {currentRatio}
                        </Text>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800 mt-2`}>
                            Quick Ratio: {quickRatio}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default LiquidityRatio;
