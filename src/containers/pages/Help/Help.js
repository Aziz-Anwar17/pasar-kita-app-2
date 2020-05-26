import React from 'react';
import { View, ScrollView } from 'react-native';
import Notification from './../../../components/molecules/Notification/index';
import SearchFeature from './../../../components/molecules/SeacrhFeature/index';

const Help = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: 'white'}} scrollToOverflowEnabled={false} >
                <SearchFeature />
                <Notification />
            </ScrollView>
        </View>
    );
}

export default Help;
