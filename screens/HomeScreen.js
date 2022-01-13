import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTabs from '../components/home/BottomTabs'

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <Stories />
    <ScrollView>
      {POSTS.map((post, index) => {
        return <Post post={post} key={index} />
      })}
    </ScrollView>
    <BottomTabs />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default HomeScreen
