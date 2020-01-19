import React from 'react';
import {View,ActivityIndicator} from 'react-native';

export default function LoadingIndicator(props) {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator  size="large" color="#0000ff" />
         </View>
    );
}
