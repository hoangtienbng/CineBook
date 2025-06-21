import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';

const CustomHeader = ({ onBackPress }) => {

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
        <Icon name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Image
        source={require('../assets/logo_cinebook.png')} // Đường dẫn logo của bạn
        style={styles.logo}
      />
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="person" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    height: 60,
    resizeMode: 'contain',
  },
});

export default CustomHeader;
