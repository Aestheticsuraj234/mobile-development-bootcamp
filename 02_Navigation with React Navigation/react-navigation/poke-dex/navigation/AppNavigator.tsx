import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";


const Stack = createNativeStackNavigator();


const AppNavigator = ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}  />
        </Stack.Navigator>
    )
}

export default AppNavigator;