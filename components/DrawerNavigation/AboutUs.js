import React from 'react';
import { View, Text, Image, Animated, Easing, ScrollView } from 'react-native';
import tw from 'twrnc';

const AboutUs = () => {
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
        <ScrollView contentContainerStyle={tw`bg-gray-900 p-6`}>
            {/* Welcome Section */}
            <View style={tw`items-center bg-gray-900 p-8`}>
                <Animated.View style={{ transform: [{ scale: scaleValue1 }] }}>
                </Animated.View>
                <Text style={tw`text-3xl font-bold text-white mb-2`}>     Welcome to LetTechnologies!</Text>
                <Text style={tw`text-lg text-gray-300 text-center mb-6`}>Innovating everyday solutions for you!</Text>
            </View>

            {/* About Information Container */}
            <Animated.View style={{ transform: [{ scale: scaleValue2 }] }}>
                <View style={tw`bg-gray-800 p-6 rounded-lg shadow-xl mb-8`}>
                    <Text style={tw`text-center text-lg font-bold text-white mb-4`}>About LetTechnologies</Text>
                    <Text style={tw`text-gray-300 text-center`}>
                        At LetTechnologies, we specialize in creating innovative and user-friendly mobile applications that make everyday tasks easier. Our flagship product, the Unit Converter app, is designed to provide quick and accurate conversions for various units, simplifying the complexities of measurement.
                    </Text>
                    <Text style={tw`text-gray-300 text-center mt-4`}>
                        With a passion for technology and a commitment to excellence, we strive to develop tools that enhance productivity and convenience for our users. Our team of dedicated professionals works tirelessly to ensure that our apps meet the highest standards of quality and performance.
                    </Text>
                </View>
            </Animated.View>

            {/* Closing Remarks Container */}
            <Animated.View style={{ transform: [{ scale: scaleValue3 }] }}>
                <View style={tw`bg-gray-800 p-6 rounded-lg shadow-xl mb-8`}>
                    <Text style={tw`text-center text-lg font-bold text-white mb-4`}>Thank You for Choosing LetTechnologies</Text>
                    <Text style={tw`text-gray-300 text-center`}>
                        We are excited to have you on this journey with us and look forward to delivering more innovative solutions in the future.
                    </Text>
                </View>
            </Animated.View>

            {/* Footer */}
            <View style={tw`bg-gray-800 p-4 rounded-lg shadow-xl mt-8`}>
               
                <Text style={tw`text-center text-gray-300 text-lg mt-2`}>
                    Empowering users with technology.
                </Text>
            </View>
        </ScrollView>
    );
};

export default AboutUs;
