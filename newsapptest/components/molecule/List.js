import React from 'react'
import { View,Image } from 'react-native'
import * as atom from '../atom';
const List = (props) => {
    return (
        <View style={{height:'15%',backgroundColor:'red',flexDirection:'row'}}>
            <View style={{width:'70%',backgroundColor:'blue'}}>
               <atom.Heading2>{props.article.title}</atom.Heading2>
               <atom.Text>{props.article.author}</atom.Text>
            </View>
            <View style={{width:'30%',backgroundColor:'green'}}>
             <Image source={{uri:`${props.article.urlToImage}`}}/>
            </View>
        </View>
    )
}

export default List;
