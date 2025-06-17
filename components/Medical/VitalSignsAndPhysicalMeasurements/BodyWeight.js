import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';

const BodyWeight = () => {
    const [amount, setAmount] = useState('0');
    const [age, setAge] = useState('25');
    const [gender, setGender] = useState('male');
    const [idealWeight, setIdealWeight] = useState(null);
    const [weightStatus, setWeightStatus] = useState('');

    const calculateIdealWeight = () => {
        const weight = parseFloat(amount);
        let idealWeight;

        if (gender === 'male') {
            idealWeight = 50 + 2.3 * (parseInt(age) - 20); // Male formula
        } else if (gender === 'female') {
            idealWeight = 45.5 + 2.3 * (parseInt(age) - 20); // Female formula
        } else if (gender === 'transgender') {
            idealWeight = 47.5 + 2.3 * (parseInt(age) - 20); // Transgender formula
        }

        setIdealWeight(idealWeight);

        // Calculate weight status
        if (weight < idealWeight * 0.85) {
            setWeightStatus('Underweight');
        } else if (weight >= idealWeight * 0.85 && weight <= idealWeight * 1.15) {
            setWeightStatus('Normal weight');
        } else {
            setWeightStatus('Overweight');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-800 p-6`}>
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Ideal Weight Checker
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                {/* Body Weight Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Body Weight</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter weight"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Age Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Age</Text>
                    <TextInput
                        value={age}
                        onChangeText={setAge}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter age (1-100)"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Gender Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Select Gender</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}
                            style={tw`h-14`}
                        >
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Transgender" value="transgender" />
                        </Picker>
                    </View>
                </View>

                {/* Ideal Weight Button */}
                <TouchableOpacity
                    onPress={calculateIdealWeight}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Ideal Weight</Text>
                </TouchableOpacity>

                {/* Display Ideal Weight and Status */}
                {idealWeight !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Ideal Weight: {idealWeight.toFixed(2)} kg
                        </Text>
                        <Text style={tw`text-center text-lg text-white font-semibold`}>
                            Weight Status: {weightStatus}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default BodyWeight;
