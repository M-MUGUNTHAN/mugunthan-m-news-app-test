import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as page from '../page';


const MainNavigator = createStackNavigator({
    home: {screen:page.Home},
    detail: {screen:page.Detail},
  },{
        initialRouteName: 'home',
        defaultNavigationOptions: {
            headerShown:false
        }
  });
  
  const Router = createAppContainer(MainNavigator);
  export default Router;