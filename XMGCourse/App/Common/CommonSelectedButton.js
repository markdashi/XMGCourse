
/**
 * @providesModule CommonSelectedButton
 *
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
    Platform,
    TouchableOpacity,
    Image
}from 'react-native'

var screenW = Dimensions.get('window').width;


// 3.自定义 程序入口组件([[UIView alloc] init])
export default class CommonSelectedButton extends Component {

    static propTypes = {
        // 正常
        // 标题
        title:PropTypes.string,

        // 图片
        image:PropTypes.string,

        // 样式
        imageStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]).isRequired,
        titleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
        buttonStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),

        // 选中
        selectedTitleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),

        selectedImage:PropTypes.string,

        // 监听
        onPress:PropTypes.func
    };

    constructor(props){
        super(props);

        this.state = {
            selected:false
        }
    }

    render(){
        return (
            <TouchableOpacity style={[styles.buttonStyle,this.props.buttonStyle]}
                              onPress={()=>{
                                  // 执行外界传入的点击按钮方法
                                  if (this.props.onPress){
                                      this.props.onPress(this);
                                  }
                              }}
            >

                {/*标题*/}
                {this.props.title?<Text style={this.state.selected?this.props.selectedTitleStyle:this.props.titleStyle}>{this.props.title}</Text>:null}

                {/*图片*/}
                {this.props.image?<Image source={{uri:this.state.selected && this.props.selectedImage?this.props.selectedImage : this.props.image}} style={[{marginLeft:3},this.props.imageStyle]}/>:null}

            </TouchableOpacity>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    buttonStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});

