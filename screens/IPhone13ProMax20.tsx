import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax20 = () => {
const navigation = useNavigation();
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax20}>
      <LinearGradient style={[styles.iphone13ProMax20Child, styles.iphone13ChildBg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.wrapper, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax19")} />
      </LinearGradient>
      <LinearGradient style={[styles.container, styles.wrapper1Position1]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax22")} />
      </LinearGradient>
      <Image style={[styles.iphone13ProMax20Item, styles.iconLayout]} contentFit="cover" source={require("../assets/ellipse-5.png")} />
      <LinearGradient style={[styles.iphone13ProMax20Inner, styles.pressable2Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.rectangleLineargradient, styles.pressable2Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Text style={[styles.daily, styles.textFlexBox]}>Daily</Text>
      <Text style={[styles.weekly, styles.textFlexBox]}>Weekly</Text>
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Layout]} onPress={() => navigation.navigate("IPhone13ProMax26")} />
      </LinearGradient>
      <LinearGradient style={[styles.iphone13ProMax20Child1, styles.wrapper1Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.wrapper1, styles.wrapper1Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax23")} />
      </LinearGradient>
      <Text style={[styles.monthly, styles.textFlexBox]}>Monthly</Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.iconLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich1.png")} />
      <Text style={[styles.nutrition, styles.nutritionTypo]}>Nutrition</Text>
      <Image style={[styles.groupIcon, styles.groupIconPosition]} contentFit="cover" source={require("../assets/group-41.png")} />
      <Text style={[styles.quality, styles.qualityTypo]}>Quality</Text>
      <Text style={[styles.text, styles.textTypo]}>50.19 %</Text>
      <Text style={[styles.kcal, styles.kcalPosition]}>
        <Text style={styles.text1}>618</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.kcal2, styles.kcalPosition]}>
        <Text style={styles.text1}>1882</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.consumed, styles.burnedTypo]}>Consumed</Text>
      <Text style={[styles.remaining, styles.burnedTypo]}>Remaining</Text>
      <Image style={[styles.youngWomanSleepingOnArms, styles.groupIconPosition]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms.png")} />
      <Text style={[styles.h30m, styles.h30mPosition]}>8h 30m</Text>
      <Pressable style={[styles.maskGroup, styles.wrapper1Position]} onPress={() => navigation.navigate("IPhone13ProMax21")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/mask-group1.png")} />
      </Pressable>
      <Text style={[styles.burned, styles.bpmPosition]}>Burned</Text>
      <Text style={[styles.sleepDuration, styles.h30mPosition]}>Sleep Duration</Text>
      <Text style={[styles.kcal4, styles.bpmPosition]}>
        <Text style={styles.text1}>1050</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.bpm, styles.bpmPosition]}>
        <Text style={styles.text1}>70</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Text style={[styles.avgHeartRate, styles.bpmPosition]}>Avg Heart rate</Text>
      <Image style={[styles.tennisPlayerIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/tennis-player1.png")} />
      <Image style={[styles.womanMeditatesUnderARainbo, styles.iconLayout]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow1.png")} />
      <View style={styles.heyZainebParent}>
        <Text style={[styles.heyZaineb, styles.nutritionTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/doorbell.png")} />
        <Pressable style={styles.slider} onPress={openSliderIcon}>
          <Image style={styles.iconLayout1} contentFit="cover" source={require("../assets/slider.png")} />
        </Pressable>
      </View>
      <Text style={[styles.morePositivity, styles.groupIconPosition]}>{`More
Positivity`}</Text>
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
  wrapperPosition: {
    height: "16.63%",
    width: "41.36%",
    right: "52.57%",
    left: "6.07%",
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
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    height: "2.7%",
    position: "absolute"
  },
  framePosition: {
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  wrapper1Position: {
    left: "53.04%",
    height: "16.63%",
    width: "41.36%",
    right: "5.61%",
    position: "absolute"
  },
  nutritionTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black
  },
  groupIconPosition: {
    left: "10.05%",
    position: "absolute"
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
  bpmPosition: {
    left: "57.24%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  iphone13ProMax20Child: {
    height: "33.15%",
    width: "88.32%",
    top: "31.53%",
    bottom: "35.31%",
    left: "6.07%",
    right: "5.61%",
    position: "absolute"
  },
  pressable: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  wrapper: {
    bottom: "14.36%",
    top: "69.01%"
  },
  container: {
    height: "16.63%",
    width: "41.36%",
    right: "52.57%",
    left: "6.07%",
    position: "absolute"
  },
  iphone13ProMax20Item: {
    width: "11.92%",
    right: "44.16%",
    left: "43.93%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    maxWidth: "100%",
    position: "absolute"
  },
  iphone13ProMax20Inner: {
    right: "70.33%",
    width: "23.6%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute",
    left: "6.07%"
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
  pressable2: {
    height: "100%",
    width: "100%"
  },
  frame: {
    left: "69.16%",
    right: "7.24%"
  },
  iphone13ProMax20Child1: {
    bottom: "14.36%",
    top: "69.01%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
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
    fontWeight: "700",
    position: "absolute"
  },
  groupIcon: {
    height: "19.87%",
    width: "42.99%",
    top: "37.47%",
    right: "46.96%",
    bottom: "42.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
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
    top: "78.83%",
    right: "52.34%",
    bottom: "12.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
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
  womanMeditatesUnderARainbo: {
    height: "12.53%",
    width: "27.8%",
    top: "93.2%",
    right: "48.6%",
    bottom: "-5.72%",
    left: "23.6%",
    position: "absolute"
  },
  heyZaineb: {
    height: "55.05%",
    width: "81.25%",
    top: "44.95%",
    left: "0%",
    fontSize: FontSize.size_27xl,
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
  morePositivity: {
    width: "35.05%",
    top: "91.14%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black
  },
  iphone13ProMax20: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax20;
