import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Image, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            setModalVisible(true);
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={tw`flex-1`}
        >
            <ScrollView contentContainerStyle={tw`bg-gray-900 p-6`}>
                {/* Header Section */}
                <View style={tw`items-center mb-6`}>
                    <Text style={tw`text-center text-4xl font-bold text-white`}>Feedback</Text>
                    <Text style={tw`text-center text-lg text-gray-300 mt-2`}>
                        Your feedback is invaluable to us. Whether it's a suggestion for new features, improvements, 
                        or general comments about our app, we want to hear from you. Your input helps us make our products 
                        better and more user-friendly.
                    </Text>
                    <Text style={tw`text-center text-lg text-gray-300 mt-2`}>
                        We look forward to hearing from you.
                    </Text>
                </View>

                <View style={tw`bg-gray-800 p-6 rounded-lg shadow-xl`}>
                    {/* Name Input */}
                    <View style={tw`mb-6`}>
                        <Text style={tw`text-white text-lg mb-2`}>Name</Text>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            style={tw`w-full p-4 bg-gray-700 rounded-lg text-white`}
                            placeholder="Enter your name"
                            placeholderTextColor="white"
                        />
                    </View>

                    {/* Email Input */}
                    <View style={tw`mb-6`}>
                        <Text style={tw`text-white text-lg mb-2`}>Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            style={tw`w-full p-4 bg-gray-700 rounded-lg text-white`}
                            placeholder="Enter your email"
                            placeholderTextColor="white"
                            keyboardType="email-address"
                        />
                    </View>

                    {/* Message Input */}
                    <View style={tw`mb-6`}>
                        <Text style={tw`text-white text-lg mb-2`}>Message</Text>
                        <TextInput
                            value={message}
                            onChangeText={setMessage}
                            style={tw`w-full p-4 bg-gray-700 rounded-lg text-white`}
                            placeholder="Write your message here"
                            placeholderTextColor="white"
                            multiline
                            numberOfLines={4}
                        />
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={tw`bg-blue-500 py-4 rounded-full shadow-lg`}
                    >
                        <Text style={tw`text-center text-white text-xl font-bold`}>Send Message</Text>
                    </TouchableOpacity>
                </View>

                {/* Modal */}
                <Modal
                    visible={isModalVisible}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
                        <View style={tw`bg-white p-6 rounded-lg shadow-xl w-4/5`}>
                            <Text style={tw`text-center text-lg font-bold text-black mb-4`}>Thank You!</Text>
                            <Text style={tw`text-center text-gray-700 mb-4`}>Your feedback has been submitted successfully.</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={tw`bg-blue-500 py-2 px-6 rounded-full self-center`}
                            >
                                <Text style={tw`text-white text-lg font-bold`}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Feedback;
