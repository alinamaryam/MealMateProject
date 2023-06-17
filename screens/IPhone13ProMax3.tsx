import * as React from "react";
    import {Image} from "expo-image";
import {StyleSheet, View, Text, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
    
const IPhone13ProMax3 = () => {
const navigation = useNavigation();

  return (
    <Pressable style={styles.iphone13ProMax3} onPress={() => navigation.navigate("IPhone13ProMax9")}>
      <Image style={[styles.iphone13ProMax3Child, styles.iphone13Layout]} contentFit="cover" source={require("../assets/ellipse-71.png")} />
      <Image style={[styles.iphone13ProMax3Item, styles.iphone13Layout]} contentFit="cover" source={require("../assets/ellipse-41.png")} />
      <LinearGradient style={styles.iphone13ProMax3Inner} locations={[0,1]} colors={['rgba(232, 232, 232, 0.24)','rgba(142, 202, 205, 0.32)']} />
      <Image style={[styles.ellipseIcon, styles.iphone13Layout]} contentFit="cover" source={require("../assets/ellipse-54.png")} />
      <View style={styles.rectangleView} />
      <Text style={[styles.signIn, styles.signFlexBox]}>Sign In</Text>
      <Text style={[styles.eMailOrMobile, styles.passwordTypo]}>E-mail or Mobile Number</Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Pressable style={styles.didntJoinedYetContainer} onPress={() => navigation.navigate("IPhone13ProMax2")}>
        <Text style={styles.text}>
          <Text style={styles.didntJoinedYet}>
            <Text style={styles.didntJoinedYet1}>Didn’t Joined yet?</Text>
              <Text style={styles.text1}>{` `}</Text>
                <Text style={styles.text2}>{` `}</Text>
          </Text>
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </Pressable>
      <Text style={[styles.forgotPassword, styles.signFlexBox]}>Forgot Password?</Text>
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.iphone13ProMax3Child1, styles.lineViewPosition]} />
      <Text style={[styles.signIn1, styles.signFlexBox]}>Sign In</Text>
    </Pressable>);
};

const styles = StyleSheet.create({
  iphone13Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  signFlexBox: {
    textAlign: "left",
    position: "absolute"
  },
  passwordTypo: {
    opacity: 0.6,
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    height: "1.3%",
    textAlign: "left",
    color: Color.black,
    left: "12.85%",
    position: "absolute"
  },
  lineViewPosition: {
    opacity: 0.4,
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: "12.74%",
    right: "14.84%",
    width: "72.41%",
    height: "0.11%",
    position: "absolute"
  },
  iphone13ProMax3Child: {
    height: "13.71%",
    width: "31.54%",
    top: "72.57%",
    right: "66.59%",
    bottom: "13.71%",
    left: "1.87%"
  },
  iphone13ProMax3Item: {
    height: "19.55%",
    width: "42.29%",
    top: "33.05%",
    right: "2.8%",
    bottom: "47.41%",
    left: "54.91%"
  },
  iphone13ProMax3Inner: {
    height: "36.83%",
    width: "87.38%",
    top: "42.87%",
    right: "6.31%",
    bottom: "20.3%",
    left: "6.31%",
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
    position: "absolute"
  },
  ellipseIcon: {
    height: "5.29%",
    width: "11.45%",
    top: "83.59%",
    right: "54.67%",
    bottom: "11.12%",
    left: "33.88%"
  },
  rectangleView: {
    height: "4%",
    marginLeft: -156,
    top: "68.57%",
    bottom: "27.43%",
    left: "50%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.lightseagreen,
    width: 309,
    position: "absolute"
  },
  signIn: {
    height: "3.89%",
    width: "21.03%",
    top: "48.92%",
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.black,
    left: "12.85%",
    textAlign: "left"
  },
  eMailOrMobile: {
    width: "25.47%",
    top: "57.24%"
  },
  password: {
    width: "9.58%",
    top: "62.85%"
  },
  didntJoinedYet1: {
    color: Color.gray_200
  },
  text1: {
    color: Color.gray_100
  },
  text2: {
    color: Color.black
  },
  didntJoinedYet: {
    fontFamily: FontFamily.latoRegular
  },
  signUp: {
    fontWeight: "600",
    fontFamily: FontFamily.latoSemibold,
    color: Color.darkcyan
  },
  text: {
    width: "27.57%",
    fontSize: FontSize.size_3xs,
    height: "1.3%",
    textAlign: "left"
  },
  didntJoinedYetContainer: {
    left: "38.32%",
    top: "73.87%",
    position: "absolute"
  },
  forgotPassword: {
    height: "1.51%",
    width: "21.96%",
    top: "65.01%",
    left: "63.08%",
    fontSize: FontSize.size_xs,
    opacity: 0.9,
    color: Color.darkcyan,
    fontFamily: FontFamily.latoRegular
  },
  lineView: {
    top: "58.69%",
    bottom: "41.2%"
  },
  iphone13ProMax3Child1: {
    top: "64.31%",
    bottom: "35.58%"
  },
  signIn1: {
    top: 638,
    left: 176,
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.latoMedium,
    color: Color.white
  },
  iphone13ProMax3: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 933,
    overflow: "hidden"
  }
});
      
export default IPhone13ProMax3;
