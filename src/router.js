import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Landing from './views/Landing'
import Registration from './views/Registration'

const MainNavigator = createStackNavigator({
    Home: { screen: Landing },
    Registration: { screen: Registration }
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
