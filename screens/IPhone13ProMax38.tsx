import React, { useState, useCallback } from 'react';
    import {Image} from "expo-image";
import {StyleSheet, Pressable, Text, View, Modal} from "react-native";
import FrameComponent2 from "../components/FrameComponent2";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
    
const IPhone13ProMax38 = () => {
const [sliderIconVisible, setSliderIconVisible] = useState(false);

  const openSliderIcon = useCallback(() => {
    setSliderIconVisible(true);
  }, []);


  const closeSliderIcon = useCallback(() => {
    setSliderIconVisible(false);
  }, []);


  return (<>
    <View style={styles.iphone13ProMax38}>
      <Image style={styles.doorbellIcon} contentFit="cover" source={require("../assets/doorbell.png")} />
      <Pressable style={styles.slider} onPress={openSliderIcon}>
        <Image style={styles.icon} contentFit="cover" source={require("../assets/slider.png")} />
      </Pressable>
      <Text style={styles.noNotifications}>No Notifications!</Text>
    </View>

            <Modal animationType="fade" transparent visible={sliderIconVisible}>
              <View style={styles.sliderIconOverlay}>
                
<Pressable style={styles.sliderIconBg} onPress={closeSliderIcon} />
<FrameComponent2 onClose={closeSliderIcon} />
              </View>
            </Modal></>);
};

const styles = StyleSheet.create({
  doorbellIcon: {
    height: "3.46%",
    width: "7.48%",
    top: "4.43%",
    right: "7.01%",
    bottom: "92.12%",
    left: "85.51%",
    maxWidth: "100%",
    maxHeight: "100%",
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
  icon: {
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
  noNotifications: {
    height: "4.1%",
    width: "46.5%",
    top: "39.31%",
    left: "27.8%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.latoRegular,
    color: Color.black,
    textAlign: "left",
    opacity: 0.32,
    position: "absolute"
  },
  iphone13ProMax38: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%"
  }
});
      
export default IPhone13ProMax38;
