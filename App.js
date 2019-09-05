import React,{ useState } from 'react';
// import { StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import MealsNavigator from "./Navigation/MealsNavigator";
const fetchFonts=()=>{
  return  Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
export default function  App ()
{
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded)
  {
    return <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>setFontLoaded(true)}
    />
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     dataSource: [],
  //   }
  // }
  // componentWillMount() {
  //   this.fetchData();
  // }
  // fetchData= async()=>{
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const responseJson = await response.json();
  //   this.setState({
  //     loading: false,
  //     dataSource: responseJson
  //   })
  //   //console.log(this.state.dataSource)
  // }
  //   return (
  //       <View style={styles.container}>
  //         <Text>All Post</Text>
  //         <ScrollView style={styles.scrollView}>
  //           {this.state.dataSource.map((data, key) =>
  //               <Text key={data.id}>{data.title}</Text>
  //           )}
  //         </ScrollView>
  //       </View>
  //   );
  // }
    return (
        <MealsNavigator/>
    );
}
// const styles = StyleSheet.create({
//   container: {
//     marginTop: '10%',
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
