import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax28 = () => {
const navigation = useNavigation();
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax28}>
      <LinearGradient style={[styles.iphone13ProMax28Child, styles.iphone13Bg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.iphone13ProMax28Item, styles.framePosition1]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.wrapper, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iphone13Bg]} onPress={() => navigation.navigate("IPhone13ProMax25")} />
      </LinearGradient>
      <Image style={[styles.iphone13ProMax28Inner, styles.iconLayout]} contentFit="cover" source={require("../assets/ellipse-5.png")} />
      <LinearGradient style={[styles.container, styles.containerPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable1, styles.pressable1Layout]} onPress={() => navigation.navigate("IPhone13ProMax14")} />
      </LinearGradient>
      <LinearGradient style={[styles.rectangleLineargradient, styles.pressable1Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Text style={[styles.daily, styles.textFlexBox]}>Daily</Text>
      <Pressable style={styles.weekly} onPress={() => navigation.navigate("IPhone13ProMax22")}>
        <Text style={[styles.weekly1, styles.textFlexBox]}>Weekly</Text>
      </Pressable>
      <LinearGradient style={[styles.iphone13ProMax28Child1, styles.pressable1Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iphone13Bg]} onPress={() => navigation.navigate("IPhone13ProMax26")} />
      </LinearGradient>
      <LinearGradient style={[styles.wrapper1, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iphone13Bg]} onPress={() => navigation.navigate("IPhone13ProMax29")} />
      </LinearGradient>
      <Text style={[styles.monthly, styles.textFlexBox]}>Monthly</Text>
      <View style={[styles.maskGroup, styles.maskGroupPosition]} />
      <Text style={[styles.mentalHealth, styles.kcalTypo]}>Mental Health</Text>
      <Image style={[styles.groupIcon, styles.groupIconPosition]} contentFit="cover" source={require("../assets/group-43.png")} />
      <Text style={[styles.quality, styles.qualityTypo]}>Quality</Text>
      <Text style={[styles.text, styles.textLayout]}>92.56 %</Text>
      <Pressable style={[styles.maskGroup1, styles.framePosition1]} onPress={() => navigation.navigate("IPhone13ProMax27")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/mask-group1.png")} />
      </Pressable>
      <Text style={[styles.kcal, styles.kcalPosition]}>
        <Text style={styles.text1}>950</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.burned, styles.burnedTypo]}>Burned</Text>
      <Text style={[styles.bpm, styles.bpmPosition]}>
        <Text style={styles.text1}>74</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Text style={[styles.avgHeartRate, styles.avgHeartRateTypo]}>Avg Heart rate</Text>
      <Image style={[styles.tennisPlayerIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/tennis-player1.png")} />
      <Image style={[styles.womanMeditatesUnderARainbo, styles.groupIconLayout]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow2.png")} />
      <View style={[styles.slightlyBetterThanYesterdayParent, styles.groupIconPosition]}>
        <Text style={[styles.slightlyBetterThan, styles.doorbellIconPosition]}>Slightly better than yesterday</Text>
        <Image style={[styles.groupChild, styles.sliderPosition]} contentFit="cover" source={require("../assets/vector-1.png")} />
      </View>
      <Text style={[styles.selfLove, styles.kcal2Position]}>{`Self love &
Positivity`}</Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.iconLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich.png")} />
      <Text style={[styles.kcal2, styles.kcal2Position]}>
        <Text style={styles.text1}>1270</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.consumed, styles.kcal2Position]}>Consumed</Text>
      <Image style={[styles.youngWomanSleepingOnArms, styles.iconLayout]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms1.png")} />
      <View style={styles.heyZainebParent}>
        <Text style={[styles.heyZaineb, styles.kcalTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.doorbellIconPosition]} contentFit="cover" source={require("../assets/doorbell.png")} />
        <Pressable style={[styles.slider, styles.sliderPosition]} onPress={openSliderIcon}>
          <Image style={[styles.icon1, styles.iconLayout1]} contentFit="cover" source={require("../assets/slider.png")} />
        </Pressable>
      </View>
      <Text style={[styles.h30m, styles.h30mPosition]}>8h 30m</Text>
      <Text style={[styles.sleepDuration, styles.h30mPosition]}>Sleep Duration</Text>
    </View>

            <Modal animationType="fade" transparent visible={sliderIconVisible}>
              <View style={styles.sliderIconOverlay}>
                
<Pressable style={styles.sliderIconBg} onPress={closeSliderIcon} />
<FrameComponent2 onClose={closeSliderIcon} />
              </View>
            </Modal></>);
};

const styles = StyleSheet.create({
  iphone13Bg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  framePosition1: {
    bottom: "14.36%",
    top: "69.01%",
    width: "41.36%",
    height: "16.63%"
  },
  wrapperPosition: {
    bottom: "-6.59%",
    top: "89.96%",
    width: "41.36%",
    height: "16.63%"
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  containerPosition: {
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  pressable1Layout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent"
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black
  },
  framePosition: {
    left: "53.04%",
    position: "absolute"
  },
  maskGroupPosition: {
    bottom: "35.31%",
    top: "31.53%",
    width: "86.92%",
    height: "33.15%",
    left: "7.48%",
    right: "5.61%",
    position: "absolute"
  },
  kcalTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  groupIconPosition: {
    bottom: "42.66%",
    position: "absolute"
  },
  qualityTypo: {
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black
  },
  textLayout: {
    width: "22.2%",
    fontSize: FontSize.size_6xl
  },
  kcalPosition: {
    left: "11.45%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  burnedTypo: {
    fontSize: FontSize.size_smi,
    height: "1.84%"
  },
  bpmPosition: {
    left: "57.24%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  avgHeartRateTypo: {
    top: "94.38%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  groupIconLayout: {
    height: "19.87%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  kcal2Position: {
    left: "56.31%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  iconLayout1: {
    width: "100%",
    height: "100%"
  },
  h30mPosition: {
    left: "12.15%",
    height: "2.92%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  iphone13ProMax28Child: {
    left: "7.48%",
    bottom: "35.31%",
    top: "31.53%",
    width: "86.92%",
    height: "33.15%",
    right: "5.61%",
    position: "absolute"
  },
  iphone13ProMax28Item: {
    right: "51.17%",
    left: "7.48%",
    position: "absolute",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  pressable: {
    height: "100%",
    width: "100%"
  },
  wrapper: {
    right: "51.17%",
    left: "7.48%",
    position: "absolute"
  },
  iphone13ProMax28Inner: {
    width: "11.92%",
    right: "13.08%",
    left: "75%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  pressable1: {
    height: "100%",
    width: "100%"
  },
  container: {
    right: "68.93%",
    left: "7.48%"
  },
  rectangleLineargradient: {
    right: "36.45%",
    left: "39.95%",
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
    color: Color.black,
    height: "2.7%",
    top: "23.22%",
    position: "absolute"
  },
  weekly1: {
    width: "17.06%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    color: Color.black,
    height: "2.7%"
  },
  weekly: {
    left: "43.22%",
    top: "23.11%",
    position: "absolute"
  },
  iphone13ProMax28Child1: {
    width: "25.23%",
    left: "69.16%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute",
    right: "5.61%"
  },
  frame: {
    bottom: "14.36%",
    top: "69.01%",
    width: "41.36%",
    height: "16.63%",
    right: "5.61%"
  },
  wrapper1: {
    bottom: "-6.59%",
    top: "89.96%",
    width: "41.36%",
    height: "16.63%",
    right: "5.61%"
  },
  monthly: {
    width: "19.16%",
    left: "71.96%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    color: Color.black,
    height: "2.7%",
    top: "23.22%",
    position: "absolute"
  },
  maskGroup: {
    left: "7.48%"
  },
  mentalHealth: {
    width: "39.02%",
    top: "32.72%",
    left: "36.21%",
    fontSize: FontSize.size_6xl,
    height: "2.92%",
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  groupIcon: {
    width: "42.99%",
    top: "37.47%",
    right: "46.96%",
    left: "10.05%",
    height: "19.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  quality: {
    width: "12.15%",
    top: "44.6%",
    left: "27.1%",
    fontSize: FontSize.size_sm,
    height: "2.7%",
    position: "absolute"
  },
  text: {
    top: "46.33%",
    left: "21.73%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    height: "2.7%",
    position: "absolute"
  },
  icon: {
    height: "100%",
    width: "100%"
  },
  maskGroup1: {
    left: "8.64%",
    right: "50%",
    position: "absolute"
  },
  text1: {
    fontSize: FontSize.size_6xl
  },
  kcal1: {
    fontSize: FontSize.size_sm
  },
  kcal: {
    top: "70.52%",
    width: "28.27%",
    height: "2.7%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  burned: {
    top: "73.43%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    left: "11.45%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  bpm: {
    top: "91.47%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    width: "28.27%",
    height: "2.7%"
  },
  avgHeartRate: {
    width: "20.09%",
    left: "57.24%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    top: "94.38%"
  },
  tennisPlayerIcon: {
    height: "17.93%",
    width: "17.52%",
    top: "92.66%",
    right: "6.78%",
    bottom: "-10.58%",
    left: "75.7%",
    position: "absolute"
  },
  womanMeditatesUnderARainbo: {
    width: "44.16%",
    top: "45.57%",
    right: "2.8%",
    bottom: "34.56%",
    left: "53.04%",
    position: "absolute"
  },
  slightlyBetterThan: {
    width: "91%",
    left: "9%",
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
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
    top: "56.05%",
    right: "56.78%",
    left: "19.86%"
  },
  selfLove: {
    width: "35.05%",
    top: "39.52%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  breadWithAPieceOfButterT: {
    height: "13.61%",
    width: "28.5%",
    top: "72.25%",
    right: "4.21%",
    bottom: "14.15%",
    left: "67.29%",
    position: "absolute"
  },
  kcal2: {
    top: "70.3%",
    width: "28.27%",
    height: "2.7%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  consumed: {
    top: "73.33%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    width: "15.65%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  youngWomanSleepingOnArms: {
    height: "8.53%",
    width: "29.21%",
    top: "93.95%",
    right: "51.4%",
    bottom: "-2.48%",
    left: "19.39%",
    position: "absolute"
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
  icon1: {
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
  h30m: {
    top: "91.47%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    width: "22.2%",
    fontSize: FontSize.size_6xl
  },
  sleepDuration: {
    width: "24.3%",
    fontSize: FontSize.size_base,
    top: "94.38%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  iphone13ProMax28: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax28;
