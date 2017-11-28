
/**
 * @providesModule VideoView
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,

}from 'react-native'

import Video from 'react-native-video';
import Common from 'Common'

// 3.自定义 程序入口组件([[UIView alloc] init])
export default class VideoView extends Component {

    render(){

        return (
            <View style={{flex:1 ,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
            <Video source={{uri:this.props.videoUri}} // Looks for .mp4 file (background.mp4) in the given expansion version.
                   rate={1.0}                   // 0 is paused, 1 is normal.
                   volume={1.0}                 // 0 is muted, 1 is normal.
                   muted={false}                // Mutes the audio entirely.
                   paused={false}               // Pauses playback entirely.
                   resizeMode="cover"           // Fill the whole screen at aspect ratio.
                   repeat={true}                // Repeat forever.
                   playInBackground={false}                // Audio continues to play when app entering background.
                   playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                   ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                   style={styles.backgroundVideo}
            />
            </View>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    backgroundVideo: {
        width:Common.screenW,
        height:300,

    }
})

