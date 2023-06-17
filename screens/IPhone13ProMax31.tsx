import React, { useState, useCallback } from 'react';
    import {Image} from "expo-image";
import {StyleSheet, Pressable, View, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent from "../components/FrameComponent";
import {useNavigation} from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax31 = () => {
const [sliderIconVisible, setSliderIconVisible] = useState(false);
const navigation = useNavigation();

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax31}>
      <Image style={styles.decorationConfettiIcon} contentFit="cover" source={require("../assets/decoration-confetti.png")} />
      <Image style={[styles.doorbellIcon, styles.doorbellIconPosition]} contentFit="cover" source={require("../assets/doorbell.png")} />
      <Pressable style={styles.slider} onPress={openSliderIcon}>
        <Image style={styles.icon} contentFit="cover" source={require("../assets/slider.png")} />
      </Pressable>
      <Image style={styles.maskGroupIcon} contentFit="cover" source={require("../assets/mask-group4.png")} />
      <Image style={styles.iphone13ProMax31Child} contentFit="cover" source={require("../assets/ellipse-12.png")} />
      <LinearGradient style={[styles.iphone13ProMax31Item, styles.doorbellIconPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Text style={[styles.zainebHasAttempted, styles.textFlexBox]}>Zaineb has attempted 20 workouts this week.</Text>
      <Text style={[styles.congratulations, styles.textFlexBox]}>Congratulations!</Text>
      <Image style={styles.confettiIcon} contentFit="cover" source={require("../assets/confetti.png")} />
      <Image style={styles.goldTrophyInAir} contentFit="cover" source={require("../assets/gold-trophy-in-air.png")} />
      <Text style={[styles.shareOn, styles.textFlexBox]}>Share on</Text>
      <Image style={[styles.facebookIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/facebook.png")} />
      <Image style={[styles.instagramIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/instagram.png")} />
      <Image style={styles.linkIcon} contentFit="cover" source={require("../assets/link.png")} />
      <Pressable style={[styles.ellipseParent, styles.groupChildLayout]} onPress={() => navigation.navigate("IPhone13ProMax32")}>
        <Image style={[styles.groupChild, styles.groupChildLayout]} contentFit="cover" source={require("../assets/ellipse-13.png")} />
        <Text style={[styles.text, styles.textFlexBox]}>2</Text>
      </Pressable>
    </View>

            <Modal animationType="fade" transparent visible={sliderIconVisible}>
              <View style={styles.sliderIconOverlay}>
                
<Pressable style={styles.sliderIconBg} onPress={closeSliderIcon} />
<FrameComponent onClose={closeSliderIcon} />
              </View>
            </Modal></>);
};

const styles = StyleSheet.create({
  doorbellIconPosition: {
    right: "7.01%",
    position: "absolute"
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute"
  },
  iconLayout: {
    height: 22,
    width: 21,
    top: 833,
    position: "absolute"
  },
  groupChildLayout: {
    width: 10,
    position: "absolute"
  },
  decorationConfettiIcon: {
    top: 23,
    width: 428,
    height: 484,
    left: 0,
    position: "absolute"
  },
  doorbellIcon: {
    height: "3.46%",
    width: "7.48%",
    top: "4.43%",
    bottom: "92.12%",
    left: "85.51%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden"
  },
  sliderIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)"
  },
  sliderIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0
  },
  icon: {
    height: "100%",
    width: "100%"
  },
  slider: {
    left: 30,
    width: 32,
    height: 32,
    top: 41,
    position: "absolute"
  },
  maskGroupIcon: {
    top: 130,
    left: 73,
    width: 281,
    height: 281,
    position: "absolute"
  },
  iphone13ProMax31Child: {
    top: 118,
    left: 62,
    width: 304,
    height: 304,
    position: "absolute"
  },
  iphone13ProMax31Item: {
    height: "36.93%",
    width: "82.94%",
    top: "57.34%",
    bottom: "5.72%",
    left: "10.05%",
    borderRadius: Border.br_xl,
    backgroundColor: "transparent"
  },
  zainebHasAttempted: {
    height: "8.42%",
    width: "59.35%",
    top: "61.56%",
    left: "21.96%",
    fontSize: 23,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular
  },
  congratulations: {
    height: "4.75%",
    width: "60.98%",
    top: "48.49%",
    left: "24.53%",
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.black,
    textAlign: "left"
  },
  confettiIcon: {
    top: 603,
    left: 221,
    width: 155,
    height: 255,
    position: "absolute"
  },
  goldTrophyInAir: {
    top: 629,
    left: 38,
    width: 225,
    height: 244,
    position: "absolute"
  },
  shareOn: {
    height: "2.38%",
    width: "21.96%",
    top: "88.34%",
    left: "70.09%",
    fontSize: 11,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular
  },
  facebookIcon: {
    left: 320
  },
  instagramIcon: {
    left: 343
  },
  linkIcon: {
    top: 835,
    left: 300,
    width: 18,
    height: 18,
    position: "absolute"
  },
  groupChild: {
    top: 1,
    height: 10,
    left: 0
  },
  text: {
    height: "63.13%",
    width: "47.22%",
    top: "0%",
    left: "30%",
    fontSize: 9,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    color: Color.white
  },
  ellipseParent: {
    left: 384,
    height: 11,
    top: 41
  },
  iphone13ProMax31: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax31;
