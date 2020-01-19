import React from 'react';
import * as atom from '../atom';
import {StyleSheet} from 'react-native';

const Heading1 = (props) => {
    return (
    <atom.Text style={{...style.textStyle,...props.style}}>{props.children}</atom.Text>
    )
}
const style=StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});

export default Heading1
