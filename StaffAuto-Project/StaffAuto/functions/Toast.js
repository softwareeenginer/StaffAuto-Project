import {Toast} from "native-base";
import {Keyboard} from "react-native";


export async function show(text,buttonText,duration=3000,onClose=function () {}) {
    Keyboard.dismiss();
    Toast.show({
        text: text,
        buttonText: buttonText,
        duration: duration,
        textStyle: {
            margin:10,
            fontWeight:'bold',
            fontSize:16,
            color:'black'
        },
        buttonTextStyle: {
            fontSize:14,
            color:'black'
        },
        style:{backgroundColor:'white'},
        onClose:function () {
            onClose()
        }
    });
}
