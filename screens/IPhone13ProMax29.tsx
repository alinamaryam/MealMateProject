import React, { useState, useCallback } from 'react';
    import {StyleSheet, View, Pressable, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax29 = () => {
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax29}>
      <LinearGradient style={[styles.iphone13ProMax29Child, styles.pressable2Bg]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <Image style={[styles.iphone13ProMax29Item, styles.groupIconLayout]} contentFit="cover" source={require("../assets/ellipse-5.png")} />
      <LinearGradient style={[styles.wrapper, styles.wrapperLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableLayout]} onPress={() => navigation.navigate("IPhone13ProMax17")} />
      </LinearGradient>
      <LinearGradient style={[styles.container, styles.wrapperLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.pressableLayout]} onPress={() => navigation.navigate("IPhone13ProMax23")} />
      </LinearGradient>
      <Text style={[styles.daily, styles.h50mFlexBox]}>Daily</Text>
      <Text style={[styles.weekly, styles.h50mFlexBox]}>Weekly</Text>
      <LinearGradient style={[styles.iphone13ProMax29Inner, styles.pressableLayout]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={[styles.frame, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressableLayout1]} onPress={() => navigation.navigate("IPhone13ProMax26")} />
      </LinearGradient>
      <LinearGradient style={[styles.rectangleLineargradient, styles.wrapper2Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressableLayout1]} onPress={() => navigation.navigate("IPhone13ProMax25")} />
      </LinearGradient>
      <LinearGradient style={[styles.wrapper1, styles.framePosition]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressableLayout1]} onPress={() => navigation.navigate("IPhone13ProMax28")} />
      </LinearGradient>
      <LinearGradient style={[styles.wrapper2, styles.wrapper2Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable2, styles.pressableLayout1]} onPress={() => navigation.navigate("IPhone13ProMax27")} />
      </LinearGradient>
      <Text style={[styles.kcal, styles.kcalTypo]}>
        <Text style={styles.text}>350</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Image style={[styles.youngWomanSleepingOnArms, styles.groupIconLayout]} contentFit="cover" source={require("../assets/young-woman-sleeping-on-arms3.png")} />
      <Image style={[styles.maskGroupIcon, styles.groupIconLayout]} contentFit="cover" source={require("../assets/mask-group3.png")} />
      <View style={styles.maskGroup}>
        <Image style={[styles.womanMeditatesUnderARainbo, styles.doorbellIconPosition]} contentFit="cover" source={require("../assets/woman-meditates-under-a-rainbow1.png")} />
        <Text style={[styles.selfLove, styles.selfLoveTypo]}>{`Self love &
Positivity`}</Text>
        <Image style={[styles.girlDoesSportsWithDumbbell, styles.groupIconLayout]} contentFit="cover" source={require("../assets/girl-does-sports-with-dumbbells.png")} />
      </View>
      <Text style={[styles.kcal2, styles.kcalTypo]}>
        <Text style={styles.text}>950</Text>
        <Text style={styles.kcal1}>kcal</Text>
      </Text>
      <Text style={[styles.h50m, styles.h50mTypo]}>7h 50m</Text>
      <Text style={[styles.text2, styles.kcalTypo]}>{` `}</Text>
      <Text style={[styles.sleepDuration, styles.qualityTypo]}>Sleep Duration</Text>
      <Image style={[styles.breadWithAPieceOfButterT, styles.groupIconLayout]} contentFit="cover" source={require("../assets/bread-with-a-piece-of-butter-to-make-a-sandwich.png")} />
      <Text style={[styles.consumed, styles.burnedTypo]}>Consumed</Text>
      <View style={styles.sliderParent}>
        <Pressable style={styles.slider} onPress={openSliderIcon}>
          <Image style={styles.pressableLayout1} contentFit="cover" source={require("../assets/slider.png")} />
        </Pressable>
        <Text style={[styles.heyZaineb, styles.selfLoveTypo]}>Hey Zaineb,</Text>
        <Image style={[styles.doorbellIcon, styles.doorbellIconPosition]} contentFit="cover" source={require("../assets/doorbell.png")} />
      </View>
      <Text style={[styles.burned, styles.burnedTypo]}>Burned</Text>
      <Text style={[styles.monthly, styles.h50mFlexBox]}>Monthly</Text>
      <Text style={[styles.heartRate, styles.kcalTypo]}>Heart Rate</Text>
      <Image style={[styles.groupIcon, styles.groupIconLayout]} contentFit="cover" source={require("../assets/group-45.png")} />
      <Text style={[styles.quality, styles.qualityTypo]}>Quality</Text>
      <Text style={[styles.text3, styles.text3Position]}>82.09 %</Text>
      <Text style={[styles.bpm, styles.kcalTypo]}>
        <Text style={styles.text}>74</Text>
        <Text style={styles.kcal1}>bpm</Text>
      </Text>
      <Text style={[styles.avgHeartRate, styles.text3Position]}>Avg Heart rate</Text>
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
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  wrapperLayout: {
    width: "23.6%",
    height: "5.4%",
    position: "absolute"
  },
  pressableLayout: {
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent"
  },
  h50mFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  framePosition: {
    height: "16.63%",
    width: "41.36%",
    bottom: "14.36%",
    top: "69.01%",
    position: "absolute"
  },
  pressableLayout1: {
    height: "100%",
    width: "100%"
  },
  wrapper2Position: {
    bottom: "-6.59%",
    top: "89.96%",
    height: "16.63%",
    width: "41.36%",
    position: "absolute"
  },
  kcalTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  doorbellIconPosition: {
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  selfLoveTypo: {
    left: "0%",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  h50mTypo: {
    width: "22.2%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700"
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
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300"
  },
  text3Position: {
    top: "46.33%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  iphone13ProMax29Child: {
    left: "7.48%",
    bottom: "35.31%",
    top: "31.53%",
    width: "86.92%",
    height: "33.15%",
    right: "5.61%",
    position: "absolute"
  },
  iphone13ProMax29Item: {
    width: "11.92%",
    right: "13.08%",
    left: "75%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%"
  },
  pressable: {
    height: "100%",
    width: "100%"
  },
  wrapper: {
    right: "68.93%",
    bottom: "72.79%",
    top: "21.81%",
    left: "7.48%"
  },
  container: {
    left: "38.79%",
    top: "21.92%",
    right: "37.62%",
    bottom: "72.68%"
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
    left: "42.06%",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    top: "23.22%",
    color: Color.black,
    height: "2.7%"
  },
  iphone13ProMax29Inner: {
    width: "25.23%",
    left: "69.16%",
    bottom: "72.79%",
    top: "21.81%",
    height: "5.4%",
    right: "5.61%",
    position: "absolute"
  },
  pressable2: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl
  },
  frame: {
    right: "51.17%",
    left: "7.48%"
  },
  rectangleLineargradient: {
    right: "51.17%",
    left: "7.48%"
  },
  wrapper1: {
    left: "53.04%",
    right: "5.61%"
  },
  wrapper2: {
    left: "53.04%",
    right: "5.61%"
  },
  text: {
    fontSize: FontSize.size_6xl
  },
  kcal1: {
    fontSize: FontSize.size_sm
  },
  kcal: {
    top: "70.52%",
    left: "11.45%",
    width: "28.27%",
    fontWeight: "700",
    height: "2.7%"
  },
  youngWomanSleepingOnArms: {
    height: "5.62%",
    width: "30.14%",
    top: "95.36%",
    bottom: "-0.97%",
    left: "18.69%",
    right: "51.17%"
  },
  maskGroupIcon: {
    left: "7.48%",
    bottom: "35.31%",
    top: "31.53%",
    width: "86.92%",
    height: "33.15%",
    right: "5.61%"
  },
  womanMeditatesUnderARainbo: {
    height: "27.62%",
    width: "66.11%",
    top: "4.05%",
    bottom: "68.33%",
    left: "33.89%"
  },
  selfLove: {
    width: "83.33%",
    fontSize: FontSize.size_mid,
    top: "0%"
  },
  girlDoesSportsWithDumbbell: {
    height: "19.76%",
    width: "62.78%",
    top: "43.57%",
    right: "10%",
    bottom: "36.67%",
    left: "27.22%"
  },
  maskGroup: {
    height: "45.36%",
    width: "42.06%",
    top: "71.27%",
    right: "2.8%",
    bottom: "-16.63%",
    left: "55.14%",
    position: "absolute"
  },
  kcal2: {
    top: "91.25%",
    left: "57.24%",
    width: "28.27%",
    fontWeight: "700",
    height: "2.7%"
  },
  h50m: {
    top: "90.82%",
    left: "10.05%",
    height: "2.92%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
  },
  text2: {
    top: 825,
    left: 448,
    fontSize: FontSize.size_6xl
  },
  sleepDuration: {
    width: "24.3%",
    top: "93.74%",
    fontSize: FontSize.size_base,
    left: "10.05%",
    height: "2.92%"
  },
  breadWithAPieceOfButterT: {
    height: "13.61%",
    width: "28.5%",
    top: "72.46%",
    right: "49.53%",
    bottom: "13.93%",
    left: "21.96%"
  },
  consumed: {
    top: "73.22%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    left: "11.45%"
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
  heyZaineb: {
    height: "55.05%",
    width: "81.25%",
    top: "44.95%",
    fontSize: FontSize.size_27xl
  },
  doorbellIcon: {
    height: "29.36%",
    width: "8.7%",
    bottom: "70.64%",
    left: "91.3%",
    top: "0%"
  },
  sliderParent: {
    top: 38,
    left: 32,
    width: 368,
    height: 109,
    position: "absolute"
  },
  burned: {
    top: "94.06%",
    left: "57.48%",
    width: "15.65%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    textAlign: "left",
    color: Color.black,
    position: "absolute"
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
    bottom: "42.66%",
    left: "10.05%"
  },
  quality: {
    width: "12.15%",
    top: "44.6%",
    left: "27.1%",
    fontSize: FontSize.size_sm,
    height: "2.7%"
  },
  text3: {
    left: "21.73%",
    width: "22.2%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    height: "2.7%"
  },
  bpm: {
    top: "43.41%",
    width: "28.27%",
    fontWeight: "700",
    height: "2.7%",
    left: "53.04%"
  },
  avgHeartRate: {
    width: "20.09%",
    fontSize: FontSize.size_smi,
    height: "1.84%",
    fontFamily: FontFamily.latoLight,
    fontWeight: "300",
    top: "46.33%",
    left: "53.04%"
  },
  iphone13ProMax29: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax29;
