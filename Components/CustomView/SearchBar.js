/**
 * Created by QG on 2017/12/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class SearchBar extends Component{

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.inputContainer}>
                    <TextInput style = {styles.input} {...this.props}/>
                </View>
                <TouchableOpacity style = {styles.btn} {...this.props}>
                    <Text style = {styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'flex-end',
        alignItems : 'center',
        height : 44,
        marginTop : 10,
    },

    inputContainer : {
        flex : 1,
        marginLeft : 5,
    },

    input : {
        flex : 1,
        height : 44,
        borderWidth : 1,
        borderRadius : 4,
        borderColor : '#CCC',
        paddingLeft : 5,
    },

    btn : {
        width : 55,
        height : 44,
        marginLeft : 5,
        marginRight : 5,
        backgroundColor : '#238EFF',
        borderRadius : 4,
        justifyContent : 'center',
        alignItems : 'center'
    },

    search : {
        flex : 1,
        color : '#FFF',
        fontSize : 15,
        fontWeight : 'bold',
        textAlign : 'center',
        lineHeight : 44
    }
});