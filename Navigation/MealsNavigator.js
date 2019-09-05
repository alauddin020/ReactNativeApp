import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {Platform} from "react-native";
const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoriesMealsScreen,
    },
    MealDetail: MealDetailsScreen
}, {
    initialRouteName:'Categories',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS==='android' ? '#4a148c' : '' ,
        },
        headerTintColor: Platform.OS==='android' ?  'white' : '#4a148c',
    }
});
export default createAppContainer(MealNavigator)