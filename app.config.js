import "dotenv/config";
export default {
  expo: {
    name: "ChatApp",
    slug: "ChatApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
  exta: {
    apiKey: process.env.Api_Key,
    authDomain: process.env.Auth_Domain,
    projectId: process.env.Project_Id,
    storageBucket: process.env.Storage_Bucket,
    messagingSenderId: process.env.Messaging_Sender_Id,
    appId: process.env.App_Id,
  },
};
