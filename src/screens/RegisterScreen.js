import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,

    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../components/CustomInput'; // Đường dẫn đúng của bạn
import CustomButton from '../components/CustomButton'; // Đường dẫn đúng của bạn
import { Ionicons } from '@expo/vector-icons'; // Đảm bảo bạn đã cài đặt @expo/vector-icons
import { SafeAreaView } from 'react-native-safe-area-context'; // Đảm bảo bạn đã cài đặt react-native-safe-area-context
import CustomHeader from '../components/CustomHeader'; // Đường dẫn đúng của bạn

const RegisterScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fcdede' ,height: '100%'}}>

            <LinearGradient
                colors={['#fcdede', '#fcdede']}
                style={{ flex: 1 }}>

                <CustomHeader />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <View style={styles.blockRegister}>
                        <Image
                            source={require('../assets/signup.png')}
                            style={styles.signupImage}
                        />

                        <Text style={styles.title}>Đăng ký</Text>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.contentContainer}
                            style={styles.scrollView}
                            keyboardShouldPersistTaps="handled"
                        >
                            <View style={{ width: '100%' }}>
                                <CustomInput
                                    iconName="person-outline"
                                    placeholder="Họ tên"
                                    value={fullName}
                                    onChangeText={setFullName}
                                    title="Họ tên"
                                />

                                <CustomInput
                                    iconName="mail-outline"
                                    placeholder="Email"
                                    value={email}
                                    onChangeText={setEmail}
                                    title="Email"
                                />

                                <CustomInput
                                    iconName="call-outline"
                                    placeholder="Số điện thoại"
                                    value={phone}
                                    onChangeText={setPhone}
                                    title="Phone"
                                />

                                <CustomInput
                                    title="Mật khẩu"
                                    iconName="lock-closed-outline"
                                    placeholder="Nhập mật khẩu"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                />

                                <CustomInput
                                    title="Xác nhận mật khẩu"
                                    iconName="lock-closed-outline"
                                    placeholder="Nhập lại mật khẩu"
                                    secureTextEntry
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />

                                <CustomButton
                                    title="Đăng ký"
                                    onPress={() => navigation.navigate('Login')}
                                    
                                />

                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </LinearGradient>
        </SafeAreaView>

    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    
    blockRegister: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 80,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    signupImage: {
        position: 'absolute',
        top: -65,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 16,
    },
    scrollView: {
        width: '100%',
    },
    contentContainer: {
        paddingBottom: 30,
    },
    

});
