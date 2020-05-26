import React from 'react';
import { View, Text, Image } from 'react-native';
import ActionButton from './ActionButton';
import { SelamatDatang } from '../../../../assets';

const Wellcome = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    }
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
            <Image source={SelamatDatang} style={{height: 117, width: 219, marginBottom: 10}} />
            <Text style={{fontSize: 48, fontWeight: 'bold', color: '#93291E', marginBottom: 75}}>Pasar Kita</Text>
            <ActionButton title="Login" onPress={() => handleGoTo('Login')} />
            <ActionButton title="Daftar" onPress={() => handleGoTo('Register')} />
        </View>
    );
};

export default Wellcome;