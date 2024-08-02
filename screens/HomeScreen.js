import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
// navigation객체를 props로 받아옴
// navigation이 변경될 때마다 navigation 함수 호출
function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);

  return (
    <View>
      <Button
        title="Detail 1 열기"
        // 라우트 파라미터 : 네비게이터 화면 이름, id
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.navigate('Detail', {id: 3})}
      />
    </View>
  );
}
export default HomeScreen;
