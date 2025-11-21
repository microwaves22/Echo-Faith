// Home screen
// importing parts of React Native to use them in UI
/*
  - Text: displays text on the screen
  - TextInput: allows user to input text
  - TouchableOpacity: creates a button that responds to touches
  - View: a container for other UI elements
*/
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
// importing styles from styles.js to style the components
import styles from "./style/itemStyles";
import { colors, title } from "./style/theme";

import { useRouter } from "expo-router";


// creates a functional component named Index which returns UI layout
// export default makes this component available for use in other files
export default function homeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Logo */}
      <Image
        source={require("../assets/images/echo_faith_logo.png")}
        style={{ width: "30%", height: "40%", marginBottom: 5}}
      />

      {/* Title Section */}
      <View style={{ alignItems: 'flex-start', marginBottom: 20 }}>
        <Text style={[title, { color: colors.logo }]}>Hello,</Text>
        <Text style={[title, { color: colors.logo }]}>Welcome back!</Text>
      </View>
      
      {/* Inputs */}
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />

      {/* Buttons */}
      <TouchableOpacity style={styles.linkButton} onPress ={() => router.push("/forgotPasswordScreen")}>"
        
        <Text style={styles.linkButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* <Text style={[subtitle, { textAlign: "center", marginVertical: 20 }]}>
        Or Login With...
      </Text> */}
      
      {/* creates clickable button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push("/signUpScreen")}
      >
        <Text style={styles.buttonText}>New to Echo Faith? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
