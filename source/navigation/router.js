import Login from "../Screens/AuthStack/Login";
import Splash from "../Screens/Splash/Splash";


const Routes = {
    Splash: {
        name: 'Splash',
        Screen: Splash,
        title: 'Splash',
    },
    Auth: {
        name: 'Auth'
    },
    Login: {
        name: 'Login',
        Screen: Login,
        title: 'Login',
    }
};

export default Routes;