import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function Page2(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Welcome to Page 222</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Page3')}>
          <Text>Go To Page3</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    backgroundColor: 'green',
    marginTop: 40,
    padding: 8,
    width: 200,
  },
});

export default Page2;
