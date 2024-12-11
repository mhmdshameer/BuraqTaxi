import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

const Map = () => {
    return (
        <View className='w-full h-full rounded-2xl'>
            <MapView
                provider={PROVIDER_DEFAULT}
                style={{ flex: 1,  }}
                
                tintColor='black'
                mapType='mutedStandard'
                showsPointsOfInterest={false}
            />
        </View>
    );
};

export default Map;
