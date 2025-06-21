import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import MovieDetail from "../screens/MovieDetail";
import BookingScreen from '../screens/BookingScreen.js';
import FoodOrderScreen from '../screens/FoodOrderScreen';
import PaymentScreen from '../screens/PaymentScreen';



// 1. Tạo Bottom Tab Navigator (Thanh điều hướng dưới cùng)
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            // Cấu hình giao diện và icon cho từng tab
            screenOptions={({ route }) => ({
                headerShown: false, // Ẩn header mặc định
                tabBarActiveTintColor: '#4ecdc4', // Màu tab đang chọn
                tabBarLabelStyle: { fontSize: 14 }, // Cỡ chữ tab
                // Đặt icon cho từng tab dựa vào tên
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'Profile') iconName = 'person-outline';
                    else if (route.name === 'Login') iconName = 'log-in-outline';
                    else if (route.name === 'ForgotPassword') iconName = 'key-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            {/* Các màn hình xuất hiện ở thanh tab */}
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Hồ sơ' }} />
            
            {/* Thêm các tab khác nếu muốn */}
        </Tab.Navigator>
    );
}

// 2. Tạo Stack Navigator (điều hướng theo tầng)
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome" // Màn hình đầu tiên khi mở app
            screenOptions={{ headerShown: false }} // Ẩn header mặc định
        >
            {/* Màn hình Welcome xuất hiện đầu tiên */}
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            {/* Khi vào app chính sẽ chuyển sang MainTabs */}
            <Stack.Screen name='MainTabs' component={MainTabs} />
            {/* Các màn hình khác có thể điều hướng tới */}
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
            <Stack.Screen name='MovieDetail' component={MovieDetail} />
            <Stack.Screen name='BookingScreen' component={BookingScreen} options={{ title: 'Chọn ghế' }} />
            <Stack.Screen name="FoodOrderScreen" component={FoodOrderScreen} options={{ title: 'Đặt đồ ăn uống' }} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ title: 'Thanh toán' }} />
        </Stack.Navigator>
    );
};

export default MainNavigator;

