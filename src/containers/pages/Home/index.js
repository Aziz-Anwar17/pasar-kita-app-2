import React from 'react';
import { View, ScrollView } from 'react-native';

import SearchFeature from './../../../components/molecules/SeacrhFeature/index';
import News from './../../../components/molecules/News/index';
import Discount from '../../organisems/Discount/index';

const Home = () => {
    return(
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: 'white'}} scrollToOverflowEnabled={false} >
                <SearchFeature />
                <Discount />
                <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}></View>
                <News />
            </ScrollView>
        </View>
    );
}

// class Home extends Component {
//     render(){
//         return(
//             <View style={{flex: 1}}>
//                 <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
//                     <SearchFeature />
//                     <HomeGoPay />
//                     <HomeMainFeature />
//                     <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}></View>
//                     <GoNews />
//                     <GoFoodBanner />
//                 </ScrollView>
//                 <NavBar />
//             </View>
//         )
//     }
// }

export default Home;