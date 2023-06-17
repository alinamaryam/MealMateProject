import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax21 = () => {
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax21}>
      <LinearGradient style={[styles.wrapper, styles.wrapperPosition1]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax19")} />
      </LinearGradient>
      <Image style={[styles.iphone13ProMax21Child, styles.groupIconLayout]} contentFit="cover" source={require("../assets/ellipse-5.png")} />
      <LinearGradient style={[styles.iphone13ProMax21Item, styles.maskGroupIconPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Image style={[styles.maskGroupIcon, styles.maskGroupIconPosition]} contentFit="cover" source={require("../assets/mask-group8.png")} />
      <LinearGradient style={[styles.container, styles.frameLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable1, styles.pressable1Layout]} onPress={() => navigation.navigate("IPhone13ProMax13")} />
      </LinearGradient>
      <LinearGradient style={[styles.iphone13ProMax21Inner, styles.pressable1Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Text style={[styles.daily, styles.textFlexBox]}>Daily</Text>
      <Text style={[styles.weekly, styles.textFlexBox]}>Weekly</Text>
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable1, styles.pressable1Layout]} onPress={() => navigation.navigate("IPhone13ProMax27")} />
      </LinearGradient>
      <LinearGradient style={[styles.rectangleLineargradient, styles.wrapper2Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax20")} />
      </LinearGradient>
      <LinearGradient style={[styles.wrapper1, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax23")} />
      </LinearGradient>
      <Text style={[styles.monthly, styles.textFlexBox]}>Monthly</Text>
      <Text style={[styles.exercise, styles.exerciseTypo]}>Exercise</Text>
      <Image style={[styles.groupIcon, styles.groupIconLayout]} contentFit="cover" source={require("../assets/group-48.png")} />
      <Text style={[styles.quality, styles.qualityTypo]}>Quality</Text>
      <Text style={[styles.text, styles.textTypo]}>61.03 %</Text>
      <Image style={[styles.youngWomanSleepingOnArms, styles.groupIconLayout]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms2.png")} />
      <Text style={[styles.h30m, styles.h30mPosition]}>8h 30m</Text>
      <Text style={[styles.sleepDuration, styles.h30mPosition]}>Sleep Duration</Text>
      <Text style={styles.bpm}>
        <Text style={styles.text1}>70</Text>
        <Text style={styles.bpm1}>bpm</Text>
      </Text>
      <Text style={styles.avgHeartRate}>Avg Heart rate</Text>
      <Image style={[styles.tennisPlayerIcon, styles.groupIconLayout]} contentFit="cover" source={require("../assets/tennis-player1.png")} />
      <Text style={[styles.burned, styles.kcalPosition]}>Burned</Text>
      <Text style={[styles.kcal, styles.kcalPosition]}>
        <Text style={styles.text1}>1050</Text>
        <Text style={styles.bpm1}>kcal</Text>
      </Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.groupIconLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich.png")} />
      <Text style={[styles.kcal2, styles.kcal2Position]}>
        <Text style={styles.text1}>618</Text>
        <Text style={styles.bpm1}>kcal</Text>
      </Text>
      <Text style={[styles.consumed, styles.kcal2Position]}>Consumed</Text>
      <LinearGradient style={[styles.wrapper2, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax22")} />
      </LinearGradient>
      <Image style={[styles.womanMeditatesUnderARainbo, styles.framePosition]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow1.png")} />
      <Text style={[styles.morePositivity, styles.kcalPosition]}>{`More
Positivity`}</Text>
      <View style={styles.heyZainebParent}>
        <Text style={[styles.heyZaineb, styles.exerciseTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.groupIconLayout]} contentFit="cover" source={require("../assets/doorbell.png")} />
        <Pressable style={styles.slider} onPress={openSliderIcon}>
          <Image style={styles.pressableLayout} contentFit="cover" source={require("../assets/slider.png")} />
        </Pressable>
      </View>
    </View>

            <Modal animationType="fade" transparent visible={sliderIconVisible}>
              <View style={styles.sliderIconOverlay}>
                
<Pressable style={styles.sliderIconBg} onPress={closeSliderIcon} />
<FrameComponent2 onClose={closeSliderIcon} />
              </View>
            </Modal></>);
};

const styles = StyleSheet.create({
  wrapperPosition1: {
    height: "16.63%",
    width: "41.36%",
    bottom: "14.36%",
    top: "69.01%",
    position: "absolute"
  },
  pressableBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  maskGroupIconPosition: {
    bottom: "35.31%",
    right: "5.61%",
    top: "31.53%",
    height: "33.15%",
    position: "absolute"
  },
  frameLayout: {
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%"
  },
  pressable1Layout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent"
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  framePosition: {
    left: "69.16%",
    position: "absolute"
  },
  wrapper2Position: {
    left: "53.04%",
    right: "5.61%"
  },
  wrapperPosition: {
    bottom: "-6.7%",
    top: "90.06%",
    height: "16.63%",
    width: "41.36%",
    position: "absolute"
  },
  exerciseTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  qualityTypo: {
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  textTypo: {
    width: "22.2%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl
  },
  h30mPosition: {
    left: "12.38%",
    height: "2.92%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  kcalPosition: {
    left: "54.91%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  kcal2Position: {
    left: "56.31%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  pressable: {
    height: "100%",
    width: "100%"
  },
  wrapper: {
    right: "52.57%",
    left: "6.07%"
  },
  iphone13ProMax21Child: {
    width: "11.92%",
    right: "44.16%",
    left: "43.93%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    maxWidth: "100%",
    position: "absolute"
  },
  iphone13ProMax21Item: {
    width: "88.32%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    left: "6.07%"
  },
  maskGroupIcon: {
    width: "82.48%",
    left: "11.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  pressable1: {
    height: "100%",
    width: "100%"
  },
  container: {
    right: "70.33%",
    left: "6.07%",
    position: "absolute"
  },
  iphone13ProMax21Inner: {
    right: "38.08%",
    left: "38.32%",
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  daily: {
    width: "13.55%",
    left: "12.62%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    color: Color.black,
    height: "2.7%"
  },
  weekly: {
    width: "17.06%",
    left: "41.36%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    color: Color.black,
    height: "2.7%"
  },
  frame: {
    right: "7.24%",
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%"
  },
  rectangleLineargradient: {
    height: "16.63%",
    width: "41.36%",
    bottom: "14.36%",
    top: "69.01%",
    position: "absolute"
  },
  wrapper1: {
    right: "52.57%",
    left: "6.07%"
  },
  monthly: {
    width: "19.16%",
    left: "71.96%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    color: Color.black,
    height: "2.7%"
  },
  exercise: {
    width: "25.7%",
    top: "32.72%",
    left: "38.08%",
    fontSize: FontSize.size_6xl,
    height: "2.92%",
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  groupIcon: {
    height: "19.87%",
    width: "42.99%",
    top: "37.47%",
    right: "46.96%",
    bottom: "42.66%",
    left: "10.05%",
    position: "absolute"
  },
  quality: {
    width: "12.15%",
    top: "44.6%",
    left: "27.1%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    height: "2.7%"
  },
  text: {
    top: "46.33%",
    left: "21.73%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    height: "2.7%"
  },
  youngWomanSleepingOnArms: {
    height: "7.88%",
    width: "32.48%",
    top: "78.62%",
    right: "50.93%",
    bottom: "13.5%",
    left: "16.59%",
    position: "absolute"
  },
  h30m: {
    top: "72.14%",
    width: "22.2%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl
  },
  sleepDuration: {
    width: "24.3%",
    top: "75.05%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  text1: {
    fontSize: FontSize.size_6xl
  },
  bpm1: {
    fontSize: FontSize.size_sm
  },
  bpm: {
    top: "91.58%",
    left: "11.68%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    height: "2.7%",
    position: "absolute"
  },
  avgHeartRate: {
    width: "20.09%",
    top: "94.49%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    left: "11.68%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  tennisPlayerIcon: {
    height: "17.93%",
    width: "17.52%",
    top: "92.76%",
    right: "52.34%",
    bottom: "-10.69%",
    left: "30.14%",
    position: "absolute"
  },
  burned: {
    top: "48.92%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  kcal: {
    top: "46%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  breadWithAPieceOfButterT: {
    height: "13.61%",
    width: "28.5%",
    top: "73.65%",
    right: "4.21%",
    bottom: "12.74%",
    left: "67.29%",
    position: "absolute"
  },
  kcal2: {
    top: "71.71%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  consumed: {
    top: "74.73%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  wrapper2: {
    left: "53.04%",
    right: "5.61%"
  },
  womanMeditatesUnderARainbo: {
    height: "12.53%",
    width: "27.8%",
    top: "93.3%",
    right: "3.04%",
    bottom: "-5.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  morePositivity: {
    width: "35.05%",
    top: "91.47%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  heyZaineb: {
    height: "55.05%",
    width: "81.25%",
    top: "44.95%",
    left: "0%",
    fontSize: FontSize.size_27xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  doorbellIcon: {
    height: "29.36%",
    width: "8.7%",
    top: "0%",
    right: "0%",
    bottom: "70.64%",
    left: "91.3%",
    position: "absolute"
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
  pressableLayout: {
    height: "100%",
    width: "100%"
  },
  slider: {
    left: 0,
    top: 0,
    width: 32,
    height: 32,
    position: "absolute"
  },
  heyZainebParent: {
    height: "11.77%",
    width: "85.98%",
    top: "4.1%",
    right: "7.94%",
    bottom: "84.13%",
    left: "6.07%",
    position: "absolute"
  },
  iphone13ProMax21: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax21;
