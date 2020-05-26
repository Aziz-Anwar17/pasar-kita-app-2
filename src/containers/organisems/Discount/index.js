import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Feacture from '../../../components/molecules/Feacture/index';

class Discount extends Component {
    render(){
        return(
            <View style={{marginHorizontal: 17, marginTop: 8}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2c3e50', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14}}>
                    <Image style={{width: 30, height: 30}} source={require('../../../../images/discount besar.png')} />
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>01-07 Juni 2020</Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#bdc3c7', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
                    <Feacture title="Electronic" img={require('../../../../images/komputer-biru.png')} />
                    <Feacture title="Permainan" img={require('../../../../images/Alat-Bermain.png')} />
                    <Feacture title="Alat Tulis" img={require('../../../../images/komputer.png')} />
                    <Feacture title="Londry" img={require('../../../../images/londry.png')} />
                </View>
            </View>
        )
    }
}

export default Discount;