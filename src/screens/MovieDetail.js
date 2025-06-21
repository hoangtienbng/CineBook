import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MovieDetail = ({ route, navigation }) => {
  const { movie } = route.params;

  // Demo data, bạn có thể lấy từ movie hoặc API
  const detail = {
    date: '20/6/2025',
    duration: '1giờ 51phút',
    likes: 357,
    description: `Sau sự ra đi của cha, Lan (Phương Thanh) về một vùng quê và ở đợ cho nhà ông Danh (Mạc Văn Khoa) – một người đàn ông góa vợ, không con cái. Ngay sau khi bước chân vào căn nhà, Lan phải đối mặt với hàng loạt hiện tượng kỳ dị và những cái chết bí ẩn liên tục xảy ra. Cùng với Sơn (Quốc Trường) – một nhà văn chuyên viết truyện kinh dị, Lan bắt đầu lật mở những bí mật kinh hoàng, khám phá lịch sử đen tối của căn nhà.`,
    censor: 'T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)',
    genre: 'Kinh Dị',
    director: 'Trần Trọng Dân',
    actors: 'Quốc Trường, Mạc Văn Khoa,...',
    language: 'Tiếng Việt - Phụ đề Tiếng Anh'
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Ionicons name="arrow-back" size={26} color="#a30000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Phim</Text>
        <View style={{ width: 32 }} /> 
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image source={{ uri: movie.banner }} style={styles.banner} />
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play-circle" size={54} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Poster nhỏ và tên phim */}
        <View style={styles.posterRow}>
          <Image source={{ uri: movie.banner }} style={styles.posterSmall} />
          <View style={{ flex: 1, marginLeft: 14 }}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.starium}>STARIUM</Text>
          </View>
        </View>

        {/* Info row */}
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Ionicons name="calendar-outline" size={18} color="#a30000" />
            <Text style={styles.infoText}>{detail.date}</Text>
          </View>
          <View style={styles.infoBox}>
            <Ionicons name="time-outline" size={18} color="#a30000" />
            <Text style={styles.infoText}>{detail.duration}</Text>
          </View>
          <View style={styles.infoBox}>
            <Ionicons name="heart-outline" size={18} color="#a30000" />
            <Text style={styles.infoText}>{detail.likes}</Text>
          </View>
          <View style={styles.infoBox}>
            <Ionicons name="share-social-outline" size={18} color="#a30000" />
          </View>
        </View>

        {/* Mô tả */}
        <Text style={styles.description}>{detail.description}</Text>

        {/* Thông tin chi tiết */}
        <View style={styles.detailBox}>
          <Text style={styles.detailLabel}>Kiểm duyệt</Text>
          <Text style={styles.detailValue}>{detail.censor}</Text>
          <Text style={styles.detailLabel}>Thể loại</Text>
          <Text style={styles.detailValue}>{detail.genre}</Text>
          <Text style={styles.detailLabel}>Đạo diễn</Text>
          <Text style={styles.detailValue}>{detail.director}</Text>
          <Text style={styles.detailLabel}>Diễn viên</Text>
          <Text style={styles.detailValue}>{detail.actors}</Text>
          <Text style={styles.detailLabel}>Ngôn ngữ</Text>
          <Text style={styles.detailValue}>{detail.language}</Text>
        </View>
      </ScrollView>

      {/* Nút đặt vé */}
      <TouchableOpacity
  style={styles.bookButton}
  onPress={() => navigation.navigate('BookingScreen', { movie })}
>
  <Text style={styles.bookButtonText}>ĐẶT VÉ</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  headerLeft: {
    width: 32,
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a30000',
  },
  bannerContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  playButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
    left: '45%',
    zIndex: 2,
  },
  posterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: -36, // XÓA hoặc comment dòng này
    marginLeft: 18,
    marginBottom: 8,
  },
  posterSmall: {
    width: 70,
    height: 100,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#eee',
    elevation: 3,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  starium: {
    fontSize: 13,
    color: '#a30000',
    fontWeight: 'bold',
    backgroundColor: '#f5eaea',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 2,
  },
  infoText: {
    marginLeft: 4,
    fontSize: 13,
    color: '#a30000',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    color: '#222',
    marginHorizontal: 16,
    marginBottom: 12,
    textAlign: 'justify',
  },
  detailBox: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    marginHorizontal: 12,
    padding: 12,
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 13,
    color: '#888',
    fontWeight: 'bold',
    marginTop: 8,
  },
  detailValue: {
    fontSize: 14,
    color: '#222',
    marginBottom: 2,
  },
  bookButton: {
    backgroundColor: '#a30000',
    borderRadius: 24,
    margin: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
});

export default MovieDetail;