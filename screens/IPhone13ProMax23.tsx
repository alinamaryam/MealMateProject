import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Text, Pressable, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax23 = () => {
const navigation = useNavigation();
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax23}>
      <LinearGradient style={[styles.iphone13ProMax23Child, styles.pressable1Bg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Image style={[styles.iphone13ProMax23Item, styles.groupIconLayout]} contentFit="cover" source={require("../assets/ellipse-5.png")} />
      <LinearGradient style={[styles.iphone13ProMax23Inner, styles.pressableLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.rectangleLineargradient, styles.pressableLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Pressable style={[styles.daily, styles.dailyPosition]} onPress={() => navigation.navigate("IPhone13ProMax17")}>
        <Text style={[styles.daily1, styles.kcalFlexBox]}>Daily</Text>
      </Pressable>
      <Text style={[styles.weekly, styles.kcalFlexBox]}>Weekly</Text>
      <LinearGradient style={[styles.wrapper, styles.wrapperPosition1]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableLayout]} onPress={() => navigation.navigate("IPhone13ProMax29")} />
      </LinearGradient>
      <LinearGradient style={[styles.container, styles.framePosition1]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable1, styles.pressable1Bg]} onPress={() => navigation.navigate("IPhone13ProMax20")} />
      </LinearGradient>
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable1, styles.pressable1Bg]} onPress={() => navigation.navigate("IPhone13ProMax19")} />
      </LinearGradient>
      <LinearGradient style={[styles.wrapper1, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable1, styles.pressable1Bg]} onPress={() => navigation.navigate("IPhone13ProMax22")} />
      </LinearGradient>
      <LinearGradient style={[styles.wrapper2, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable1, styles.pressable1Bg]} onPress={() => navigation.navigate("IPhone13ProMax21")} />
      </LinearGradient>
      <Image style={[styles.youngWomanSleepingOnArms, styles.youngLayout]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms.png")} />
      <Image style={[styles.womanMeditatesUnderARainbo, styles.groupIconLayout]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow.png")} />
      <Text style={[styles.morePositivity, styles.heyZainebTypo]}>{`More
Positivity`}</Text>
      <Image style={[styles.maskGroupIcon, styles.wrapperPosition]} contentFit="cover" source={require("../assets/mask-group.png")} />
      <Text style={[styles.kcal, styles.kcalLayout]}>
        <Text style={styles.text}>470</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.h30m, styles.h30mTypo]}>8h 30m</Text>
      <Text style={[styles.sleepDuration, styles.qualityTypo]}>Sleep Duration</Text>
      <Text style={[styles.burned, styles.consumedTypo]}>Burned</Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.groupIconLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich.png")} />
      <Text style={[styles.kcal2, styles.kcalLayout]}>
        <Text style={styles.text}>618</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.consumed, styles.consumedTypo]}>Consumed</Text>
      <View style={styles.sliderParent}>
        <Pressable style={[styles.slider, styles.sliderPosition]} onPress={openSliderIcon}>
          <Image style={[styles.icon, styles.pressableLayout1]} contentFit="cover" source={require("../assets/slider.png")} />
        </Pressable>
        <Text style={[styles.heyZaineb, styles.heyZainebTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.groupIconLayout]} contentFit="cover" source={require("../assets/doorbell.png")} />
      </View>
      <Text style={[styles.monthly, styles.kcalFlexBox]}>Monthly</Text>
      <Image style={[styles.youngWomanSleepingOnArms1, styles.youngLayout]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms1.png")} />
      <Text style={[styles.heartRate, styles.heyZainebTypo]}>Heart Rate</Text>
      <Image style={[styles.groupIcon, styles.groupIconPosition]} contentFit="cover" source={require("../assets/group-4.png")} />
      <Text style={[styles.quality, styles.qualityTypo]}>Quality</Text>
      <Text style={[styles.text2, styles.h30mTypo]}>82.09 %</Text>
      <View style={[styles.slightlyBetterThanYesterdayParent, styles.groupIconPosition]}>
        <Text style={[styles.slightlyBetterThan, styles.qualityTypo]}>Slightly better than yesterday</Text>
        <Image style={[styles.groupChild, styles.sliderPosition]} contentFit="cover" source={require("../assets/vector-1.png")} />
      </View>
      <Text style={[styles.kcal4, styles.kcal4Position]}>
        <Text style={styles.text}>1698</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.consumed1, styles.kcal4Position]}>Consumed</Text>
      <Image style={[styles.tennisPlayerIcon, styles.groupIconLayout]} contentFit="cover" source={require("../assets/tennis-player.png")} />
      <Text style={[styles.bpm, styles.bpmPosition]}>
        <Text style={styles.text}>80</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Text style={[styles.avgHeartRate, styles.bpmPosition]}>Avg Heart rate</Text>
    </View>

            <Modal animationType="fade" transparent visible={sliderIconVisible}>
              <View style={styles.sliderIconOverlay}>
                
<Pressable style={styles.sliderIconBg} onPress={closeSliderIcon} />
<FrameComponent2 onClose={closeSliderIcon} />
              </View>
            </Modal></>);
};

