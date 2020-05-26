import React from 'react';
import { View, Text, Image } from 'react-native'

const MainFeature = (props) => {
    return(
        <View style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#bdc3c7', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 46, height: 46}} source={props.img} />
            </View >
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>{props.title}</Text>
        </View>
    )
}

export default MainFeature;