import {Dimensions } from "react-native";
const {width,height}=Dimensions.get('window');

export function control(){
    return width > height;
}
