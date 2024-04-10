
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
/* import { StatusBar } from 'expo-status-bar'; */
import theme from './src/components/theme';
import Main from './src/components/Main';
import { PaperProvider } from 'react-native-paper';




export default function App() {


  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Main />
        <StatusBar backgroundColor={theme.bgColors['bg-300']} />
      </SafeAreaView></PaperProvider>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgColors['bg-100'],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },

}
)
