import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons';

import OnboardingScreen from './components/Onboarding';
import LoginScreen from './pages/Login';
import HomeScreen from './pages/Home';
import PerfilScreen from './pages/Perfil';
import HistoryScreen from './pages/History';
import CameraScreen from './pages/Camera';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#39ADCC',
        inactiveTintColor: '#cccc',
        showLabel: false,
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={"#536162"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color }) => (
            <Ionicons name="camera-outline" color={"#536162"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-outline" color={"#536162"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={"#536162"} size={25} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffaaa7',
          },
          headerTintColor: '#EDF1F3',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default StackScreen;