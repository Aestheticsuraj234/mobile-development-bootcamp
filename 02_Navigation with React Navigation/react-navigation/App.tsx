import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/navigator/StackNavigator';
import MyTabs from './navigation/navigator/TabNavigator';
import MyDrawer from './navigation/navigator/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <MyTabs/> */}
      <MyDrawer/>
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
}