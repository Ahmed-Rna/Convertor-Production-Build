import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';


const solutions = [
  { name: 'Length', source: require('../../assets/length2.jpeg'), screen: 'Length' },
  { name: 'Volume', source: require('../../assets/volume2.jpeg'), screen: 'Volume' },

  { name: 'Weight', source: require('../../assets/weight2.jpeg'), screen: 'Weight' },
  { name: 'Area', source: require('../../assets/areaa.jpeg'), screen: 'Area' },
  { name: 'Fuel', source: require('../../assets/fuel2.jpeg'), screen: 'FuelEfficiency' },
  { name: 'Prefix', source: require('../../assets/prefix2.jpeg'), screen: 'Prefix' },
  { name: 'Speed', source: require('../../assets/speed3.jpeg'), screen: 'Speed' },
];

const Engineering = [
  { name: 'Torque', source: require('../../assets/torque2.jpeg'), screen: 'Torque' },
  { name: 'Sound', source: require('../../assets/sound2.jpeg'), screen: 'Sound' },
  { name: 'Density', source: require('../../assets/density2.jpeg'), screen: 'Density' },
  { name: '   Heat\nCapacity', source: require('../../assets/heatcapacity2.jpeg'), screen: 'HeatCapacity' },
  { name: 'Force', source: require('../../assets/force.jpeg'), screen: 'Force' },
  { name: 'Inertia', source: require('../../assets/inertia.jpeg'), screen: 'Inertia' },
  { name: '  Heat Density', source: require('../../assets/heatdensity.jpeg'), screen: 'HeatDensity' },
  { name: 'Angle', source: require('../../assets/frequency3.jpeg'), screen: 'Angle' },
  { name: 'Acceleration', source: require('../../assets/drill2.jpg'), screen: 'Acceleration' },

];

const Fluids = [
  { name: 'Flow', source: require('../../assets/flow2.jpeg'), screen: 'Flow' },
  
  { name: 'Concentrate', source: require('../../assets/concentration2.jpeg'), screen: 'Concentration' },
  { name: 'Viscosity', source: require('../../assets/viscosity2.jpeg'), screen: 'Viscosity' },
  { name: 'Surface\nTension', source: require('../../assets/surfacetension.jpeg'), screen: 'SurfaceTension' },
  { name: '   Solution\n  Converter', source: require('../../assets/solutionconverter2.jpeg'), screen: 'SolutionConverter' },
  

];

const Electricity = [
  { name: 'Energy', source: require('../../assets/energy.jpeg'), screen: 'Energy' },
  { name: 'Conductance', source: require('../../assets/conduc.webp'), screen: 'Conductance' },
  { name: 'Resistivity', source: require('../../assets/resistance2.jpeg'), screen: 'Resistivity' },
  { name: 'ConductivityConverter', source: require('../../assets/conductivity2.jpeg'), screen: 'ConductivityConverter' },
  { name: 'Resistance', source: require('../../assets/resistor2.jpeg'), screen: 'Resistance' },
  { name: 'Field\nStrength', source: require('../../assets/filedstrength2.jpeg'), screen: 'FieldStrength' },
  { name: 'Inductance', source: require('../../assets/inductance2.jpeg'), screen: 'Inductance' },
  { name: 'Potential', source: require('../../assets/potential.jpeg'), screen: 'Potential' },
  { name: 'Power', source: require('../../assets/power2.jpeg'), screen: 'Power' },
  { name: 'Current', source: require('../../assets/current2.jpeg'), screen: 'Current' },
  { name: 'Charge', source: require('../../assets/charge2.jpeg'), screen: 'Charge' },
  { name: 'Volume\nCharge', source: require('../../assets/volumecharge2.jpeg'), screen: 'VolumeCharge' },
  { name: `Surface\nCharge`, source: require('../../assets/surfacecharge2.jpeg'), screen: 'SurfaceCharge' },
];



const Computer = [
  { name: 'Resolution\nConverter', source: require('../../assets/resolution2.jpeg'), screen: 'ResolutionConverter' },
  { name: 'Storage', source: require('../../assets/storage2.jpeg'), screen: 'Storage' },
  { name: 'Image', source: require('../../assets/image.jpeg'), screen: 'Image' },
 
];


