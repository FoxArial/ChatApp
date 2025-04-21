import {Image, ImageRef} from "expo-image";
import { StyleSheet } from "react-native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLORS from "../screens/const";
import { blurhash } from "../utils/common";

export default function ChatItem({item, noBorder, navigation}){

    const openChatRoom = () =>{
        navigation.navigate('Chat', item);
    }
    return(
        <TouchableOpacity onPress={openChatRoom} style={[
            styles.container,
            !noBorder && styles.withBorder
          ]}>
            <Image 
            source={{uri: item?.profileURL}} 
            style={{height: hp(5), width: wp(11), borderRadius: 999999}}
            placeholder={blurhash}
            transition={500}/>
            <View style={{flex: 1, gap: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                <Text style={{fontSize: hp(1.8), fontWeight:600}}> {item?.UserName} </Text>
                <Text style={{fontSize: hp(1.8), fontWeight:400, color: COLORS.primary}}> Time</Text>
                </View> 
                <Text style={{fontSize: hp(1.6)}}> Last msg</Text>
            </View> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 4,
        alignItems: 'center',
        gap: 5,
        marginBottom: hp(2.2),
        paddingBottom: 8,
    },
    withBorder:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 4,
        alignItems: 'center',
        gap: 5,
        marginBottom: hp(2.2),
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.primary        
    }
}
)