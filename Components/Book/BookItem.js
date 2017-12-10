/**
 * Created by QG on 2017/12/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class BookItem extends Component{

    render(){
        var book = this.props.book;
        return (
            <TouchableOpacity style = {styles.item} {...this.props} >
                <View style = {styles.image_container}>
                    <Image source = {{uri : book.image}} style = {styles.image}/>
                </View>

                <View style = {styles.contentContainer}>
                    <View style = {styles.textContainer}>
                        <Text numberOfLines = {1}>{book.title}</Text>
                    </View>

                    <View style = {styles.textContainer}>
                        <Text style = {styles.publisher_author} numberOfLines = {1}>{book.publisher}</Text>
                    </View>

                    <View style = {styles.textContainer}>
                        <Text style = {styles.publisher_author} numberOfLines = {1}>{book.author}
                        </Text>

                    </View>

                    <View style = {{flexDirection : 'row', flex : 1, alignItems : 'center'}}>
                        <Text style = {styles.price}>{book.price}</Text>
                        <Text style = {styles.pages}>{book.pages}页</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

    _mainPlayer = (arr) => {
        var start = '主演:';
        for (let obj of arr) {
            start  = start + obj.name + ',';
        }
        return start;
    }

}


const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        height : 120,
        padding : 10,
    },

    image_container : {
        justifyContent : 'center',
        alignItems : 'center',
    },

    image : {
        width : 80,
        height : 100,
    },

    contentContainer : {
        flex : 1,
        marginLeft : 15
    },

    textContainer : {
        flex : 1,
        justifyContent : 'center',
    },

    publisher_author : {
        color : '#A3A3A3',
        fontSize : 13,
    },

    price : {
        color : '#2BB2A3',
        fontSize : 16,
    },

    pages : {
        marginLeft : 16,
        color : '#A7A0A0',
    }
});