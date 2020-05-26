import React from 'react';
import { Image } from 'react-native';
import { IconBack } from '../../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonIcon = ({...rest}) => {
    return (
        <TouchableOpacity {...rest}>
            <Image source={IconBack} style={{width: 25, height: 25}} />
        </TouchableOpacity>
    );
};

export default ButtonIcon;

