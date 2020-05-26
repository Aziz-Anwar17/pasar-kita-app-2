import React from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { Input } from '../../../components';
import {  GambarLogin } from '../../../../assets/index';
import { useSelector, useDispatch } from 'react-redux';
import { setForm } from './../../../redux';
import ButtonArt from './../../../components/atoms/ButtonWelcome/index';

const Login = ({navigation}) => {
    const {form} = useSelector(state => state.LoginReducer);
    const dispatch = useDispatch();
    
    const sendData = () => {
        console.log('data yang dikirim: ', form);
    };

    const handleGoTo = () => {
        navigation.navigate('BottomTabs');
    }

    const onInputChange = (value, input) => {
        dispatch(setForm(input, value));
    };

    return(
        <View style={{padding: 20}}>
            <ScrollView>
                <ButtonArt type='icon' name='back' onPress={() => navigation.goBack()} />
                <Image source={GambarLogin} style={{width: 150, height: 115, marginTop: 8, marginBottom: 8, left: 100}} />
                <View style={{paddingHorizontal: 70, marginTop: 15}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: 'blak'}}>Selamat Beraktivitas</Text>
                </View>
                <View style={{height: 65}} />
                <Input placeholder="Email" value={form.email} onChangeText={(value) => onInputChange(value, 'email')} />
                <View style={{height: 30}} />
                <Input placeholder="Password" value={form.password} onChangeText={(value) => onInputChange(value, 'password')} secureTextEntry={true} />
                <View style={{height: 40}} />
                <View style={{padding: 45, alignItems: 'center', justifyContent: 'center'}}>
                    <ButtonArt title="Login" onPress={sendData, handleGoTo} />
                </View>
                
            </ScrollView>
        </View>
    );
};

export default Login;