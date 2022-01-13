import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import Message from '../../assets/message.svg'

const Post = ({ post }) => (
  <View style={{ marginBottom: 30 }}>
    <Divider width={1} orientation="vertical" />
    <PostHeader post={post} />
    <PostImage post={post} />
    <View style={{ marginHorizontal: 12 }}>
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
      <CommentsSection post={post} />
      <Comments post={post} />
    </View>
  </View>
)

const PostHeader = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 5 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
      </View>
      <TouchableOpacity>
        <Text style={{ fontWeight: '900' }}>...</Text>
      </TouchableOpacity>
    </View>
  )
}

const PostImage = ({ post }) => (
  <View style={{ width: '100%', height: 380 }}>
    <Image source={{ uri: post.imageUrl }} style={{ height: '100%', resizeMode: 'cover' }} />
  </View>
)

const PostFooter = () => (
  <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity style={{ marginRight: 10 }}>
      <Image style={styles.heartIcon} source={require('../../assets/heart.png')} />
    </TouchableOpacity>
    <TouchableOpacity style={{ marginRight: 10 }}>
      <Image style={styles.chatIcon} source={require('../../assets/chat.png')} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Message width="30" height="30" />
    </TouchableOpacity>
    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
      <Image style={styles.chatIcon} source={require('../../assets/bookmark.png')} />
    </TouchableOpacity>
  </View>
)

const Likes = ({ post }) => (
  <View style={{ flexDirection: 'row', marginTop: 8 }}>
    <Text style={{ fontWeight: '600' }}>{post.likes} 좋아요</Text>
  </View>
)

const Caption = ({ post }) => (
  <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ fontWeight: '600' }}>{post.user} </Text>
    <Text style={{ fontWeight: '400' }}>{post.caption}</Text>
  </View>
)

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {/* true, false 는 적용되지만 0,1 은 에러남 => !! 은 true, false 로 바꿔줌 */}
    {!!post.comments.length && <Text style={{ color: 'gray' }}>댓글 모두 보기</Text>}
  </View>
)

const Comments = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {post.comments.map((comment, index) => (
      <View key={index}>
        <Text>
          <Text style={{ fontWeight: '600' }}>{comment.user} </Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </View>
)

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: '#ff8501',
  },
  heartIcon: {
    width: 33,
    height: 33,
  },
  chatIcon: {
    width: 25,
    height: 25,
  },
})

export default Post
