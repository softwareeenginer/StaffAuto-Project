import React, {Component} from "react";
import {Image, ImageBackground, TouchableOpacity} from "react-native";
import {Spinner, Text, View} from "native-base";
import ImageCarousel from "react-native-image-carousel";

export default class LoadingImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageView: 0
        }
    }

    onStart() {
        this.props.onLoadEnd ? this.props.onLoadEnd() : null;
        //this.setState({imageView: 0});
    }

    onFinish() {
        this.props.onLoadEnd ? this.props.onLoadEnd() : null;
        //this.setState({imageView: 1});
    }

    onError() {
        this.props.onLoadEnd ? this.props.onLoadEnd() : null;
        //this.setState({imageView: 2});
    }

    imageView(isBig){
        const loading=this.props.loading;
        if(loading)
            this.state.imageView=0;
        return(
            <ImageBackground
                style={[this.props.style, {justifyContent: 'center', alignItems: 'center'},isBig?{width:'100%',height:'100%'}:{}]}

                imageStyle={!isBig?[{borderRadius: this.props.style['borderRadius'] ? this.props.style['borderRadius'] : null},this.props.imageStyle]:{}}
                onLoad={()=>{
                    this.props.onLoad ? this.props.onLoad() : null;
                }}
                onLoadStart={() => {
                    if(!loading){
                        this.setState({imageView: 0});
                        this.onStart()
                    }
                }}
                onLoadEnd={() => {
                    if(!loading){
                        this.setState({imageView: 1});
                        this.onFinish()
                    }
                }}
                onError={() => {
                    if(!loading){
                        const _this=this;
                        setTimeout(function () {
                            _this.setState({imageView: 2});
                            _this.onError()
                        },500)
                    }
                }}
                resizeMode={isBig?'contain':this.props.resizeMode}
                source={this.props.source['uri']!==""?this.props.source:""}
            >
                {(this.state.imageView === 0) ?
                    <View style={{justifyContent:'center',alignItems:'center', backgroundColor:'white',padding:5,height:60,width:60,borderRadius:30}}>
                        <Spinner color='#4b9eed' size={'large'}/>
                    </View> :
                    (this.state.imageView === 2 || this.props.source["uri"] === "")?
                        <Image
                            resizeMode={isBig?'contain':null}
                            style={[this.props.style,isBig?{width:'100%',height:'100%'}:{}]}
                            source={this.props.errorImage?this.props.errorImage:require("../images/noimage.png")}
                        />:<View/>
                }
                <Text style={{width:0, height:0}}>{Math.random()}</Text>
            </ImageBackground>
        )
    }
    onSelect(file,del=false){
        this.props.onSelect?this.props.onSelect(file,del):null
    }
    render() {
        return (
            <View>
                {
                    this.props.carausel?
                        <ImageCarousel
                            ref={(imageCarousel: ImageCarousel) => {
                                this._imageCarousel = imageCarousel;
                            }}
                            zoomEnabled={true}
                            hideStatusBarOnOpen={false}
                            renderHeader={()=>{
                                return(
                                    <View style={{width:'100%',justifyContent:'space-between',alignItems:'center',flexDirection:'row',padding:15,zIndex:1000}}>
                                        {
                                            this.props.editImage && this.props.navigation?
                                                <TouchableOpacity
                                                    style={{
                                                        padding:10
                                                    }}
                                                    onPress={()=>{
                                                        this._imageCarousel.close();
                                                        this.onSelect({},true)
                                                    }}
                                                >
                                                    <View
                                                        style={{backgroundColor:'black',borderRadius:15,padding:5}}
                                                    >
                                                        <Image
                                                            source={require("../images/rubbish-bin.png")}
                                                            style={{width:20,height:20}}
                                                        />
                                                    </View>
                                                </TouchableOpacity>:<View/>
                                        }
                                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            {
                                                this.props.editImage && this.props.navigation?
                                                    <TouchableOpacity
                                                        style={{
                                                            padding:10
                                                        }}
                                                        onPress={()=>{
                                                            if(this.props.navigation){
                                                                this._imageCarousel.close();
                                                                this.props.navigation.navigate("TakePictureVideoScreen",{video:false,onSelect:this.onSelect.bind(this)})
                                                            }
                                                        }}
                                                    >
                                                        <View
                                                            style={{backgroundColor:'black',borderRadius:15,padding:5}}
                                                        >
                                                            <Image
                                                                source={require("../images/edit.png")}
                                                                style={{width:20,height:20}}
                                                            />
                                                        </View>
                                                    </TouchableOpacity>:null
                                            }
                                            <TouchableOpacity
                                                style={{
                                                    padding:10
                                                }}
                                                onPress={()=>{
                                                    this._imageCarousel.close()
                                                }}
                                            >
                                                <View
                                                    style={{backgroundColor:'black',borderRadius:15,padding:5}}
                                                >
                                                    <Image
                                                        source={require("../images/clear.png")}
                                                        style={{width:15,height:15}}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                            renderContent={()=>{
                                return(
                                    this.imageView(true)
                                )
                            }}
                        >
                            {this.imageView()}
                        </ImageCarousel>:
                        this.imageView()
                }
            </View>
        );
    }
}
