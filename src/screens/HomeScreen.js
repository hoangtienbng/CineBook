import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeSlider from '../components/SwipeSliderComponent';

const nowShowing = [
  { id: '1', title: 'ÚT LAN: OÁN LINH GIỮ CỦA', banner: 'https://boxofficevietnam.com/wp-content/uploads/2025/06/684701a026f4b224948393.jpg' },
  { id: '2', title: 'BÍ KIẾP LUYỆN RỒNG', banner: 'https://vimages.coccoc.com/vimage?ns=cinema&url=https%3A%2F%2Figuov8nhvyobj.vcdn.cloud%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2Fc5f0a1eff4c394a251036189ccddaacd%2Fh%2Fd%2Fhdg_payoff_470x700.jpg' },
  { id: '3', title: 'Frozen II', banner: 'https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_II_%282019_animated_film%29.jpg' },
  { id: '4', title: 'BREAKING BAD', banner: 'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg' },
];

const comingSoon = [
  { id: '5', title: 'KONOSUBA 3', banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_vR3CQXvfuhhdxY1e8AmPOP0FRaj5nbKIQ&s' },
  { id: '6', title: 'AKAME GA KILL', banner: 'https://m.media-amazon.com/images/M/MV5BYTQyZGQzMmUtNjcwMy00ZThiLWFmMzMtOTA0NTI3OWE0MTU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
];

const specialShow = [
  { id: '9', title: 'CONAN MOVIE 28: DƯ ẢNH CỦA ĐỘC NHÃN', banner: 'https://ss-images.saostar.vn/wp700/2025/4/22/pc/1745309595981/mm1d0dfyg61-gua4klkr232-r8bp070cco3.jpg' },
  { id: '10', title: 'THE AMAZING WORLD OF GUMBAl ', banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXiySxAoLYczLxCEEWl07fYNPs4bJH9O2ElQ&s' },
];

const TAB_LIST = [
  { key: 'now', label: 'Đang chiếu' },
  { key: 'soon', label: 'Sắp chiếu' },
  { key: 'special', label: 'Suất đặc biệt' },
];

const HomeScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('now');

  let movies = nowShowing;
  if (selectedTab === 'soon') movies = comingSoon;
  if (selectedTab === 'special') movies = specialShow;

  const renderMovieItem = ({ item }) => (
  <TouchableOpacity
    style={styles.movieItem}
    activeOpacity={0.8}
    onPress={() => {
      navigation.navigate('MovieDetail', { movie: item });
    }}
  >
    <Image source={{ uri: item.banner }} style={styles.banner} resizeMode="cover" />
    <Text style={styles.movieTitle} numberOfLines={2}>{item.title}</Text>
    <TouchableOpacity
      style={styles.buyButton}
      onPress={() => {
        navigation.navigate('MovieDetail', { movie: item });
      }}
    >
      <Text style={styles.buyButtonText}>Mua vé</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader />
      <View style={styles.sliderContainer}>
        <SwipeSlider />
      </View>
      <View style={styles.tabContainer}>
        {TAB_LIST.map(tab => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabButton,
              selectedTab === tab.key && styles.tabButtonActive
            ]}
            onPress={() => setSelectedTab(tab.key)}
          >
            <Text style={[
              styles.tabText,
              selectedTab === tab.key && styles.tabTextActive
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderMovieItem}
        numColumns={2}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 32, color: '#888' }}>Không có phim nào.</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 270,
    marginBottom: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 16,
    elevation: 2,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#e71a0f',
  },
  tabText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#888',
  },
  tabTextActive: {
    color: '#fff',
  },
  grid: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  movieItem: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    paddingBottom: 12,
  },
  banner: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 8,
  },
  movieTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
    minHeight: 40,
  },
  buyButton: {
    backgroundColor: '#e71a0f',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 28,
    alignSelf: 'center',
    marginTop: 4,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
});

export default HomeScreen;