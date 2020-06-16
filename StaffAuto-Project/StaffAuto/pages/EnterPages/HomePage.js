import  React,{Component} from "react";
import {View,Text,TouchableOpacity,FlatList} from "react-native";
import {Button, Drawer, Icon,Content} from 'native-base';
import {GeneralStyle, HomePageStyle} from '../../css/styles/styles';
import Menu from './Menu';
import {post} from '../../networking/Server';
import {Store} from '../../networking/Stores';

class HomePage extends Component{
    constructor() {
        super();
        this.state={
            infos:[]
        }
    }

    componentDidMount(): void {
        this.getInfo();
    }

    getInfo = async () => {
        try{
            const result = await post('api/infos/view');
            console.log(result);
            this.setState({
                infos:result.infos
            });
        }catch (e) {
            console.log('error ',e);
        }
    }

    render(){
        console.log(this.state.infos)
        return(
            <View style={GeneralStyle.generalmotherview}>
                <Drawer
                    side="right"
                    openDrawerOffset={.7} panCloseMask={.7}
                    ref={(ref) => {
                        this.drawer = ref
                    }}
                    content={<Menu navigation={this.props.navigation}/>}
                    onClose={() => this.drawer._root.close()}
                >
                    <View style={GeneralStyle.generaltopview}>
                        <Text style={GeneralStyle.generaltext}>OtoPersonÆL</Text>
                        <TouchableOpacity
                            style={{position: 'absolute', right: 0}}
                            onPress={() => {
                                this.drawer._root.open()
                            }}
                        >
                            <Icon type='Entypo' name='menu'/>
                        </TouchableOpacity>
                    </View>
                    <View style={GeneralStyle.generalgrayline}/>
                    <View>
                        <FlatList
                            data={this.state.infos}
                            keyExtractor={(item,index) => index.toString()}
                            renderItem={({item,index}) => {
                                return(
                                    <View>
                                        <View style={HomePageStyle.homemomview}>
                                            <View style={HomePageStyle.staffnameview}>
                                                <Text>{item.nameandsurname}</Text>
                                            </View>
                                            <View style={HomePageStyle.homestaffbuttons}>
                                                <Button style={HomePageStyle.homebuttonone}>
                                                    <Text style={HomePageStyle.textone}>Maaş Öde</Text>
                                                </Button>
                                                <Button
                                                    onPress={() => {
                                                        this.props.navigation.navigate('ExaminedPage',{info:item})
                                                    }}
                                                    style={HomePageStyle.homebuttontwo}
                                                >
                                                    <Text style={HomePageStyle.texttwo}>İncele</Text>
                                                </Button>
                                            </View>
                                        </View>
                                        <View style={GeneralStyle.generalgrayline}/>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </Drawer>
            </View>
        )
    }
}
export default HomePage;
