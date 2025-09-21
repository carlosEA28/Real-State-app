import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    "Rubik-Bold": "../assets/fonts/Rubik_Bold.ttf",
    "Rubik-ExtraBold": "../assets/fonts/Rubik_ExtraBold.ttf",
    "Rubik-Light": "../assets/fonts/Rubik_Light.ttf",
    "Rubik-Medium": "../assets/fonts/Rubik_Medium.ttf",
    "Rubik-Regular": "../assets/fonts/Rubik_Regular.ttf",
    "Rubik-SemiBold": "../assets/fonts/Rubik_SemiBold.ttf",
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return <Stack />;
  }
}
