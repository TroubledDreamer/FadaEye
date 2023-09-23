// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { useState } from 'react';
// import { Image, Button } from 'react-native';

// const Stack = createStackNavigator();

// export default function App() {

//   const [name, setName] = useState('Zo');
//   const imageName = name + '.png';
//   const [zodes, setZodes] = useState('WARNING: Zo d is a criminal to the bone and killed ten kids');
//   const [kevdes, setkevdes] = useState('WARNING: Kev got the dawg in him');
//   const [key, setKey] = useState("empty")

//   if (name == "Zo"){

//     setKey(zodes);

//   } else {

//     setKey(kevdes);

//   }

//   return (

//     <View style={styles.container}>
//       {
//       <>

//       <>
//       <Image source={{ uri: imageName }} />
//       <Image source={{ uri: 'data:image/png;base64,<base64-string>=' }} />
//       </>

//       <text>{key}</text>

//       <Button
//       onPress={onPressSubmit}
//       title="Submit"
//       color="#FFFFFF"
//       />

//       </>

//       }

//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  text,
} from "react-native";
export default function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [imageName, setImageName] = useState("./blank welcome.png");
  const [zodes, setZodes] = useState(
    "WARNING: Zo d is a criminal to the bone and killed ten kids"
  );
  const [zoSeen, setZoSeen] = useState(
    "Last seen: 3 seconds ago"
  );

  const [kevdes, setkevdes] = useState("WARNING: Kev got the dawg in him");
  const [kevSeen, setkevSeen] = useState("Seen: 10 mins ago");

  const [key, setKey] = useState("empty");
  const [SeenKey, setSeenKey] = useState("empty");

  const updateKeyBasedOnName = () => {
    if (name === "Zo") {
      setKey(zodes);
      setSeenKey(zoSeen)


    } else {
      setKey(kevdes);
      setSeenKey(kevSeen)
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text></Text>

      <>
        {name === "Zo" ? (
          <Image source={require("./zo.jpg")}  style={styles.image}/>

        ) : (
          
          name === "Kev" ? (
          <Image source={require("./kev.jpg")} style={styles.image} />
        ) : (
          <Image source={require("./blank welcome.png")}  style={styles.image}/>
        )

        )}
      </>

      <Text>{key}</Text>
        
      <Text>{SeenKey}</Text>







      <TextInput
          style={[
            styles.input,
            isFocused && styles.inputFocused,
          ]}
        placeholder="Enter name"
        onChangeText={(name) => setName(name)}
        defaultValue={text}
      />

      <Button title="Update Key" onPress={updateKeyBasedOnName} color="#007BFF">
        I am on it
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  inputContainer: {
    position: "relative",
  },
  input: {
    padding: 10,
    height: 40,
    borderBottomWidth: 2,
    borderColor: "#0B2447",
    fontSize: 16,
    backgroundColor: "transparent",
  },
  inputFocused: {
    borderBottomWidth: 0, // Hide the default bottom border when focused
  },
  topLine: {
    position: "absolute",
    backgroundColor: "#0B2447",
    width: "0%",
    height: 2,
    right: 0,
    top: 0,
    transition: "width 0.5s",
  },
  underline: {
    position: "absolute",
    backgroundColor: "#0B2447",
    width: "0%",
    height: 2,
    right: 0,
    bottom: 0,
    transition: "width 0.5s",
  },
});
