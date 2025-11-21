// React Native doesn't use regular CSS - it has built-in object
// styles that are similar to CSS but defined in JavaScript.
import { StyleSheet } from 'react-native';
import { colors, fonts, radius, spacing } from "./theme";

// Define and export styles for the application components.
// creates a StyleSheet object with various style definitions.
export default StyleSheet.create({
  container: {
    // take the entire screen
    flex: 1,
    // center items vertically
    justifyContent: 'center',
    // centers everything horiztonally
    alignItems: 'center',
    // add some padding around the container
    padding: 20,
    // white background color
    backgroundColor: '#ffffff',
  },
  
  input: {
    width: "100%",
    height: 45,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: radius.md,
    marginBottom: spacing.xs * 3,
    paddingHorizontal: 12,
    fontSize: fonts.regular,
  },

  button: {
    backgroundColor: colors.buttons,
    width: "100%",
    paddingVertical: 12,
    borderRadius: radius.md,
    marginBottom: spacing.xs * 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: fonts.medium,
    textAlign: "center",
    fontWeight: "bold",
  },

  linkButton: {
    marginBottom: spacing.xs * 3,
  },

  linkButtonText: {
    fontSize: fonts.regular,
    color: colors.primary,
    textAlign: "center",
    fontWeight: "600",
  },
});