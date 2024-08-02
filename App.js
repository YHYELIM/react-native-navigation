import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; // 수정된 부분
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      {/* 수정된 부분 */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          // route 객체 받아서 title 동적으로 설정
          options={({route}) => ({title: `상세정보 - ${route.params.id}`})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
