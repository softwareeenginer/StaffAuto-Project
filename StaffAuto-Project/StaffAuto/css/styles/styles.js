import {StyleSheet} from "react-native";

//------------------ Colors ------------------//
export const browncolor = '#daa520';
export const whitecolor = '#ffffff';
export const yellowcolor = '#ffff00';
export const blackcolor = '#000000';
export const graytoneone = '#c0c0c0';
export const graytonetwo = '#666666';
export const graytonethree = '#ededed';
export const youtubered = '#c4302b';

//------------------ Styles ------------------//
export const GeneralStyle = StyleSheet.create({
    generalmotherview:{flex:1,backgroundColor:whitecolor},
    generaltopview:{alignItems:'center',margin:14},
    generaltext:{fontSize:18,fontStyle:'italic',fontWeight:'bold',marginTop:3},
    generalgrayline:{backgroundColor:graytonethree, height:2},
});
export const HomePageStyle = StyleSheet.create({
    homemomview:{margin:20,flexDirection:'row',justifyContent:'space-between'},
    staffnameview:{justifyContent:'center'},
    homestaffbuttons:{alignItems:'center',flexDirection:'row'},
    homebuttonone:{borderRadius:10,padding:8,backgroundColor:browncolor,width:80,marginRight:10,justifyContent:'center',alignItems:'center'},
    homebuttontwo:{borderRadius:10,padding:8,backgroundColor:yellowcolor,width:70,justifyContent:'center',alignItems:'center'},
    texttwo:{fontWeight:'bold',color:blackcolor},
    textone:{fontWeight:'bold',color:whitecolor},

});
export const MenuStyle = StyleSheet.create({
    menumotherview:{height:'100%',backgroundColor:browncolor},
    icontextviewstyle:{width:'80%',marginVertical:20,alignSelf:'center'},
    touchstyle:{alignItems:'center',justifyContent:'center',marginVertical:20},
    iconcolor:{color:whitecolor,fontSize:34.5},
    textstyle:{color:whitecolor,fontWeight:'bold',textAlign:'center',marginTop:10},
});
export const StaffAddPageStyle = StyleSheet.create({
    addcontentview:{alignItems:'center',marginVertical:20},
    addformstyle:{width:'90%'},
    addinputstyle:{borderBottomWidth:1,borderBottomColor:graytoneone,marginVertical:10,color:graytonetwo},
    addbuttonview:{width:'30%',marginTop:20},
    addbuttonstyle:{borderRadius:10,backgroundColor:browncolor,justifyContent:'center',alignItems:'center'},
    addaddstaff:{color:whitecolor,fontWeight:'bold'},

});
export const ExaminedPageStyle = StyleSheet.create({
    examinedmomview:{alignItems:'center',marginVertical:20},
    examinedviewone:{flexDirection:'row',marginVertical:2},
    examinedviewtwo:{flexDirection:'row',marginVertical:2,backgroundColor:graytonethree},
    examinedfifty:{width:'50%'},
    examinedthirty:{width:'30%'},
    examinedtextstyle:{fontWeight:'bold',fontStyle:'italic'},
    examinedbuttonsview:{width:'50%',marginTop:20,alignSelf:'center',flexDirection:'row'},
    examinededitbuttonstyle:{borderRadius:10,backgroundColor:browncolor,justifyContent:'center',alignItems:'center',width:'60%'},
    examineddeletebuttonstyle:{borderRadius:10,backgroundColor:youtubered,justifyContent:'center',alignItems:'center',marginLeft:10,width:'30%'},
    examinedtextstyletwo:{color:whitecolor,fontWeight:'bold'},
});
export const EditStaffPageStyle = StyleSheet.create({
    editcontentview:{alignItems:'center',marginVertical:20},
    editformstyle:{width:'90%'},
    editinputstyle:{borderBottomWidth:1,borderBottomColor:graytoneone,marginVertical:10,color:graytonetwo},
    editbuttonview:{width:'30%',marginTop:20},
    editbuttonstyle:{borderRadius:10,backgroundColor:browncolor,justifyContent:'center',alignItems:'center'},
    editaddstaff:{color:whitecolor,fontWeight:'bold'},
});
