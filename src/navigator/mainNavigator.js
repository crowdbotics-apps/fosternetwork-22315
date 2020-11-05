import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile167867Navigator from '../features/UserProfile167867/navigator';
import Settings167866Navigator from '../features/Settings167866/navigator';
import Settings167864Navigator from '../features/Settings167864/navigator';
import SignIn2167862Navigator from '../features/SignIn2167862/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile167867: { screen: UserProfile167867Navigator },
Settings167866: { screen: Settings167866Navigator },
Settings167864: { screen: Settings167864Navigator },
SignIn2167862: { screen: SignIn2167862Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
