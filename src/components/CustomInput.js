// components/CustomInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomInput = ({
    label,
    iconName,
    placeholder,
    secureTextEntry = false,
    value,
    onChangeText,
    error,
    title
}) => {
    const [hidePassword, setHidePassword] = React.useState(secureTextEntry);
    return (

        <View style={styles.wrapper}>
            {label && <Text style={styles.label}>{label}</Text>}
            {title && <Text style={styles.title}>{title}</Text>}
            <View style={[styles.inputContainer, error && styles.errorBorder]}>
                {iconName && (
                    <Ionicons name={iconName} size={20} color="#666" style={styles.icon} />
                )}
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#aaa"
                    secureTextEntry={hidePassword}
                    value={value}
                    onChangeText={onChangeText}
                />
                {secureTextEntry && ( 
                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                        <Ionicons
                            name={hidePassword ? "eye-off-outline" : "eye-outline"}
                            size={20}
                            color="#666"
                        />
                    </TouchableOpacity>
                )}
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 16,
    },
    label: {
        marginBottom: 6,
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#222',
    },
    errorBorder: {
        borderColor: '#FF5A5F',
    },
    errorText: {
        color: '#FF5A5F',
        marginTop: 4,
        fontSize: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 8,
        color: '#333',
    },
});

export default CustomInput;
