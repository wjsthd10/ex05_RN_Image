import React,{Component} from 'react';
import {View, Text,Image, StyleSheet, Button,
     TouchableHighlight, TouchableOpacity, 
     TouchableNativeFeedback, TouchableNativeFeedbackBase, 
     ScrollView, ImageBackground} from 'react-native';

// 추출하다 기본적인 클래스 MainComponent를
export default class MainComponent extends Component{
    
    num=0;

    // 이미지 경로 값을 가진 변수
    state={// 값이 변경되면 자동으로 화면이 갱신되는 특별한 멤버 변수 state
        // require('')를 모두 넣는다.
        img:require('./images/moana01.jpg'),
        img2:{uri:"https://byline.network/wp-content/uploads/2018/05/cat.png"},
        imgs:[
            require('./images/moana01.jpg'),
            require('./images/moana02.jpg'),
            require('./images/moana03.jpg'),
            require('./images/moana04.jpg'),
            require('./images/moana05.jpg')
        ],
        num:0
    };

    // require()안에 경로값만 넣는것은 불가능하다(변수값이기 때문에) 상수만 가능하다.
    //  그래서 require()를 모두 state에 넣어야한다.

    render(){
        return(
            <View style={styles.root}>
                {/* <Image 
                    style={styles.img}
                    // 내폴더안에 있는 파일은 require('~')를 사용
                    source={this.state.img}
                    >

                </Image>
                <Image
                    style={styles.img}
                    // 네트워크에서 이미지를 가져올때는 uri:객체 를 전달해야하고 
                    // 반드시 너비, 높이를 지정해야만 한다.
                    source={this.state.img2}>
                </Image>
                <View>
                    <Button title="button" onPress={this.clickBtn01}></Button>
                </View>
                <View>
                    <Button title="button" onPress={this.clickBtn02}></Button>
                </View> */}

                {/* #### Touchable~~~ #### */}

                {/* Touchable~은 그룹형 태그이다. import 해야함 */}
                {/* TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} 안드로이드의 기본 이펙트 지금 사용불가 */}
                {/* <TouchableHighlight style={styles.touchImg} onPress={this.clickBtn01} >
                    <Image
                        style={styles.img}
                        source={this.state.img}>
                    </Image>
                </TouchableHighlight> */}

                {/* <TouchableOpacity onPress={this.clickImgs}>
                    <View style={{width:310, height:200, backgroundColor:'#88558833', borderRadius:8, justifyContent:"center", alignItems:"center"}}>
                        <Image style={{width:290, height:150}} source={this.state.imgs[this.state.num]}></Image>
                        <Text style={{fontWeight:"bold", marginTop:16}}>Hello</Text>
                    </View>
                </TouchableOpacity> */}

                {/* ScrollView */}

                {/* <ScrollView>
                    <Image source={require('./images/moana01.jpg')} style={styles.imgStyle}></Image>
                    <Image source={require('./images/moana02.jpg')} style={styles.imgStyle}></Image>
                    <Image source={require('./images/moana03.jpg')} style={styles.imgStyle}></Image>
                    <Image source={require('./images/moana04.jpg')} style={styles.imgStyle}></Image>
                    <Image source={require('./images/moana05.jpg')} style={styles.imgStyle}></Image>
                </ScrollView> */}
                
                <ImageBackground style={{width:'100%', height:'100%',}} source={require('./images/moana01.jpg')}>
                    
                    <Text style={{alignSelf:"center",}}>Hello</Text>
                    <Text>This is Background image</Text>

                </ImageBackground>
                
            </View>
        );
    }// render method....

    clickBtn01=()=>{
        // 특별한 변수 state값을 변경
        this.setState({img:require('./images/moana02.jpg')});
    }// clickBtn....
    clickBtn02=()=>{this.setState({img2:"https://taegon.kim/wp-content/uploads/2018/05/image-5.png"})}

    clickImgs=()=>{
        let nums=this.state.num+1;
        if(nums>4) nums=0;
        this.setState({imgs:[nums]});
    }

}// MainComponent...

const styles=StyleSheet.create({
    root:{
        padding:16,
        backgroundColor:'#ff885533',
        flex:1,
        flexDirection:"column",
    },
    img:{
        // 사이즈를 지정하면 기본적으로 큰부분을 자른다.
        // resizeMode:'contain',
        // contain : 자르지않고 무언가 안에 포함시켜라
        width:200,
        height:200,
    },
    touchImg:{
        width:208,
        padding:4,
        height:208
    },
    imgStyle:{
        width:350,
        height:500,
        margin:16,
        borderRadius:15
    }
});// styles....