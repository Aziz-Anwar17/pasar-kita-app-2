import React from 'react';
import { View } from 'react-native';
import { ButtonWelcome } from '../../../components';

const ActionButton = ({title, onPress}) => {
    return(
        <View style={{marginBottom: 43, maxWidth: 225}}>
            <ButtonWelcome title={title} onPress={onPress} />
        </View>  
    );
};

export default ActionButton;