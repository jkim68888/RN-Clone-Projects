import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'

const HomeScreen = ({ params }) => (
  <SafeAreaView style={styles.container}>
    <Header />
    <Stories />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default HomeScreen