const styles = StyleSheet.create({
  pressable1Bg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  pressableLayout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent"
  },
  dailyPosition: {
    top: "23.22%",
    position: "absolute"
  },
  kcalFlexBox: {
    textAlign: "left",
    color: Color.black
  },
  wrapperPosition1: {
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  framePosition1: {
    height: "16.63%",
    width: "41.36%",
    right: "53.5%",
    left: "5.14%",
    position: "absolute"
  },
  framePosition: {
    bottom: "-6.59%",
    top: "89.96%"
  },
  wrapperPosition: {
    right: "7.94%",
    left: "50.7%",
    height: "16.63%",
    width: "41.36%",
    position: "absolute"
  },
  youngLayout: {
    height: "8.53%",
    right: "53.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  heyZainebTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  kcalLayout: {
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  h30mTypo: {
    width: "22.2%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  qualityTypo: {
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  consumedTypo: {
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  sliderPosition: {
    left: 0,
    position: "absolute"
  },
  pressableLayout1: {
    width: "100%",
    height: "100%"
  },
  groupIconPosition: {
    bottom: "42.66%",
    position: "absolute"
  },
  kcal4Position: {
    left: "56.31%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  bpmPosition: {
    left: "53.04%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  iphone13ProMax23Child: {
    height: "33.15%",
    width: "87.62%",
    top: "31.53%",
    bottom: "35.31%",
    left: "5.14%",
    right: "7.24%",
    position: "absolute"
  },
  iphone13ProMax23Item: {
    width: "11.92%",
    right: "43.93%",
    left: "44.16%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    maxWidth: "100%",
    position: "absolute"
  },
  iphone13ProMax23Inner: {
    right: "71.26%",
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute",
    left: "5.14%"
  },
  rectangleLineargradient: {
    right: "38.08%",
    left: "38.32%",
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  daily1: {
    width: "13.55%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    color: Color.black,
    height: "2.7%"
  },
  daily: {
    left: "12.62%"
  },
  weekly: {
    width: "17.06%",
    left: "41.36%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    color: Color.black,
    height: "2.7%",
    top: "23.22%",
    position: "absolute"
  },
  pressable: {
    height: "100%",
    width: "100%"
  },
  wrapper: {
    left: "69.16%",
    right: "7.24%"
  },
  pressable1: {
    height: "100%",
    width: "100%"
  },
  container: {
    bottom: "14.36%",
    top: "69.01%"
  },
  frame: {
    height: "16.63%",
    width: "41.36%",
    right: "53.5%",
    left: "5.14%",
    position: "absolute"
  },
  wrapper1: {
    bottom: "14.36%",
    top: "69.01%"
  },
  wrapper2: {
    bottom: "-6.59%",
    top: "89.96%"
  },
  youngWomanSleepingOnArms: {
    width: "37.62%",
    top: "99.46%",
    bottom: "-7.99%",
    left: "8.88%"
  },
  womanMeditatesUnderARainbo: {
    height: "16.02%",
    width: "27.8%",
    top: "71.89%",
    right: "5.14%",
    bottom: "12.09%",
    left: "67.06%",
    position: "absolute"
  },
  morePositivity: {
    height: "5.52%",
    width: "35.05%",
    fontSize: FontSize.size_mid,
    left: "54.21%",
    top: "70.41%"
  },
  maskGroupIcon: {
    bottom: "-6.59%",
    top: "89.96%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  text: {
    fontSize: FontSize.size_6xl
  },
  kcal1: {
    fontSize: FontSize.size_sm
  },
  kcal: {
    top: "91.47%",
    left: "54.21%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  h30m: {
    top: "91.14%",
    left: "7.94%",
    height: "2.92%"
  },
  sleepDuration: {
    width: "24.3%",
    top: "94.06%",
    fontSize: FontSize.size_base,
    left: "7.94%",
    height: "2.92%"
  },
  burned: {
    top: "94.38%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    left: "54.21%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  breadWithAPieceOfButterT: {
    height: "13.61%",
    width: "28.5%",
    top: "72.46%",
    right: "51.87%",
    bottom: "13.93%",
    left: "19.63%",
    position: "absolute"
  },
  kcal2: {
    left: "7.94%",
    top: "70.41%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  consumed: {
    top: "73.43%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    left: "7.94%",
    textAlign: "left",
    color: Color.black,
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
  icon: {
    height: "100%"
  },
  slider: {
    top: 0,
    width: 32,
    height: 32
  },
  heyZaineb: {
    height: "53.1%",
    width: "81.25%",
    top: "46.9%",
    left: "0%",
    fontSize: FontSize.size_27xl
  },
  doorbellIcon: {
    height: "28.32%",
    width: "8.7%",
    top: "3.54%",
    right: "0%",
    bottom: "68.14%",
    left: "91.3%",
    position: "absolute"
  },
  sliderParent: {
    top: 36,
    left: 22,
    width: 368,
    height: 113,
    position: "absolute"
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
  youngWomanSleepingOnArms1: {
    width: "29.21%",
    top: "93.84%",
    bottom: "-2.38%",
    left: "17.29%"
  },
  heartRate: {
    width: "39.02%",
    top: "32.72%",
    left: "36.21%",
    height: "2.92%",
    fontSize: FontSize.size_6xl
  },
  groupIcon: {
    height: "19.87%",
    width: "42.99%",
    top: "37.47%",
    right: "46.96%",
    left: "10.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  quality: {
    width: "12.15%",
    top: "44.6%",
    left: "27.1%",
    fontSize: FontSize.size_sm,
    height: "2.7%"
  },
  text2: {
    left: "21.73%",
    top: "46.33%",
    height: "2.7%"
  },
  slightlyBetterThan: {
    width: "91%",
    top: "0%",
    left: "9%",
    fontSize: FontSize.size_7xs,
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
  kcal4: {
    top: "70.3%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  consumed1: {
    top: "73.33%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    width: "15.65%"
  },
  tennisPlayerIcon: {
    height: "35.64%",
    width: "34.81%",
    top: "36.72%",
    right: "5.61%",
    bottom: "27.65%",
    left: "59.58%",
    position: "absolute"
  },
  bpm: {
    top: "43.41%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  avgHeartRate: {
    width: "20.09%",
    top: "46.33%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    left: "53.04%"
  },
  iphone13ProMax23: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax23;
