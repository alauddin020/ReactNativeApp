import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity,Platform,TouchableNativeFeedback} from 'react-native';

const CategoryGirdTile =(props) =>{
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS==='android' && Platform.Version >=21  )
    {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.girdItem}>
            <TouchableCmp style={{flex: 1 }} onPress={props.onSelect}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )


};

const styles = StyleSheet.create({
    girdItem:{
        flex: 1,
        margin: 15,
        height: 150,
    },
    container:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right',
    }
});

export default CategoryGirdTile;