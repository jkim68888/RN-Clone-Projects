import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import LoginForm from '../components/login/LoginForm'

const LoginScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={require('../assets/logo_login.png')} style={{ width: 120, height: 120 }} />
    </View>
    <LoginForm />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
})

export default LoginScreen
