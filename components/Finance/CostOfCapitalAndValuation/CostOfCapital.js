import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const CostOfCapital = () => {
    const [debt, setDebt] = useState('');
    const [equity, setEquity] = useState('');
    const [costOfDebt, setCostOfDebt] = useState('');
    const [costOfEquity, setCostOfEquity] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [costOfCapital, setCostOfCapital] = useState(null);

    const calculateCostOfCapital = () => {
        const D = parseFloat(debt);  // Total debt
        const E = parseFloat(equity);  // Total equity
        const Rd = parseFloat(costOfDebt);  // Cost of debt
        const Re = parseFloat(costOfEquity);  // Cost of equity
        const T = parseFloat(taxRate);  // Tax rate

        // Input validation
        if (isNaN(D) || D < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Debt value.');
            return;
        }
        if (isNaN(E) || E < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Equity value.');
            return;
        }
        if (isNaN(Rd) || Rd < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Cost of Debt value.');
            return;
        }
        if (isNaN(Re) || Re < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Cost of Equity value.');
            return;
        }
        if (isNaN(T) || T < 0 || T > 1) {
            Alert.alert('Invalid Input', 'Please enter a valid Tax Rate (between 0 and 1).');
            return;
        }

        // Calculate the Cost of Capital
        const Wd = D / (D + E);  // Weight of debt
        const We = E / (D + E);  // Weight of equity
        const cost = (Wd * Rd * (1 - T)) + (We * Re);
        
        setCostOfCapital(cost.toFixed(4));  // Set the result with 4 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Cost of Capital Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Total Debt (D)</Text>
                    <TextInput
                        value={debt}
                        onChangeText={setDebt}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Debt"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Total Equity (E)</Text>
                    <TextInput
                        value={equity}
                        onChangeText={setEquity}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Equity"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Cost of Debt (Rd)</Text>
                    <TextInput
                        value={costOfDebt}
                        onChangeText={setCostOfDebt}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Cost of Debt"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Cost of Equity (Re)</Text>
                    <TextInput
                        value={costOfEquity}
                        onChangeText={setCostOfEquity}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Cost of Equity"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Tax Rate (T)</Text>
                    <TextInput
                        value={taxRate}
                        onChangeText={setTaxRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Tax Rate (between 0 and 1)"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateCostOfCapital} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {costOfCapital !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Cost of Capital: {costOfCapital}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default CostOfCapital;