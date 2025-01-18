import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Energy = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('J');
    const [toUnit, setToUnit] = useState('kJ');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesEnergy = {
        J: 1,           // Joule
        kJ: 1000,       // Kilojoule
        cal: 4.184,     // Calorie
        kcal: 4184,     // Kilocalorie
        Wh: 3600,       // Watt-hour
        kWh: 3600000,   // Kilowatt-hour
        eV: 1.60218e-19, // Electronvolt
        BTU: 1055.06,   // British Thermal Unit
        hph: 2684519.4, // Horsepower-hour
    };

    const simulateConversion = () => {
        const fromRate = conversionRatesEnergy[fromUnit];
        const toRate = conversionRatesEnergy[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Energy Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Energy</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter energy value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={fromUnit}
                            onValueChange={(itemValue) => setFromUnit(itemValue)}
                            style={tw`h-14 w-full text-black`}
                        >
                            <Picker.Item label="Joule" value="J" />
                            <Picker.Item label="Kilojoule" value="kJ" />
                            <Picker.Item label="Calorie" value="cal" />
                            <Picker.Item label="Kilocalorie" value="kcal" />
                            <Picker.Item label="Watt-hour" value="Wh" />
                            <Picker.Item label="Kilowatt-hour" value="kWh" />
                            <Picker.Item label="Electronvolt" value="eV" />
                            <Picker.Item label="British Thermal Unit" value="BTU" />
                            <Picker.Item label="Horsepower-hour" value="hph" />
                        </Picker>
                    </View>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <View style={tw`bg-white rounded-lg`}>
                        <Picker
                            selectedValue={toUnit}
                            onValueChange={(itemValue) => setToUnit(itemValue)}
                            style={tw`h-14 w-full text-black`}
                        >
                            <Picker.Item label="Joule" value="J" />
                            <Picker.Item label="Kilojoule" value="kJ" />
                            <Picker.Item label="Calorie" value="cal" />
                            <Picker.Item label="Kilocalorie" value="kcal" />
                            <Picker.Item label="Watt-hour" value="Wh" />
                            <Picker.Item label="Kilowatt-hour" value="kWh" />
                            <Picker.Item label="Electronvolt" value="eV" />
                            <Picker.Item label="British Thermal Unit" value="BTU" />
                            <Picker.Item label="Horsepower-hour" value="hph" />
                        </Picker>
                    </View>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={simulateConversion}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Convert Energy
                    </Text>
                </TouchableOpacity>

                {/* Results */}
                {conversionResult !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Energy: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Energy;
