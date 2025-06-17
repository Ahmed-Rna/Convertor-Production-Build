import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Area = [
  { name: 'Mean', source: require('../../assets/s17.jpeg'), screen: 'Mean' },
  { name: 'Median', source: require('../../assets/s18.jpeg'), screen: 'Median' },
  { name: 'Mode', source: require('../../assets/stats3.jpeg'), screen: 'Mode' },
];

const Volumes = [
  { name: 'Range', source: require('../../assets/stats4.jpeg'), screen: 'Range' },
  { name: 'Standard Daviation', source: require('../../assets/stats5.jpeg'), screen: 'SD' },
  { name: 'Variance', source: require('../../assets/stats6.jpeg'), screen: 'Variance' },
];

const SurfaceArea = [
  { name: 'Correlation', source: require('../../assets/stats7.jpeg'), screen: 'Correlation' },
  { name: 'Regression', source: require('../../assets/stats8.jpeg'), screen: 'Regression' },

];

const Profiles = [
  { name: 'Absolute', source: require('../../assets/stats9.jpeg'), screen: 'Absolute' },
  { name: 'Commulative', source: require('../../assets/stats10.jpeg'), screen: 'Commulative' },
  { name: 'Relative', source: require('../../assets/stats11.jpeg'), screen: 'Relative' },
];


const Perimeters = [
  { name: 'ChiSquare', source: require('../../assets/stats12.jpeg'), screen: 'ChiSquare' },
  { name: 'Degree', source: require('../../assets/stats13.jpeg'), screen: 'Degree' },
  { name: 'ZScore', source: require('../../assets/stats14.jpeg'), screen: 'ZScore' },

];


const SamplingUnits = [
  { name: 'MarginOfError', source: require('../../assets/stats15.jpeg'), screen: 'MarginOfError' },
  { name: 'SampleSize', source: require('../../assets/stats16.jpeg'), screen: 'SampleSize' },
  { name: 'StandardError', source: require('../../assets/stats17.jpeg'), screen: 'StandardError' },

];

const Miscel = [
  { name: 'ConfidenceInterval', source: require('../../assets/stats18.jpeg'), screen: 'ConfidenceInterval' },
  { name: 'EffectSize', source: require('../../assets/stats1.jpeg'), screen: 'EffectSize' },
  { name: 'Percentile', source: require('../../assets/statt.png'), screen: 'Percentile' },

];
const Math = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(true);
  const [isVolumes, setVolumes] = useState(true);
  const [isSurfaceArea, setSurfaceArea] = useState(true);
  const [isProfiles, setProfiles] = useState(true);
  const [isPerimeter, setPerimeter] = useState(true);
  const [isSamplingUnits, setSamplingUnits] = useState(true);
  const [isMiscel, setMiscel] = useState(true);

  const navigation = useNavigation();

  const handlePress = (screen) => {
    navigation.navigate(screen); 
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-grow`}>
      <View style={tw`flex-1 bg-neutral-950`}>
        <StatusBar barStyle="light-content" />

        {/* Title */}
        {/* <Text style={tw`text-zinc-50 text-xl ml-4 font-bold bg-current`}>Unit Converter</Text> */}

        {/* Image */}
        <Image
          style={tw`w-100 h-50`}
          source={require('../../assets/Mathematics2.jpeg')}
        />
         <Text style={tw`border border-slate-100 rounded-2xl mt-2 ml-4 text-zinc-50 text-xl font-bold p-2 bg-current`}>
          STATISTICS
        </Text>

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center mt-5 ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/s1.jpg')}
          />
          <TouchableOpacity
            onPress={() => setDropdownVisible(!isDropdownVisible)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Central Tendency</Text>
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
                  style={tw`border border-slate-100 bg-current h-25 w-40 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/s2.webp')}
          />
          <TouchableOpacity
            onPress={() => setVolumes(!isVolumes)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Variability</Text>
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
                  style={tw`border border-slate-100 bg-current h-25 w-40  p-4 rounded  flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/s5.jpg')}
          />
          <TouchableOpacity
            onPress={() => setSurfaceArea(!isSurfaceArea)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Correlation and Regression</Text>
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
                  style={tw`border border-slate-100 bg-current h-25 w-40 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/s6.jpg')}
          />
          <TouchableOpacity
            onPress={() => setProfiles(!isProfiles)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Frequency Units</Text>
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
                  style={tw`border border-slate-100 bg-current h-25 w-40 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/s13.webp')}
          />
          <TouchableOpacity
            onPress={() => setPerimeter(!isPerimeter)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Hypothesis Testing</Text>
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
                  style={tw`border border-slate-100 bg-current h-25 w-40 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-2 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center  ml-4`}>
          <Image
            style={tw`w-5 h-10 mr-4`}
            source={require('../../assets/s12.jpg')}
          />
          <TouchableOpacity
            onPress={() => setSamplingUnits(!isSamplingUnits)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Sampling Units</Text>
            <Icon name={isSamplingUnits ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isSamplingUnits && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {SamplingUnits.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-40 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/s9.jpg')}
          />
          <TouchableOpacity
            onPress={() => setMiscel(!isMiscel)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Miscellaneous Units</Text>
            <Icon name={isMiscel ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isMiscel && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Miscel.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-40 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-1 text-sm text-white`}>{item.name}</Text>
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