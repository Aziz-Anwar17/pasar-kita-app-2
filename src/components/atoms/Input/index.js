import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

const Input = ({placeholder, ...rest}) => {
    return (
        <TextInput 
            style={{
                borderWidth: 1,
                borderColor: '#1f4037',
                borderRadius: 25,
                paddingVertical: 12,
                paddingHorizontal: 18,
                fontSize: 14,
                color: 'black',
            }} 
            placeholder={placeholder} 
            placeholderTextColor="black"
            {...rest}
        />
    );
};

export default Input;
