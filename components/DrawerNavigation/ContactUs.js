import React from 'react';
import { View, Text, Animated, Easing, ScrollView } from 'react-native';
import tw from 'twrnc';

const ContactUs = () => {
    const scaleValue1 = React.useRef(new Animated.Value(0)).current;
    const scaleValue2 = React.useRef(new Animated.Value(0)).current;
    const scaleValue3 = React.useRef(new Animated.Value(0)).current;

    const startAnimation = (scaleValue) => {
        scaleValue.setValue(0); // Reset the animation before starting
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();
    };

    React.useEffect(() => {
        startAnimation(scaleValue1);
        startAnimation(scaleValue2);
        startAnimation(scaleValue3);
    }, []);

    return (
        <ScrollView contentContainerStyle={tw`bg-gray-900 p-6 flex-grow`}>
            {/* Full-page container */}
            <View style={tw`flex justify-center items-center bg-gray-900 p-8 mb-6`}>
                <Animated.View style={{ transform: [{ scale: scaleValue1 }] }}>
                    <Text style={tw`text-4xl font-bold text-white mb-2`}>Contact Us</Text>
                    <Text style={tw`text-lg text-gray-300 text-center mb-6`}>We're here to help!</Text>
                </Animated.View>
            </View>

            {/* Contact Information Container */}
            <Animated.View style={{ transform: [{ scale: scaleValue2 }] }}>
                <View style={tw`bg-gray-800 p-6 rounded-lg shadow-xl mb-8`}>
                    <Text style={tw`text-center text-lg font-bold text-white mb-4`}>Get in Touch</Text>
                    <Text style={tw`text-gray-300 text-center`}>
                        At LetTechnologies, we value your feedback and are committed to providing exceptional support for our users. Whether you have questions about our Unit Converter app, need technical assistance, or want to share your suggestions, we're here to help.
                    </Text>
                    <Text style={tw`text-gray-300 text-center mt-4`}>
                        <Text style={tw`font-bold`}>Email:</Text> info@lettechnologies.com
                    </Text>
                </View>
            </Animated.View>

            {/* Footer */}
            <View style={tw`bg-gray-800 p-4 rounded-lg shadow-xl mt-8`}>
               
                <Text style={tw`text-center text-gray-300 text-sm mt-2`}>
                    Empowering users with technology.
                </Text>
            </View>
            
        </ScrollView>
        
    );
};

export default ContactUs;
