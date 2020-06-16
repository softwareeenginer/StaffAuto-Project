import React,{Component} from "react";
import {Text,View,TouchableOpacity} from "react-native";
import {Icon} from "native-base";
import {MenuStyle} from '../../css/styles/styles';

class Menu extends Component{
    constructor() {
        super();
        this.state={
        }
    }
    render(){
        return(
            <View style={MenuStyle.menumotherview}>
                <View style={MenuStyle.icontextviewstyle}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate('StaffAdd')
                        }}
                        style={MenuStyle.touchstyle}
                    >
                        <Icon style={MenuStyle.iconcolor} type='AntDesign' name='adduser'/>
                        <Text style={MenuStyle.textstyle}>Personel Ekle</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Menu;
