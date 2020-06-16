import React,{Component} from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon,Content,Form,Input,Button} from 'native-base';
import {GeneralStyle, graytonetwo, StaffAddPageStyle} from '../../../css/styles/styles';
import {Store} from '../../../networking/Stores';
import {post} from '../../../networking/Server';
import {show} from '../../../functions/Toast';

class StaffAdd extends Component{
    constructor() {
        super();
        this.state={
            nameandsurname:null,
            salary:null,
            phone:null,
            adress:null,
            identity:null,
            mission:null,
            healthinfo:null,
            holiday:null,
        }

    }
    onRegister = (nameandsurname,salary,phone,adress,identity,mission,healthinfo,holiday) =>{
        console.log('Asdasd')

        post("register",{
            nameandsurname,
            salary,
            phone,
            adress,
            identity,
            mission,
            healthinfo,
            holiday
        }).then((res)=>{
            try {
                console.log(res);
                if(res.result){
                    Store.setToken(res.token);
                    //    restartApp(this.props)
                }
            }catch (e) {
                show("bir sorun var","kapat");
            }
        }).catch(err => {
            console.log(err);

        })
        ;

    }
    render(){
        return(
            <View style={GeneralStyle.generalmotherview}>
                <View style={GeneralStyle.generaltopview}>
                    <TouchableOpacity
                        style={{position:'absolute',left:0}}
                        onPress={()=>{
                            this.props.navigation.goBack()
                        }}
                    >
                        <Icon type='AntDesign' name='left'/>
                    </TouchableOpacity>
                    <Text style={GeneralStyle.generaltext}>Personel Ekle</Text>
                </View>
                <View style={GeneralStyle.generalgrayline}/>
                <Content>
                    <View style={StaffAddPageStyle.addcontentview}>
                        <Form style={StaffAddPageStyle.addformstyle}>
                            <Input
                                style={StaffAddPageStyle.addinputstyle}
                                placeholder='İsim ve Soyisim'
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({nameandsurname:text})
                                }}
                            />
                            <Input
                                style={StaffAddPageStyle.addinputstyle}
                                placeholder='Maaş'
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({salary:text})
                                }}
                            />
                            <Input
                                style={StaffAddPageStyle.addinputstyle}
                                placeholder='Telefon No'
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({phone:text})
                                }}
                            />
                            <Input
                                style={StaffAddPageStyle.addinputstyle}
                                placeholder='Adres'
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({adress:text})
                                }}
                            />
                            <Input
                                style={StaffAddPageStyle.addinputstyle}
                                placeholder='TC'
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({identity:text})
                                }}
                            />
                            <Input
                                style={StaffAddPageStyle.addinputstyle}
                                placeholder='Görevler'
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({mission:text})
                                }}
                            />
                            <Input
                                style={StaffAddPageStyle.addinputstyle}
                                placeholder='Sağlık Durumu'
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({healthinfo:text})
                                }}
                            />
                            <Input
                                style={StaffAddPageStyle.addinputstyle}
                                placeholder='Tatil Günleri'
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({holiday:text})
                                }}
                            />
                        </Form>
                        <View style={StaffAddPageStyle.addbuttonview}>
                            <Button
                                ////nameandsurname,salary,phone,adress,identity,mission,healthinfo,holiday
                                onPress={()=>{
                                            console.warn('asdasdsadasdasdsad')
                                    this.onRegister(
                                        this.state.nameandsurname,
                                        this.state.salary,
                                        this.state.phone,
                                        this.state.adress,
                                        this.state.identity,
                                        this.state.mission,
                                        this.state.healthinfo,
                                        this.state.holiday
                                    )
                                }}
                                style={StaffAddPageStyle.addbuttonstyle}
                            >
                                <Text style={StaffAddPageStyle.addaddstaff}>Personeli Ekle</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </View>
        )
    }
}
export default StaffAdd;