const Light = [
  { name: 'Luminance', source: require('../../assets/luminance2.jpeg'), screen: 'Luminance' },
  { name: 'Illumination', source: require('../../assets/illumination2.jpeg'), screen: 'Illumination' },
  { name: 'Frequency', source: require('../../assets/angle3.jpeg'), screen: 'Frequency' },

];

const Time = [
  { name: 'Time', source: require('../../assets/time2.jpeg'), screen: 'Time' },

];

const Magnet = [
  { name: 'FluxDensity', source: require('../../assets/flux.jpeg'), screen: 'FluxDensity' },
  { name: 'Magnet', source: require('../../assets/magnet2.jpeg'), screen: 'Magnet' },
  
];


const Home = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(true);
  const [isEngineering, setEngineering] = useState(true);
  const [isFluids, setFluids] = useState(true);
  const [isElectricity, setElectricity] = useState(true);
  const [isComputer, setComputer] = useState(true);
  const [isLight, setLight] = useState(true);
  const [isTime, setTime] = useState(true);
  const [isMagnet, setMagnet] = useState(true);

  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);


  const handlePress = (screen) => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-grow`}>
      <View style={tw`flex-1 bg-neutral-950`}>
        <StatusBar barStyle="light-content" />

        {/* Title */}
        {/* <Text style={tw`text-zinc-50 text-3xl ml-4 font-bold bg-current`}>PHYSICS</Text> */}

        {/* Image */}
        <Image
          style={tw` w-100 h-50`}
          source={require('../../assets/Physics2.jpeg')}
        />

        {/* Unit Views */}
        <Text style={tw`border border-slate-100 rounded-2xl mt-2 mt-2 ml-2 mt-2 text-zinc-50 text-xl font-bold p-2 bg-current`}>
          PHYSICS
        </Text>


        {/* Common Dropdown Button */}

        <View style={tw`flex-row items-center mt-5 ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/p1.jpg')}
          />
          <TouchableOpacity
            onPress={() => setDropdownVisible(!isDropdownVisible)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Basic</Text>
            <Icon
              name={isDropdownVisible ? 'chevron-up' : 'chevron-down'}
              size={15}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content for Common */}
        {isDropdownVisible && (
          <View style={tw`bg-grey rounded-lg mt-1 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap `}>
              {solutions.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <View>
                    <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                    <Text style={tw`font-normal mt-2 text-sm text-white`}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Engineering Dropdown Button */}
        <View style={tw`flex-row items-center mt-2 ml-4`}>

          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/p2.jpg')}
          />
          <TouchableOpacity
            onPress={() => setEngineering(!isEngineering)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Engineering</Text>
            <Icon name={isEngineering ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isEngineering && (
          <View style={tw`bg-grey rounded-lg mt-4 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Engineering.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <View>
                    <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                    <Text style={tw`font-normal mt-2 text-sm text-white`}>{item.name}</Text>
                  </View>

                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}


        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center  ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/p3.jpg')}
          />
          <TouchableOpacity
            onPress={() => setFluids(!isFluids)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Fluids</Text>
            <Icon name={isFluids ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isFluids && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg  p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Fluids.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/p4.jpg')}
          />
          <TouchableOpacity
            onPress={() => setElectricity(!isElectricity)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Electricity</Text>
            <Icon name={isElectricity ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isElectricity && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Electricity.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/p11.webp')}
          />
          <TouchableOpacity
            onPress={() => setComputer(!isComputer)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Computer</Text>
            <Icon name={isComputer ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isComputer && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Computer.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-26 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-2 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}


        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/p6.webp')}
          />
          <TouchableOpacity
            onPress={() => setLight(!isLight)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Light</Text>
            <Icon name={isLight ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isLight && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Light.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-4 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}


        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/p7.jpg')}
          />
          <TouchableOpacity
            onPress={() => setTime(!isTime)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Time</Text>
            <Icon name={isTime ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isTime && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Time.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-2 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/p5.jpg')}
          />
          <TouchableOpacity
            onPress={() => setMagnet(!isMagnet)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Magnet</Text>
            <Icon name={isMagnet ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isMagnet && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Magnet.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-4 text-sm text-white`}>{item.name}</Text>
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

export default Home;