import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

const Map = () => {
    // const region = {}
    return (
        <View className='w-full h-full rounded-2xl'>
            <MapView
                provider={PROVIDER_DEFAULT}
                style={{ flex: 1,  }}
                tintColor='black'
                mapType='mutedStandard'
                showsPointsOfInterest={false}
                // initialRegion={region}
                showsUserLocation={true}
            />
        </View>
    );
};

export default Map;
