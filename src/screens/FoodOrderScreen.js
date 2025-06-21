import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FoodOrderScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dịch vụ bổ sung</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* Card đồ ăn */}
      <View style={styles.card}>
        <View style={{ flex: 1 }}>
          <Text style={styles.foodName}>Bắp rang bơ</Text>
          <Text style={styles.foodDesc}>Vị mặn, cỡ lớn</Text>
          <Text style={styles.foodPrice}>Giá: 45.000đ</Text>
          <Text style={styles.foodType}>Loại: Đồ ăn</Text>
        </View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' }}
          style={styles.foodImg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  backIcon: {
    fontSize: 28,
    color: '#222',
    fontWeight: 'bold',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    borderRadius: 18,
    margin: 16,
    padding: 18,
    elevation: 2,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 4,
  },
  foodDesc: {
    fontSize: 14,
    color: '#444',
    marginBottom: 2,
  },
  foodPrice: {
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
  },
  foodType: {
    fontSize: 14,
    color: '#222',
  },
  foodImg: {
    width: 70,
    height: 70,
    marginLeft: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
});

export default FoodOrderScreen;