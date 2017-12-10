/**
 * Created by QG on 2017/12/10.
 */
import React, { Component } from 'react';
import {
    Dimensions,
    ActivityIndicator
} from  'react-native'

var Util = {

    /* 屏幕尺寸 */
    windowSize : {
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height,
    },

    /* 基于 fetch 的 get 方法 */
    getRequest : (url, successCallback, failCallback)=>{
        fetch(url)
            .then((response)=>response.json())
            .then((responseData)=>successCallback(responseData))
            .catch((error)=>failCallback(error));
    },

    /* loading 动画 */
    loading : <ActivityIndicator style = {{marginTop : 200}}/>
}

export default Util;