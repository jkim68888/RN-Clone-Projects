import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import Header from '../components/home/Header'

const HomeScreen = ({ params }) => (
  <SafeAreaView style={styles.container}>
    <Header />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default HomeScreen
