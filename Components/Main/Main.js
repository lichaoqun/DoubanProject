/**
 * Created by QG on 2017/12/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TabBarIOS,
    StatusBar,
} from 'react-native';

// - 隐藏状态栏
StatusBar.setHidden(true);

import Book from '../Book/Book';
import BookDetail from '../Book/BookDetail'

import Movie from '../Movie/Movie'
import CustomWebView from '../Movie/MovieDetail'

import {StackNavigator} from "react-navigation";

export default class Main extends Component{

    state = {
        selectedTabBarItem : 'movies',
    }

    render() {
        return (
            <TabBarIOS>

                <TabBarIOS.Item
                    title = {'电影'}
                    selected = {this.state.selectedTabBarItem == 'movies'}
                    onPress = {()=>{
                        this.setState({selectedTabBarItem : 'movies'})
                        console.log(this.state.selectedTabBarItem);
                    }}
                    icon = {{uri : 'icon_tabbar_homepage', scale : 2}}
                >
                    <BookNAV/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title = {'图书'}
                    selected = {this.state.selectedTabBarItem == 'book'}
                    onPress = {()=>{
                        this.setState({selectedTabBarItem : 'book'})
                        console.log(this.state.selectedTabBarItem);
                    }}
                    icon = {{uri : 'icon_tabbar_merchant_normal', scale : 2}}
                >
                    <MovieNAV/>
                </TabBarIOS.Item>
            </TabBarIOS>

        );
    }
}

const BookNAV = StackNavigator({
    Book: {
        //对应界面MyHomeScreen
        screen: Book,
    },

    BookDetail: {
        //对应界面MyHomeScreen
        screen: BookDetail,
    }
});

const MovieNAV = StackNavigator({
    Movie: {
        //对应界面MyHomeScreen
        screen: Movie,
    },

    CustomWebView: {
        //对应界面MyHomeScreen
        screen: CustomWebView,
    }
});
