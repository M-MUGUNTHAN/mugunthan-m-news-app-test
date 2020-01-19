import React,{useEffect} from 'react';
import { View,FlatList} from 'react-native';
import { connect } from 'react-redux';
import { loading } from '../reduxUtils/action/dataAction';
import * as atom from '../atom';
import * as mole from '../molecule';
import { ScrollView } from 'react-native-gesture-handler';

export function Home(props) {
    const{navigate}=props.navigation;
    useEffect(()=>{
       isloading()
    },[])
  const{list,isloading}=props;
    if(list){
        console.log(list);
        return(
            <View style={{width:'100%',alignItems:'center'}}>
            <View style={{width:'95%'}}>
                <View style={{height:'10%',justifyContent:'center'}}>
                <atom.HeadingOne>Your Daily Read</atom.HeadingOne>
                </View>
                <View style={{height:'90%'}}>
                <FlatList
                data={list}
                renderItem={({ item }) =><mole.List navigate={navigate} title={item.title} author={item.author} urlToImage={item.urlToImage}/>}
                keyExtractor={item => item.title}
                />
                </View>
            </View>
            </View>
        );
    }
    else{
        <atom.LoadingIndication/>
    }
   
}

const mapStateToProps=(state)=>(
    {
       list:state.news.dataList
    }
)
const mapDispatchToProps=(dispatch)=>(
    {
        isloading:()=>dispatch(loading())
    }
);
export default connect(mapStateToProps,mapDispatchToProps)(Home);