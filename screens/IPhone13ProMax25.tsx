import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax25 = () => {
const navigation = useNavigation();
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax25}>
      <LinearGradient style={[styles.iphone13ProMax25Child, styles.pressableBg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.wrapper, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax28")} />
      </LinearGradient>
      <Image style={[styles.iphone13ProMax25Item, styles.iconLayout]} contentFit="cover" source={require("../assets/ellipse-51.png")} />
      <LinearGradient style={[styles.container, styles.wrapper1Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax29")} />
      </LinearGradient>
      <LinearGradient style={[styles.iphone13ProMax25Inner, styles.iphone13Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Text style={[styles.quality, styles.bpmFlexBox]}>Quality</Text>
      <Text style={[styles.text, styles.bpmTypo]}>81.4 %</Text>
      <Text style={[styles.sleepAnalysis, styles.sleepLayout]}>Sleep Analysis</Text>
      <Text style={[styles.h50m, styles.sleepLayout]}>7h 50m</Text>
      <Text style={[styles.sleepDuration, styles.sleepLayout]}>Sleep Duration</Text>
      <Pressable style={styles.weekly} onPress={() => navigation.navigate("IPhone13ProMax19")}>
        <Text style={[styles.weekly1, styles.daily1Typo]}>Weekly</Text>
      </Pressable>
      <LinearGradient style={[styles.rectangleLineargradient, styles.iphone13Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax26")} />
      </LinearGradient>
      <Text style={[styles.kcal, styles.kcalPosition]}>
        <Text style={styles.text1}>1270</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.selfLove, styles.kcalTypo]}>{`Self Love &
Positivity`}</Text>
      <LinearGradient style={[styles.wrapper1, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iconLayout1]} onPress={() => navigation.navigate("IPhone13ProMax27")} />
      </LinearGradient>
      <Text style={[styles.consumed, styles.burnedTypo]}>Consumed</Text>
      <Text style={[styles.kcal2, styles.kcal2Position]}>
        <Text style={styles.text1}>950</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.bpm, styles.bpmPosition]}>
        <Text style={styles.text1}>74</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Text style={[styles.monthly, styles.daily1Typo]}>Monthly</Text>
      <Image style={[styles.youngWomanSleepingOnArms, styles.iconLayout]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms4.png")} />
      <Text style={[styles.burned, styles.kcal2Position]}>Burned</Text>
      <Text style={[styles.avgHeartRate, styles.bpmPosition]}>Avg Heart rate</Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.iconLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich2.png")} />
      <Image style={[styles.womanMeditatesUnderARainbo, styles.iconLayout]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow3.png")} />
      <Image style={[styles.girlDoesSportsWithDumbbell, styles.tennisPlayerIconPosition]} contentFit="cover" source={require("../assets/girl-does-sports-with-dumbbells1.png")} />
      <Image style={[styles.tennisPlayerIcon, styles.tennisPlayerIconPosition]} contentFit="cover" source={require("../assets/tennis-player2.png")} />
      <Image style={[styles.groupIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/group-46.png")} />
      <LinearGradient style={[styles.iphone13ProMax25Child1, styles.iphone13Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Pressable style={[styles.daily, styles.bpmPosition]} onPress={() => navigation.navigate("IPhone13ProMax16")}>
        <Text style={[styles.daily1, styles.daily1Typo]}>Daily</Text>
      </Pressable>
      <View style={styles.heyZainebParent}>
        <Text style={[styles.heyZaineb, styles.bpmTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/doorbell1.png")} />
        <Pressable style={styles.slider} onPress={openSliderIcon}>
          <Image style={styles.iconLayout1} contentFit="cover" source={require("../assets/slider.png")} />
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
  iconLayout1: {
    height: "100%",
    width: "100%"
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  wrapper1Position: {
    bottom: "-6.48%",
    top: "89.85%"
  },
  iphone13Layout: {
    borderRadius: Border.br_5xs,
    height: "5.4%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  bpmFlexBox: {
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
    color: Color.black,
    position: "absolute"
  },
  daily1Typo: {
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.black,
    height: "2.7%"
  },
  framePosition: {
    left: "53.04%",
    height: "16.63%",
    width: "41.36%",
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
    top: "70.63%",
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
    position: "absolute"
  },
  tennisPlayerIconPosition: {
    top: "92.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  iphone13ProMax25Child: {
    height: "33.15%",
    width: "86.92%",
    top: "31.53%",
    bottom: "35.31%",
    left: "7.48%",
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
  iphone13ProMax25Item: {
    width: "11.92%",
    right: "13.08%",
    left: "75%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    maxWidth: "100%"
  },
  container: {
    height: "16.63%",
    width: "41.36%",
    right: "51.17%",
    left: "7.48%",
    position: "absolute"
  },
  iphone13ProMax25Inner: {
    top: "21.92%",
    right: "37.62%",
    bottom: "72.68%",
    left: "38.79%",
    width: "23.6%",
    borderRadius: Border.br_5xs
  },
  quality: {
    width: "12.15%",
    top: "45.14%",
    left: "27.1%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    height: "2.7%",
    color: Color.black,
    position: "absolute"
  },
  text: {
    top: "46.87%",
    left: "23.36%",
    fontSize: FontSize.size_6xl,
    width: "19.16%",
    position: "absolute",
    textAlign: "left",
    color: Color.black,
    height: "2.7%"
  },
  sleepAnalysis: {
    width: "38.79%",
    top: "33.15%",
    left: "31.78%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl
  },
  h50m: {
    width: "22.2%",
    top: "43.3%",
    left: "59.81%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl
  },
  sleepDuration: {
    width: "24.3%",
    top: "46.54%",
    left: "57.94%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  weekly1: {
    width: "17.06%"
  },
  weekly: {
    left: "42.52%",
    top: "23.22%",
    position: "absolute"
  },
  rectangleLineargradient: {
    width: "25.23%",
    left: "69.16%",
    bottom: "72.79%",
    top: "21.81%",
    right: "5.61%"
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
    top: "70.63%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    width: "28.27%",
    height: "2.7%"
  },
  selfLove: {
    height: "4.32%",
    width: "35.05%",
    left: "10.98%",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  wrapper1: {
    bottom: "-6.48%",
    top: "89.85%"
  },
  consumed: {
    top: "73.65%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    left: "57.71%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  kcal2: {
    top: "90.39%",
    width: "28.27%",
    height: "2.7%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
  },
  bpm: {
    top: "90.93%",
    width: "28.27%",
    height: "2.7%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black
  },
  monthly: {
    left: "71.96%",
    top: "23.22%",
    width: "19.16%",
    position: "absolute"
  },
  youngWomanSleepingOnArms: {
    height: "13.82%",
    width: "72.9%",
    top: "52.48%",
    bottom: "33.69%",
    left: "21.5%",
    right: "5.61%"
  },
  burned: {
    top: "93.3%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    width: "15.65%"
  },
  avgHeartRate: {
    width: "20.09%",
    top: "93.84%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    left: "12.85%",
    textAlign: "left",
    color: Color.black
  },
  breadWithAPieceOfButterT: {
    height: "15.33%",
    width: "31.54%",
    top: "72.68%",
    right: "3.27%",
    bottom: "11.99%",
    left: "65.19%"
  },
  womanMeditatesUnderARainbo: {
    height: "12.53%",
    width: "27.8%",
    top: "73.54%",
    right: "47.9%",
    bottom: "13.93%",
    left: "24.3%"
  },
  girlDoesSportsWithDumbbell: {
    height: "7.88%",
    width: "13.32%",
    right: "8.41%",
    bottom: "0%",
    left: "78.27%"
  },
  tennisPlayerIcon: {
    height: "17.93%",
    width: "17.52%",
    bottom: "-10.04%",
    left: "31.31%",
    right: "51.17%",
    top: "92.12%"
  },
  groupIcon: {
    height: "19.87%",
    width: "42.99%",
    top: "38.23%",
    right: "46.5%",
    bottom: "41.9%",
    left: "10.51%"
  },
  iphone13ProMax25Child1: {
    right: "68.93%",
    width: "23.6%",
    borderRadius: Border.br_5xs,
    bottom: "72.79%",
    top: "21.81%",
    left: "7.48%"
  },
  daily1: {
    width: "13.55%"
  },
  daily: {
    top: "23.22%"
  },
  heyZaineb: {
    height: "54.9%",
    width: "80.78%",
    top: "45.1%",
    left: "0.58%",
    fontSize: FontSize.size_27xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  doorbellIcon: {
    height: "29.28%",
    width: "8.64%",
    top: "0.26%",
    right: "0%",
    bottom: "70.46%",
    left: "91.36%"
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
    height: "11.8%",
    width: "86.49%",
    top: "4.07%",
    right: "6.54%",
    bottom: "84.13%",
    left: "6.97%",
    position: "absolute"
  },
  iphone13ProMax25: {
    backgroundColor: Color.white,
    flex: 1,
    height: 933,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax25;
