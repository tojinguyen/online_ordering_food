import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/presentation/screens/Auth/LoginScreen';
import {RootStackParamList} from "./src/presentation/type/navigation";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                {/* Thêm các màn hình khác tại đây */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
