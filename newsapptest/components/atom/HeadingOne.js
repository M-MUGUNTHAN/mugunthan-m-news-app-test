import React from 'react';
import HeadText from './HeadText';
import {StyleSheet} from 'react-native';

const HeadingOne = (props) => {
    return (
        <>
    <HeadText style={{...style.textStyle,...props.style}}>
        {props.children}
    </HeadText>
    </>
    )
}
const style=StyleSheet.create({
    textStyle:{
        fontSize:28,
        fontWeight:'bold',
    }
});

export default HeadingOne;
