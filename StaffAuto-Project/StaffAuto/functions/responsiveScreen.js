import {widthPercentageToDP as _wp, heightPercentageToDP as _hp} from 'react-native-responsive-screen';
import {control} from "./controlVerticalDevice";




export function wp(val){
    if(control())
        return _hp(val);

    return _wp(val)
}


export function hp(val){
    if(control())
        return _wp(val);

    return _hp(val)
}
