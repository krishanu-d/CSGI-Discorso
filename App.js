/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { isReadyRef, navigate, navigationRef } from './RootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './source/navigation/navigation'




function App() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4', width: '100%' }}>
            <NavigationContainer ref={navigationRef}
                onReady={() => {
                    isReadyRef.current = true;
                }}>

                <Navigator navigate={navigate} />

            </NavigationContainer>
        </SafeAreaView>
    )

}

export default App;
