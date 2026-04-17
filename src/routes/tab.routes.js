import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cadastro from "../screens/Cadastro"
import Perfil from "../screens/Perfil"

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="cadastro" component={Cadastro}/>
            <Tab.Screen name="perfil" component={Perfil}/>
        </Tab.Navigator>
    )
}