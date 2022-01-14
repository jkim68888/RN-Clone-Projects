import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <AddNewPost />
  </SafeAreaView>
)

export default NewPostScreen
