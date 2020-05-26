import React from 'react';
import { View, Text, Image } from 'react-native'

const Feacture = (props) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={props.img} />
            <Text style={{alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 10}}>{props.title}</Text>
        </View>
    );
}

export default Feacture;