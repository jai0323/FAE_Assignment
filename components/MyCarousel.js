import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const MyCarousel = () => {
  const data = [
    { title: 'Item 1',
      img: require('../assets/22.png')
    },
    { title: 'Item 2',
      img: require('../assets/22.png')
    },
    { title: 'Item 3',
      img: require('../assets/22.png')
    },
    // Add more items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => {
    return (
        <View style={styles.item} >

        <ImageBackground style={styles.item}  source={item.img} resizeMode='contain'>
                <Pressable style={styles.shopBtn}>
                    <Text style={styles.shoptxt}>Shop Now</Text>
                </Pressable>
        </ImageBackground>
        </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        loop={true}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    width:"100%",    
  },
  item: {
    borderRadius: 10,
    height: 110,
    width:"100%",
    overflow:'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  paginationContainer: {
    paddingVertical: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: -5,
    backgroundColor: '#4F4F4F',
  },
  inactiveDot: {
    backgroundColor: 'grey',
  },
  shopBtn:{
    backgroundColor:"#855A0B",
    width:80,
    height:25,
    justifyContent:'center',
    alignItems:'center',
    marginTop:60,
    marginLeft:-200,
    borderRadius:13
},
shoptxt:{
    color:"#FFFF",
    fontSize:12,
    fontWeight: '700'
},
});

export default MyCarousel;
