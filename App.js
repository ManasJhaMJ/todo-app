import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const showToast = () => {
    ToastAndroid.show('Hello World', ToastAndroid.SHORT);
    ToastAndroid.BOTTOM;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello There!</Text>
      <TouchableOpacity style={styles.button} onPress={() => showToast()}>
        <Text style={styles.btn_text}>Click Me!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn_text: {
    color: 'black',
    fontSize: 14
  },

  text: {
    color: 'black',
    fontSize: 30
  },

  button: {
    backgroundColor: 'aqua',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10
  }
});
