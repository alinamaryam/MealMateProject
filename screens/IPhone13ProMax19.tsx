import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax19 = () => {
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax19}>
      <LinearGradient style={[styles.iphone13ProMax19Child, styles.pressableBg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.wrapper, styles.wrapperPosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableLayout]} onPress={() => navigation.navigate("IPhone13ProMax22")} />
      </LinearGradient>
      <Image style={[styles.iphone13ProMax19Item, styles.iconLayout]} contentFit="cover" source={require("../assets/ellipse-5.png")} />
      <LinearGradient style={[styles.container, styles.wrapper1Position1]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableLayout]} onPress={() => navigation.navigate("IPhone13ProMax23")} />
      </LinearGradient>
      <LinearGradient style={[styles.iphone13ProMax19Inner, styles.pressable2Layout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Text style={[styles.quality, styles.weeklyFlexBox]}>Quality</Text>
      <Text style={[styles.text, styles.bpmTypo]}>81.4 %</Text>
      <Text style={[styles.sleepAnalysis, styles.sleepLayout]}>Sleep Analysis</Text>
      <Text style={[styles.h22m, styles.sleepLayout]}>8h 22m</Text>
      <Text style={[styles.sleepDuration, styles.sleepLayout]}>Sleep Duration</Text>
      <Text style={[styles.weekly, styles.dailyTypo]}>Weekly</Text>
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Layout]} onPress={() => navigation.navigate("IPhone13ProMax25")} />
      </LinearGradient>
      <LinearGradient style={[styles.rectangleLineargradient, styles.wrapper1Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableLayout]} onPress={() => navigation.navigate("IPhone13ProMax20")} />
      </LinearGradient>
      <Text style={[styles.kcal, styles.kcalPosition]}>
        <Text style={styles.text1}>1200</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.morePositivity, styles.kcalTypo]}>{`More 
Positivity`}</Text>
      <LinearGradient style={[styles.wrapper1, styles.wrapper1Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableLayout]} onPress={() => navigation.navigate("IPhone13ProMax21")} />
      </LinearGradient>
      <Text style={[styles.consumed, styles.burnedTypo]}>Consumed</Text>
      <Text style={[styles.kcal2, styles.kcal2Position]}>
        <Text style={styles.text1}>1050</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.bpm, styles.bpmPosition]}>
        <Text style={styles.text1}>70</Text>
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
      <Image style={[styles.groupIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/group-49.png")} />
      <LinearGradient style={[styles.wrapper2, styles.iphone13Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressable2Layout]} onPress={() => navigation.navigate("IPhone13ProMax16")} />
      </LinearGradient>
      <Text style={[styles.daily, styles.bpmPosition]}>Daily</Text>
      <View style={[styles.heyZainebParent, styles.framePosition]}>
        <Text style={[styles.heyZaineb, styles.bpmTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/doorbell.png")} />
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
  pressableLayout: {
    height: "100%",
    width: "100%"
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  wrapper1Position1: {
    bottom: "-6.59%",
    top: "89.96%"
  },
  pressable2Layout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent"
  },
  weeklyFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute"
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
  dailyTypo: {
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    height: "2.7%"
  },
  framePosition: {
    right: "6.54%",
    position: "absolute"
  },
  wrapper1Position: {
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
  tennisPlayerIconPosition: {
    top: "92.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  iphone13Position: {
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%"
  },
  iphone13ProMax19Child: {
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
  iphone13ProMax19Item: {
    width: "11.92%",
    right: "43.22%",
    left: "44.86%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%"
  },
  container: {
    height: "16.63%",
    width: "41.36%",
    right: "51.17%",
    left: "7.48%",
    position: "absolute"
  },
  iphone13ProMax19Inner: {
    width: "23.6%",
    right: "38.08%",
    left: "38.32%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    position: "absolute"
  },
  quality: {
    width: "12.15%",
    top: "44.17%",
    left: "27.1%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    height: "2.7%"
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
    fontSize: FontSize.size_6xl
  },
  h22m: {
    width: "22.2%",
    top: "43.41%",
    left: "59.81%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl
  },
  sleepDuration: {
    top: "46.65%",
    left: "57.94%",
    fontSize: FontSize.size_base,
    width: "24.3%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  weekly: {
    width: "17.06%",
    left: "41.36%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  pressable2: {
    height: "100%",
    width: "100%"
  },
  frame: {
    left: "69.16%",
    width: "24.3%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%"
  },
  rectangleLineargradient: {
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
  morePositivity: {
    width: "35.05%",
    left: "10.98%",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  wrapper1: {
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
    right: "5.61%"
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
    left: "65.19%"
  },
  womanMeditatesUnderARainbo: {
    height: "12.53%",
    width: "27.8%",
    top: "73.65%",
    right: "47.9%",
    bottom: "13.82%",
    left: "24.3%"
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
    left: "10.51%"
  },
  wrapper2: {
    right: "67.99%",
    width: "24.53%",
    left: "7.48%",
    position: "absolute"
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
    top: "0%",
    right: "0%",
    bottom: "70.64%",
    left: "91.3%"
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
    bottom: "84.13%",
    left: "7.48%"
  },
  iphone13ProMax19: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax19;
