import React from 'react';
import HeadText from './HeadText';
import {StyleSheet} from 'react-native';

const HeadingTwo = (props) => {
    return (
        <>
    <HeadText style={{...style.textStyle,...props.style}}>{props.children}</HeadText>
    </>
    )
}
const style=StyleSheet.create({
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
    }
});

export default HeadingTwo;
