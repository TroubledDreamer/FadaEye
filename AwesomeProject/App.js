import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer> 
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfilePage} />
    <Stack.Screen name="Camera" component={Camera} />

    </Stack.Navigator>
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Camera')}
      />

    </View> 
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
