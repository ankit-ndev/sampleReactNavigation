import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function Page3(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Welcome to Page 333</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Page3;
