import React from 'react';
import { View, Text,Image } from 'react-native';
import * as atom from '../atom';

export default function Detail(props) {
    return (
        <View>
        <atom.HeadingOne style={{fontSize:40}}>title</atom.HeadingOne>
        <atom.HeadText>author  <atom.HeadText>date:dd/mm/yy</atom.HeadText></atom.HeadText>
        <Image style={{backgroundColor:'yellow',width:'90%',height:200}} />
        </View> 
       
    );
}
