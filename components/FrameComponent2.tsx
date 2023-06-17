import * as React from "react";
    import {View, StyleSheet, Text, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
    

type FrameComponent2Type = {
  onClose?: () => void;
}

const FrameComponent2 = ({ onClose } : FrameComponent2Type) => {
const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.frameItemLayout]}>
      <LinearGradient style={[styles.frameChild, styles.frameChildLayout]} locations={[0,1]} colors={['rgba(16, 242, 255, 0.1)','rgba(81, 232, 241, 0.19)']} />
      <Pressable style={[styles.dashboard, styles.logoutPosition]} onPress={() => navigation.navigate("IPhone13ProMax4")}>
        <Text style={styles.dashboard1}>Dashboard</Text>
      </Pressable>
      <Pressable style={[styles.profile, styles.logoutPosition]} onPress={() => navigation.navigate("IPhone13ProMax30")}>
        <Text style={styles.dashboard1}>Profile</Text>
      </Pressable>
      <Text style={[styles.rewards, styles.rewardsTypo]}>Rewards</Text>
      <Pressable style={[styles.logout, styles.logoutPosition]} onPress={() => navigation.navigate("IPhone13ProMax2")}>
        <Text style={styles.rewardsTypo}>Logout</Text>
      </Pressable>
      <Image style={[styles.frameItem, styles.frameItemLayout]} contentFit="cover" source={require("../assets/ellipse-52.png")} />
      <Image style={styles.sliderIcon} contentFit="cover" source={require("../assets/slider.png")} />
    </View>);
};

const styles = StyleSheet.create({
  frameItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  frameChildLayout: {
    height: 291,
    width: 193
  },
  logoutPosition: {
    left: "15.03%",
    position: "absolute"
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
    backgroundColor: "transparent",
    position: "absolute"
  },
  dashboard1: {
    width: "57.51%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    height: "8.59%"
  },
  dashboard: {
    top: "22.34%"
  },
  profile: {
    top: "38.14%"
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
    top: "26.12%",
    right: "86.53%",
    bottom: "71.82%",
    left: "10.36%",
    position: "absolute"
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
    height: 291,
    width: 193
  }
});
      
export default FrameComponent2;
