import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const Stories = ({ story }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: story.profile_picture }} style={styles.story} />
      <Text style={styles.storyText}>
        {story.username.length > 7 ? story.username.slice(0, 6) + '...' : story.username}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    flex: 1,
    marginBottom: 30,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  storyText: {
    width: 70,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 5,
  },
})

export default Stories
