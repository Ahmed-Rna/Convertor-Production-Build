import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const SimpleInterest = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [simpleInterest, setSimpleInterest] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const calculateSimpleInterest = () => {
        const P = parseFloat(principal);
        const R = parseFloat(rate);
        const T = parseFloat(time);

        if (isNaN(P) || isNaN(R) || isNaN(T)) {
            Alert.alert('Invalid Input', 'Please enter valid numeric values for all fields.');
            return;
        }

        if (P <= 0) {
            Alert.alert('Invalid Principal', 'Principal should be greater than zero.');
            return;
        }

        if (R <= 0) {
            Alert.alert('Invalid Rate', 'Interest rate should be greater than zero.');
            return;
        }

        if (T <= 0) {
            Alert.alert('Invalid Time', 'Time period should be greater than zero.');
            return;
        }

        setIsLoading(true);
        const interest = (P * R * T) / 100;
        setSimpleInterest(interest.toFixed(2));
        setIsLoading(false);
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            <Text style={tw`text-center text-2xl font-bold mb-4 text-slate-100`}>Simple Interest Calculator</Text>
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Principal Amount ($)</Text>
                    <TextInput
                        value={principal}
                        onChangeText={setPrincipal}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter principal"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Annual Interest Rate (%)</Text>
                    <TextInput
                        value={rate}
                        onChangeText={setRate}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter interest rate"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Time Period (Years)</Text>
                    <TextInput
                        value={time}
                        onChangeText={setTime}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter time period"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateSimpleInterest}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                    disabled={isLoading}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        {isLoading ? 'Calculating...' : 'Calculate'}
                    </Text>
                </TouchableOpacity>

                {/* Display Result */}
                {simpleInterest && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-slate-100 text-lg`}>
                            Simple Interest: {simpleInterest !== 'Invalid input' ? `$${simpleInterest}` : simpleInterest}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default SimpleInterest;