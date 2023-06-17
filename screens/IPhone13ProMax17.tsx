import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax17 = () => {
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax17}>
      <LinearGradient style={[styles.iphone13ProMax17Child, styles.pressableBg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={styles.wrapper} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax10")} />
      </LinearGradient>
      <LinearGradient style={[styles.container, styles.wrapperLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax16")} />
      </LinearGradient>
      <Image style={[styles.iphone13ProMax17Item, styles.groupIconLayout]} contentFit="cover" source={require("../assets/ellipse-5.png")} />
      <LinearGradient style={[styles.iphone13ProMax17Inner, styles.pressable2Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Layout]} onPress={() => navigation.navigate("IPhone13ProMax23")} />
      </LinearGradient>
      <Text style={[styles.daily, styles.bpmFlexBox]}>Daily</Text>
      <Text style={[styles.weekly, styles.bpmFlexBox]}>Weekly</Text>
      <LinearGradient style={[styles.rectangleLineargradient, styles.iphone13ProMax17ItemPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Layout]} onPress={() => navigation.navigate("IPhone13ProMax29")} />
      </LinearGradient>
      <LinearGradient style={[styles.wrapper1, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax14")} />
      </LinearGradient>
      <LinearGradient style={[styles.wrapper2, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableBg]} onPress={() => navigation.navigate("IPhone13ProMax13")} />
      </LinearGradient>
      <Text style={[styles.monthly, styles.bpmFlexBox]}>Monthly</Text>
      <View style={[styles.maskGroup, styles.maskGroupPosition]}>
        <Image style={[styles.womanMeditatesUnderARainbo, styles.doorbellIconPosition]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow1.png")} />
        <Text style={[styles.moreSelfLove, styles.heyZainebTypo]}>{`More Self love &
Fulfilment`}</Text>
        <Image style={[styles.girlDoesSportsWithDumbbell, styles.maskGroupPosition]} contentFit="cover" source={require("../assets/girl-does-sports-with-dumbbells3.png")} />
      </View>
      <Text style={[styles.kcal, styles.kcalPosition]}>
        <Text style={styles.text}>350</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Image style={[styles.youngWomanSleepingOnArms, styles.youngLayout]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms1.png")} />
      <Text style={[styles.h30m, styles.h30mTypo]}>7h 30m</Text>
      <Text style={[styles.sleepDuration, styles.qualityTypo]}>Sleep Duration</Text>
      <Text style={[styles.burned, styles.burnedTypo]}>Burned</Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.breadLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich.png")} />
      <Text style={[styles.kcal2, styles.kcal2Position]}>
        <Text style={styles.text}>1698</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.consumed, styles.kcal2Position]}>Consumed</Text>
      <View style={styles.sliderParent}>
        <Pressable style={styles.slider} onPress={openSliderIcon}>
          <Image style={[styles.icon, styles.pressableLayout]} contentFit="cover" source={require("../assets/slider.png")} />
        </Pressable>
        <Text style={[styles.heyZaineb, styles.heyZainebTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.doorbellIconPosition]} contentFit="cover" source={require("../assets/doorbell.png")} />
      </View>
      <Image style={[styles.doorbellIcon1, styles.groupIconLayout]} contentFit="cover" source={require("../assets/doorbell2.png")} />
      <Text style={[styles.heartRate, styles.heyZainebTypo]}>Heart Rate</Text>
      <Image style={[styles.groupIcon, styles.groupIconPosition]} contentFit="cover" source={require("../assets/group-410.png")} />
      <Text style={[styles.quality, styles.qualityTypo]}>Quality</Text>
      <Text style={[styles.text2, styles.h30mTypo]}>82.09 %</Text>
      <Text style={[styles.kcal4, styles.kcal4Position]}>
        <Text style={styles.text}>350</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.burned1, styles.kcal4Position]}>Burned</Text>
      <Image style={[styles.maskGroupIcon, styles.groupIconLayout]} contentFit="cover" source={require("../assets/mask-group9.png")} />
      <Text style={[styles.bpm, styles.bpmLayout]}>
        <Text style={styles.text}>80</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Text style={[styles.avgHeartRate, styles.avgTypo]}>Avg Heart rate</Text>
      <Image style={[styles.tennisPlayerIcon, styles.groupIconLayout]} contentFit="cover" source={require("../assets/tennis-player3.png")} />
      <View style={[styles.slightlyBetterThanYesterdayParent, styles.groupIconPosition]}>
        <Text style={[styles.slightlyBetterThan, styles.qualityTypo]}>Slightly better than yesterday</Text>
        <Image style={styles.groupChild} contentFit="cover" source={require("../assets/vector-1.png")} />
      </View>
      <Image style={[styles.youngWomanSleepingOnArms1, styles.kcal4Position]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms6.png")} />
      <Image style={[styles.breadWithAPieceOfButterT1, styles.breadLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich4.png")} />
      <Text style={[styles.kcal6, styles.kcal6Position]}>
        <Text style={styles.text}>1698</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.consumed1, styles.kcal6Position]}>Consumed</Text>
      <Image style={[styles.tennisPlayerIcon1, styles.wrapperPosition]} contentFit="cover" source={require("../assets/tennis-player4.png")} />
      <Text style={[styles.bpm2, styles.bpmLayout]}>
        <Text style={styles.text}>80</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Text style={[styles.avgHeartRate1, styles.avgTypo]}>Avg Heart rate</Text>
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
  wrapperLayout: {
    width: "41.36%",
    height: "16.63%"
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  pressable2Layout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent"
  },
  framePosition: {
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  bpmFlexBox: {
    textAlign: "left",
    color: Color.black
  },
  iphone13ProMax17ItemPosition: {
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  wrapperPosition: {
    right: "5.61%",
    position: "absolute"
  },
  maskGroupPosition: {
    bottom: "0%",
    position: "absolute"
  },
  doorbellIconPosition: {
    right: "0%",
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
  kcalPosition: {
    left: "57.48%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  youngLayout: {
    height: "8.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
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
  burnedTypo: {
    fontSize: FontSize.size_smi,
    width: "15.65%",
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  breadLayout: {
    width: "28.5%",
    height: "13.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  kcal2Position: {
    left: "10.98%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  pressableLayout: {
    width: "100%",
    height: "100%"
  },
  groupIconPosition: {
    bottom: "42.66%",
    position: "absolute"
  },
  kcal4Position: {
    left: "11.45%",
    position: "absolute"
  },
  bpmLayout: {
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  avgTypo: {
    width: "20.09%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  kcal6Position: {
    left: "56.31%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  iphone13ProMax17Child: {
    height: "33.15%",
    width: "86.92%",
    top: "31.53%",
    bottom: "35.31%",
    left: "6.78%",
    borderRadius: Border.br_xl,
    right: "6.31%",
    position: "absolute"
  },
  pressable: {
    height: "100%",
    width: "100%"
  },
  wrapper: {
    width: "42.06%",
    height: "16.63%",
    bottom: "14.36%",
    right: "51.17%",
    top: "69.01%",
    left: "6.78%",
    position: "absolute"
  },
  container: {
    bottom: "-6.59%",
    top: "89.96%",
    width: "41.36%",
    left: "7.48%",
    right: "51.17%",
    position: "absolute"
  },
  iphone13ProMax17Item: {
    width: "11.92%",
    right: "75.23%",
    left: "12.85%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  iphone13ProMax17Inner: {
    right: "68.93%",
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute",
    left: "7.48%"
  },
  pressable2: {
    height: "100%",
    width: "100%"
  },
  frame: {
    left: "38.32%",
    right: "38.08%"
  },
  daily: {
    width: "13.55%",
    left: "12.62%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    color: Color.black,
    height: "2.7%",
    position: "absolute"
  },
  weekly: {
    width: "17.06%",
    left: "41.36%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    color: Color.black,
    height: "2.7%",
    position: "absolute"
  },
  rectangleLineargradient: {
    left: "69.16%",
    width: "24.53%",
    right: "6.31%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%"
  },
  wrapper1: {
    left: "53.04%",
    width: "41.36%",
    height: "16.63%",
    bottom: "14.36%",
    top: "69.01%"
  },
  wrapper2: {
    left: "53.04%",
    width: "41.36%",
    height: "16.63%",
    bottom: "-6.59%",
    top: "89.96%"
  },
  monthly: {
    width: "19.16%",
    left: "71.96%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    color: Color.black,
    height: "2.7%",
    position: "absolute"
  },
  womanMeditatesUnderARainbo: {
    height: "44.27%",
    width: "62.96%",
    top: "6.49%",
    bottom: "49.24%",
    left: "37.04%"
  },
  moreSelfLove: {
    width: "79.37%",
    left: "4.76%",
    fontSize: FontSize.size_mid,
    top: "0%"
  },
  girlDoesSportsWithDumbbell: {
    height: "30.15%",
    width: "59.79%",
    top: "69.85%",
    right: "9.52%",
    left: "30.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  maskGroup: {
    height: "28.29%",
    width: "44.16%",
    top: "71.71%",
    right: "2.8%",
    left: "53.04%"
  },
  text: {
    fontSize: FontSize.size_6xl
  },
  kcal1: {
    fontSize: FontSize.size_sm
  },
  kcal: {
    top: "91.58%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  youngWomanSleepingOnArms: {
    width: "29.21%",
    right: "51.87%",
    bottom: "-2.27%",
    left: "18.93%",
    top: "93.74%",
    position: "absolute"
  },
  h30m: {
    top: "90.82%",
    left: "10.05%",
    height: "2.92%"
  },
  sleepDuration: {
    width: "24.3%",
    fontSize: FontSize.size_base,
    left: "10.05%",
    height: "2.92%",
    top: "93.74%"
  },
  burned: {
    top: "94.49%",
    left: "57.48%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  breadWithAPieceOfButterT: {
    top: "72.46%",
    right: "49.53%",
    bottom: "13.93%",
    left: "21.96%"
  },
  kcal2: {
    top: "70.52%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  consumed: {
    top: "73.54%",
    fontSize: FontSize.size_smi,
    width: "15.65%",
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
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
    left: 3,
    top: 0,
    width: 32,
    height: 32,
    position: "absolute"
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
    bottom: "68.14%",
    left: "91.3%"
  },
  sliderParent: {
    top: 36,
    left: 29,
    width: 368,
    height: 113,
    position: "absolute"
  },
  doorbellIcon1: {
    height: "4.32%",
    width: "9.35%",
    top: "5.62%",
    right: "-3.27%",
    bottom: "90.06%",
    left: "93.93%",
    position: "absolute"
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
  kcal4: {
    top: "70.52%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%",
    textAlign: "left",
    color: Color.black
  },
  burned1: {
    top: "73.43%",
    fontSize: FontSize.size_smi,
    width: "15.65%",
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.black
  },
  maskGroupIcon: {
    right: "50%",
    left: "8.64%",
    width: "41.36%",
    height: "16.63%",
    bottom: "14.36%",
    top: "69.01%",
    position: "absolute"
  },
  bpm: {
    top: "91.47%",
    left: "57.24%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  avgHeartRate: {
    top: "94.38%",
    left: "57.24%"
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
  slightlyBetterThan: {
    width: "91%",
    left: "9%",
    fontSize: FontSize.size_7xs,
    top: "0%",
    height: "100%"
  },
  groupChild: {
    top: 2,
    left: 0,
    width: 7,
    height: 5,
    position: "absolute"
  },
  slightlyBetterThanYesterdayParent: {
    height: "1.3%",
    width: "23.36%",
    top: "56.05%",
    right: "56.78%",
    left: "19.86%"
  },
  youngWomanSleepingOnArms1: {
    width: "37.62%",
    top: "95.79%",
    right: "50.93%",
    bottom: "-4.32%",
    height: "8.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  breadWithAPieceOfButterT1: {
    top: "72.25%",
    right: "4.21%",
    bottom: "14.15%",
    left: "67.29%"
  },
  kcal6: {
    top: "70.3%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  consumed1: {
    top: "73.33%",
    fontSize: FontSize.size_smi,
    width: "15.65%",
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  tennisPlayerIcon1: {
    height: "35.64%",
    width: "34.81%",
    top: "45.79%",
    bottom: "18.57%",
    left: "59.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  bpm2: {
    top: "43.41%",
    left: "53.04%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  avgHeartRate1: {
    top: "46.33%",
    left: "53.04%"
  },
  iphone13ProMax17: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax17;
