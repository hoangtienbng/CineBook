import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from "../components/CustomInput"; // Assuming you have a CustomInput component
import CustomButton from '../components/CustomButton'; // Adjust the import path as necessary
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Ionicons for icons
import CustomCheckbox from '../components/CustomCheckbox'; // Adjust the import path as necessary

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
    return (
        <LinearGradient
            colors={['#45b7d1', '#4ecdc4', '#ff6b6b']}
            style={styles.container}
        >


            <View style={styles.blockLogin}>
                <Image
                    source={require('../assets/end-user.png')}
                    style={{ marginBottom: 20, position: 'absolute', top: -75 }}
                />

                <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32 }}>
                    Đăng nhập
                </Text>

                <CustomInput
                    iconName="mail-outline"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    title={"Email"}
                />

                <CustomInput
                    title={"Mật khẩu"}
                    iconName="lock-closed-outline"
                    placeholder="Nhập mật khẩu"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', fontSize: 16 }}>

                    <CustomCheckbox
                        style={{ width: '80%' }}
                        label="Ghi nhớ đăng nhập"
                        checked={rememberMe}
                        onChange={setRememberMe}
                    />


                    <Text
                        style={{ color: '#FF6B6B', fontSize: 16, marginTop: 7 }}
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        Quên mật khẩu?
                    </Text>
                </View>

                <CustomButton
                    title="Đăng nhập"
                    onPress={() => navigation.navigate('MainTabs')}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 18 }}>
                    <Text style={{ color: '#222' }}>Chưa có tài khoản? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#FF6B6B', fontWeight: 'bold' }} onPress={() => navigation.navigate('Register')}>Đăng ký ngay</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.socialRow}>
                    <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#1877f3' }]}>
                        <Ionicons name="logo-facebook" size={22} color="#fff" style={{ marginRight: 8 }} />
                        <Text style={styles.socialText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee' }]}>
                        <Ionicons name="logo-google" size={22} color="#ea4335" style={{ marginRight: 8 }} />
                        <Text style={[styles.socialText, { color: '#222' }]}>Google</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockLogin: {
        width: '90%',
        height: '65%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    // ...existing code...
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18,
        width: '100%',
    },
    socialBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 18,
        flex: 1,
        marginHorizontal: 4,
        justifyContent: 'center',
        elevation: 2,
    },
    socialText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    // ...existing code...
});

export default LoginScreen;