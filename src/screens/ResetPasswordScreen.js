import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


const ResetPassword = ({ navigation }) => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        // TODO: Xử lý đặt lại mật khẩu
        console.log('Code:', code, 'Password:', password, 'Confirm:', confirmPassword);
    };

    return (
        <LinearGradient
            colors={['#45b7d1', '#4ecdc4', '#ff6b6b']}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={26} color="#222" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Đặt lại mật khẩu</Text>
                    <View style={{ width: 32 }} />
                </View>

                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={styles.wrapper}>
                        <View style={styles.formBox}>
                            <Text style={styles.title}>Đặt lại mật khẩu</Text>
                            <Text style={styles.subtitle}>Nhập mã xác nhận và mật khẩu mới</Text>
                            <Text style={styles.description}>
                                Vui lòng nhập mã xác nhận đã gửi về email và tạo mật khẩu mới cho tài khoản của bạn.
                            </Text>

                            <CustomInput
                                iconName="key-outline"
                                placeholder="Mã xác nhận"
                                value={code}
                                onChangeText={setCode}
                            />
                            <CustomInput
                                iconName="lock-closed-outline"
                                placeholder="Mật khẩu mới"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                            <CustomInput
                                iconName="lock-closed-outline"
                                placeholder="Nhập lại mật khẩu"
                                secureTextEntry
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />

                            <CustomButton
                                title="Đặt lại mật khẩu"
                                onPress={handleResetPassword}
                                style={styles.button}
                            />

                            <TouchableOpacity
                                style={styles.resetLink}
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text style={styles.resetText}>Quay lại đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    header: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderBottomWidth: 0,
        elevation: 0,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        letterSpacing: 0.5,
    },
    backButton: {
        padding: 6,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    formBox: {
        width: '100%',
        maxWidth: 370,
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 22,
        padding: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 6,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#222',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#4ecdc4',
        marginBottom: 6,
        textAlign: 'center',
        fontWeight: '600',
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginBottom: 22,
    },
    button: {
        marginTop: 18,
        width: '100%',
        borderRadius: 14,
    },
    resetLink: {
        marginTop: 18,
    },
    resetText: {
        color: '#45b7d1',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default ResetPassword;