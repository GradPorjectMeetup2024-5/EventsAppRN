import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.placeholderIcon}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#61646B"/>
        </Svg>
      </View>
      
      <Text style={styles.title}>Welcome Back</Text>
      
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#FFFFFF" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#FFFFFF" secureTextEntry />
      
      <TouchableOpacity style={styles.authButton}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.switchAuth}>
        <Text style={styles.switchAuthText}>
          Don't have an account? <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
        </Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  placeholderIcon: {
    position: 'absolute',
    top: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    backgroundColor: '#D9D9D9',
    borderRadius: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: width - 32,
    height: 47,
    backgroundColor: '#AFB1B6',
    borderRadius: 24,
    paddingHorizontal: 20,
    marginBottom: 10,
    color: '#FFFFFF',
    fontFamily: 'WorkSans-Medium',
    fontSize: 16,
  },
  authButton: {
    width: width - 32,
    height: 47,
    backgroundColor: '#19191B',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'WorkSans-Medium',
    fontSize: 16,
  },
  switchAuth: {
    marginTop: 20,
  },
  switchAuthText: {
    color: '#19191B',
    fontFamily: 'WorkSans-Medium',
    fontSize: 14,
  },
  forgotPassword: {
    position: 'absolute',
    bottom: 20,
  },
  forgotPasswordText: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 16,
    color: '#000000',
  },
});

export default LoginPage;