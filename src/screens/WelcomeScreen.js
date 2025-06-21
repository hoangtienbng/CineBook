import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image, Animated, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '../hooks/useFonts'; // Import hook để tải font chữ

// Lấy kích thước màn hình để sử dụng trong layout
const { width, height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
    const fontLoaded = useFonts(); // Sử dụng hook để tải font chữ

    // Các giá trị Animated để điều khiển hiệu ứng
    const logoOpacity = useRef(new Animated.Value(0)).current; // Độ trong suốt của logo (bắt đầu từ 0)
    const logoScale = useRef(new Animated.Value(0.5)).current; // Kích thước logo (bắt đầu từ 0.5x)
    // Các giá trị Animated cho poster1 và poster2
    const poster1Opacity = useRef(new Animated.Value(0)).current; // Độ trong suốt của poster1 (bắt đầu từ 0)
    const poster1TranslateY = useRef(new Animated.Value(100)).current; // Vị trí poster1 (bắt đầu từ 100px dưới)
    const poster2Opacity = useRef(new Animated.Value(0)).current; // Độ trong suốt của poster2 (bắt đầu từ 0)
    const poster2TranslateY = useRef(new Animated.Value(100)).current; // Vị trí poster2 (bắt đầu từ 100px dưới)
    const poster3Opacity = useRef(new Animated.Value(0)).current; // Độ trong suốt của poster2 (bắt đầu từ 0)
    const poster3TranslateY = useRef(new Animated.Value(100)).current; // Vị trí poster2 (bắt đầu từ 100px dưới)

    // Hàm khởi tạo hiệu ứng khi component được mount
    useEffect(() => {
        if (fontLoaded) {
            // Chạy sequence animation khi component được mount
            Animated.sequence([


                Animated.parallel([
                    Animated.timing(logoOpacity, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),

                    Animated.timing(logoScale, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ]),

                Animated.parallel([
                    Animated.timing(poster1Opacity, {
                        toValue: 1,
                        duration: 800,
                        useNativeDriver: true,
                    }),

                    Animated.timing(poster1TranslateY, {
                        toValue: 0,
                        duration: 700,
                        useNativeDriver: true,
                    })
                ]),

                Animated.parallel([
                    Animated.timing(poster2Opacity, {
                        toValue: 1,
                        duration: 800,
                        useNativeDriver: true,
                    }),

                    Animated.timing(poster2TranslateY, {
                        toValue: 0,
                        duration: 800,
                        useNativeDriver: true,
                    })
                ]),

                Animated.parallel([
                    Animated.timing(poster3Opacity, {
                        toValue: 1,
                        duration: 800,
                        useNativeDriver: true,
                    }),

                    Animated.timing(poster3TranslateY, {
                        toValue: 0,
                        duration: 900,
                        useNativeDriver: true,
                    })
                ]),
                // Hiệu ứng delay để giữ logo và poster trong 2 giây thôi Hiệp heo
                Animated.delay(2000),
            ]).start(() => {
                navigation.replace("Login"); // Điều hướng đến HomeScreen sau khi hoàn thành hiệu ứng
            });
        }
    }, [fontLoaded, navigation]); // Chạy effect khi navigation thay đổi

    return (
        // Sử dụng LinearGradient để tạo nền gradient đẹp mắt
        <LinearGradient
            colors={['#4ecdc4', '#ff6b6b', '#45b7d1']}
            style={styles.container}>

            {/* Container cho logo và text chào mừng với animation */}
            <Animated.View

                style={[
                    styles.logoContainer,
                    {
                        opacity: logoOpacity, // Độ trong suốt của logo
                        transform: [{ scale: logoScale }], // Kích thước của logo
                    },
                ]}
            >


                <Image
                    source={require('../assets/logo_cinebook.png')} // Nguồn logo từ assets
                    style={styles.logo} // Kích thước logo
                    resizeMode="contain" // Điều chỉnh ảnh để vừa khung 
                />

                <View style={styles.posterContainer}>
                    <Animated.Image

                        source={{ uri: 'https://static.nutscdn.com/vimg/300-0/4aeaea1cb315df3fe12b29639399ad89.jpg' }} // Nguồn poster 1
                        style={[
                            styles.poster, // Style cơ bản
                            {
                                opacity: poster1Opacity, // Áp dụng animation opacity
                                transform: [{ translateY: poster1TranslateY }], // Áp dụng animation trượt lên
                            },
                        ]}
                        resizeMode="cover" // Đảm bảo poster phủ kín khung
                    />

                    <Animated.Image
                        source={{ uri: 'https://static.nutscdn.com/vimg/300-0/3e26ff121c19b543e13a4a16608e5ac4.jpg' }}
                        style={[
                            styles.poster,
                            {
                                opacity: poster2Opacity,
                                transform: [{ translateY: poster2TranslateY }],
                            },
                        ]}
                        resizeMode="cover"
                    />

                    <Animated.Image
                        source={{ uri: 'https://static.nutscdn.com/vimg/300-0/0d4e7c499e56e0a3bb5f54795a16ab33.jpg' }}
                        style={[
                            styles.poster,
                            {
                                opacity: poster2Opacity,
                                transform: [{ translateY: poster2TranslateY }],
                            },
                        ]}
                        resizeMode="cover"
                    />
                </View>
            </Animated.View>
        </LinearGradient >
    );

}

// Định nghĩa các style cho component
const styles = StyleSheet.create({
    container: {
        flex: 1, // Chiếm toàn bộ màn hình
        justifyContent: 'center', // Căn giữa theo chiều dọc
        alignItems: 'center', // Căn giữa theo chiều ngang
    },
    logoContainer: {
        alignItems: 'center', // Căn giữa nội dung trong container
        marginBottom: 40, // Khoảng cách dưới logo
    },
    logo: {
        width: width * 0.5, // Chiều rộng 50% màn hình
        height: width * 0.5, // Chiều cao 50% màn hình
    },
    welcomeText: {
        fontSize: 24, // Kích thước chữ
        fontWeight: 'bold', // Chữ đậm
        color: '#fff', // Màu trắng
        marginTop: 20, // Khoảng cách trên
    },
    posterContainer: {
        flexDirection: 'row', // Sắp xếp poster theo hàng ngang
        justifyContent: 'space-around', // Phân bố đều khoảng cách
        width: '100%', // Chiều rộng 100%
        paddingHorizontal: 20, // Padding ngang
        marginTop: 32, // Khoảng cách trên
    },
    poster: {
        width: width * 0.25, // Chiều rộng 25% màn hình
        height: height * 0.35, // Chiều cao 35% màn hình
        borderRadius: 10, // Bo góc
    },
    text: {
        fontFamily: 'Poppins-ExtraBold', // Sử dụng font chữ đã tải
        fontSize: 24, // Kích thước chữ
    }
});

export default WelcomeScreen;