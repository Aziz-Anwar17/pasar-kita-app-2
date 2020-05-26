import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonIcon from './ButtonIcon';

const ButtonArt = ({title, onPress, type, name}) => {
    if (type === 'icon') {
        return <ButtonIcon name={name} onPress={onPress} />;
    }
    return(
        <TouchableOpacity style={{backgroundColor: '#240b36', borderRadius: 25, paddingVertical: 13, paddingHorizontal: 50}} onPress={onPress}>
            <Text style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'uppercase',
                alignItems: 'center',
                justifyContent: 'center',
            }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonArt;
