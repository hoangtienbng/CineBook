import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Image } from 'react-native';

const { width } = Dimensions.get('window');

// Dữ liệu mẫu cho slider
const slides = [
  {
    id: '1',
    image: 'https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/b/_/b_n_sao_c_a_980x448.png',
  },
  {
    id: '2',
    image: 'https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_980x448_2.jpg',
  },
  {
    id: '3',
    image: 'https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_10__2.png',
  },
];

const SwipeSlider = () => {
  // State lưu index của slide hiện tại
  const [currentIndex, setCurrentIndex] = useState(0);
  // Tham chiếu đến FlatList để điều khiển nếu cần
  const flatListRef = useRef(null);

  // Hàm xử lý khi người dùng swipe sang slide khác
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  // Cấu hình viewability cho FlatList (slide chiếm >=50% sẽ được tính là đang xem)
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      {/* FlatList hiển thị các slide, cho phép swipe ngang */}
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {/* Ảnh của slide */}
            <Image source={{ uri: item.image }} style={styles.image} />
            {/* Tiêu đề slide */}
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* Dấu chấm chỉ số slide (pagination) */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default SwipeSlider;

// 💅 Style cho slider
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: width, // Chiều rộng mỗi slide bằng chiều rộng màn hình
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  dotActive: {
    backgroundColor: '#007AFF',
  },
  dotInactive: {
    backgroundColor: '#CCC',
  },
});
