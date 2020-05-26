import React, { Component } from 'react';
import { View } from 'react-native';
import MainFeature from './../../../components/molecules/MainFeature/index';

class HomeMainFeature extends Component {
    render() {
        return(
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 18, flexWrap: 'wrap'}}>
              <MainFeature title="MASJID" img={require('../../../../images/masjid.png')}  />
                <MainFeature title="GEREJA" img={require('../../../../images/gereja.png')}  />
                <MainFeature title="KELENTENG" img={require('../../../../images/Kelenteng.png')}  />
                <MainFeature title="MANDIRA" img={require('../../../../images/Mandira.png')}  />
                <MainFeature title="BENGKEL" img={require('../../../../images/bengkel.png')}  />
                <MainFeature title="APOTEK" img={require('../../../../images/apotik.png')}  />
                <MainFeature title="RESTORAN" img={require('../../../../images/Warung.png')}  />
                <MainFeature title="CONTER" img={require('../../../../images/conter.png')}  />
                <MainFeature title="PERHOTELAN" img={require('../../../../images/hotel.png')}  />
                <MainFeature title="PANTAI" img={require('../../../../images/pantai.png')}  />
                <MainFeature title="PEGUNUNGAN" img={require('../../../../images/gunung.png')}  />
                <MainFeature title="LAPANGAN" img={require('../../../../images/lapangan.png')}  />
                <MainFeature title="FITNES" img={require('../../../../images/pitnes.png')}  />
                <MainFeature title="PARK" img={require('../../../../images/Park.png')}  />
                <MainFeature title="TRANSPORTASI" img={require('../../../../images/transportasi.png')}  />
                <MainFeature title="ALAT DAPUR" img={require('../../../../images/sendok.png')}  />
                <MainFeature title="GAMES" img={require('../../../../images/games.png')}  />
                <MainFeature title="PAKAIAN" img={require('../../../../images/pakaian.png')}  />
                <MainFeature title="HIJAB" img={require('../../../../images/hijab.png')}  />
                <MainFeature title="MINUMAN" img={require('../../../../images/minuman.png')}  />
                <MainFeature title="BUAH" img={require('../../../../images/buah.png')}  />
                <MainFeature title="WARUNG" img={require('../../../../images/warung1.png')}  />
                <MainFeature title="BAKSO" img={require('../../../../images/bakso.png')}  />
                <MainFeature title="GORENGAN" img={require('../../../../images/gorengan.png')}  />
              </View>
            </View>
        )
    }
}

export default HomeMainFeature;