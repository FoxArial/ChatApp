import React from "react";
import { Platform, View, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image} from "expo-image";
import COLORS from "../screens/const";
import { blurhash } from "../utils/common";
import {useAuth, logout} from "./authContext";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { MenuItem } from "./customMetuOptions";
const ios = Platform.OS =='ios';
export default function HomeHeader(){
    const {user,logout} = useAuth();
    const{top} = useSafeAreaInsets();
    const handleProfile = () =>{};
    const handleLogOut = async ()=>{
        await logout();
    }
    return (
        <View style={{backgroundColor: COLORS.background}}>
        <View style={styles.container}>
            <View> 
                <Text style={{fontSize:hp(3), color:COLORS.background}}> CHATS</Text>
            </View>
            <View>
                <Menu>
                    <MenuTrigger>
                        <Image
                        style={styles.imageProf}
                        source={user?.profileUrl}
                        placeholder={blurhash}
                        transition={500}
                    />   
                    </MenuTrigger>
                    <MenuOptions customStyles={{
                        optionsContainer:{
                        borderRadius: 10,
                        marginLeft: -30,
                        marginTop:20,
                        width: wp(38)
                        }    
                    }}>
                        <MenuItem
                        text="profile"
                        action={handleProfile}
                        value={null}/>
                        <MenuItem
                        text="log out"
                        action={handleLogOut}
                        value={null}/>
                    </MenuOptions>
                </Menu>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.primary,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 6,
        borderBottomRightRadius: wp(5),
        borderBottomLeftRadius: wp(5),
        height: hp(8),
        alignItems: "center",
    },
    imageProf:{
        height: hp(4.5),
        aspectRatio:1,
        borderRadius: 100
    },
})