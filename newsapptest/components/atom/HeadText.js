import React from 'react';
import {  Text,StyleSheet } from 'react-native';

const HeadText = (props) => {
    return (
        <>
    <Text style={{...style.textStyle,...props.style}}>{props.children}</Text>
    </>
    );
}

const style=StyleSheet.create({
    textStyle:{
        color:'#000',
        fontSize:15,
    }
});

export default HeadText;
