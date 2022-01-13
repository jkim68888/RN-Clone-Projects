import React from 'react'
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/users'

const Stories = () => (
  <View style={{ marginBottom: 13 }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {USERS.map((story, index) => {
        return (
          <View key={index.toString()}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={styles.storyText}>{story.user.length > 10 ? story.user.slice(0, 9) + '...' : story.user}</Text>
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
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  storyText: {
    textAlign: 'center',
    marginTop: 3,
    padding: 3,
  },
})

export default Stories
