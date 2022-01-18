import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <AddNewPost navigation={navigation} />
  </SafeAreaView>
)

export default NewPostScreen
