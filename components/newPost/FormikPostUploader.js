import React, { useState, useEffect } from 'react'
import { Text, View, Image, TextInput, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import validUrl from 'valid-url'
import { db } from '../../firebase'
import { getDocs, where, limit, query, collection, addDoc, serverTimestamp, doc } from '@firebase/firestore'
import { getAuth } from '@firebase/auth'

const PLACEHOLDER_IMG = 'https://via.placeholder.com/100'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('이미지 링크가 유효하지 않습니다.'),
  caption: Yup.string().max(2200, '최대 글자 수를 초과했습니다.'),
})

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState({ username: '', profilePicture: '' })

  const getUsername = async () => {
    try {
      const user = getAuth().currentUser
      const q = query(collection(db, 'users'), where('owner_uid', '==', user.uid), limit(1))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setCurrentLoggedInUser({
          username: doc.data().username,
          profilePicture: doc.data().profile_picture,
        })
        console.log(doc.data())
      })
    } catch (error) {
      console.log('getUsername error: ', error.message)
    }
  }

  useEffect(() => {
    getUsername()
  }, [])

  const uploadPostToFirebase = async (imageUrl, caption) => {
    const docRef = doc(collection(db, 'users'), getAuth().currentUser.email)
    const unsubscribe = await addDoc(collection(docRef, 'posts'), {
      imageUrl: imageUrl,
      user: currentLoggedInUser.username,
      profile_picture: currentLoggedInUser.profilePicture,
      owner_uid: getAuth().currentUser.uid,
      caption: caption,
      createdAt: serverTimestamp(),
      likes: 0,
      likes_by_users: [],
      comments: [],
    }).then(() => navigation.goBack())

    return unsubscribe
  }

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => uploadPostToFirebase(values.imageUrl, values.caption)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}
          >
            <Image
              source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <TextInput
                style={{ fontSize: 18 }}
                placeholder="문구 입력..."
                placeholderTextColor="gray"
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <View style={{ margin: 10 }}>
            <TextInput
              style={{ fontSize: 16 }}
              placeholder="이미지 추가"
              placeholderTextColor="gray"
              onChangeText={handleChange('imageUrl')}
              onBlur={handleBlur('imageUrl')}
              value={values.imageUrl}
              onChange={(e) => {
                setThumbnailUrl(e.nativeEvent.text)
              }}
            />
            {errors.imageUrl && <Text style={{ fontSize: 12, color: 'red' }}>{errors.imageUrl}</Text>}
          </View>
          <Button onPress={handleSubmit} title="게시" disabled={!isValid} />
        </>
      )}
    </Formik>
  )
}

export default FormikPostUploader
