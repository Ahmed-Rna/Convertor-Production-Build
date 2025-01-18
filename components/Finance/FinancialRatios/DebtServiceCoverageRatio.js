import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const DebitServiceCoverageRatio = () => {
    const [netOperatingIncome, setNetOperatingIncome] = useState('');
    const [debtService, setDebtService] = useState('');
    const [dscr, setDscr] = useState(null);

    const calculateDSCR = () => {
        const noi = parseFloat(netOperatingIncome); // Net Operating Income (NOI)
        const debt = parseFloat(debtService); // Debt Service

        // Input validation
        if (isNaN(noi) || noi <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Net Operating Income (NOI).');
            return;
        }
        if (isNaN(debt) || debt <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Debt Service.');
            return;
        }

        // Calculate Debt Service Coverage Ratio (DSCR)
        const ratio = noi / debt;

        setDscr(ratio.toFixed(2)); // DSCR as a ratio
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Debt Service Coverage Ratio (DSCR) Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Net Operating Income (NOI) ($)</Text>
                    <TextInput
                        value={netOperatingIncome}
                        onChangeText={setNetOperatingIncome}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Net Operating Income"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Debt Service ($)</Text>
                    <TextInput
                        value={debtService}
                        onChangeText={setDebtService}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Debt Service"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateDSCR} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {dscr && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Debt Service Coverage Ratio (DSCR): {dscr}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default DebitServiceCoverageRatio;
