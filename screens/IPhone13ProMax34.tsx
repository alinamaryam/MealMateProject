import React, { useState, useCallback } from 'react';
    import {Image} from "expo-image";
import {StyleSheet, Pressable, View, Text, Modal} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
    
const IPhone13ProMax34 = () => {
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax34}>
      <Image style={styles.doorbellIcon} contentFit="cover" source={require("../assets/doorbell.png")} />
      <Pressable style={styles.slider} onPress={openSliderIcon}>
        <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/slider.png")} />
      </Pressable>
      <LinearGradient style={[styles.iphone13ProMax34Child, styles.iphone13ChildBg]} locations={[0,1]} colors={['rgba(232, 232, 232, 0.32)','rgba(142, 202, 205, 0.24)']} />
      <LinearGradient style={[styles.iphone13ProMax34Item, styles.iphone13Position]} locations={[0,1]} colors={['rgba(232, 232, 232, 0.32)','rgba(142, 202, 205, 0.24)']} />
      <LinearGradient style={[styles.iphone13ProMax34Inner, styles.iphone13ChildBg]} locations={[0,1]} colors={['rgba(232, 232, 232, 0.32)','rgba(142, 202, 205, 0.24)']} />
      <LinearGradient style={[styles.rectangleLineargradient, styles.iphone13ChildBg]} locations={[0,1]} colors={['rgba(232, 232, 232, 0.32)','rgba(142, 202, 205, 0.24)']} />
      <LinearGradient style={[styles.iphone13ProMax34Child1, styles.iphone13ChildBg]} locations={[0,1]} colors={['rgba(232, 232, 232, 0.32)','rgba(142, 202, 205, 0.24)']} />
      <Text style={[styles.congratulationsYouHave, styles.yourTypo]}>{`Congratulations! You have completed
20 workouts this week.`}</Text>
      <Text style={[styles.yourNutritionIs, styles.yourTypo]}>{`Your nutrition is very low, Here is a 
tip to improve it.`}</Text>
      <Text style={[styles.youreJustCloser, styles.yourTypo]}>{`You’re just closer to achieve your
goals!`}</Text>
      <Text style={[styles.youreJustCloser1, styles.yourTypo]}>{`You’re just closer to achieve your
goals!`}</Text>
      <Text style={[styles.yourWatchIs, styles.yourTypo]}>your watch is connected successfully</Text>
      <LinearGradient style={[styles.iphone13ProMax34Child2, styles.iphone13Position]} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']} />
      <LinearGradient style={styles.wrapper} locations={[0,1]} colors={['rgba(81, 232, 241, 0.32)','rgba(49, 186, 194, 0.24)']}>
        <Pressable style={[styles.pressable, styles.iphone13ChildBg]} onPress={() => navigation.navigate("IPhone13ProMax38")} />
      </LinearGradient>
      <Text style={[styles.clearAll, styles.yourTypo]}>Clear all</Text>
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
  iphone13Position: {
    bottom: "63.07%",
    top: "27.32%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    left: "7.71%",
    height: "9.61%",
    position: "absolute"
  },
  yourTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute"
  },
  doorbellIcon: {
    height: "3.46%",
    width: "7.48%",
    top: "4.43%",
    bottom: "92.12%",
    left: "85.51%",
    maxWidth: "100%",
    maxHeight: "100%",
    right: "7.01%",
    position: "absolute",
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
  iconLayout: {
    height: "100%",
    width: "100%"
  },
  slider: {
    left: 30,
    top: 41,
    width: 32,
    height: 32,
    position: "absolute"
  },
  iphone13ProMax34Child: {
    top: "13.82%",
    bottom: "76.57%",
    left: "7.71%",
    height: "9.61%",
    borderRadius: Border.br_xl,
    width: "85.28%",
    right: "7.01%",
    position: "absolute"
  },
  iphone13ProMax34Item: {
    width: "85.28%",
    bottom: "63.07%",
    top: "27.32%",
    right: "7.01%"
  },
  iphone13ProMax34Inner: {
    top: "40.82%",
    bottom: "49.57%",
    left: "7.71%",
    height: "9.61%",
    borderRadius: Border.br_xl,
    width: "85.28%",
    right: "7.01%",
    position: "absolute"
  },
  rectangleLineargradient: {
    top: "54.32%",
    bottom: "36.07%",
    left: "7.71%",
    height: "9.61%",
    borderRadius: Border.br_xl,
    width: "85.28%",
    right: "7.01%",
    position: "absolute"
  },
  iphone13ProMax34Child1: {
    top: "67.82%",
    bottom: "22.57%",
    left: "7.71%",
    height: "9.61%",
    borderRadius: Border.br_xl,
    width: "85.28%",
    right: "7.01%",
    position: "absolute"
  },
  congratulationsYouHave: {
    top: "15.98%",
    left: "16.36%",
    width: "74.77%",
    height: "5.83%",
    color: Color.black,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_lgi
  },
  yourNutritionIs: {
    top: "29.48%",
    left: "16.36%",
    width: "74.77%",
    height: "5.83%",
    color: Color.black,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_lgi
  },
  youreJustCloser: {
    top: "42.98%",
    left: "16.36%",
    width: "74.77%",
    height: "5.83%",
    color: Color.black,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_lgi
  },
  youreJustCloser1: {
    top: "56.48%",
    left: "16.36%",
    width: "74.77%",
    height: "5.83%",
    color: Color.black,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_lgi
  },
  yourWatchIs: {
    top: "71.6%",
    left: "16.36%",
    width: "74.77%",
    height: "5.83%",
    color: Color.black,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_lgi
  },
  iphone13ProMax34Child2: {
    width: "3.74%",
    right: "88.55%"
  },
  pressable: {
    height: "100%",
    width: "100%"
  },
  wrapper: {
    left: "34.81%",
    top: "83.91%",
    right: "34.35%",
    bottom: "11.99%",
    width: "30.84%",
    height: "4.1%",
    position: "absolute"
  },
  clearAll: {
    height: "2.92%",
    width: "17.52%",
    top: "84.67%",
    left: "42.29%"
  },
  iphone13ProMax34: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax34;
