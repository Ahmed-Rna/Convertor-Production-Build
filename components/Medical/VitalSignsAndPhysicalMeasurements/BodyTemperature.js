import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const BodyTemperature = () => {
    const [amount, setAmount] = useState('0');
    const [temperatureAdvice, setTemperatureAdvice] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('Celsius');
    const [conversionResult, setConversionResult] = useState(null);

    // Conversion functions for body temperature units
    const conversionRates = {
        'Celsius': {
            toBase: (value) => value,
            fromBase: (value) => value,
            toFahrenheit: (value) => (value * 9 / 5) + 32,
            toKelvin: (value) => value + 273.15,
        },
        'Fahrenheit': {
            toBase: (value) => (value - 32) * 5 / 9,
            fromBase: (value) => (value * 9 / 5) + 32,
            toCelsius: (value) => (value - 32) * 5 / 9,
            toKelvin: (value) => ((value - 32) * 5 / 9) + 273.15,
        },
        'Kelvin': {
            toBase: (value) => value - 273.15,
            fromBase: (value) => value + 273.15,
            toCelsius: (value) => value - 273.15,
            toFahrenheit: (value) => (value - 273.15) * 9 / 5 + 32,
        },
    };

    // Temperature Range Check (Advisory on abnormal temperature)
    const checkTemperature = (value, unit) => {
        let tempValue = parseFloat(value);

        // Convert temperature to Celsius for comparison
        if (unit === 'Fahrenheit') {
            tempValue = conversionRates['Fahrenheit'].toBase(tempValue);
        } else if (unit === 'Kelvin') {
            tempValue = conversionRates['Kelvin'].toBase(tempValue);
        }

        // Advise based on temperature ranges
        if (isNaN(tempValue) || tempValue <= 0) {
            return 'Please enter a valid temperature.';
        } else if (tempValue < 35) {
            return `Hypothermia risk: Temperature is too low in ${unit}.`;
        } else if (tempValue >= 35 && tempValue <= 37.5) {
            return `Normal body temperature in ${unit}.`;
        } else if (tempValue > 37.5 && tempValue <= 40) {
            return `Fever: Seek medical advice in ${unit}.`;
        } else {
            return `High fever: Emergency situation in ${unit}.`;
        }
    };

    // Convert Temperature
    const convertTemperature = () => {
        const fromConverter = conversionRates[selectedUnit];

        if (fromConverter) {
            let convertedValue = null;
            if (selectedUnit === 'Celsius') {
                convertedValue = {
                    fahrenheit: fromConverter.toFahrenheit(parseFloat(amount)),
                    kelvin: fromConverter.toKelvin(parseFloat(amount)),
                };
            } else if (selectedUnit === 'Fahrenheit') {
                convertedValue = {
                    celsius: fromConverter.toCelsius(parseFloat(amount)),
                    kelvin: fromConverter.toKelvin(parseFloat(amount)),
                };
            } else if (selectedUnit === 'Kelvin') {
                convertedValue = {
                    celsius: fromConverter.toCelsius(parseFloat(amount)),
                    fahrenheit: fromConverter.toFahrenheit(parseFloat(amount)),
                };
            }

            setConversionResult(convertedValue);
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    // Handle temperature advice
    const handleTemperatureAdvice = () => {
        setTemperatureAdvice(checkTemperature(amount, selectedUnit));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-800 p-6`}>
            <Text style={tw`text-center text-3xl font-bold text-white mb-6`}>
                Body Temperature Unit Converter
            </Text>

            <View style={tw`bg-gray-700 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Temperature</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter value"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Dropdown to select temperature unit */}
                <View style={tw`mb-6`}>
                    <Text style={tw`text-white text-lg mb-2`}>Select Temperature Unit</Text>
                    <Picker
                        selectedValue={selectedUnit}
                        onValueChange={(itemValue) => setSelectedUnit(itemValue)}
                        style={tw`bg-white rounded-lg h-14`}>
                        {Object.keys(conversionRates).map((unit) => (
                            <Picker.Item label={unit} value={unit} key={unit} />
                        ))}
                    </Picker>
                </View>

                {/* Button to check temperature advice */}
                <TouchableOpacity
                    onPress={handleTemperatureAdvice}
                    style={tw`bg-blue-500 py-3 rounded-lg mt-4 shadow-lg`}>
                    <Text style={tw`text-center text-white text-lg font-bold`}>Check Temperature Advice</Text>
                </TouchableOpacity>

                {/* Show the temperature advice */}
                {temperatureAdvice && (
                    <Text style={tw`my-4 text-center text-white text-lg font-semibold`}>
                        {temperatureAdvice}
                    </Text>
                )}

                {/* Button to convert temperature */}
                <TouchableOpacity
                    onPress={convertTemperature}
                    style={tw`bg-green-500 py-3 rounded-lg mt-4 shadow-lg`}>
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {/* Show the conversion results */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        {selectedUnit !== 'Celsius' && conversionResult.celsius && (
                            <Text style={tw`text-center text-xl text-white font-semibold`}>
                                Celsius: {conversionResult.celsius.toFixed(2)} °C
                            </Text>
                        )}
                        {selectedUnit !== 'Fahrenheit' && conversionResult.fahrenheit && (
                            <Text style={tw`text-center text-xl text-white font-semibold`}>
                                Fahrenheit: {conversionResult.fahrenheit.toFixed(2)} °F
                            </Text>
                        )}
                        {selectedUnit !== 'Kelvin' && conversionResult.kelvin && (
                            <Text style={tw`text-center text-xl text-white font-semibold`}>
                                Kelvin: {conversionResult.kelvin.toFixed(2)} K
                            </Text>
                        )}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default BodyTemperature;
