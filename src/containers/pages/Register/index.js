import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Input } from '../../../components';
import { GambarRegister } from '../../../../assets/index';
import { useSelector, useDispatch } from 'react-redux';
import { setForm } from './../../../redux';
import ButtonArt from './../../../components/atoms/ButtonWelcome/index';




const Register = ({navigation}) => {
    const {form} = useSelector(state => state.RegisterReducer);
    const dispatch = useDispatch();
    
    const sendData = () => {
        console.log('data yang dikirim: ', form);
    };

    const handleGoTo = () => {
        navigation.navigate('Login');
    };

    const onInputChange = (value, input, e) => {
        dispatch(setForm(input, value, e));
    };

    return(
        <View style={{padding: 20}}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <ButtonArt type='icon' name='back' onPress={() => navigation.goBack()} />
                <Image source={GambarRegister} style={{width: 106, height: 115, marginTop: 8, left: 100}} />
                <View style={{height: 54}} />
                <Input placeholder="Nama lengkap" value={form.fullName} onChangeText={(value) => onInputChange(value, 'fullName')} />
                <View style={{height: 30}} />
                <Input placeholder="Email" value={form.email} onChangeText={(value) => onInputChange(value, 'email')} />
                <View style={{height: 30}} />
                <Input placeholder="NO HP" value={form.noHp} onChangeText={(value) => onInputChange(value, 'noHp')} />
                <View style={{height: 30}} />
                <Input placeholder="Password" value={form.password} onChangeText={(value) => onInputChange(value, 'password')} secureTextEntry={true} />
                <View style={{height: 45}} />
                <View style={{paddingHorizontal: 50, alignItems: 'center'}}>
                    <ButtonArt title="Daftar" onPress={sendData} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Register;