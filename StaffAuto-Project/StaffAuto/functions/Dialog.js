import React, {Component} from "react";
import {Button, Item, View} from "native-base";
import {StyleSheet, TouchableOpacity, Text, Keyboard} from "react-native";
import {Image} from "react-native";
import Modal from "react-native-modal";


import {hp, wp} from "./responsiveScreen";
import LoadingButton from "../components/LoadingButton";
import {IStore} from "../networking/Stores";
import {observer} from "mobx-react";
import LoadingImage from "../components/LoadingImage";

export const position = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end"
};

export const dialogType = {
    questionAnswer: 0
};

@observer
export default class Dialog extends Component {

    modalClose(){
        Keyboard.dismiss();
        IStore.setModal({modal:false});
        //this.props.onClose?this.props.onClose():null;
    }


    render() {
        //console.warn(this.props.modal.position);
        return (
            <Modal onModalHide={()=>{this.props.modal.onModalHide?this.props.modal.onModalHide():null}} onBackdropPress={()=>this.modalClose()}  onBackButtonPress={()=>this.modalClose()} style={{ margin: 0}} animationInTiming={500} isVisible={this.props.modal.modal}>
                <View style={{
                    flex: 1,
                    justifyContent: this.props.modal.position ? this.props.modal.position : position.bottom,
                    alignItems: 'center'
                }}>
                    <View

                        style={{width: this.props.modal.position ? this.props.modal.position === position.center ? '80%' : '100%' : '100%'}}>
                        {
                            this.props.modal.dialogType === dialogType.questionAnswer ?
                                this.questionAnswer() :
                                <View/>
                        }
                    </View>
                </View>
            </Modal>
        );
    }

    onYes(){
        this.props.modal.onYes?this.props.modal.onYes():null;
        this.modalClose();
    }

    onNo(){
        this.props.modal.onNo?this.props.modal.onNo():null;
        this.modalClose();
    }

    questionAnswer() {
        let message = this.props.modal.message?this.props.modal.message:"";
        let yes = this.props.modal.yes?this.props.modal.yes:null;
        let no = this.props.modal.no?this.props.modal.no:null;

        return (
            <View style={{width: '100%', backgroundColor: 'white',justifyContent:'center',alignItems:'center',paddingTop:hp(this.props.modal.image?'8%':'5%')}}>
                {
                    this.props.goneClose?
                        null:
                        <TouchableOpacity style={{position:'absolute',top:0,right:0, margin:hp('.5%'),padding:hp('.6%'),borderRadius:hp('10%'),borderWidth:1,borderColor:'#4b9eed'}}
                                          onPress={()=>{
                                              this.onNo()
                                          }}
                        >
                            <Text style={{fontSize:hp('2%'),color:'#4b9eed'}}> ╳ </Text>
                        </TouchableOpacity>
                }
                {
                    this.props.modal.image?
                        <View style={{backgroundColor:'#4b9eed',borderRadius:1000,padding:hp('2%'),position:'absolute',top:hp('-5%')}}>
                            <LoadingImage
                                style={{width:hp('8%'),height:hp('8%'),borderRadius:hp('4%')}}
                                source={this.props.modal.image}
                                errorImage={require("../images/noprofile.png")}
                            />
                        </View>:null
                }
                {
                    message!==""?
                        <Text style={[{color:'#4b9eed',width:'100%',textAlign:'center', fontSize: hp('2.5%'), padding: hp('1%')}, this.props.modal.style]}>{message}</Text> : <View/>
                }

                {
                    this.props.modal.children ? this.props.modal.children() : <View/>
                }

                <View style={{width: wp('70%'),marginTop:hp('2%'),marginBottom:hp('2%'),marginHorizontal:hp('2%')}}>
                    {
                        yes?
                            <Item style={{
                                margin: hp('1%'),
                                backgroundColor: '#4b9eed',
                                borderRadius: hp('2%'),
                                justifyContent: 'center',
                                borderBottomWidth: 0,
                                height:hp('6%')
                            }}>
                                <LoadingButton
                                    height={hp('6%')}
                                    buttonLoading={false}
                                    transparent
                                    onPress={() => {
                                        this.onYes()
                                    }}
                                >
                                    <Text style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        fontSize: hp('2.5%'),
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}>{yes}</Text>
                                </LoadingButton>
                            </Item>:null
                    }
                    {
                        no?
                            <Item style={{
                                margin: hp('1%'),
                                backgroundColor: '#E0E0E0',
                                borderRadius: hp('2%'),
                                justifyContent: 'center',
                                borderBottomWidth: 0,
                                height:hp('6%')
                            }}>
                                <LoadingButton
                                    height={hp('6%')}
                                    buttonLoading={false}
                                    transparent
                                    onPress={() => {
                                        this.onNo()
                                    }}
                                >
                                    <Text style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        fontSize: hp('2.5%'),
                                        fontWeight: 'bold',
                                        color: '#4b9eed'
                                    }}>{no}</Text>
                                </LoadingButton>
                            </Item>:null
                    }
                </View>

            </View>
        )
    }
}
//onBackdropPress={()=>this.close()}  onBackButtonPress={()=>this.close()}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
