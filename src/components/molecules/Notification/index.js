import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Notification = () => {
    return(
        <View style={{padding: 16}}>
          <View>
            <View style={{position: 'relative'}}>
              <Image source={require('../../../../assets/pemberitahuan.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.15, left: 0, top: 0}} />
              <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>New SMS</Text>
                  <Text style={{fontSize: 12, fontWeight: '100%', color: 'white'}}>Pemesanan makanan</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 100}}>
                  <TouchableOpacity style={{backgroundColor: '#6DD5FA', paddingHorizontal: 25, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4 }}>
                    <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>BUKA</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
          </View>
          <View>
            <View style={{position: 'relative'}}>
              <Image source={require('../../../../assets/pemberitahuan1.png')} style={{height: 170, width: '100%', borderRadius: 6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.15, left: 0, top: 0}} />
              <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>Toko Baru</Text>
                  <Text style={{fontSize: 12, fontWeight: '100%', color: 'white'}}>Webside baru di buka</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 100}}>
                  <TouchableOpacity style={{backgroundColor: '#6DD5FA', paddingHorizontal: 25, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4 }}>
                    <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>BUKA</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
          </View>
          <View>
            <View style={{position: 'relative'}}>
              <Image source={require('../../../../assets/pemberitahuan2.png')} style={{height: 170, width: '100%', borderRadius: 6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.15, left: 0, top: 0}} />
              <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>New SMS</Text>
                  <Text style={{fontSize: 12, fontWeight: '100%', color: 'white'}}>Pemberitahuan Peribadi</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 100}}>
                  <TouchableOpacity style={{backgroundColor: '#6DD5FA', paddingHorizontal: 25, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4 }}>
                    <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>BUKA</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
          </View> 
        </View>
    )
}

export default Notification;