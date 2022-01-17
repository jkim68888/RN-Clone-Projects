import React, { useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTabs from '../components/home/BottomTabs'
import { collectionGroup, onSnapshot } from '@firebase/firestore'
import { db } from '../firebase'

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    onSnapshot(collectionGroup(db, 'posts'), (snapshot) => {
      console.log(snapshot)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => {
          return <Post post={post} key={index} />
        })}
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})
export default HomeScreen
