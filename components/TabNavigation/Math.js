import React, { useState,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

const Area = [
  { name: 'Circle', source: require('../../assets/Sphere.jpeg'), screen: 'Circle' },
  { name: 'Rectangle', source: require('../../assets/rectangle.jpeg'), screen: 'Rectangle' },
  { name: 'Triangle', source: require('../../assets/triangle3.jpeg'), screen: 'Triangle' },
  { name: 'Trapezoid', source: require('../../assets/trapezoid.jpeg'), screen: 'Trapezoid' },
];

const Volumes = [
  { name: 'Cone', source: require('../../assets/cone.jpeg'), screen: 'Cone' },
  { name: 'Cube', source: require('../../assets/square2.jpeg'), screen: 'Cube' },
  { name: 'Cylinder', source: require('../../assets/cylinder.jpeg'), screen: 'Cylinder' },
  { name: 'Tent', source: require('../../assets/tent.jpeg'), screen: 'Tent' },
];

const SurfaceArea = [
  { name: 'Cube', source: require('../../assets/square.jpeg'), screen: 'SCube' },
  { name: 'Cylinder', source: require('../../assets/cylinder2.jpeg'), screen: 'SCylinder' },
  { name: 'Sphere', source: require('../../assets/sphere2.jpeg'), screen: 'Sphere' },

];

const Profiles = [
  { name: 'Number System', source: require('../../assets/number2.jpeg'), screen: 'Profile' },
];


const Perimeters = [
  { name: 'Rectangle', source: require('../../assets/rectangle2.jpeg'), screen: 'Prectangle' },
  { name: 'Square', source: require('../../assets/square3.jpeg'), screen: 'Psquare' },
  { name: 'Triangle', source: require('../../assets/cone2.jpeg'), screen: 'Ptriangle' },
];



const Math = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(true);
  const [isVolumes, setVolumes] = useState(true);
  const [isSurfaceArea, setSurfaceArea] = useState(true);
  const [isProfiles, setProfiles] = useState(true);
  const [isPerimeter, setPerimeter] = useState(true);

  const navigation = useNavigation();

  const handlePress = (screen) => {
    navigation.navigate(screen); // Navigate to the selected screen
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-grow`}>
      <View style={tw`flex-1 bg-neutral-950`}>
        <StatusBar barStyle="light-content" />

        {/* Title */}
        {/* <Text style={tw`text-zinc-50 text-xl ml-4 font-bold bg-current`}>Unit Converter</Text> */}

        {/* Image */}
        <Image
          style={tw`w-full h-50`}
          source={require('../../assets/Mathematics1.jpeg')}
          resizeMode="stretch"
        />
        
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.FULL_BANNER}
        />

        <Text style={tw`border border-slate-100 rounded-2xl mt-2 mt-2 ml-2 mt-2 text-zinc-50 text-xl font-bold p-2 bg-current text-center`}>
          MATHEMATICS
        </Text>
        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center mt-5 ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/m1.jpg')}
          />
          <TouchableOpacity
            onPress={() => setDropdownVisible(!isDropdownVisible)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Area</Text>
            <Icon name={isDropdownVisible ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isDropdownVisible && (
          <View style={tw`bg-grey rounded-lg mt-1 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Area.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current  w-[33.3] p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  {/* Dynamically set the image source */}
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-2 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}



        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center mt-2 ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/m3.png')}
          />
          <TouchableOpacity
            onPress={() => setVolumes(!isVolumes)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Volume</Text>
            <Icon name={isVolumes ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isVolumes && (
          <View style={tw`bg-grey rounded-lg mt-4 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Volumes.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current  w-[33.3]  p-4 rounded  flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-1 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}



        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center  ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/m4.jpg')}
          />
          <TouchableOpacity
            onPress={() => setSurfaceArea(!isSurfaceArea)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Surface Area</Text>
            <Icon name={isSurfaceArea ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isSurfaceArea && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg  p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {SurfaceArea.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current  w-[33.3] p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-1 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}




        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center  ml-4`}>
          <Image
            style={tw`w-5 h-10 mr-4`}
            source={require('../../assets/m5.jpg')}
          />
          <TouchableOpacity
            onPress={() => setProfiles(!isProfiles)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Number System</Text>
            <Icon name={isProfiles ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isProfiles && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Profiles.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current  w-[33.3] p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-1 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}



        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-12 mr-4`}
            source={require('../../assets/m6.jpg')}
          />
          <TouchableOpacity
            onPress={() => setPerimeter(!isPerimeter)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Perimeter</Text>
            <Icon name={isPerimeter ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isPerimeter && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Perimeters.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current  w-[33.3] p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-2 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
           <View style={tw`flex-grow bg-black`} />

      </View>
    </ScrollView>
  );
};

export default Math;