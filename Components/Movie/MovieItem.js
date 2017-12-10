/**
 * Created by QG on 2017/12/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


export default class MovieItem extends Component{

    render(){
        var movie = this.props.movie;

        var actors = [];
        for (let obj of movie.casts){
            actors.push(obj.name);
        }

        return (
            <TouchableOpacity style = {styles.item} {...this.props}>
                <View  style = {styles.imageContainer}>
                    <Image source = {{uri : movie.images.medium}}  style = {styles.image} resizeMode = 'contain'/>
                </View>

                <View style = {styles.contentContainer}>

                    <View style = {styles.textContainer}>
                        <Text style = {styles.text} numberOfLines = {1}>名称:{movie.title}</Text>
                    </View>

                    <View style = {styles.textContainer}>
                        <Text style = {styles.text} numberOfLines = {1}>演员:{actors.join(' ')}</Text>
                    </View>

                    <View style = {styles.textContainer}>
                        <Text style = {styles.text} numberOfLines = {1}>评分:{movie.rating.average}</Text>
                    </View>

                    <View style = {styles.textContainer}>
                        <Text style = {styles.text} numberOfLines = {1}> 时间:{movie.year}</Text>
                    </View>

                    <View style = {styles.textContainer}>
                        <Text style = {styles.text} numberOfLines = {1}>标签:{movie.genres.join(' ')}</Text>
                    </View>

                </View>

            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        height : 120,
        padding : 10
    },

    imageContainer : {
        justifyContent : 'center',
        alignItems : 'center',
    },

    image : {
        width : 80,
        height : 110,
    },

    contentContainer : {
        flex : 1,
        marginLeft : 15,
    },

    textContainer : {
        flex : 1,
        justifyContent : 'center'
    },

    text : {
        color : 'black'
    }

});