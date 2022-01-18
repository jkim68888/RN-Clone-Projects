import React, { useState } from 'react'
import { getAuth } from '@firebase/auth'
import { updateDoc, doc, collection, arrayRemove, arrayUnion, getDoc } from '@firebase/firestore'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import Message from '../../assets/message.svg'
import { db } from '../../firebase'

const PostHeader = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
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

const PostFooter = ({ handleLike, post, data }) => {
  return (
    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => handleLike(post)} style={{ marginRight: 10 }}>
        <Image
          style={styles.heartIcon}
          source={{
            uri: data.includes(getAuth().currentUser.email)
              ? 'https://cdn.icon-icons.com/icons2/1661/PNG/512/12138redheart_110427.png'
              : 'https://cdn.icon-icons.com/icons2/38/PNG/512/like_favorite_heart_5759.png',
          }}
        />
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
}

const Likes = ({ data }) => (
  <View style={{ flexDirection: 'row', marginTop: 8 }}>
    <Text style={{ fontWeight: '600' }}>{data.length} 좋아요</Text>
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

const Post = ({ post }) => {
  // 상태가 변하면 리랜더 한다!
  const [data, setData] = useState([])
  const nextData = []

  const arrayRemove = (arr, value) => {
    return arr.filter((ele) => ele != value)
  }

  const handleLike = async (post) => {
    try {
      const currentLikeStatus = !data.includes(post.owner_email)
      const userDocRef = doc(collection(db, 'users'), post.owner_email)
      const postDocRef = doc(collection(userDocRef, 'posts'), post.id)
      await updateDoc(postDocRef, {
        likes_by_users: currentLikeStatus
          ? nextData.push(getAuth().currentUser.email)
          : arrayRemove(nextData, getAuth().currentUser.email),
      })
      setData(nextData)
      console.log('document successfully updated', nextData)
    } catch (err) {
      console.log('error updating document', err)
    }
  }

  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 12 }}>
        <PostFooter data={data} post={post} handleLike={handleLike} />
        <Likes data={data} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  )
}

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
