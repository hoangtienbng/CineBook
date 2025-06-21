import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader'; // Giả sử bạn có một CustomHeader component
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeSlider from '../components/SwipeSliderComponent'; // Giả sử bạn có một SwipeSlider component

const HomeScreen = ({ navigation }) => {
  const data = [
    { id: '1', title: 'Item 1' },
    
  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SwipeSlider/>}/>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fcdede',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 3,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;