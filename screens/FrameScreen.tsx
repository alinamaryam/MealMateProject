import * as React from "react";
    import {StyleSheet, View, Text, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
    
const FrameScreen = () => {
const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <LinearGradient style={styles.frameChild} locations={[0,1]} colors={['rgba(16, 242, 255, 0.1)','rgba(81, 232, 241, 0.19)']} />
      <Pressable style={[styles.dashboard, styles.logoutPosition]} onPress={() => navigation.navigate("IPhone13ProMax4")}>
        <Text style={styles.profileTypo}>Dashboard</Text>
      </Pressable>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      <Text style={[styles.rewards, styles.rewardsTypo]}>Rewards</Text>
      <Pressable style={[styles.logout, styles.logoutPosition]} onPress={() => navigation.navigate("IPhone13ProMax2")}>
        <Text style={styles.rewardsTypo}>Logout</Text>
      </Pressable>
      <Image style={styles.frameItem} contentFit="cover" source={require("../assets/ellipse-52.png")} />
      <Image style={styles.sliderIcon} contentFit="cover" source={require("../assets/slider.png")} />
    </View>);
};

const styles = StyleSheet.create({
  logoutPosition: {
    left: "15.03%",
    position: "absolute"
  },
  profileTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    width: "57.51%",
    height: "8.59%"
  },
  rewardsTypo: {
    width: "70.98%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    height: "8.59%"
  },
  frameChild: {
    top: 0,
    left: 0,
    width: 193,
    backgroundColor: "transparent",
    position: "absolute",
    height: 291
  },
  dashboard: {
    top: "22.34%"
  },
  profile: {
    top: "38.14%",
    left: "15.03%",
    position: "absolute"
  },
  rewards: {
    top: "53.95%",
    left: "15.03%",
    position: "absolute"
  },
  logout: {
    top: "69.76%"
  },
  frameItem: {
    height: "2.06%",
    width: "3.11%",
    top: "42.27%",
    right: "86.53%",
    bottom: "55.67%",
    left: "10.36%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  sliderIcon: {
    top: 17,
    left: 20,
    width: 32,
    height: 32,
    position: "absolute"
  },
  rectangleParent: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 291
  }
});
      
export default FrameScreen;
