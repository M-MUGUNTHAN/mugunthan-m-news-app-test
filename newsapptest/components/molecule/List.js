import React from 'react'
import { View,Image,TouchableOpacity} from 'react-native'
import * as atom from '../atom';
const List = (props) => {
    let Image_URL ={ uri:props.urlToImage}
    return (
        <TouchableOpacity style={{marginBottom:'5%'}} onPress={()=>props.navigate('detail',{})}>
        <View style={{flexDirection:'row'}}>
            <View style={{width:'70%'}}>
               <atom.HeadingTwo>{props.title}</atom.HeadingTwo>
               <atom.HeadText>{props.author}</atom.HeadText>
            </View>
            <View style={{width:'30%',alignItems:'center',justifyContent:'center'}}>
             <Image style={{backgroundColor:'gray'}} source={Image_URL} width={100} height={100}/>
             </View>
        </View>
        </TouchableOpacity>
    )
}

export default List;
