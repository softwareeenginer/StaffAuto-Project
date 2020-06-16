import React,{Component} from "react";
import {View, Text, TouchableOpacity,ScrollView} from 'react-native';
import {Button, Content, Form, Icon, Input} from 'native-base';
import {GeneralStyle, graytonetwo, EditStaffPageStyle} from '../../../css/styles/styles';
import {post} from '../../../networking/Server';

class EditStaff extends Component{
    constructor(props) {
        super(props);
        const { info } = this.props.route.params;

        this.state = {
            nameandsurname:'',
            salary:'',
            phone:'',
            adress:'',
            identity:'',
            mission:'',
            healthinfo:'',
            holiday:'',
            ...info
        }
    }

    onUpdate = async () => {
        try {
            const result = await post('api/update',{ user: {...this.state} });
            console.log(result)
        }catch (e) {

        }
    }


    render(){
        const {
            nameandsurname,
            salary,
            phone,
            adress,
            identity,
            mission,
            healthinfo,
            holiday
        } = this.state;
        return(
            <View>
                <View style={GeneralStyle.generaltopview}>
                    <TouchableOpacity
                        style={{position:'absolute',left:0}}
                        onPress={()=>{
                            this.props.navigation.goBack()
                        }}
                    >
                        <Icon type='AntDesign' name='left'/>
                    </TouchableOpacity>
                    <Text style={GeneralStyle.generaltext}>Personel Düzenleme</Text>
                </View>
                <View style={GeneralStyle.generalgrayline}/>
                <ScrollView>
                    <View style={EditStaffPageStyle.editcontentview}>
                        <Form style={EditStaffPageStyle.editformstyle}>
                            <Input
                                style={EditStaffPageStyle.editinputstyle}
                                //placeholder={nameandsurname} sesin çok kesiliyor. en son bi dk dedin :D
                                value={nameandsurname}
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({nameandsurname:text})
                                }}
                            />
                            <Input
                                style={EditStaffPageStyle.editinputstyle}
                                //placeholder={salary}
                                value={salary}
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({salary:text})
                                }}
                            />
                            <Input
                                style={EditStaffPageStyle.editinputstyle}
                                //placeholder={phone}
                                value={phone}
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({phone:text})
                                }}
                            />
                            <Input
                                style={EditStaffPageStyle.editinputstyle}
                                //placeholder={adress}
                                value={adress}
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({adress:text})
                                }}
                            />
                            <Input
                                style={EditStaffPageStyle.editinputstyle}
                                //placeholder={identity}
                                value={identity}
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({identity:text})
                                }}
                            />
                            <Input
                                style={EditStaffPageStyle.editinputstyle}
                                //placeholder={mission}
                                value={mission}
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({mission:text})
                                }}
                            />
                            <Input
                                style={EditStaffPageStyle.editinputstyle}
                                //placeholder={healthinfo}
                                value={healthinfo}
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({healthinfo:text})
                                }}
                            />
                            <Input
                                style={EditStaffPageStyle.editinputstyle}
                                //placeholder={holiday}
                                value={holiday}
                                placeholderTextColor={graytonetwo}
                                onChangeText={(text)=>{
                                    this.setState({holiday:text})
                                }}
                            />
                        </Form>
                        <View style={EditStaffPageStyle.editbuttonview}>
                            <Button onPress={this.onUpdate} style={EditStaffPageStyle.editbuttonstyle}>
                                <Text style={EditStaffPageStyle.editaddstaff}>Personeli Düzenle</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default EditStaff;
