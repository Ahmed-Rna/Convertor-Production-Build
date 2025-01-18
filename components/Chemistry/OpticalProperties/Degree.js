import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Degree = () => {
    const [angleInDegrees, setAngleInDegrees] = useState('');
    const [angleInRadians, setAngleInRadians] = useState(null);

    const convertToRadians = () => {
        const degrees = parseFloat(angleInDegrees);

        if (isNaN(degrees)) {
            Alert.alert('Invalid Input', 'Please enter a valid angle in degrees.');
            return;
        }

        const radians = degrees * (Math.PI / 180); // Convert degrees to radians
        setAngleInRadians(radians.toFixed(4)); // Set radians value
    };

    const convertToDegrees = () => {
        const radians = parseFloat(angleInDegrees);

        if (isNaN(radians)) {
            Alert.alert('Invalid Input', 'Please enter a valid angle in radians.');
            return;
        }

        const degrees = radians * (180 / Math.PI); // Convert radians to degrees
        setAngleInRadians(degrees.toFixed(4)); // Set degrees value
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Angle Converter (Degrees ↔ Radians)
            </Text>

            {/* Converter Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Angle Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Angle (Degrees or Radians)</Text>
                    <TextInput
                        value={angleInDegrees}
                        onChangeText={setAngleInDegrees}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter angle"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Convert to Radians Button */}
                <TouchableOpacity
                    onPress={convertToRadians}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert to Radians</Text>
                </TouchableOpacity>

                {/* Convert to Degrees Button */}
                <TouchableOpacity
                    onPress={convertToDegrees}
                    style={tw`bg-blue-500 py-1 rounded-lg shadow-lg mt-4`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert to Degrees</Text>
                </TouchableOpacity>

                {/* Results */}
                {angleInRadians && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Value: {angleInRadians} {angleInDegrees ? 'radians' : 'degrees'}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Degree;
