import { createBottomTabNavigator } from 'react-navigation-tabs';
import postscreen from '../screens/postscreen'
import tradescreen from '../screens/tradescreen';

export const AppTabNavigator = createBottomTabNavigator({
    Post: {screen: postscreen},
    Trade: {screen: tradescreen}
},
{
    initialRouteName: 'Post'
})