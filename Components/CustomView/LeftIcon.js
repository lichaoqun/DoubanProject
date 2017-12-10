/**
 * Created by QG on 2017/12/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class LeftIcon extends Component{
    render(){
        return (
            <View>
                <View style = {styles.back}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    back : {
        width : 15,
        height : 15,
        borderLeftWidth : 2,
        borderBottomWidth : 2,
        borderColor : '#FFF',
        marginLeft : 10,
        transform : [{rotate : '45deg'}],
    }
});