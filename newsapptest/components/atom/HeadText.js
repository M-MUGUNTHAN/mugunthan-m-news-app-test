import React from 'react'
import {  Text,StyleSheet } from 'react-native'

const HeadText = (props) => {
    return (
    <Text style={{...style.textStyle,...props.style}}>{props.childen}</Text>
    )
}

const style=StyleSheet.create({
    textStyle:{
        color:'#fff',
        fontSize:15,
    }
});

export default HeadText
