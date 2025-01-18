import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const CashFlow = () => {
    const [cashInflow, setCashInflow] = useState('');
    const [cashOutflow, setCashOutflow] = useState('');
    const [netCashFlow, setNetCashFlow] = useState(null);

    const calculateCashFlow = () => {
        const inflow = parseFloat(cashInflow); // Cash Inflow
        const outflow = parseFloat(cashOutflow); // Cash Outflow

        // Input validation
        if (isNaN(inflow) || inflow < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Cash Inflow amount.');
            return;
        }
        if (isNaN(outflow) || outflow < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Cash Outflow amount.');
            return;
        }

        // Calculate Net Cash Flow
        const netCash = inflow - outflow;
        setNetCashFlow(netCash.toFixed(2)); // Net Cash Flow
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Cash Flow Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Cash Inflow ($)</Text>
                    <TextInput
                        value={cashInflow}
                        onChangeText={setCashInflow}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Cash Inflow"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Cash Outflow ($)</Text>
                    <TextInput
                        value={cashOutflow}
                        onChangeText={setCashOutflow}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Cash Outflow"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateCashFlow} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {netCashFlow !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Net Cash Flow: ${netCashFlow}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default CashFlow;
