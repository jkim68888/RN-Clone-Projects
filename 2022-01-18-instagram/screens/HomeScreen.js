import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import BottomTabs from '../components/home/BottomTabs'
import { collectionGroup, query, getDocs, orderBy, doc, getDoc, collection } from '@firebase/firestore'
import { db } from '../firebase'
import Post from '../components/home/Post'

const HomeScreen = ({ navigation }) => {
  const nextPost = []
  const nextStory = []

  const [posts, setPosts] = useState([])
  const [stories, setStories] = useState([])

  const settingPosts = async () => {
    try {
      const q = query(collectionGroup(db, 'posts'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // 배열에 데이터 넣기
        nextPost.push({ id: doc.id, ...doc.data() })
      })
      // forEach문 안에서 상태 업데이트 NO!!
      // 데이터가 있는 배열로 상태 업데이트 하기
      setPosts(nextPost)
      console.log('settingPosts success: ', nextPost)
    } catch (err) {
      console.log('settingPosts error: ', err)
    }
  }

  const settingStories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'))
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data())
        nextStory.push({ id: doc.id, ...doc.data() })
      })
      setStories(nextStory)
      console.log('settingStories success: ', nextStory)
    } catch (err) {
      console.log('settingStories error: ', err)
    }
  }

  useEffect(() => {
    settingPosts()
    console.log('함수 호출1')
    settingStories()
    console.log('함수 호출2')
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView horizontal={true}>
        {(console.log('story 뷰 그림'), stories.map((story, index) => <Stories story={story} key={index} />))}
      </ScrollView>
      <ScrollView>
        {(console.log('post 뷰 그림'), posts.map((post, index) => <Post post={post} key={index} />))}
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
