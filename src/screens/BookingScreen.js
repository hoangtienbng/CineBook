import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const BookingScreen = ({ navigation, route }) => {
  // Nhận dữ liệu phim nếu cần: const { movie } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chọn ghế</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* Sơ đồ ghế */}
      <View style={styles.seatMap}>
        {/* Vẽ sơ đồ ghế ở đây, có thể dùng FlatList hoặc map để render các ghế */}
        <Text style={{ color: '#fff', textAlign: 'center' }}>[Sơ đồ ghế demo]</Text>
      </View>

      {/* Chú thích */}
      <View style={styles.legendRow}>
        <View style={[styles.legendBox, { backgroundColor: '#ffe600' }]} />
        <Text style={styles.legendText}>Ghế Vip</Text>
        <View style={[styles.legendBox, { backgroundColor: '#00eaff' }]} />
        <Text style={styles.legendText}>Ghế trống</Text>
        <View style={[styles.legendBox, { backgroundColor: '#ff3b3b' }]} />
        <Text style={styles.legendText}>Ghế đã đặt</Text>
      </View>

      {/* Nút dịch vụ đi kèm và thanh toán */}
      <View style={styles.bottomActions}>
        <TouchableOpacity
  style={styles.serviceBtn}
  onPress={() => navigation.navigate('FoodOrderScreen')}
>
  <Text style={styles.serviceBtnText}>Dịch vụ đi kèm</Text>
</TouchableOpacity>
        <TouchableOpacity
  style={styles.payBtn}
  onPress={() => navigation.navigate('PaymentScreen')}
>
  <Text style={styles.payBtnText}>Thanh toán</Text>
</TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', alignItems: 'center', padding: 16,
  },
  backIcon: {
    fontSize: 28, color: '#222', fontWeight: 'bold',
  },
  headerTitle: {
    flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#222',
  },
  seatMap: {
    backgroundColor: '#23243a', borderRadius: 20, margin: 16, padding: 24, minHeight: 180,
    justifyContent: 'center', alignItems: 'center',
  },
  legendRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
  },
  legendBox: {
    width: 22, height: 22, borderRadius: 6, marginHorizontal: 6,
  },
  legendText: {
    marginRight: 12, color: '#222', fontSize: 14,
  },
  selectBox: {
    backgroundColor: '#23243a', borderRadius: 20, margin: 16, padding: 16,
  },
  selectLabel: {
    color: '#fff', fontWeight: 'bold', fontSize: 16, marginVertical: 8,
  },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8,
  },
  activeBtn: {
    backgroundColor: '#e53935', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 18, marginHorizontal: 2,
  },
  activeBtnText: {
    color: '#fff', fontWeight: 'bold',
  },
  inactiveBtn: {
    backgroundColor: '#444654', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 18, marginHorizontal: 2,
  },
  inactiveBtnText: {
    color: '#fff',
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 32,
  },
  serviceBtn: {
    flex: 1,
    backgroundColor: '#444654',
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: 'center',
    marginRight: 10,
  },
  serviceBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  payBtn: {
    flex: 1,
    backgroundColor: '#e53935',
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: 'center',
    marginLeft: 10,
  },
  payBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BookingScreen;