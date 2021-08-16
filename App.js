import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';



function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)
      }
    />
  );
}


function HomeScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>WELLCOME TO MY APP</Text>
     
      <Text>Home Screen</Text>
      <GoToButton screenName="About" onPress={() => navigation.About()} />
      <GoToButton screenName="Notification" onPress={() => navigation.Notification()}/>
      
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <GoToButton screenName="Home" onPress={() => navigation.Home()} />
      
    </View>
  );
}

function Notification({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notification Screen</Text>
      <GoToButton screenName="Home" onPress={() => navigation.Home()} />
      
    </View>
  );
}
const Drawer = createDrawerNavigator();

 function App(navigation) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} 
                          options={{
                            title: 'Home',
                            headerStyle: {
                              backgroundColor: '#f4511e',
                            },
                            headerTintColor: '#fff', 
                          }} />
        <Drawer.Screen name="About" component={AboutScreen}
                                 options={{
                                  title: 'About',
                                  headerStyle: {
                                    backgroundColor: '#f4511e',
                                  },
                                  headerTintColor: '#fff', 
                                }} />
        <Drawer.Screen name="Notification" component={Notification}
                                 options={{
                                  title: 'Notification',
                                  headerStyle: {
                                    backgroundColor: '#f4511e',
                                  },
                                  headerTintColor: '#fff', 
                                }} />                        
      </Drawer.Navigator>
    </NavigationContainer>
  );
  
}
export default App;

