const jwt_decode = require('jwt-decode');
import {IStore, Store} from "./Stores";
import {Platform} from "react-native";
import Axios from "react-native-axios";

let token="";


export async function post(adres,params=null,func=()=>{}) {

    if(params && !Array.isArray(params)){
        params=JSON.stringify(params);
    }

    return fetch(getURL()+adres, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': "Bearer " +Store.getToken
        }),
        body: params,
    }).then((response) => response.json()).then((data) => {
        //IStore.setConnection(0);
        console.warn(data)
        func();
        return data;
    }).catch((err)=>{
        func();
        //IStore.setConnection(1);
        return {result:false,error:"No_Connect"};
    });


}

export function getURL(){
    return "http://192.168.1.41:5000/";
}
export function setToken(_token) {
    token=_token;
}
export function openToken(token){
    if(!token)
        return {};

    let obj={};

    try {
        obj=jwt_decode(token);
    }catch (e) {

    }
    return obj;
}
