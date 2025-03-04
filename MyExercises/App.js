import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Bai1BasicComp'; 
import Component from './src/Bai2_1CustomComp';
import NotificationList from './src/Bai2_2Flatlist';
import Lesson5 from './src/Lesson5';
import ValidateForm from './src/Bai4ValidateForm'
import HomeScreen from './src/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';
import MainStack from './src/Navigation/MainStack';
import { AppProvider, AppContext } from './src/Context/AppContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

// const App = () => {
//   // return <LoginScreen />;
//   // return <Component />;
//   // return <NotificationList />;
//   // return <Lesson5 />;
//   // return <ValidateForm />;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={ValidateForm} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
