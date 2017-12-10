/**
 * Created by QG on 2017/12/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import LeftIcon from './LeftIcon'

export default class Header extends Component{

    render(){
        return (
            <View style = {styles.header}>
                <TouchableOpacity style = {styles.left_btn} {...this.props}>
                    <LeftIcon />
                    <Text style = {styles.btn_text}>{this.props.initObj.backName}</Text>
                </TouchableOpacity>
                <View style = {styles.title_container}>
                    <Text style = {styles.title}  numberOfLines = {1} >{this.props.initObj.barTitle}</Text>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    header : {
        height : 44,
        flexDirection : 'row',
        backgroundColor : '#00CCFF',
        justifyContent : 'center',
        alignItems : 'center',
    },

    left_btn : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
    },

    btn_text : {
        color : '#FFF',
        fontSize : 17,
        fontWeight : 'bold',
    },

     title_container : {
         flex : 1,
         justifyContent : 'center',
         alignItems : 'center',
     },

    title : {
        color : '#FFF',
        fontSize : 18,
        fontWeight : 'bold',
        lineHeight : 18,
        width : 200,
    }
});