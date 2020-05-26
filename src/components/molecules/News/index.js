import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const News = () => {
    return(
        <View style={{marginTop: 16, paddingHorizontal: 16}}>
          <View>
            <View style={{position: 'relative'}}>
              <Image source={require('../../../../assets/jual baju.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.2, left: 0, top: 0}} />
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                <Image source={require('../../../../assets/1.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>MENJELANG IDUL FITRI</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A'}}>Meskipun corona melanda di indonesia ini tapi masyarakat indonesia masih berbondong-bondong ke Mall untuk berbelanja dalam rangka mempersiapkan datangnya hari raya idul fitri</Text>
              <TouchableOpacity style={{backgroundColor: '#6DD5FA', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 6 }}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>BACA</Text>
              </TouchableOpacity>
              <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
            </View>
          </View>
          <View>
            <View style={{position: 'relative'}}>
              <Image source={require('../../../../assets/buka-puasa.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.2, left: 0, top: 0}} />
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                <Image source={require('../../../../assets/1.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>MENU PAPORIT BUKA PUASA</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A'}}>Beberapa menu yang biasanya di persiapkan untuk berbuka puasa </Text>
              <TouchableOpacity style={{backgroundColor: '#6DD5FA', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 6 }}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>BACA</Text>
              </TouchableOpacity>
              <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
            </View>
          </View>
          <View>
            <View style={{position: 'relative'}}>
              <Image source={require('../../../../assets/sahur.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.2, left: 0, top: 0}} />
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                <Image source={require('../../../../assets/1.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>SAHUR YANG TERKOCAK</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A'}}>Keunikan masyarakat +62 itu tidak ada hentinya contohnya dalam membangunkan sahur ada berbagai macam cara yang dilakukan untuk membangunkan masyarakat</Text>
              <TouchableOpacity style={{backgroundColor: '#6DD5FA', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 6 }}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>BACA</Text>
              </TouchableOpacity>
              <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
            </View>
          </View>   
        </View>
    )
}

export default News;