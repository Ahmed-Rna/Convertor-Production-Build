import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Retirement = () => {
    const [currentAge, setCurrentAge] = useState('');
    const [retirementAge, setRetirementAge] = useState('');
    const [currentSavings, setCurrentSavings] = useState('');
    const [monthlySavings, setMonthlySavings] = useState('');
    const [annualReturn, setAnnualReturn] = useState('');
    const [retirementSavings, setRetirementSavings] = useState(null);

    const calculateRetirementSavings = () => {
        const ageNow = parseInt(currentAge);
        const retireAge = parseInt(retirementAge);
        const savingsNow = parseFloat(currentSavings);
        const monthlyContribution = parseFloat(monthlySavings);
        const returnRate = parseFloat(annualReturn) / 100;

        if (
            isNaN(ageNow) ||
            isNaN(retireAge) ||
            isNaN(savingsNow) ||
            isNaN(monthlyContribution) ||
            isNaN(returnRate) ||
            retireAge <= ageNow ||
            savingsNow < 0 ||
            monthlyContribution < 0 ||
            returnRate < 0
        ) {
            Alert.alert('Invalid Input', 'Please ensure all fields are filled correctly.');
            return;
        }

        const yearsToRetirement = retireAge - ageNow;
        const monthsToRetirement = yearsToRetirement * 12;

        let futureValue = savingsNow;
        for (let i = 0; i < monthsToRetirement; i++) {
            futureValue += monthlyContribution;
            futureValue *= 1 + returnRate / 12;
        }

        setRetirementSavings(futureValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Retirement Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Current Age */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Current Age</Text>
                    <TextInput
                        value={currentAge}
                        onChangeText={setCurrentAge}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Current Age"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Retirement Age */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Retirement Age</Text>
                    <TextInput
                        value={retirementAge}
                        onChangeText={setRetirementAge}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Retirement Age"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Current Savings */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Current Savings ($)</Text>
                    <TextInput
                        value={currentSavings}
                        onChangeText={setCurrentSavings}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Current Savings"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Monthly Savings Contribution */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Monthly Savings Contribution ($)</Text>
                    <TextInput
                        value={monthlySavings}
                        onChangeText={setMonthlySavings}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Monthly Savings"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Annual Return Rate */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Annual Return Rate (%)</Text>
                    <TextInput
                        value={annualReturn}
                        onChangeText={setAnnualReturn}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Annual Return Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateRetirementSavings}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Calculate Retirement Savings
                    </Text>
                </TouchableOpacity>

                {/* Results */}
                {retirementSavings && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Estimated Retirement Savings: ${retirementSavings}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Retirement;