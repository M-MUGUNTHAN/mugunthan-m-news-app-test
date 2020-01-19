import React,{useEffect} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { loading } from '../reduxUtils/action/dataAction';
import * as atom from '../atom';
//import * as mole from '../molecule';

export function Home(props) {
   // const{list,isloading}=props;
    useEffect(()=>{
      isloading();
    },[]);
    console.log('props',props);
   
    // if(false){
    // return (
    //     <View>
    //             <FlatList
    //             data={list}
    //             renderItem={({ item }) =><mole.List article={item}/>}
    //             keyExtractor={item => item.id}
    //             />
    //     </View>
    // );
    //     }
       // else{
            return(
                <View>
                    <atom.LoadingIndicator/>
                </View>
            );
       // }
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