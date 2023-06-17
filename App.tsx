const Stack = createNativeStackNavigator();
  import * as React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { useFonts } from 'expo-font';
import IPhone13ProMax1 from "./screens/IPhone13ProMax1";
import IPhone13ProMax23 from "./screens/IPhone13ProMax23";
import IPhone13ProMax20 from "./screens/IPhone13ProMax20";
import IPhone13ProMax26 from "./screens/IPhone13ProMax26";
import IPhone13ProMax28 from "./screens/IPhone13ProMax28";
import IPhone13ProMax27 from "./screens/IPhone13ProMax27";
import IPhone13ProMax29 from "./screens/IPhone13ProMax29";
import IPhone13ProMax25 from "./screens/IPhone13ProMax25";
import IPhone13ProMax38 from "./screens/IPhone13ProMax38";
import IPhone13ProMax37 from "./screens/IPhone13ProMax37";
import IPhone13ProMax36 from "./screens/IPhone13ProMax36";
import IPhone13ProMax35 from "./screens/IPhone13ProMax35";
import IPhone13ProMax34 from "./screens/IPhone13ProMax34";
import FrameScreen from "./screens/FrameScreen";
import IPhone13ProMax32 from "./screens/IPhone13ProMax32";
import IPhone13ProMax31 from "./screens/IPhone13ProMax31";
import IPhone13ProMax30 from "./screens/IPhone13ProMax30";
import IPhone13ProMax22 from "./screens/IPhone13ProMax22";
import IPhone13ProMax21 from "./screens/IPhone13ProMax21";
import IPhone13ProMax19 from "./screens/IPhone13ProMax19";
import IPhone13ProMax17 from "./screens/IPhone13ProMax17";
import IPhone13ProMax16 from "./screens/IPhone13ProMax16";
import IPhone13ProMax14 from "./screens/IPhone13ProMax14";
import IPhone13ProMax13 from "./screens/IPhone13ProMax13";
import IPhone13ProMax10 from "./screens/IPhone13ProMax10";
import IPhone13ProMax9 from "./screens/IPhone13ProMax9";
import IPhone13ProMax4 from "./screens/IPhone13ProMax4";
import IPhone13ProMax3 from "./screens/IPhone13ProMax3";
import IPhone13ProMax2 from "./screens/IPhone13ProMax2";


  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { View, Text, Pressable, TouchableOpacity  } from 'react-native'; 
  
  
  
  
  
  
  
  
  
  

  const App = () => {
    const [hideSplashScreen,setHideSplashScreen] = React.useState(true);
    const [fontsLoaded,error] = useFonts({"Lato_light": require("./assets/fonts/Lato_light.ttf"),
    "Lato_regular": require("./assets/fonts/Lato_regular.ttf"),
    "Lato_medium": require("./assets/fonts/Lato_medium.ttf"),
    "Lato_semibold": require("./assets/fonts/Lato_semibold.ttf"),
    "Lato_bold": require("./assets/fonts/Lato_bold.ttf"),
    "Lato_extrabold": require("./assets/fonts/Lato_extrabold.ttf"),
    });
    
    
    
    
    
    if (!fontsLoaded && !error) {
      return null;
    }

    return (
      <>
      
       
      
      <NavigationContainer>
       {hideSplashScreen? <Stack.Navigator screenOptions={{headerShown: false}}>
       
       
       
       <Stack.Screen name="IPhone13ProMax1" component={IPhone13ProMax1} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax23" component={IPhone13ProMax23} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax20" component={IPhone13ProMax20} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax26" component={IPhone13ProMax26} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax28" component={IPhone13ProMax28} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax27" component={IPhone13ProMax27} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax29" component={IPhone13ProMax29} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax25" component={IPhone13ProMax25} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax38" component={IPhone13ProMax38} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax37" component={IPhone13ProMax37} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax36" component={IPhone13ProMax36} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax35" component={IPhone13ProMax35} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax34" component={IPhone13ProMax34} options={{headerShown: false}}/>
<Stack.Screen name="Frame4" component={FrameScreen} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax32" component={IPhone13ProMax32} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax31" component={IPhone13ProMax31} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax30" component={IPhone13ProMax30} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax22" component={IPhone13ProMax22} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax21" component={IPhone13ProMax21} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax19" component={IPhone13ProMax19} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax17" component={IPhone13ProMax17} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax16" component={IPhone13ProMax16} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax14" component={IPhone13ProMax14} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax13" component={IPhone13ProMax13} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax10" component={IPhone13ProMax10} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax9" component={IPhone13ProMax9} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax4" component={IPhone13ProMax4} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax3" component={IPhone13ProMax3} options={{headerShown: false}}/>
<Stack.Screen name="IPhone13ProMax2" component={IPhone13ProMax2} options={{headerShown: false}}/>
        </Stack.Navigator>
       : null}
        </NavigationContainer>
        
        
        </>
        );
      };
      export default App;
      