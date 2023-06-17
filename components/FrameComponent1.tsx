import * as React from "react";
    import {View, StyleSheet, Text, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
    

type FrameComponent1Type = {
  onClose?: () => void;
}

const FrameComponent1 = ({ onClose } : FrameComponent1Type) => {
const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.frameItemLayout]}>
      <LinearGradient style={[styles.frameChild, styles.frameChildLayout]} locations={[0,1]} colors={['rgba(16, 242, 255, 0.1)','rgba(81, 232, 241, 0.19)']} />
      <Pressable style={[styles.dashboard, styles.logoutPosition]} onPress={() => navigation.navigate("IPhone13ProMax4")}>
        <Text style={[styles.dashboard1, styles.profileTypo]}>Dashboard</Text>
      </Pressable>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      <Pressable style={[styles.rewards, styles.logoutPosition]} onPress={() => navigation.navigate("IPhone13ProMax31")}>
        <Text style={[styles.rewards1, styles.profileTypo]}>Rewards</Text>
      </Pressable>
      <Pressable style={[styles.logout, styles.logoutPosition]} onPress={() => navigation.navigate("IPhone13ProMax2")}>
        <Text style={[styles.rewards1, styles.profileTypo]}>Logout</Text>
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
  profileTypo: {
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
    top: "38.14%",
    width: "57.51%",
    color: Color.black,
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    height: "8.59%",
    left: "15.03%",
    position: "absolute"
  },
  rewards1: {
    width: "70.98%",
    color: Color.black,
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    height: "8.59%"
  },
  rewards: {
    top: "53.95%"
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
      
export default FrameComponent1;
