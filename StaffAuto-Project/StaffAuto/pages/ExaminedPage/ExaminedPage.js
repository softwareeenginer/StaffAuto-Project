import React,{Component} from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, Icon,Content} from 'native-base';
import {ExaminedPageStyle, GeneralStyle} from '../../css/styles/styles';
import {post} from '../../networking/Server';

class ExaminedPage extends Component{
    constructor(props) {
        super(props);
        const {info} = this.props.route.params;
        this.state={
            info:info
        }

        console.log(info);
    }

    onDelete = async () => {
        try {
            const result = await post("api/delete",{ user_id:this.state.info.user_id }) ;
            console.log(result)
        }catch (e) {

        }
    }


    render(){
        const {
            info
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
                    <Text style={GeneralStyle.generaltext}>Personel İnceleme</Text>
                </View>
                <View style={GeneralStyle.generalgrayline}/>
                <View style={ExaminedPageStyle.examinedmomview}>
                    <View style={ExaminedPageStyle.examinedviewone}>
                        <View style={ExaminedPageStyle.examinedfifty}>
                            <Text style={ExaminedPageStyle.examinedtextstyle}>İsim ve Soyisim</Text>
                        </View>
                        <View style={ExaminedPageStyle.examinedthirty}>
                            <Text>: {info.nameandsurname}</Text>
                        </View>
                    </View>
                    <View style={ExaminedPageStyle.examinedviewtwo}>
                        <View style={ExaminedPageStyle.examinedfifty}>
                            <Text style={ExaminedPageStyle.examinedtextstyle}>Maaş Bilgisi</Text>
                        </View>
                        <View style={ExaminedPageStyle.examinedthirty}>
                            <Text>: {info.salary}</Text>
                        </View>
                    </View>
                    <View style={ExaminedPageStyle.examinedviewone}>
                        <View style={ExaminedPageStyle.examinedfifty}>
                            <Text style={ExaminedPageStyle.examinedtextstyle}>Telefon No</Text>
                        </View>
                        <View style={ExaminedPageStyle.examinedthirty}>
                            <Text>: {info.phone}</Text>
                        </View>
                    </View>
                    <View style={ExaminedPageStyle.examinedviewtwo}>
                        <View style={ExaminedPageStyle.examinedfifty}>
                            <Text style={ExaminedPageStyle.examinedtextstyle}>Adres</Text>
                        </View>
                        <View style={ExaminedPageStyle.examinedthirty}>
                            <Text>: {info.adress}</Text>
                        </View>
                    </View>
                    <View style={ExaminedPageStyle.examinedviewone}>
                        <View style={ExaminedPageStyle.examinedfifty}>
                            <Text style={ExaminedPageStyle.examinedtextstyle}>TC No</Text>
                        </View>
                        <View style={ExaminedPageStyle.examinedthirty}>
                            <Text>: {info.identity}</Text>
                        </View>
                    </View>
                    <View style={ExaminedPageStyle.examinedviewtwo}>
                        <View style={ExaminedPageStyle.examinedfifty}>
                            <Text style={ExaminedPageStyle.examinedtextstyle}>Sağlık Durumu</Text>
                        </View>
                        <View style={ExaminedPageStyle.examinedthirty}>
                            <Text>: {info.healthinfo}</Text>
                        </View>
                    </View>
                    <View style={ExaminedPageStyle.examinedviewone}>
                        <View style={ExaminedPageStyle.examinedfifty}>
                            <Text style={ExaminedPageStyle.examinedtextstyle}>Tatil Günleri</Text>
                        </View>
                        <View style={ExaminedPageStyle.examinedthirty}>
                            <Text>: {info.holiday}</Text>
                        </View>
                    </View>
                </View>
                <View style={ExaminedPageStyle.examinedbuttonsview}>
                    <Button
                        onPress={()=>{
                            this.props.navigation.navigate('EditStaff',{info:info})
                        }}
                        style={ExaminedPageStyle.examinededitbuttonstyle}
                    >
                        <Text style={ExaminedPageStyle.examinedtextstyletwo}>Düzenle</Text>
                    </Button>
                    <Button onPress={this.onDelete} style={ExaminedPageStyle.examineddeletebuttonstyle}>
                        <Text style={ExaminedPageStyle.examinedtextstyletwo}>Sil</Text>
                    </Button>
                </View>
            </View>
        )
    }
}
export default ExaminedPage;
