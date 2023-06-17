import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Text, Pressable, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import FrameComponent1 from "../components/FrameComponent1";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax30 = () => {
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax30}>
      <LinearGradient style={[styles.iphone13ProMax30Child, styles.iphone13Bg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={styles.iphone13ProMax30Item} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.iphone13ProMax30Inner, styles.maskGroupIcon1Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.rectangleLineargradient, styles.maskGroupIconPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Image style={[styles.maskGroupIcon, styles.iconGroupLayout]} contentFit="cover" source={require("../assets/mask-group5.png")} />
      <Text style={[styles.kcal, styles.textFlexBox]}>
        <Text style={styles.text}>2290</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Image style={[styles.maskGroupIcon1, styles.iconGroupLayout]} contentFit="cover" source={require("../assets/mask-group6.png")} />
      <Text style={[styles.kgs, styles.kgsPosition]}>
        <Text style={styles.text}>5</Text>
        <Text style={styles.kcal1}>kgs</Text>
      </Text>
      <Text style={[styles.text2, styles.textFlexBox]}>3</Text>
      <Text style={[styles.text3, styles.textFlexBox]}>41/60</Text>
      <Text style={[styles.totalCaloriesBurned, styles.workoutsTypo]}>Total calories burned</Text>
      <Text style={[styles.weightReduced, styles.workoutsTypo]}>Weight Reduced</Text>
      <Text style={[styles.workouts, styles.workoutsTypo]}>Workouts</Text>
      <Text style={[styles.rewards, styles.rewardsTypo]}>Rewards</Text>
      <Text style={[styles.premiumMember, styles.rewardsTypo]}>Premium Member</Text>
      <Image style={[styles.doorbellIcon, styles.iconGroupLayout]} contentFit="cover" source={require("../assets/doorbell.png")} />
      <Pressable style={styles.slider} onPress={openSliderIcon}>
        <Image style={styles.icon} contentFit="cover" source={require("../assets/slider.png")} />
      </Pressable>
      <Image style={styles.maskGroupIcon2} contentFit="cover" source={require("../assets/mask-group7.png")} />
      <Image style={styles.ellipseIcon} contentFit="cover" source={require("../assets/ellipse-121.png")} />
      <Text style={[styles.zaineb, styles.textFlexBox]}>Zaineb</Text>
      <Image style={styles.yellowStarIcon} contentFit="cover" source={require("../assets/yellow-star.png")} />
      <Image style={styles.winnerGoldCup} contentFit="cover" source={require("../assets/winner-gold-cup.png")} />
      <Image style={styles.targetAndDart} contentFit="cover" source={require("../assets/target-and-dart.png")} />
    </View>

            <Modal animationType="fade" transparent visible={sliderIconVisible}>
              <View style={styles.sliderIconOverlay}>
                
<Pressable style={styles.sliderIconBg} onPress={closeSliderIcon} />
<FrameComponent1 onClose={closeSliderIcon} />
              </View>
            </Modal></>);
};

const styles = StyleSheet.create({
  iphone13Bg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    position: "absolute"
  },
  maskGroupIcon1Position: {
    left: "53.74%",
    right: "4.91%",
    bottom: "4.97%",
    top: "77%",
    width: "41.36%",
    height: "18.03%"
  },
  maskGroupIconPosition: {
    left: "53.04%",
    right: "5.61%",
    bottom: "27.65%",
    top: "54.32%",
    width: "41.36%",
    height: "18.03%"
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  kgsPosition: {
    left: "58.41%",
    width: "28.27%"
  },
  workoutsTypo: {
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    height: "1.3%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  rewardsTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    height: "1.3%",
    textAlign: "left",
    color: Color.black,
    width: "28.27%",
    position: "absolute"
  },
  iphone13ProMax30Child: {
    right: "50.93%",
    left: "7.71%",
    bottom: "27.65%",
    top: "54.32%",
    width: "41.36%",
    height: "18.03%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  iphone13ProMax30Item: {
    right: "50.23%",
    left: "8.41%",
    bottom: "4.97%",
    top: "77%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    width: "41.36%",
    height: "18.03%",
    position: "absolute"
  },
  iphone13ProMax30Inner: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    position: "absolute"
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    position: "absolute"
  },
  maskGroupIcon: {
    left: "53.04%",
    right: "5.61%",
    bottom: "27.65%",
    top: "54.32%",
    width: "41.36%",
    height: "18.03%"
  },
  text: {
    fontSize: FontSize.size_6xl
  },
  kcal1: {
    fontSize: FontSize.size_sm
  },
  kcal: {
    top: "58.42%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    color: Color.black,
    left: "56.31%",
    width: "28.27%",
    height: "2.7%"
  },
  maskGroupIcon1: {
    left: "53.74%",
    right: "4.91%",
    bottom: "4.97%",
    top: "77%",
    width: "41.36%",
    height: "18.03%"
  },
  kgs: {
    top: "80.13%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  text2: {
    height: "4.32%",
    width: "9.35%",
    top: "56.37%",
    left: "16.82%",
    fontSize: 58,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    color: Color.black
  },
  text3: {
    width: "22.66%",
    top: "80.78%",
    left: "13.79%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    color: Color.black,
    height: "2.7%"
  },
  totalCaloriesBurned: {
    top: "61.45%",
    left: "56.31%",
    width: "28.27%"
  },
  weightReduced: {
    top: "83.15%",
    left: "58.41%",
    width: "28.27%"
  },
  workouts: {
    width: "9.58%",
    top: "83.8%",
    left: "17.29%"
  },
  rewards: {
    top: "62.53%",
    left: "14.95%"
  },
  premiumMember: {
    top: "49.46%",
    left: "38.79%"
  },
  doorbellIcon: {
    height: "3.46%",
    width: "7.48%",
    top: "4.43%",
    right: "7.01%",
    bottom: "92.12%",
    left: "85.51%"
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
    top: 41,
    width: 32,
    height: 32,
    position: "absolute"
  },
  maskGroupIcon2: {
    top: 134,
    left: 77,
    width: 274,
    height: 274,
    position: "absolute"
  },
  ellipseIcon: {
    top: 122,
    left: 66,
    width: 296,
    height: 296,
    position: "absolute"
  },
  zaineb: {
    width: "25.93%",
    top: "45.46%",
    left: "42.52%",
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    fontFamily: FontFamily.latoMedium,
    height: "2.7%"
  },
  yellowStarIcon: {
    top: 357,
    left: 248,
    width: 64,
    height: 61,
    position: "absolute"
  },
  winnerGoldCup: {
    top: 573,
    left: 138,
    width: 72,
    height: 84,
    position: "absolute"
  },
  targetAndDart: {
    top: 777,
    left: 119,
    width: 89,
    height: 100,
    position: "absolute"
  },
  iphone13ProMax30: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax30;
