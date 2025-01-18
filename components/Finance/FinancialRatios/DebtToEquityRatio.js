import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const DebtToEquityRatioCalculator = () => {
    const [totalDebt, setTotalDebt] = useState('');
    const [totalEquity, setTotalEquity] = useState('');
    const [deRatio, setDeRatio] = useState(null);

    const calculateDERatio = () => {
        const debt = parseFloat(totalDebt);
        const equity = parseFloat(totalEquity);

        // Input validation
        if (isNaN(debt) || debt < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Total Debt.');
            return;
        }
        if (isNaN(equity) || equity <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Total Equity (greater than zero).');
            return;
        }

        // Calculate D/E Ratio
        const ratio = debt / equity;
        setDeRatio(ratio.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Debt-to-Equity (D/E) Ratio Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Total Debt ($)</Text>
                    <TextInput
                        value={totalDebt}
                        onChangeText={setTotalDebt}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Total Debt"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Total Equity ($)</Text>
                    <TextInput
                        value={totalEquity}
                        onChangeText={setTotalEquity}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Total Equity"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateDERatio} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {deRatio && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Debt-to-Equity Ratio: {deRatio}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default DebtToEquityRatioCalculator;

