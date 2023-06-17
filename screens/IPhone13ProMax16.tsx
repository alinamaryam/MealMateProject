import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax16 = () => {
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax16}>
      <LinearGradient style={[styles.iphone13ProMax16Child, styles.pressable2Bg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.iphone13ProMax16Item, styles.framePosition1]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.iphone13ProMax16Inner, styles.iphone13ProMax16InnerPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.wrapper, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableLayout]} onPress={() => navigation.navigate("IPhone13ProMax19")} />
      </LinearGradient>
      <Text style={[styles.quality, styles.weeklyFlexBox]}>Quality</Text>
      <Text style={[styles.text, styles.bpmTypo]}>80.4 %</Text>
      <Text style={[styles.sleepAnalysis, styles.sleepLayout]}>Sleep Analysis</Text>
      <Text style={[styles.h30m, styles.h30mPosition]}>7h 30m</Text>
      <Text style={[styles.sleepDuration, styles.sleepLayout]}>Sleep Duration</Text>
      <Text style={[styles.weekly, styles.dailyTypo]}>Weekly</Text>
      <LinearGradient style={[styles.container, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableLayout]} onPress={() => navigation.navigate("IPhone13ProMax25")} />
      </LinearGradient>
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Bg]} onPress={() => navigation.navigate("IPhone13ProMax10")} />
      </LinearGradient>
      <Text style={[styles.kcal, styles.kcalPosition]}>
        <Text style={styles.text1}>1698</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.moreSelfLove, styles.kcalTypo]}>{`More Self love &
Fulfilment`}</Text>
      <LinearGradient style={[styles.rectangleLineargradient, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Bg]} onPress={() => navigation.navigate("IPhone13ProMax13")} />
      </LinearGradient>
      <Text style={[styles.consumed, styles.burnedTypo]}>Consumed</Text>
      <Text style={[styles.kcal2, styles.kcal2Position]}>
        <Text style={styles.text1}>350</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.bpm, styles.bpmPosition]}>
        <Text style={styles.text1}>80</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Text style={[styles.monthly, styles.dailyTypo]}>Monthly</Text>
      <Image style={[styles.youngWomanSleepingOnArms, styles.iconLayout]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms5.png")} />
      <Text style={[styles.burned, styles.kcal2Position]}>Burned</Text>
      <Text style={[styles.avgHeartRate, styles.bpmPosition]}>Avg Heart rate</Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.iconLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich3.png")} />
      <Image style={[styles.womanMeditatesUnderARainbo, styles.iconLayout]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow1.png")} />
      <Image style={[styles.girlDoesSportsWithDumbbell, styles.tennisPlayerIconPosition]} contentFit="cover" source={require("../assets/girl-does-sports-with-dumbbells2.png")} />
      <Image style={[styles.tennisPlayerIcon, styles.tennisPlayerIconPosition]} contentFit="cover" source={require("../assets/tennis-player1.png")} />
      <Image style={[styles.groupIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/group-411.png")} />
      <View style={[styles.slightlyBetterThanYesterdayParent, styles.h30mPosition]}>
        <Text style={[styles.slightlyBetterThan, styles.doorbellIconPosition]}>Slightly better than yesterday</Text>
        <Image style={[styles.groupChild, styles.sliderPosition]} contentFit="cover" source={require("../assets/vector-1.png")} />
      </View>
      <Image style={[styles.ellipseIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/ellipse-5.png")} />
      <LinearGradient style={[styles.iphone13ProMax16Child1, styles.pressableLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Text style={[styles.daily, styles.bpmPosition]}>Daily</Text>
      <View style={styles.heyZainebParent}>
        <Text style={[styles.heyZaineb, styles.bpmTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.doorbellIconPosition]} contentFit="cover" source={require("../assets/doorbell.png")} />
        <Pressable style={[styles.slider, styles.sliderPosition]} onPress={openSliderIcon}>
          <Image style={[styles.icon, styles.pressableLayout1]} contentFit="cover" source={require("../assets/slider.png")} />
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
  pressable2Bg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  framePosition1: {
    bottom: "14.36%",
    top: "69.01%"
  },
  iphone13ProMax16InnerPosition: {
    bottom: "-6.59%",
    top: "89.96%"
  },
  wrapperPosition: {
    height: "5.4%",
    bottom: "72.79%",
    top: "21.81%",
    position: "absolute"
  },
  pressableLayout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent"
  },
  weeklyFlexBox: {
    textAlign: "left",
    color: Color.black
  },
  bpmTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  sleepLayout: {
    height: "2.92%",
    textAlign: "left",
    color: Color.black
  },
  h30mPosition: {
    left: "59.81%",
    position: "absolute"
  },
  dailyTypo: {
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    height: "2.7%"
  },
  framePosition: {
    left: "53.04%",
    width: "41.36%",
    height: "16.63%",
    right: "5.61%",
    position: "absolute"
  },
  kcalPosition: {
    left: "57.71%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  kcalTypo: {
    top: "70.73%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  burnedTypo: {
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  kcal2Position: {
    left: "58.41%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  bpmPosition: {
    left: "12.85%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  tennisPlayerIconPosition: {
    top: "92.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  doorbellIconPosition: {
    top: "0%",
    position: "absolute"
  },
  sliderPosition: {
    left: 0,
    position: "absolute"
  },
  pressableLayout1: {
    width: "100%",
    height: "100%"
  },
  iphone13ProMax16Child: {
    height: "33.15%",
    width: "86.92%",
    top: "31.53%",
    bottom: "35.31%",
    left: "7.48%",
    right: "5.61%",
    position: "absolute"
  },
  iphone13ProMax16Item: {
    right: "51.17%",
    width: "41.36%",
    height: "16.63%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    left: "7.48%",
    position: "absolute"
  },
  iphone13ProMax16Inner: {
    right: "51.17%",
    width: "41.36%",
    height: "16.63%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    left: "7.48%",
    position: "absolute"
  },
  pressable: {
    height: "100%",
    width: "100%"
  },
  wrapper: {
    left: "38.32%",
    right: "38.08%",
    width: "23.6%"
  },
  quality: {
    width: "12.15%",
    top: "44.17%",
    left: "27.1%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    height: "2.7%",
    position: "absolute"
  },
  text: {
    top: "45.9%",
    left: "23.36%",
    fontSize: FontSize.size_6xl,
    width: "19.16%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    height: "2.7%"
  },
  sleepAnalysis: {
    width: "38.79%",
    top: "33.15%",
    left: "31.78%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    position: "absolute"
  },
  h30m: {
    width: "22.2%",
    top: "43.41%",
    height: "2.92%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl
  },
  sleepDuration: {
    width: "24.3%",
    top: "46.65%",
    left: "57.94%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    position: "absolute"
  },
  weekly: {
    width: "17.06%",
    left: "41.36%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  container: {
    left: "69.16%",
    width: "25.23%",
    right: "5.61%"
  },
  pressable2: {
    height: "100%",
    width: "100%"
  },
  frame: {
    bottom: "14.36%",
    top: "69.01%"
  },
  text1: {
    fontSize: FontSize.size_6xl
  },
  kcal1: {
    fontSize: FontSize.size_sm
  },
  kcal: {
    top: "70.73%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    width: "28.27%",
    height: "2.7%"
  },
  moreSelfLove: {
    width: "35.05%",
    left: "10.98%",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  rectangleLineargradient: {
    bottom: "-6.59%",
    top: "89.96%"
  },
  consumed: {
    top: "73.76%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    left: "57.71%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  kcal2: {
    top: "90.5%",
    width: "28.27%",
    height: "2.7%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  bpm: {
    top: "91.04%",
    width: "28.27%",
    height: "2.7%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  monthly: {
    left: "71.96%",
    width: "19.16%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  youngWomanSleepingOnArms: {
    height: "13.82%",
    width: "72.9%",
    top: "53.35%",
    bottom: "32.83%",
    left: "21.5%",
    right: "5.61%",
    position: "absolute"
  },
  burned: {
    top: "93.41%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    width: "15.65%"
  },
  avgHeartRate: {
    width: "20.09%",
    top: "93.95%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    left: "12.85%"
  },
  breadWithAPieceOfButterT: {
    height: "15.33%",
    width: "31.54%",
    top: "72.79%",
    right: "3.27%",
    bottom: "11.88%",
    left: "65.19%",
    position: "absolute"
  },
  womanMeditatesUnderARainbo: {
    height: "12.53%",
    width: "27.8%",
    top: "73.65%",
    right: "47.9%",
    bottom: "13.82%",
    left: "24.3%",
    position: "absolute"
  },
  girlDoesSportsWithDumbbell: {
    height: "7.78%",
    width: "13.32%",
    right: "8.41%",
    bottom: "0%",
    left: "78.27%"
  },
  tennisPlayerIcon: {
    height: "17.93%",
    width: "17.52%",
    bottom: "-10.15%",
    left: "31.31%",
    right: "51.17%"
  },
  groupIcon: {
    height: "19.87%",
    width: "42.99%",
    top: "37.26%",
    right: "46.5%",
    bottom: "42.87%",
    left: "10.51%",
    position: "absolute"
  },
  slightlyBetterThan: {
    width: "91%",
    left: "9%",
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    height: "100%"
  },
  groupChild: {
    top: 2,
    width: 7,
    height: 5
  },
  slightlyBetterThanYesterdayParent: {
    height: "1.3%",
    width: "23.36%",
    top: "49.24%",
    right: "16.82%",
    bottom: "49.46%"
  },
  ellipseIcon: {
    width: "11.92%",
    right: "75%",
    left: "13.08%",
    height: "5.4%",
    bottom: "72.79%",
    top: "21.81%",
    position: "absolute"
  },
  iphone13ProMax16Child1: {
    width: "23.83%",
    right: "68.69%",
    height: "5.4%",
    bottom: "72.79%",
    top: "21.81%",
    position: "absolute",
    left: "7.48%"
  },
  daily: {
    width: "13.55%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    height: "2.7%"
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
    right: "0%",
    bottom: "70.64%",
    left: "91.3%",
    maxHeight: "100%",
    maxWidth: "100%",
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
    height: "100%"
  },
  slider: {
    top: 0,
    width: 32,
    height: 32
  },
  heyZainebParent: {
    height: "11.77%",
    width: "85.98%",
    top: "4.1%",
    right: "6.54%",
    bottom: "84.13%",
    left: "7.48%",
    position: "absolute"
  },
  iphone13ProMax16: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax16;
