import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Pantallas
import ImageScreen from './screens/ImageScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Image" 
          options={{tabBarIcon: ({color, size}) => (
            <Ionicons name="images-outline" size={size} color={color} />
          )}}
          component={ImageScreen} 
        />
        <Tab.Screen 
          name="Options"
          options={{tabBarIcon: ({color, size}) => (
            <Ionicons name="options-outline" size={size} color={color} />
          )}} 
          component={OptionsScreen} 
        />
        <Tab.Screen 
          name="Quiz" 
          options={{tabBarIcon: ({color, size}) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          )}}
          component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}