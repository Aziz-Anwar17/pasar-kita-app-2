import React from 'react';
import { View, TextInput, Image } from 'react-native';

const SearchFeature = () => {
    return(
        <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput placeholder="Mau kemana kita?" style={{borderWidth: 1, borderColor: '#383838', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 17}} />
            <Image source={require('../../../../images/pencarian.png')} style={{position: 'absolute', top: 10, left: 12, width: 26, height: 26}} />
          </View>
          <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 40, height: 40}} source={require('../../../../images/orang kaca mata.png')} />
          </View>
        </View>
    )
}

export default SearchFeature; 