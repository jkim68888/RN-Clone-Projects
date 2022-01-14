import React, { useState } from 'react'
import { Text, View, Image, TextInput, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import validUrl from 'valid-url'

const PLACEHOLDER_IMG = 'https://via.placeholder.com/100'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('이미지 링크가 유효하지 않습니다.'),
  caption: Yup.string().max(2200, '최대 글자 수를 초과했습니다.'),
})

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={() => navigation.goBack()}
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
