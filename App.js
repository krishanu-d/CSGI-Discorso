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
import { Provider } from 'react-redux';
import store  from './source/Redux/store';




function App() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4', width: '100%' }}>
            <Provider store={store}>
                <NavigationContainer ref={navigationRef}
                    onReady={() => {
                        isReadyRef.current = true;
                    }}>

                    <Navigator navigate={navigate} />

                </NavigationContainer>
            </Provider>
        </SafeAreaView>
    )

}

export default App;
