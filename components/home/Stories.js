import React from 'react'
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/users'

const Stories = () => (
  <View style={{ marginBottom: 13 }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {USERS.map((story, index) => {
        return (
          <View key={index.toString()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={styles.storyText}>{story.user.length > 7 ? story.user.slice(0, 6) + '...' : story.user}</Text>
          </View>
        )
      })}
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 9,
    marginRight: 9,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  storyText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 5,
  },
})

export default Stories
