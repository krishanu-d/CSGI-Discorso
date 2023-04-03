import Login from "../Screens/AuthStack/Login";
import Dashboard from "../Screens/DashStack/Dashboard";
import Splash from "../Screens/Splash/Splash";
import Account from "../Screens/Account/Account";
import QuizList from "../Screens/QuizStack/QuizList";
import Quiz from "../Screens/QuizStack/Quiz"


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
    },
    BottomTabs: {
        name: 'BottomTabs'
    },
    Dash: {
        name: 'Dash'
    },
    Acc: {
        name: 'Acc'
    },
    Quiz: {
        name: 'Quiz'
    },
    Account: {
        name: 'Account',
        Screen: Account,
        title: 'Account'
    },
    Dashboard: {
        name: 'Dashboard',
        Screen: Dashboard,
        title: 'Dashboard'
    },
    QuizList: {
        name: 'QuizList',
        Screen: QuizList,
        title: 'QuizList'
    },
    Quiz: {
        name: 'Quiz',
        Screen: Quiz,
        title: 'Quiz'
    }
};

export default Routes;