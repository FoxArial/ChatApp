import { View, StyleSheet, Text } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  export const MenuItem = ({text, action, value}) =>{
    return (
        <MenuOption onSelect={() => action(value)}>
            <View style={styles.menu}>
                <Text style={{fontSize: hp(1.5), fontWeight:600, color: 'black'}}>
                    {text}
                    </Text>
                
            </View>
        </MenuOption>
    )
  }
  const styles = StyleSheet.create({
    menu: {
        paddingHorizontal: 4,
        paddingVertical: 1,
        alignItems: "center",


    }

  })