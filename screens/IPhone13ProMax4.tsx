import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax4 = () => {
const navigation = useNavigation();
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax4}>
      <LinearGradient style={[styles.iphone13ProMax4Child, styles.pressableBg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.wrapper, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax14")} />
      </LinearGradient>
      <LinearGradient style={[styles.container, styles.containerPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax17")} />
      </LinearGradient>
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Layout]} onPress={() => navigation.navigate("IPhone13ProMax16")} />
      </LinearGradient>
      <LinearGradient style={[styles.rectangleLineargradient, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Layout]} onPress={() => navigation.navigate("IPhone13ProMax19")} />
      </LinearGradient>
      <Text style={[styles.daily, styles.dailyFlexBox]}>Daily</Text>
      <Text style={[styles.quality, styles.qualityTypo]}>Quality</Text>
      <Text style={[styles.text, styles.bpmTypo]}>80.4 %</Text>
      <Text style={[styles.sleepAnalysis, styles.sleepLayout]}>Sleep Analysis</Text>
      <Text style={[styles.h30m, styles.h30mPosition]}>7h 30m</Text>
      <Text style={[styles.sleepDuration, styles.sleepLayout]}>Sleep Duration</Text>
      <Text style={[styles.weekly, styles.dailyFlexBox]}>Weekly</Text>
      <LinearGradient style={[styles.iphone13ProMax4Item, styles.pressable2Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.iphone13ProMax4Inner, styles.iphone13Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Text style={[styles.kcal, styles.kcalPosition]}>
        <Text style={styles.text1}>1698</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.moreSelfLove, styles.kcalTypo]}>{`More Self love &
Fulfilment`}</Text>
      <LinearGradient style={[styles.iphone13ProMax4Child1, styles.iphone13Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Text style={[styles.consumed, styles.burnedTypo]}>Consumed</Text>
      <Text style={[styles.kcal2, styles.kcal2Position]}>
        <Text style={styles.text1}>350</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.bpm, styles.bpmPosition]}>
        <Text style={styles.text1}>80</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Pressable style={[styles.monthly, styles.dailyPosition]} onPress={() => navigation.navigate("IPhone13ProMax25")}>
        <Text style={[styles.monthly1, styles.textLayout]}>Monthly</Text>
      </Pressable>
      <Image style={[styles.youngWomanSleepingOnArms, styles.iconLayout]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms5.png")} />
      <Text style={[styles.burned, styles.kcal2Position]}>Burned</Text>
      <Text style={[styles.avgHeartRate, styles.bpmPosition]}>Avg Heart rate</Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.iconLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich3.png")} />
      <Image style={[styles.womanMeditatesUnderARainbo, styles.iconLayout]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow1.png")} />
      <Image style={[styles.girlDoesSportsWithDumbbell, styles.tennisPlayerIconPosition]} contentFit="cover" source={require("../assets/girl-does-sports-with-dumbbells2.png")} />
      <Image style={[styles.tennisPlayerIcon, styles.tennisPlayerIconPosition]} contentFit="cover" source={require("../assets/tennis-player1.png")} />
      <Image style={[styles.groupIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/group-415.png")} />
      <View style={[styles.slightlyBetterThanYesterdayParent, styles.h30mPosition]}>
        <Text style={[styles.slightlyBetterThan, styles.doorbellIconPosition]}>Slightly better than yesterday</Text>
        <Image style={[styles.groupChild, styles.sliderPosition]} contentFit="cover" source={require("../assets/vector-1.png")} />
      </View>
      <View style={styles.heyZainebParent}>
        <Text style={[styles.heyZaineb, styles.bpmTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.doorbellIconPosition]} contentFit="cover" source={require("../assets/doorbell.png")} />
        <Pressable style={[styles.slider, styles.sliderPosition]} onPress={openSliderIcon}>
          <Image style={[styles.icon, styles.pressableLayout]} contentFit="cover" source={require("../assets/slider.png")} />
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
  pressableBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  wrapperPosition: {
    height: "16.63%",
    width: "41.36%",
    right: "51.17%",
    left: "7.48%",
    position: "absolute"
  },
  containerPosition: {
    bottom: "-6.59%",
    top: "89.96%"
  },
  framePosition: {
    height: "5.4%",
    bottom: "72.79%",
    top: "21.81%",
    position: "absolute"
  },
  pressable2Layout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent"
  },
  dailyFlexBox: {
    textAlign: "left",
    color: Color.black
  },
  qualityTypo: {
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
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
  iphone13Position: {
    left: "53.04%",
    height: "16.63%",
    width: "41.36%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
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
  dailyPosition: {
    top: "23.22%",
    position: "absolute"
  },
  textLayout: {
    width: "19.16%",
    textAlign: "left",
    color: Color.black,
    height: "2.7%"
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
  pressableLayout: {
    width: "100%",
    height: "100%"
  },
  iphone13ProMax4Child: {
    height: "33.15%",
    width: "86.92%",
    top: "31.53%",
    bottom: "35.31%",
    left: "7.48%",
    right: "5.61%",
    position: "absolute"
  },
  pressable: {
    height: "100%",
    width: "100%"
  },
  wrapper: {
    bottom: "14.36%",
    top: "69.01%"
  },
  container: {
    height: "16.63%",
    width: "41.36%",
    right: "51.17%",
    left: "7.48%",
    position: "absolute"
  },
  pressable2: {
    height: "100%",
    width: "100%"
  },
  frame: {
    right: "68.93%",
    width: "23.6%",
    height: "5.4%",
    bottom: "72.79%",
    top: "21.81%",
    left: "7.48%"
  },
  rectangleLineargradient: {
    left: "38.32%",
    right: "38.08%",
    width: "23.6%",
    height: "5.4%",
    bottom: "72.79%",
    top: "21.81%"
  },
  daily: {
    width: "13.55%",
    left: "12.62%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    position: "absolute",
    height: "2.7%",
    color: Color.black
  },
  quality: {
    width: "12.15%",
    top: "44.17%",
    left: "27.1%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
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
    height: "2.7%",
    position: "absolute"
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
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    position: "absolute",
    height: "2.7%",
    color: Color.black
  },
  iphone13ProMax4Item: {
    width: "25.23%",
    left: "69.16%",
    height: "5.4%",
    bottom: "72.79%",
    top: "21.81%",
    position: "absolute",
    borderRadius: Border.br_5xs,
    right: "5.61%"
  },
  iphone13ProMax4Inner: {
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
  iphone13ProMax4Child1: {
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
  monthly1: {
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl
  },
  monthly: {
    left: "71.96%"
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
    right: "51.17%",
    top: "92.22%"
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
    top: "49.24%",
    right: "16.82%",
    bottom: "49.46%"
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
  iphone13ProMax4: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax4;
