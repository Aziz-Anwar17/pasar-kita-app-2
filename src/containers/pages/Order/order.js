import React from 'react';
import { View } from 'react-native';
import HomeMainFeature from './../../organisems/HomeMainFeature/index';
import SearchFeature from './../../../components/molecules/SeacrhFeature/index';
import { ScrollView } from 'react-native-gesture-handler';

const Order = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <SearchFeature />
                <HomeMainFeature />
            </ScrollView>
        </View>
    );
}

export default Order;