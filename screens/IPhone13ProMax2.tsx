import * as React from "react";
    import {Image} from "expo-image";
import {StyleSheet, View, Text, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
    
const IPhone13ProMax2 = () => {
const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax2}>
      <Image style={[styles.iphone13ProMax2Child, styles.iphone13Layout]} contentFit="cover" source={require("../assets/ellipse-42.png")} />
      <Image style={[styles.iphone13ProMax2Item, styles.iphone13Layout]} contentFit="cover" source={require("../assets/ellipse-72.png")} />
      <LinearGradient style={styles.iphone13ProMax2Inner} locations={[0,1]} colors={['rgba(232, 232, 232, 0.32)','rgba(142, 202, 205, 0.24)']} />
      <Image style={[styles.ellipseIcon, styles.iphone13Layout]} contentFit="cover" source={require("../assets/ellipse-55.png")} />
      <View style={styles.rectangleView} />
      <Text style={[styles.signUp, styles.signUpFlexBox]}>Sign Up</Text>
      <Text style={[styles.fullName, styles.fullNameTypo]}>Full Name</Text>
      <Text style={[styles.eMailOrMobile, styles.fullNameTypo]}>E-mail or Mobile Number</Text>
      <Pressable style={styles.joinedUsBeforeContainer} onPress={() => navigation.navigate("IPhone13ProMax3")}>
        <Text style={styles.text}>
          <Text style={styles.joinedUsBefore}>
            <Text style={styles.joinedUsBefore1}>Joined us before?</Text>
              <Text style={styles.text1}>{` `}</Text>
                <Text style={styles.text2}>{` `}</Text>
          </Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      <Text style={[styles.bySigningUpContainer, styles.signUpFlexBox]}>
        <Text style={styles.joinedUsBefore1}>By Signing up, You’re agree to our</Text>
        <Text style={styles.text2}>{` `}</Text>
        <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
        <Text style={styles.text2}>{` 
`}</Text>
        <Text style={styles.joinedUsBefore1}>and</Text>
        <Text style={styles.text2}>{` `}</Text>
        <Text style={styles.termsConditions}>Privacy Policy</Text>
      </Text>
      <Text style={[styles.password, styles.fullNameTypo]}>Password</Text>
      <View style={[styles.lineView, styles.iphone13ChildPosition]} />
      <View style={[styles.iphone13ProMax2Child1, styles.iphone13ChildPosition]} />
      <View style={[styles.iphone13ProMax2Child2, styles.iphone13ChildPosition]} />
      <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      <Text style={[styles.mealMate, styles.continueTypo]}>
        <Text style={styles.text6}>{` `}</Text>
        <Text style={styles.mealMate1}>
            <Text style={styles.m}>M</Text>
          <Text style={styles.ealMate}>EAL MATE</Text>
        </Text>
      </Text>
    </View>);
};

const styles = StyleSheet.create({
  iphone13Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  signUpFlexBox: {
    textAlign: "left",
    position: "absolute"
  },
  fullNameTypo: {
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
  iphone13ChildPosition: {
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
  continueTypo: {
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute"
  },
  iphone13ProMax2Child: {
    height: "19.55%",
    width: "42.29%",
    right: "3.04%",
    bottom: "47.84%",
    left: "54.67%",
    top: "32.61%",
    maxWidth: "100%"
  },
  iphone13ProMax2Item: {
    height: "13.71%",
    width: "31.54%",
    top: "81.64%",
    right: "65.89%",
    bottom: "4.64%",
    left: "2.57%"
  },
  iphone13ProMax2Inner: {
    height: "46%",
    width: "87.38%",
    top: "42.87%",
    right: "6.31%",
    bottom: "11.12%",
    left: "6.31%",
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
    position: "absolute"
  },
  ellipseIcon: {
    height: "5.29%",
    width: "11.45%",
    right: "45.33%",
    bottom: "62.1%",
    left: "43.22%",
    top: "32.61%",
    maxWidth: "100%"
  },
  rectangleView: {
    height: "4%",
    marginLeft: -156,
    top: "78.19%",
    bottom: "17.82%",
    left: "50%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.lightseagreen,
    width: 309,
    position: "absolute"
  },
  signUp: {
    height: "3.89%",
    width: "24.07%",
    top: "48.92%",
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.black,
    left: "12.85%",
    textAlign: "left"
  },
  fullName: {
    width: "10.28%",
    top: "57.24%"
  },
  eMailOrMobile: {
    width: "25.47%",
    top: "62.85%"
  },
  joinedUsBefore1: {
    color: Color.gray_200
  },
  text1: {
    color: Color.gray_100
  },
  text2: {
    color: Color.black
  },
  joinedUsBefore: {
    fontFamily: FontFamily.latoRegular
  },
  signIn: {
    fontWeight: "600",
    fontFamily: FontFamily.latoSemibold,
    color: Color.darkcyan
  },
  text: {
    width: "26.17%",
    fontSize: FontSize.size_3xs,
    height: "1.3%",
    textAlign: "left"
  },
  joinedUsBeforeContainer: {
    left: "38.32%",
    top: "83.26%",
    position: "absolute"
  },
  termsConditions: {
    color: Color.darkcyan
  },
  bySigningUpContainer: {
    height: "3.02%",
    width: "66.82%",
    top: "72.57%",
    left: "15.19%",
    fontSize: FontSize.size_xs,
    opacity: 0.9,
    fontFamily: FontFamily.latoRegular
  },
  password: {
    width: "9.58%",
    top: "68.68%"
  },
  lineView: {
    top: "58.69%",
    bottom: "41.2%"
  },
  iphone13ProMax2Child1: {
    top: "64.31%",
    bottom: "35.58%"
  },
  iphone13ProMax2Child2: {
    top: "70.14%",
    bottom: "29.75%"
  },
  continue: {
    top: 727,
    left: 161,
    fontSize: FontSize.size_6xl,
    color: Color.white
  },
  text6: {
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
    top: 118,
    left: 70,
    width: 279,
    height: 48
  },
  iphone13ProMax2: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 933,
    overflow: "hidden"
  }
});
      
export default IPhone13ProMax2;
