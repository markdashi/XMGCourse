
/**
 * @providesModule Guide
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image

}from 'react-native'

import Swiper from 'react-native-swiper';

import Common from 'Common'

import CommonHighButton from 'CommonHighButton'

import Main from 'Main'


// 3.自定义 程序入口组件([[UIView alloc] init])
// Swiper:使用注意点,不需要设置样式,否则显示不了
export default class Guide extends Component {

    render(){
        return (

            <Swiper loop={false}
                    activeDotColor="black"
            >
                <Image source={{uri:'slider1'}} style={{width:Common.screenW,height:Common.screenH}}/>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:'slider2'}} style={{width:Common.screenW,height:Common.screenH}}/>
                    <CommonHighButton title='立即体验'
                                      buttonStyle={styles.buttonStyle}
                                      titleStyle={{color:'red',fontSize:17}}
                                      onPress={()=>{
                                          // 自动把navigator传递给下一个组件
                                          this.props.navigator.replace({
                                              component:Main
                                          })
                                      }}
                    />
                </View>


            </Swiper>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonStyle:{
        position:'absolute',
        bottom:60,
        width:150,
        height:40,
        borderWidth:1,
        borderColor:'red',
        borderRadius:6
    }
})

