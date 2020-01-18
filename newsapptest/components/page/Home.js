import React from 'react';
import { View, Text,FlatList } from 'react-native';


export default function Home(props) {
    const data=[
        {id:"1",title:'apple'},
        {id:"2",title:'apple'},
        {id:"3",title:'apple'},
        {id:"4",title:'apple'},
        {id:"5",title:'apple'},

    ]
    return (
        <View>
            <FlatList
            data={data}
    renderItem={({ item }) => <Text >{item.title}</Text>}
            keyExtractor={item => item.id}
            />
        </View>
    );
}
