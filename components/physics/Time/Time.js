import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Time = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitT, setFromUnitT] = useState('seconds');
    const [toUnitT, setToUnitT] = useState('seconds');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesTime = {
        seconds: 1,          // Second (s)
        minutes: 60,         // Minute (min)
        hours: 3600,         // Hour (hr)
        days: 86400,         // Day (d)
        weeks: 604800,       // Week (wk)
        months: 2628000,     // Month (mo)
        years: 31536000,     // Year (yr)
        milliseconds: 0.001, // Millisecond (ms)
        microseconds: 1e-6,  // Microsecond (μs)
        nanoseconds: 1e-9,   // Nanosecond (ns)
    };

    const simulateConversion = () => {
        const fromRateTime = conversionRatesTime[fromUnitT];
        const toRateTime = conversionRatesTime[toUnitT];

        if (fromRateTime && toRateTime) {
            const result = (parseFloat(amount) * fromRateTime) / toRateTime;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Time Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Time Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Time</Text>
                    <TextInput 
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter time"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker 
                        selectedValue={fromUnitT}
                        onValueChange={(itemValue) => setFromUnitT(itemValue)}
                        style={tw`w-full p-0 bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Seconds (s)" value="seconds" />
                        <Picker.Item label="Minutes (min)" value="minutes" />
                        <Picker.Item label="Hours (hr)" value="hours" />
                        <Picker.Item label="Days (d)" value="days" />
                        <Picker.Item label="Weeks (wk)" value="weeks" />
                        <Picker.Item label="Months (mo)" value="months" />
                        <Picker.Item label="Years (yr)" value="years" />
                        <Picker.Item label="Milliseconds (ms)" value="milliseconds" />
                        <Picker.Item label="Microseconds (μs)" value="microseconds" />
                        <Picker.Item label="Nanoseconds (ns)" value="nanoseconds" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnitT}
                        onValueChange={(itemValue) => setToUnitT(itemValue)}
                        style={tw`w-full p-0 bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Seconds (s)" value="seconds" />
                        <Picker.Item label="Minutes (min)" value="minutes" />
                        <Picker.Item label="Hours (hr)" value="hours" />
                        <Picker.Item label="Days (d)" value="days" />
                        <Picker.Item label="Weeks (wk)" value="weeks" />
                        <Picker.Item label="Months (mo)" value="months" />
                        <Picker.Item label="Years (yr)" value="years" />
                        <Picker.Item label="Milliseconds (ms)" value="milliseconds" />
                        <Picker.Item label="Microseconds (μs)" value="microseconds" />
                        <Picker.Item label="Nanoseconds (ns)" value="nanoseconds" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <Button title="Convert" onPress={simulateConversion} color="red" />

                {/* Conversion Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Time: {conversionResult} {toUnitT}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Time;
