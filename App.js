/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { isReadyRef, navigate, navigationRef } from './RootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './source/navigation/navigation'
import { Provider } from 'react-redux';
import store from './source/Redux/store';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { Notifications } from 'react-native-notifications';
import { PermissionsAndroid } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



function App() {

    async function saveTokenToDatabase(token) {
        // Assume user is already signed in
        const userId = auth().currentUser?.uid;


        // Add the token to the users datastore
        await firestore()
            .collection('users')
            .doc(userId)
            .update({
                tokens: firestore.FieldValue.arrayUnion(token),
            });
    }

    getDevicetoken = async () => {
        // let token = await messaging().getToken();
        // console.log('tokennnnnn->', token);

        const enabled = await messaging().hasPermission();
        console.log('enabled', enabled);

        Notifications.registerRemoteNotifications();
        Notifications.android.registerRemoteNotifications();

        Notifications.events().registerRemoteNotificationsRegistered((event) => {
            // TODO: Send the token to my server so it could send back push notifications...
            console.log("Device Token Received", event.deviceToken);
        });
        Notifications.events().registerRemoteNotificationsRegistrationFailed((event) => {
            console.error(event);
        });
        
    }

    

     

    useEffect(() => {
        getDevicetoken()
        


        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

        // messaging()
        //     .getToken()
        //     .then(token => {
        //         console.log('tokern baba re----->',token)
        //         return saveTokenToDatabase(token);
        //     });

        // // If using other push notification providers (ie Amazon SNS, etc)
        // // you may need to get the APNs token instead for iOS:
        // // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }

        // // Listen to whether the token changes
        // return messaging().onTokenRefresh(token => {
        //     saveTokenToDatabase(token);
        // });


    }, [])

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived on foreGround!', JSON.stringify(remoteMessage));
        });

        return unsubscribe;
    }, []);

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
