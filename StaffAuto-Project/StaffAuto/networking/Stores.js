import React from 'react';
import {AsyncStorage,View} from 'react-native';
import {observable, action, computed} from "mobx";
import {create,persist} from "mobx-persist";
import {dialogType} from "../functions/Dialog";


function extend(src) {

    let obj={modal:false,children:()=><View/>,yes:null,no:null,position:'flex-end',onYes:()=>{},onNo:()=>{},image:null,message:null,data:null,dialogType:dialogType.questionAnswer};

    Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
    return obj;
}

class IStoreC {

    //Loading
    @observable loading = false;
    @observable modal = {modal:false,children:()=><View/>,yes:null,no:null,position:'flex-end',onYes:()=>{},onNo:()=>{},image:null,message:null,data:null,dialogType:dialogType.questionAnswer};

    @action setLoading(val) {
        this.loading = val;
    }
    @computed get getLoading() {
        return this.loading;
    }


    @action setModal(val) {
        this.modal = extend(val);
    }
    @computed get getModal() {
        return this.modal;
    }
}



class StoreC {

    @persist('object') @observable user = {};
    @persist @observable token = "";


    @action setUser(val) {
        this.user = val;
    }
    @computed get getUser() {
        return this.user;
    }


    @action setToken(val) {
        this.token = val;
    }
    @computed get getToken() {
        return this.token;
    }
}

const hydrate = create({
    storage:AsyncStorage,
    jsonify:true
});

export const Store = new StoreC();
hydrate("store",Store).then( (res) => {
    console.log('Store created');
});

export const IStore = new IStoreC();
