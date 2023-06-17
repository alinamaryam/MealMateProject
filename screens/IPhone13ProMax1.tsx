import * as React from "react";
    import {Image} from "expo-image";
import {StyleSheet, Text, View} from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
    
const IPhone13ProMax1 = () => {

  return (
    <View style={styles.iphone13ProMax1}>
      <Image style={styles.image1Icon} contentFit="cover" source={require("../assets/image-1.png")} />
      <Text style={styles.mealMate}>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.mealMate1}>
            <Text style={styles.m}>M</Text>
          <Text style={styles.ealMate}>EAL MATE</Text>
        </Text>
      </Text>
    </View>);
};

const styles = StyleSheet.create({
  image1Icon: {
    top: 270,
    left: 20,
    width: 389,
    height: 397,
    position: "absolute"
  },
  text: {
    fontSize: FontSize.size_13xl,
    color: Color.black
  },
  m: {
    color: Color.darkturquoise_100
  },
  ealMate: {
    color: Color.darkturquoise_200
  },
  mealMate1: {
    fontSize: FontSize.size_29xl
  },
  mealMate: {
    top: 107,
    left: 66,
    fontWeight: "500",
    fontFamily: FontFamily.latoMedium,
    textAlign: "left",
    width: 279,
    height: 48,
    position: "absolute"
  },
  iphone13ProMax1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 933,
    overflow: "hidden"
  }
});
      
export default IPhone13ProMax1;
