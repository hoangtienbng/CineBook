import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('vnpay');
  const [coupon, setCoupon] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* Movie Info */}
      <View style={styles.movieCard}>
        <Image
          source={{ uri: 'https://cinestar.com.vn/pictures/Cinestar/09-2024/cam-vn.jpg' }}
          style={styles.movieImg}
        />
        <View style={{ flex: 1, marginLeft: 16 }}>
         
        </View>
      </View>

      {/* Thanh toán */}
      <Text style={styles.sectionTitle}>Thanh toán</Text>
      <View style={styles.payBox}>
        <TouchableOpacity
          style={styles.payRow}
          onPress={() => setSelected('vnpay')}
        >
          <Image
            source={{ uri: 'https://seeklogo.com/images/V/vnpay-logo-2B6B7B6B3C-seeklogo.com.png' }}
            style={styles.payLogo}
          />
          <Text style={styles.payName}>VN Pay</Text>
          <View style={selected === 'vnpay' ? styles.checkBoxActive : styles.checkBox} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.payRow}
          onPress={() => setSelected('zalopay')}
        >
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/vi/thumb/3/3a/ZaloPay_logo.svg/2560px-ZaloPay_logo.svg.png' }}
            style={styles.payLogo}
          />
          <Text style={styles.payName}>Zalo Pay</Text>
          <View style={selected === 'zalopay' ? styles.checkBoxActive : styles.checkBox} />
        </TouchableOpacity>
      </View>

      {/* Mã giảm giá */}
      <View style={styles.couponBox}>
        <TextInput
          style={styles.couponInput}
          placeholder="Mã giảm giá (Nếu có)"
          placeholderTextColor="#bbb"
          value={coupon}
          onChangeText={setCoupon}
        />
      </View>

      {/* Thanh toán */}
      <TouchableOpacity style={styles.payBtn}>
        <Text style={styles.payBtnText}>Thanh toán</Text>
      </TouchableOpacity>
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
  movieCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#23243a',
    borderRadius: 24,
    margin: 16,
    padding: 16,
  },
  movieImg: {
    width: 80,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  movieGenre: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 2,
  },
  moviePlace: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 2,
  },
  movieDate: {
    fontSize: 14,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginLeft: 24,
    marginTop: 8,
    marginBottom: 8,
  },
  payBox: {
    backgroundColor: '#23243a',
    borderRadius: 20,
    marginHorizontal: 16,
    padding: 12,
    marginBottom: 16,
  },
  payRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#353657',
  },
  payLogo: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginRight: 12,
  },
  payName: {
    flex: 1,
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  checkBox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#888',
    marginRight: 8,
    backgroundColor: '#23243a',
  },
  checkBoxActive: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#e53935',
    marginRight: 8,
    backgroundColor: '#e53935',
  },
  couponBox: {
    backgroundColor: '#23243a',
    borderRadius: 14,
    marginHorizontal: 16,
    padding: 16,
    marginBottom: 18,
    alignItems: 'center',
  },
  couponInput: {
    color: '#fff',
    fontSize: 16,
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: 'transparent',
  },
  payBtn: {
    backgroundColor: '#e53935',
    borderRadius: 18,
    marginHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  payBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PaymentScreen;
