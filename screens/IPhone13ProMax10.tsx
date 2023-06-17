import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax10 = () => {
const navigation = useNavigation();
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax10}>
      <LinearGradient style={[styles.iphone13ProMax10Child, styles.iphone13ChildBg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.wrapper, styles.wrapperLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax16")} />
      </LinearGradient>
      <LinearGradient style={[styles.container, styles.wrapper1Position1]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax14")} />
      </LinearGradient>
      <Image style={[styles.iphone13ProMax10Item, styles.iconLayout]} contentFit="cover" source={require("../assets/ellipse-5.png")} />
      <LinearGradient style={[styles.iphone13ProMax10Inner, styles.pressable2Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Layout]} onPress={() => navigation.navigate("IPhone13ProMax20")} />
      </LinearGradient>
      <Text style={[styles.daily, styles.textFlexBox]}>Daily</Text>
      <Text style={[styles.weekly, styles.textFlexBox]}>Weekly</Text>
      <LinearGradient style={styles.rectangleLineargradient} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Layout]} onPress={() => navigation.navigate("IPhone13ProMax26")} />
      </LinearGradient>
      <LinearGradient style={[styles.iphone13ProMax10Child1, styles.wrapperLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.wrapper1, styles.wrapper1Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax17")} />
      </LinearGradient>
      <Text style={[styles.monthly, styles.textFlexBox]}>Monthly</Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.iconLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich1.png")} />
      <Text style={[styles.nutrition, styles.nutritionTypo]}>Nutrition</Text>
      <Image style={[styles.groupIcon, styles.groupIconPosition]} contentFit="cover" source={require("../assets/group-414.png")} />
      <Text style={[styles.quality, styles.qualityTypo]}>Quality</Text>
      <Text style={[styles.text, styles.textTypo]}>84.19 %</Text>
      <Text style={[styles.kcal, styles.kcalPosition]}>
        <Text style={styles.text1}>1698</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.kcal2, styles.kcalPosition]}>
        <Text style={styles.text1}>302</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.consumed, styles.burnedTypo]}>Consumed</Text>
      <Text style={[styles.remaining, styles.burnedTypo]}>Remaining</Text>
      <Image style={[styles.youngWomanSleepingOnArms, styles.groupIconPosition]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms.png")} />
      <Text style={[styles.h30m, styles.h30mPosition]}>7h 30m</Text>
      <Pressable style={[styles.maskGroup, styles.wrapper1Position]} onPress={() => navigation.navigate("IPhone13ProMax13")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/mask-group1.png")} />
      </Pressable>
      <Text style={[styles.burned, styles.kcal4Position]}>Burned</Text>
      <Text style={[styles.sleepDuration, styles.h30mPosition]}>Sleep Duration</Text>
      <Text style={[styles.kcal4, styles.kcal4Position]}>
        <Text style={styles.text1}>350</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.bpm, styles.bpmPosition]}>
        <Text style={styles.text1}>80</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Text style={[styles.avgHeartRate, styles.bpmPosition]}>Avg Heart rate</Text>
      <Image style={[styles.tennisPlayerIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/tennis-player1.png")} />
      <Image style={[styles.womanMeditatesUnderARainbo, styles.iconLayout]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow1.png")} />
      <View style={[styles.heyZainebParent, styles.heyZainebParentPosition]}>
        <Text style={[styles.heyZaineb, styles.nutritionTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/doorbell.png")} />
        <Pressable style={styles.slider} onPress={openSliderIcon}>
          <Image style={styles.iconLayout1} contentFit="cover" source={require("../assets/slider.png")} />
        </Pressable>
      </View>
      <Text style={[styles.moreSelfLove, styles.nutritionTypo]}>{`More Self love &
Fulfilment`}</Text>
    </View>

            <Modal animationType="fade" transparent visible={sliderIconVisible}>
              <View style={styles.sliderIconOverlay}>
                
<Pressable style={styles.sliderIconBg} onPress={closeSliderIcon} />
<FrameComponent2 onClose={closeSliderIcon} />
              </View>
            </Modal></>);
};

const styles = StyleSheet.create({
  iphone13ChildBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  wrapperLayout: {
    height: "16.63%",
    width: "41.36%",
    position: "absolute"
  },
  iconLayout1: {
    height: "100%",
    width: "100%"
  },
  wrapper1Position1: {
    bottom: "-6.59%",
    top: "89.96%"
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  pressable2Layout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent"
  },
  framePosition: {
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    height: "2.7%",
    position: "absolute"
  },
  wrapper1Position: {
    left: "53.5%",
    right: "5.14%",
    height: "16.63%",
    width: "41.36%",
    position: "absolute"
  },
  nutritionTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  groupIconPosition: {
    left: "10.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
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
  kcalPosition: {
    left: "61.92%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  burnedTypo: {
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  h30mPosition: {
    left: "12.38%",
    height: "2.92%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  kcal4Position: {
    left: "57.24%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  bpmPosition: {
    left: "57.71%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  heyZainebParentPosition: {
    left: "5.84%",
    position: "absolute"
  },
  iphone13ProMax10Child: {
    height: "33.15%",
    width: "88.55%",
    top: "31.53%",
    bottom: "35.31%",
    left: "5.84%",
    position: "absolute",
    right: "5.61%"
  },
  pressable: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  wrapper: {
    bottom: "14.36%",
    top: "69.01%",
    right: "52.8%",
    height: "16.63%",
    width: "41.36%",
    left: "5.84%"
  },
  container: {
    height: "16.63%",
    width: "41.36%",
    position: "absolute",
    right: "52.8%",
    left: "5.84%"
  },
  iphone13ProMax10Item: {
    width: "11.92%",
    right: "75.23%",
    left: "12.85%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  iphone13ProMax10Inner: {
    right: "68.93%",
    width: "25.23%",
    borderRadius: Border.br_5xs,
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    left: "5.84%",
    position: "absolute"
  },
  pressable2: {
    height: "100%",
    width: "100%"
  },
  frame: {
    left: "38.32%",
    right: "38.08%",
    width: "23.6%"
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
  rectangleLineargradient: {
    left: "69.63%",
    right: "5.14%",
    width: "25.23%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  iphone13ProMax10Child1: {
    left: "53.04%",
    bottom: "14.36%",
    top: "69.01%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    right: "5.61%"
  },
  wrapper1: {
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
    height: "2.7%"
  },
  breadWithAPieceOfButterT: {
    height: "19.65%",
    width: "41.12%",
    top: "47.73%",
    bottom: "32.61%",
    left: "53.27%",
    right: "5.61%",
    position: "absolute"
  },
  nutrition: {
    width: "25.7%",
    top: "32.72%",
    left: "38.08%",
    fontSize: FontSize.size_6xl,
    height: "2.92%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  groupIcon: {
    height: "19.87%",
    width: "42.99%",
    top: "37.47%",
    right: "46.96%",
    bottom: "42.66%"
  },
  quality: {
    width: "12.15%",
    top: "44.6%",
    left: "27.1%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    height: "2.7%",
    position: "absolute"
  },
  text: {
    top: "46.33%",
    left: "21.73%",
    textAlign: "left",
    color: Color.black,
    height: "2.7%",
    position: "absolute"
  },
  text1: {
    fontSize: FontSize.size_6xl
  },
  kcal1: {
    fontSize: FontSize.size_sm
  },
  kcal: {
    top: "38.12%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  kcal2: {
    top: "43.52%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  consumed: {
    top: "41.14%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    left: "61.92%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  remaining: {
    top: "46.54%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    left: "61.92%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  youngWomanSleepingOnArms: {
    height: "8.53%",
    width: "37.62%",
    top: "78.19%",
    right: "52.34%",
    bottom: "13.28%"
  },
  h30m: {
    top: "72.14%",
    width: "22.2%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl
  },
  icon: {
    height: "100%",
    width: "100%"
  },
  maskGroup: {
    bottom: "14.36%",
    top: "69.01%"
  },
  burned: {
    top: "73.43%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    width: "15.65%"
  },
  sleepDuration: {
    width: "24.3%",
    top: "75.05%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  kcal4: {
    top: "70.52%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  bpm: {
    top: "91.47%",
    width: "28.27%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  avgHeartRate: {
    width: "20.09%",
    top: "94.38%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    left: "57.71%"
  },
  tennisPlayerIcon: {
    height: "17.93%",
    width: "17.52%",
    top: "92.66%",
    right: "6.31%",
    bottom: "-10.58%",
    left: "76.17%",
    position: "absolute"
  },
  womanMeditatesUnderARainbo: {
    height: "12.53%",
    width: "27.8%",
    top: "93.2%",
    right: "50.23%",
    bottom: "-5.72%",
    left: "21.96%",
    position: "absolute"
  },
  heyZaineb: {
    height: "55.05%",
    width: "81.25%",
    top: "44.95%",
    left: "0%",
    fontSize: FontSize.size_27xl
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
    right: "8.18%",
    bottom: "84.13%"
  },
  moreSelfLove: {
    width: "35.05%",
    top: "91.36%",
    left: "8.88%",
    fontSize: FontSize.size_mid
  },
  iphone13ProMax10: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax10;
