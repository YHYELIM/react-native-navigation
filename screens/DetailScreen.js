import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});
// route props 받아옴
/* {
"key" : "Detail-vgsjd어쩌구"(화면의 고유 ID)
"name" : "Detail"(스택네비게이터에서 설정한 화면 이름)
"params" : {"id" : 1}(라우트 파라미터)
} */
function DetailScreen({route, navigation}) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id:{route.params.id}</Text>
      <View style={styles.buttons}>
        <Button
          title="다음"
          //push : 스택 안쌓임 - 뒤로 가기 버튼을 누르면 이전 Detail 화면 열림
          //navigate : 스택 쌓임 - 뒤로 가기 버튼을 누르면 새로운 화면 쌓이지 않고 파라미터만 변경
          //따라서 push 함수는 네이티브 스택 내비게이터에서만 사용 가능
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}
export default DetailScreen;
