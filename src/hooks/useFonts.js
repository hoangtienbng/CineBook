import React from 'react';
import * as Font from 'expo-font';

     export const useFonts = () => {
       // Định nghĩa các font cần tải
       const [fontsLoaded, setFontsLoaded] = React.useState(false);

       React.useEffect(() => {
         async function loadFonts() {
           await Font.loadAsync({
             'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
           });
           setFontsLoaded(true);
         }
         loadFonts();
       }, []);

       return fontsLoaded; // Trả về trạng thái font đã tải xong
     };