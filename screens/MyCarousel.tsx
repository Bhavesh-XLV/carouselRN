import React from 'react';
import {Text, Dimensions, StyleSheet, View, Image} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

export default function MyCarousel() {
  return (
    <View>
      <SwiperFlatList
        // autoplay
        // autoplayDelay={5}
        // autoplayLoop
        index={1}
        showPagination>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://media.istockphoto.com/photos/sunset-with-orange-clouds-over-the-mountains-picture-id1346481529?b=1&k=20&m=1346481529&s=170667a&w=0&h=hy4buwgrbZQTT1z969wf4bhZfMzcywl0Sp2tOYOgCt8=',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://media.istockphoto.com/photos/beautiful-sky-with-white-clouds-picture-id1324413691?b=1&k=20&m=1324413691&s=170667a&w=0&h=Q3Ts-HNSP_6lx_mU_Qlf5L6sKrFJy9l96GLLjA5_fyE=',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://media.istockphoto.com/photos/flyaway-sunset-disintegrating-storm-clouds-dispersing-at-sunset-picture-id1333863903?b=1&k=20&m=1333863903&s=170667a&w=0&h=tDYTqk2uIsmzSG7ZAyxCV-RRjB0QzDLX1Nd1PJmvbtQ=',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://media.istockphoto.com/photos/saguaro-sunset-silhouette-picture-id1352918375?b=1&k=20&m=1352918375&s=170667a&w=0&h=-heOlAH048PFHGGVbg0Yvqp2CtB7UaHUra2wPGdpDg0=',
            }}
          />
        </View>
      </SwiperFlatList>
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height / 3,
  },
});
