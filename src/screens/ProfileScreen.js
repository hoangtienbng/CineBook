import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    //avatar: require('../assets/avatar.png'), // thay bằng ảnh của bạn
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileBox}>
        <Image source={require('../assets/logo_cinebook.png')} style={styles.avatar} />

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // TODO: Chuyển sang màn hình chỉnh sửa hoặc logout
            console.log('Edit profile hoặc Logout');
          }}
        >
          <Text style={styles.buttonText}>Chỉnh sửa hồ sơ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#e53935' }]}
          onPress={() => {
            // TODO: xử lý đăng xuất
            console.log('Đăng xuất');
          }}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcdede',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBox: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#333',
  },
});
