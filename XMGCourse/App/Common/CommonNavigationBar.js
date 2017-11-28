
/**
 * @providesModule CommonNavigationBar
 *
 * 使用详情:
 * 1.如果要调整中间,左边,右边View,需要通过position调整
 */
import React, {Component,PropTypes} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform
}from 'react-native'

var screenW = Dimensions.get('window').width;

/*
*   1.易用性 2.扩展性
* */

// 3.自定义 程序入口组件([[UIView alloc] init])
export default class CommonNavigationBar extends Component {

    static propTypes = {
        // 标题
        title:PropTypes.string,
        titleView:PropTypes.object,

        // 左边
        leftBarButtonItem:PropTypes.object,

        // 右边
        rightBarButtonItem:PropTypes.object,

        // 样式
        titleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),

        barStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number])

    }

    render(){
        return (
            <View style={[styles.barStyle,this.props.barStyle]}>
                <View style={styles.contentView}>
                    {/*左边*/}
                    <View style={styles.leftView}>
                        {this.props.leftBarButtonItem}
                    </View>

                    {/*中间*/}
                    <View style={styles.middleView}>
                        {this.props.title?<Text style={this.props.titleStyle}>{this.props.title}</Text> :this.props.titleView}
                    </View>

                    {/*右边*/}
                    <View style={styles.rightView}>
                        {this.props.rightBarButtonItem}
                    </View>
                </View>
            </View>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    barStyle:{
        height:Platform.OS == 'ios'? 64 : 44,
        width:screenW,
        backgroundColor:'white',
        borderBottomWidth:2,
        borderBottomColor:'#e8e8e8'
    },
    contentView:{
        height:44,
        width:screenW,
        marginTop:Platform.OS == 'ios'? 20 : 0,
        backgroundColor:'transparent',
        flexDirection:'row'
    },
    leftView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    middleView:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    rightView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

