/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    NativeModules
} from 'react-native';
var RNBridgeEventManager = NativeModules.RNBridgeEventManager;
export default class RNtoNative extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome} onPress={()=>this.passValueToNativeOne()}>点击往原生传字符串</Text>
              <Text style={styles.welcome} onPress={()=>this.passValueToNativeTwo()}>点击往原生传字符串+字典</Text>
              <Text style={styles.welcome} onPress={()=>this.passValueToNativeThree()}>点击往原生传字符串+日期</Text>
              <Text style={styles.welcome} onPress={()=>this.callBackOne()}>点击调原生+回调</Text>
              <Text style={styles.welcome} onPress={()=>this.callBackTwo()}>Promises1116666</Text>
              <Text style={styles.welcome} onPress={()=>this.useNativeValue()}>使用原生定义的常量</Text>
            </View>
        );
    }
    // 传原生一个字符串
    passValueToNativeOne = ()=>{
        RNBridgeEventManager.addEventOne('周少停');
    }
    // 传原生一个字符串 + 字典
    passValueToNativeTwo = ()=>{
        RNBridgeEventManager.addEventTwo('周少停',{job:'programmer'});
    }
    // 传原生一个字符串 + 日期
    passValueToNativeThree = ()=>{
        RNBridgeEventManager.addEventThree('周少停',19910730);
    }
    // 传原生一个字符串 + 回调
    callBackOne = ()=>{
        RNBridgeEventManager.testCallbackEventOne(('我是RN给原生的'),(error, events) => {
            if (error) {
                console.error(error);
            } else {
                alert(events)
            }
        })
    }
    //Promise回调
    async callBackTwo(){
        try{
            var events=await RNBridgeEventManager.testCallbackEventTwo();
            alert(events)
        }catch(e){
            console.error(e);
        }
    }
    //使用原生定义的常量
    useNativeValue = ()=>{
        alert(RNBridgeEventManager.ValueOne)
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
