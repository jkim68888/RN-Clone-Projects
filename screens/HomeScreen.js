import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react'
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import BottomTabs from '../components/home/BottomTabs'
import { collectionGroup, query, getDocs, orderBy } from '@firebase/firestore'
import { db } from '../firebase'
import Post from '../components/home/Post'

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([])
  const nextState = []

  const settingPosts = async () => {
    try {
      const q = query(collectionGroup(db, 'posts'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // 배열에 데이터 넣기
        nextState.push({ id: doc.id, ...doc.data() })
      })
      // forEach문 안에서 상태 업데이트 NO!!
      // 데이터가 있는 배열로 상태 업데이트 하기
      setPosts(nextState)
    } catch (err) {
      console.log('settingPosts error: ', err)
    }
  }

  useLayoutEffect(() => {
    settingPosts()
    console.log('함수 호출')
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>{(console.log('뷰 그림'), posts.map((post, index) => <Post post={post} key={index} />))}</ScrollView>
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
