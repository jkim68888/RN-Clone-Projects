import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => (
  <View style={styles.container}>
    <Header />
    <FormikPostUploader />
  </View>
)

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{ uri: 'https://cdn.icon-icons.com/icons2/1904/PNG/512/leftarrow_121320.png' }}
        style={{ width: 25, height: 25 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>새 게시물</Text>
    <Text></Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 20,
    marginRight: 25,
  },
})

export default AddNewPost
